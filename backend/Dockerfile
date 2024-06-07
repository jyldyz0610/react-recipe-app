# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Install json-server globally
RUN npm install -g json-server

# Copy db.json to the working directory
COPY db.json .

# Expose port 3000 for json-server
EXPOSE 3000

# Command to run json-server
CMD ["json-server", "--watch", "db.json", "--port", "3000"]
