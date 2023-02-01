FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install dotenv
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]
