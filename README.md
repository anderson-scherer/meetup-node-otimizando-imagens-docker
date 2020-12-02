# Branchs
- **master:** dockerfiles sem otimização de projetos
- **otimizados:** dockerfiles com otimização de projetos
- **kubernetes:** dockerfiles com otimização de projetos e exemplo de publicação
## Projetos
- **Go Lang** - Porta 8080
- **NodeJS / NestJS** - Porta 3000
- **NodeJS / TypeScript**  - Porta 3000
- **ReactJS / Server NodeJS** - Porta 3000
- **ReactJS / Server NGINX** - Porta 80
# Requisitos de sistema: Execução local
- Docker ^19.x.x
# Instalação: Docker
- [Docker Install Linux](https://docs.docker.com/engine/install/ubuntu/)
- [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)
# [Gerando uma nova imagem: docker build](https://docs.docker.com/engine/reference/commandline/image_build/)
```
$ docker build -t [nome_da_imagem:tag] [/path]
```
**Exemplo**
```
$ docker build -t go-lang:0.1 .
```
- **-t, --tag** fechando tag de versão
- **[/path]** Apontamento deo diretório da aplicação
## [Listando Imagens: docker images](https://docs.docker.com/engine/reference/commandline/images/)
```
$ docker images --all
```
- **--all** listar todas as imagens
## [Removendo Imagens: docker rmi](https://docs.docker.com/engine/reference/commandline/rmi/)
### Remoção de imagens
```
$ docker rmi [nome_da_imagem] [nome_da_imagem]
```
**Exemplo**
```
$ docker rmi go-lang:0.1 .
```
### Remoção de imagens em lote
```
$ docker rmi $(docker images -a -q)
$ docker rmi --force $(docker images -q)
```
- **-a** listar todas as imagens
- **-q** Mostrar apenas IDs numéricos

# [Instanciando um container: docker run](https://docs.docker.com/engine/reference/commandline/run/)
```
$ docker run --name [nome_do_container] -it -p [0000]:[0000] [nome_da_image]
```
**Exemplo**
```
$ docker run --name go-lang-tst -it -p 8080:8080 go-lang:0.1
```
**--name** Nome para instancia do container
**-it** *-i* mantém o STDIN aberto mesmo que sem uso, *-t* Aloca um pseudo tty para aplicação
**-p** Porta de entrada | Porta de exposição da aplicação

## [Listando containers: docker container](https://docs.docker.com/engine/reference/commandline/container_ls/)
```
$ docker container ls -a 
```
- **-a** listar todos as imagens

## [Parar um container: docker rm](https://docs.docker.com/engine/reference/commandline/stop/)
```
$ docker stop [nome_do_container]
```
**Exemplo**
```
$ docker stop go-lang-tst
```
## [Iniciar um container: docker rm](https://docs.docker.com/engine/reference/commandline/start/)
```
$ docker start [nome_do_container]
```
**Exemplo**
```
$ docker start go-lang-tst
```
Exempo
*Obs.: O container já deve ter sido criado.*
## [Remover um container: docker rm](https://docs.docker.com/engine/reference/commandline/rm/)
```
$ docker rm [nome_do_container]
```
**Exemplo**
```
$ docker rm go-lang-tst
```

