#!/bin/bash

# Tạo thư mục public nếu chưa tồn tại
mkdir -p public

# Tạo file config.js với giá trị từ biến môi trường
echo "window.__ENV = { API_URL: \"$NEXT_PUBLIC_API_URL\" };" > public/config.js

# Nếu bạn có các bước build khác, thêm vào đây
# ví dụ: npm install, npm run build, etc.
