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

RUN apk add --no-cache gettext

COPY --from=builder /usr/src/app/dist /usr/src/app/dist

# Vue does not like auto-injecting env vars for certain situations thats why this is here
COPY generate-config.sh /

RUN chmod +x /generate-config.sh

EXPOSE 8080

ENTRYPOINT ["/generate-config.sh"]
CMD ["serve", "-s", "dist", "-l", "8080"]