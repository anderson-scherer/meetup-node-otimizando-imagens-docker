
FROM node:14 as build

WORKDIR /app

COPY . .

RUN npm install && \
npm run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]