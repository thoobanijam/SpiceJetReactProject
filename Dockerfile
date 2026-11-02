
FROM node:22-alpine

WORKDIR /app

COPY client/server/package*.json ./

RUN npm ci --omit=dev

COPY client/server/ ./

ENV NODE_ENV=production

EXPOSE 10000

CMD ["npm", "start"]
