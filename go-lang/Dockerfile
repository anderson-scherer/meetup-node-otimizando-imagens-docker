FROM golang:alpine

WORKDIR $GOPATH/src/golang/main/

COPY . .

RUN go get -d -v
RUN go build -o /go/bin/main

EXPOSE 8080

ENTRYPOINT ["/go/bin/main"]