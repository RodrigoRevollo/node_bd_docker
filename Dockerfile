FROM node:22-alpine3.22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# cuando ejecutas docker run, este comando se ejecuta dentro del contenedor para iniciar la aplicación. En este caso, se ejecuta el comando "node src/index.js" para iniciar el servidor de la aplicación Node.js.

CMD ["node", "src/index.js"]