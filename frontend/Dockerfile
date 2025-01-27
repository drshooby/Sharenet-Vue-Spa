# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire frontend source code to the working directory
COPY . .

# Expose the port that the Vue.js development server runs on
EXPOSE 8080

# Command to start the Vue.js development server
CMD ["npm", "run", "serve"]
