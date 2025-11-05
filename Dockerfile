# Use Node.js 22
FROM node:22.12.0

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 and start the server
EXPOSE 3000
CMD ["npm", "start"]
