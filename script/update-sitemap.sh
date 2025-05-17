#!/bin/bash

BASE_URL="https://www.astroswarg.com"
TODAY=$(date +%Y-%m-%d)
APP_FILE="src/App.js"
SITEMAP_FILE="public/sitemap.xml"

echo '<?xml version="1.0" encoding="UTF-8"?>' > $SITEMAP_FILE
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> $SITEMAP_FILE

grep -oE 'path=["'"'"']([^"'"'"']+)["'"'"']' "$APP_FILE" | \
sed -E 's/path=["'"'"']([^"'"'"']+)["'"'"']/\1/' | sort | uniq | while read -r path; do
  FULL_URL="$BASE_URL$path"
  [ "$path" = "/" ] && FULL_URL="$BASE_URL"

  cat <<EOF >> $SITEMAP_FILE
  <url>
    <loc>$FULL_URL</loc>
    <lastmod>$TODAY</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
EOF
done

echo '</urlset>' >> $SITEMAP_FILE
