#!/bin/bash

# Maximum resolution
MAX_RES="600x400>"

# Quality setting (adjust as needed)
QUALITY=85

# Find all jpg/jpeg files recursively
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
  echo "Processing: $img"
  # Resize and compress, overwrite original
  mogrify -resize "$MAX_RES" -quality $QUALITY "$img"
done
