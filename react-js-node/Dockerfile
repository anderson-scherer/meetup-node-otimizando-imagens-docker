FROM node:14 AS builder
# Definição do diretório principal
WORKDIR /app

# Copiando arquivos do projeto
COPY . .

# Adicionando exemplo .env ao projeto para processo de build
ADD .env.example .env

# Instalando dependências para build da aplicação
RUN npm install && \
npm run build

FROM node:14-alpine
# Definição do diretório principal

WORKDIR /app

# Copiando apenas os arquivos necessários
COPY --from=builder /app/build ./build
COPY --from=builder /app/server.js .

# Instalando dependências do projeto
RUN npm install express-favicon dotenv

# Adicionando variáveis para ambiente de producão
ENV REACT_APP_ENVIRONMENT="Prd"
ENV PORT="3000"

# Expondo porta 3000
EXPOSE 3000

# Iniciando aplicação
CMD ["sh", "-c", "node server.js"];