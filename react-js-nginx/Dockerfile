
FROM node:14 AS builder

# Definição do diretório principal
WORKDIR /app
# Copiando arquivos do projeto
COPY . .

# Instalando dependências para build da aplicação
RUN npm install && \
npm run build

FROM nginx:1.19.5-alpine

# Copiando apenas os arquivos necessários
COPY --from=build /app//nginx/nginx.conf /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

# Expondo porta 3000
EXPOSE 8080

# Ponto de entrada da aplicação
ENTRYPOINT ["nginx", "-g", "daemon off;"]


