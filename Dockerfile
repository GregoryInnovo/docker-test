# base in a image
FROM node:18

# Store the code
RUN mkdir -p /home/app

# Copy the code to the container
COPY . /home/app

# Expose the port of the application
EXPOSE 3000

# Run the application
CMD ["node", "/home/app/index.js"]
