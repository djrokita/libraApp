# Use an official Python runtime as a parent image
FROM node:10.0.0

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

ENV NODE_ENV development

# Install any needed packages specified in requirements.txt
RUN npm install
# RUN npm start

# Make port 80 available to the world outside this container
EXPOSE 80

# Run app.py when the container launches
CMD ["npm", "start"]