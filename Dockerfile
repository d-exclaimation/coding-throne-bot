FROM node:alpine

WORKDIR /usr/bot

COPY . . 

RUN npm i 

CMD ["npm", "run", "watch-and-run"]