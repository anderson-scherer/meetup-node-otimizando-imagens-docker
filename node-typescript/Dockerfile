FROM node:14 AS builder

# Definição do diretório principal
WORKDIR /app
# Copiando arquivos do projeto
COPY . .

# Instalando dependências para build da aplicação
RUN npm install && \
npm run build

FROM node:14-alpine
# Defining working directory
WORKDIR /app

# Copiando apenas os arquivos necessários
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./

# Instalando dependências do projeto
RUN npm install --only=prod

# Expondo porta 3000
EXPOSE 3000

# Iniciando aplicação
CMD ["node", "build/index.js", "start-server"]


