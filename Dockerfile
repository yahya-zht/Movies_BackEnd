# Step 1: Use an official Node.js runtime as a parent image
FROM node:18

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install
# Step 5: Copy the rest of the application code to the working directory
COPY . .
# Step 6: Expose the port the app runs on
EXPOSE 5000

# Step 7: Define the command to run the app
CMD ["node", "index.js"]
