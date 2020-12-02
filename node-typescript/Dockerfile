FROM node:14

WORKDIR /app

COPY . .

RUN npm install && \
npm run builddockl

EXPOSE 3000

CMD ["node", "build/index.js", "start-server"]