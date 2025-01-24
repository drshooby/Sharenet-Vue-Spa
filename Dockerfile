# Use Node.js image
FROM node:16

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Build the frontend for production
RUN npm run build

# Use a static server to serve the built files
RUN npm install -g serve

# Expose the frontend port
EXPOSE 8080

# Serve the built files
CMD ["serve", "-s", "dist"]
