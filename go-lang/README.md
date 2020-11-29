# Requisitos de sistema: Execução local

- Go Lang CLI (Opcional)

# Instalação: Go Lang CLI

[Go Download and install](https://golang.org/doc/install)

Para facilitar o dia a dia de desenvolvimento em Go, adicione essas linhas nos seus arquivos com scripts de execução de terminal (Linux: .bashrc, .zshrc, ...). Desta forma estaremos definindo o ***current folder*** como root da aplicação Go.

```
# GOLNAG
export GOPATH=$(pwd)
export PATH=$PATH:$GOPATH/bin
``` 

# Executar aplicação local
```
$ go run main.go
```
Saída esperada
```
The sum result: 10
```

# Executar teste de aplicação
```
$ go test
```
Saída esperada
```
PASS
ok      [PATH_LOCAL]/go-lang 0.001s
```