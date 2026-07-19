#!/bin/bash
find public/images -type f -name "*.mp4" -size +40M | while read file; do
  echo "Compressing $file..."
  ffmpeg -nostdin -y -i "$file" -vf scale=-2:720 -vcodec libx264 -crf 28 -preset fast -acodec aac "$file.tmp.mp4"
  if [ $? -eq 0 ] && [ -f "$file.tmp.mp4" ]; then
    mv "$file.tmp.mp4" "$file"
    echo "Successfully compressed $file"
  else
    echo "Failed to compress $file"
  fi
done
