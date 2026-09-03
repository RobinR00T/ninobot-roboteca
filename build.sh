#!/bin/bash
# Monta dist/ninobot-roboteca.html a partir de src/. Sin dependencias: solo cat.
set -euo pipefail
cd "$(dirname "$0")"
OUT=dist/ninobot-roboteca.html
mkdir -p dist

{
  cat src/00-head.html
  echo "<style>"
  python3 strip-comments.py < src/10-styles.css
  echo "</style>"
  echo "</head>"
  echo "<body>"
  echo '<div id="stars"></div>'
  echo '<div id="app"></div>'
  echo "<script>"
  # los comentarios de línea entera se quedan en src/: el dist va a dieta
  for f in $(ls src/[0-9]*.js | sort); do python3 strip-comments.py < "$f"; done
  echo "</script>"
  echo "</body>"
  echo "</html>"
} > "$OUT"

# verificación: el JS del bundle debe seguir siendo válido tras el filtro
node -e '
const fs = require("fs");
const m = fs.readFileSync("'"$OUT"'", "utf8").match(/<script>([\s\S]*)<\/script>/);
fs.writeFileSync("/tmp/nb-bundle-check.js", m[1]);
' && node --check /tmp/nb-bundle-check.js || { echo "FALLO: el bundle no pasa node --check"; exit 1; }

echo "OK: $OUT ($(du -h "$OUT" | cut -f1))"
