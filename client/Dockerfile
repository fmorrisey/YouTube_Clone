# Pull base image
FROM node:9

# RUN apt-get update || : && apt-get install python -y

# set the working directory
WORKDIR /app

# add to path
ENV Path /app/node_modules/.bin:$PATH

#install app dependencies
COPY package*.json ./

COPY package-lock.json ./

RUN npm install --silent


# add app
COPY . ./
EXPOSE 3000

# start app
CMD ["npm", "start"]