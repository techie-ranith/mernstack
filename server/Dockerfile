# Use a base image with Node.js
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port where your Node.js app will run
EXPOSE 3000

# Command to run the application
CMD ["yarn", "start"]
