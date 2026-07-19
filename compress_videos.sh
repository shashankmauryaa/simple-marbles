#!/bin/bash

# Find all mp4 files larger than 40MB
find public/images -type f -name "*.mp4" -size +40M | while read file; do
  echo "----------------------------------------"
  echo "Compressing $file..."
  
  # Compress to 720p to guarantee it falls under 50MB
  ffmpeg -y -i "$file" -vf "scale=-2:720" -vcodec libx264 -crf 28 -preset fast -acodec aac "$file.tmp.mp4"
  
  if [ $? -eq 0 ] && [ -f "$file.tmp.mp4" ]; then
    mv "$file.tmp.mp4" "$file"
    echo "Successfully compressed $file"
  else
    echo "Failed to compress $file. Removing temp file."
    rm -f "$file.tmp.mp4"
  fi
done

echo "Video compression complete."
