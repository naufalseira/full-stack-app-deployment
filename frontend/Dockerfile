# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build app 
RUN npm run build  

# Production stage
FROM nginx:alpine AS production

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start production server
CMD ["nginx", "-g", "daemon off;"]