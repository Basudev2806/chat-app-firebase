# Stage 1: Build React App
FROM node:14 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Production Environment
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install serve to run the production build
RUN npm install -g serve

# Copy the production build from the build stage
COPY --from=build /app/build ./build

# Expose port 3001
EXPOSE 3001

# Command to run the app
CMD ["serve", "-s", "build"]