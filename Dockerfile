FROM node:12.22.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3100

CMD [ "npm", "start" ]