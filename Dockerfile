FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]