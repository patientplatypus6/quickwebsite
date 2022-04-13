#FROM mhart/alpine-node:12
#FROM  node:latest
#WORKDIR /usr/src/app
#COPY . /usr/src/app
#RUN apk add --update nodejs npm
#RUN npm install -g npm
#RUN npm install -g
#RUN npm install -g next-transpile-modules
#RUN npm install -g next
#RUN npm install
#RUN npm install -g next
#RUN npm install -g next-transpile-modules
#ENTRYPOINT ["sh", "./entrypoint.sh"]
#RUN npm run build
#RUN ls -la
#COPY .next /usr/src/app
#CMD npm run build && npm run start







FROM node:alpine

#copy source
WORKDIR /app 
COPY . .

# Install deps 
#RUN npm install 

# Build 
#RUN npm run build

ENTRYPOINT [ "npm", "run", "dev" ]





#FROM node:alpine
#WORKDIR /app
#COPY . .

# building the app
#RUN npm i
#RUN npm run build

# Running the app
#CMD [ "npm", "start" ]

#FROM node:latest
#WORKDIR /app

#ENV PATH /app/node_modules/.bin:$PATH

#COPY package.json ./
#COPY package-lock.json ./
#RUN npm install
#COPY . ./
#RUN npm run build

#CMD ["npm", "run", "dev"]


#FROM node:12

#ENV PORT 3000

# Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

# Installing dependencies
#COPY package*.json /usr/src/app/
#RUN npm install

# Copying source files
#COPY . /usr/src/app

# Building app
#RUN npm run build
#EXPOSE 3000

# Running the app
#CMD "npm" "run" "start"
