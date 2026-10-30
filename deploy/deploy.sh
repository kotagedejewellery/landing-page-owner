#!/usr/bin/env bash
set -euo pipefail

revision=${1:?Usage: bash deploy/deploy.sh COMMIT_SHA}
if [[ ! $revision =~ ^[0-9a-f]{40}$ ]]; then
  echo "Expected a full Git commit SHA." >&2
  exit 1
fi

cd /opt/apps/landing-page
test -x "$HOME/vps-audit.sh"
if [[ -n $(git status --porcelain) ]]; then
  echo "Production checkout has local changes. Resolve them before deploying." >&2
  exit 1
fi

docker network inspect proxy >/dev/null
git fetch --no-tags origin main
git merge-base --is-ancestor "$revision" origin/main
git checkout --detach "$revision"

compose=(docker compose --project-name landing-page-coach -f compose.production.yml)
"${compose[@]}" config --quiet

if docker image inspect landing-page-coach:production >/dev/null 2>&1; then
  docker image tag landing-page-coach:production landing-page-coach:previous
fi

# Build before replacing the running container so build failures keep the site online.
"${compose[@]}" build app
"${compose[@]}" up --detach --no-build --wait --wait-timeout 120 app
"${compose[@]}" ps
"${compose[@]}" logs --tail=100 app

# Resolve locally so an old DNS answer cannot make the Vercel site pass this check.
curl --fail --silent --show-error --retry 12 --retry-delay 5 --retry-all-errors \
  --connect-timeout 5 --max-time 15 \
  --resolve jokowardiyanto.com:443:127.0.0.1 \
  https://jokowardiyanto.com/ -o /dev/null

"$HOME/vps-audit.sh" > "$HOME/vps-audit-latest.txt"
echo "Deployed $revision to https://jokowardiyanto.com"
