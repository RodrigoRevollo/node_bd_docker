FROM node:22

WORKDIR /APP

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "src/index.js", "npm", "run", "dev" ]
# CMD [ "npm", "run", "dev" ]