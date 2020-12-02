
FROM node:14 AS builder

# Definição do diretório principal
WORKDIR /app
# Copiando arquivos do projeto
COPY . .

# Instalando dependências para build da aplicação
RUN npm install && \
npm run build

FROM abhin4v/hastatic:latest

COPY --from=builder /app/build /opt/mywebsite

WORKDIR /opt/mywebsite
CMD ["/usr/bin/hastatic"]


