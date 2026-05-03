# Giai đoạn 1: Build ứng dụng React
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Truyền biến môi trường trong quá trình build
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

RUN npm run build

# Giai đoạn 2: Serve với Nginx
FROM nginx:alpine

# Sao chép file build từ giai đoạn 1 vào thư mục của nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
