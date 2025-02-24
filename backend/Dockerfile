# First stage: Install all dependencies and run tests
FROM node:16-alpine AS builder

ENV NODE_ENV=test

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm test

# Second stage: Create a production image
FROM node:16-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./

RUN npm ci

COPY --from=builder /usr/src/app .

EXPOSE 5000

CMD ["node", "server.js"]