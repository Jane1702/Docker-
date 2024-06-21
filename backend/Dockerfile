FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN apt-get update && apt-get install -y netcat-openbsd

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
