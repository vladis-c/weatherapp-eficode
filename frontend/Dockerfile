FROM node:16.18.0-alpine

WORKDIR /frontend

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
