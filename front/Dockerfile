FROM node:18.17.0 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN echo "module.exports = { output: 'standalone' };" > next.config.js

RUN npm run build

FROM node:18.17.0

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

RUN npm install --production

CMD ["node", "server.js"]
