FROM node:9.5.0-alpine
WORKDIR /socket.io-lab
COPY package.json .
RUN npm install --production
COPY . .
CMD ["node", "."]