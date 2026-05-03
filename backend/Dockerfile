# Sử dụng Node.js LTS làm base image
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Expose port mà app chạy (khớp với PORT trong .env hoặc mặc định 5555)
EXPOSE 5555

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]
