# Step 1: Build the frontend
FROM node:22 AS build

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the rest of the app and build it
COPY frontend ./
RUN npm run build

# Step 2: Serve the built app using Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
