FROM node:alpine

WORKDIR /usr/bot

COPY . .

RUN npm i

RUN tsc

CMD ["npm", "start"]
