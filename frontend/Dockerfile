# First Stage: Install all dependencies and build the frontend
FROM node:16-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Second Stage: Create a production image
FROM node:16-alpine

WORKDIR /usr/src/app

RUN npm install -g serve

COPY --from=builder /usr/src/app/dist /usr/src/app/dist

EXPOSE 8080

CMD ["serve", "-s", "dist", "-l", "8080"]