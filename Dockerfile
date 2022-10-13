FROM node:18.9.0

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]