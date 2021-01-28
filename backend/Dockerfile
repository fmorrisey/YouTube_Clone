# Pull base image
FROM node:alpine

# set the working directory
RUN mkdir -p /app
WORKDIR /app

#install app dependencies
COPY package*.json ./

COPY package-lock.json ./

# add to path
ENV Path /app/node_modules/.bin:$PATH

RUN npm install --silent
#RUN npm install nodemon

# add app
COPY . ./
EXPOSE 5000

# start app
CMD ["npm", "start"]