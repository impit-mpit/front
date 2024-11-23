
FROM oven/bun:slim AS builder

WORKDIR /app

COPY package.json /app/package.json
COPY bun.lockb /app/bun.lockb

COPY . .

RUN bun i --silent

RUN bun run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]