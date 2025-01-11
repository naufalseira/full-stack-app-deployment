# Base stage untuk shared dependencies
FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl libc6-compat

# Dependencies stage
FROM base AS dependencies
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci --omit=dev
RUN cp -R node_modules prod_modules
RUN npm ci
RUN npx prisma generate

# Build stage
FROM base AS build
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Development stage
FROM base AS development
WORKDIR /app
# Copy necessary files
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/node_modules/.prisma ./node_modules/.prisma
COPY package*.json ./
COPY prisma ./prisma/
COPY . .
# Expose port
EXPOSE 8000
# Start development server
CMD ["npm", "run", "start:dev"]

# Production stage
FROM base AS production
WORKDIR /app
# Copy only production dependencies and built files
COPY --from=dependencies /app/prod_modules ./node_modules
COPY --from=dependencies /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/dist ./dist
COPY package*.json ./
COPY prisma ./prisma/
COPY . .
# Expose port
EXPOSE 8000
# Start production server
CMD ["npm", "run", "start:prod"]