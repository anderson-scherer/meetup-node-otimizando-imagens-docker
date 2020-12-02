FROM golang:alpine AS builder

# Definição do diretório principal
WORKDIR $GOPATH/src/golang/main/

# Copiando arquivos do projeto
COPY . .

# Instalando dependências para build da aplicação
RUN go get -d -v && \
go build -o /go/bin/main

# Imagem simplificada com Scratch
FROM scratch

# Definição do diretório principal
WORKDIR $GOPATH/src/golang/main/

# Copiando apenas os arquivos necessários
COPY --from=builder /go/bin/main /go/bin/main

# Expondo porta 8080
EXPOSE 8080

# Ponto de entrada da aplicação
ENTRYPOINT ["/go/bin/main"]