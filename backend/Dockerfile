FROM node:16.18.0-alpine

RUN npm install -g nodemon

WORKDIR /backend_app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9000

CMD ["nodemon", "src/index.js"]
