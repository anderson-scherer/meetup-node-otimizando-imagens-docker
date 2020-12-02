FROM node:14

WORKDIR /app

COPY . .

RUN npm install && \
npm run build

EXPOSE 3000

CMD ["node", "dist/main"]