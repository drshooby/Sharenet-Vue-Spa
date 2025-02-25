# First stage: Install all dependencies
FROM node:16-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

# Second stage: Create a production image
FROM node:16-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./

RUN npm ci

COPY --from=builder /usr/src/app .

EXPOSE 5000

CMD ["node", "server.js"]