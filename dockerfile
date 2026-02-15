#use official Node.js LTS image as the base image
FROM node:18-alpine

#set working directory in the container
WORKDIR /usr/src/app

#copy package files first (for better caching)
COPY package*.json ./

#install dependencies
RUN npm install --only=production

#copy application code
COPY . .

#expose application port
EXPOSE 3000

#start the app
CMD ["node", "app.js"]