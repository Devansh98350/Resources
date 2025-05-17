#!/bin/bash

BASE_URL="https://www.resources.iitacademy.in"
TODAY=$(date +%Y-%m-%d)
APP_FILE="src/App.js"
SITEMAP_FILE="public/sitemap.xml"

DYNAMIC_CATEGORY_SLUGS=("exams" "pyq" "syllabus", "books")

echo '<?xml version="1.0" encoding="UTF-8"?>' > $SITEMAP_FILE
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> $SITEMAP_FILE

write_url() {
  local url=$1
  local date=$2
  cat <<EOF >> $SITEMAP_FILE
  <url>
    <loc>$url</loc>
    <lastmod>$date</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
EOF
}

ROUTES=$(grep -oE 'path=["'"'"']([^"'"'"']+)["'"'"']' "$APP_FILE" | \
         sed -E 's/path=["'"'"']([^"'"'"']+)["'"'"']/\1/' | sort | uniq)

for path in $ROUTES; do
  [[ "$path" == *"*"* ]] && continue
  if [ "$path" = "/" ]; then
    write_url "$BASE_URL" "$TODAY"
    continue
  fi
  if [[ "$path" == "/:categoryId" ]]; then
    for slug in "${DYNAMIC_CATEGORY_SLUGS[@]}"; do
      write_url "$BASE_URL/$slug" "$TODAY"
    done
    continue
  fi
  [[ "$path" == *":"* ]] && continue
  write_url "$BASE_URL$path" "$TODAY"
done

echo '</urlset>' >> $SITEMAP_FILE

