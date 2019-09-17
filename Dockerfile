FROM node:10
WORKDIR /usr/src/app
COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["node", "./dist/main.js"]