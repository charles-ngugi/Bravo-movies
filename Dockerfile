# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install app dependencies using Yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build your React app
RUN yarn build

# Expose a port for your app to run on (e.g., 80)
EXPOSE 3000

# Start the app when the container runs
CMD ["yarn", "start"]
