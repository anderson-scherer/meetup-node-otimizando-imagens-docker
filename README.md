# Branchs
**- master:** dockerfiles sem otimização de projetos
**- otimizados:** dockerfiles com otimização de projetos

## Projetos
- **Go Lang**: Projeto soma
- **NodeJS**: Projeto em Nestjs
- **ReactJS / Server NodeJS**: Projeto básico com CRA, server node para arquivos estatícos
- **ReactJS / Server NGINX**: Projeto básico com CRA, server NEGINX para arquivos estatícos

# Requisitos de sistema: Execução local

- Docker ^19.x.x
- Portas 8080 e 3000 liberadas

# Instalação: Docker

- [Docker Install Linux](https://docs.docker.com/engine/install/ubuntu/)
- [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)

# [Gerando uma nova imagem: docker build](https://docs.docker.com/engine/reference/commandline/image_build/)

```
$ docker build -t [nome_da_imagem] .
```

- **-t, --tag** fechando tag de versão
- **'.'** Apontamento deo diretório da aplicação

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

### Remoção de imagens em lote
```
$ docker rmi $(docker images -a -q)
```
- **-a** listar todas as imagens
- **-q** Mostrar apenas IDs numéricos

# [Instanciando um container: docker run](https://docs.docker.com/engine/reference/commandline/run/)

```
$ docker run --name [nome_do_container] -it -p [0000]:[0000] [nome_da_image]
```
**--name** Nome para instanciamento do container
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
## [Iniciar um container: docker rm](https://docs.docker.com/engine/reference/commandline/start/)
```
$ docker start [nome_do_container]
```

*Obs.: O container já deve ter sido criado.*
## [Remover um container: docker rm](https://docs.docker.com/engine/reference/commandline/rm/)
```
$ docker rm [nome_do_container]
```

