
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm i

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]