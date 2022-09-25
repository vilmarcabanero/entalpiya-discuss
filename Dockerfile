FROM node:16-alpine

WORKDIR /app
COPY package.json .
#RUN npm install --only=prod
RUN npm install
COPY . .

CMD ["npm", "start"]