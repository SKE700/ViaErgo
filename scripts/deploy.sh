#!/usr/bin/env bash
# Baut den statischen Export und veröffentlicht ihn auf dem Branch "deploy".
# Hostinger zieht diesen Branch per Git-Deployment nach public_html.
set -euo pipefail
cd "$(dirname "$0")/.."

rev=$(git rev-parse --short HEAD)
rm -rf out .next
npx next build

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
git clone --quiet --depth 1 --branch deploy "$(git remote get-url origin)" "$tmp"
find "$tmp" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -a out/. "$tmp/"
git -C "$tmp" add -A
git -C "$tmp" commit --quiet -m "Build $rev" || { echo "Keine Änderungen."; exit 0; }
git -C "$tmp" push --quiet origin deploy
echo "Branch deploy aktualisiert (Build $rev)."
