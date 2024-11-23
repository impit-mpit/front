
FROM oven/bun:slim AS development

WORKDIR /app

COPY package.json /app/package.json
COPY bun.lockb /app/bun.lockb

RUN bun i --silent

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]