FROM node:14

WORKDIR /app

COPY . .

RUN npm install && \
npm run build

ADD .env.example .env

EXPOSE 3000

CMD ["sh", "-c", "node server.js"];
