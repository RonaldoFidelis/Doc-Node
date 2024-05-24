# Introdution Node Js

## What is Node Js


- CommomJs and ESModules: Resumidamente sao maneira de import e exporta alguma modulo, por padrao o Node vem com o CommomJs e nao reconhece
o ESModule, por isso precisamos adicionar o campo  "type" no packge.json, exemplo:

``` Json
"type": "module"
```

O prefixo node: na importação de um módulo serve para informar que o módulo é interno do Node.js, foi um solucao que o node pensou para identificar se o modulo era interno ou de terceiros, exemplo:

```Javascript
import http from "node:http";

```
- HTTP Methods: Existe 5 metodos mais comuns e os HTTP funciona da seguite maneira: Method(GRUD) + Url(Routes), ou seja, sao comando como GET, POST, PUT, PATCH, DELETE + /Rotas, exemplo:

Method      +      Route
GET localhost:3333/users
POST localhost:3333/users

  - What the methods do?

    GET => Buscar um recurso do Back-end
    POST => Cria um recurso no Back-end
    PUT => Atualizar um recurso do Back-end (Geralmente e usado para atualizar mais de um "campo" no recuso, exemplo:
    Posso atualizar todos os dados de um determinado usuario, como name, id, email, endereco, etc...)
    PATCH => Atualizar um recurso especifico do Back-end
    DELETE => Deleta um recurso do back-end

## HTTP Status Code:
*Link sobre HTTP Statu Code:* <a href="[text](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)" target="_blank">Link</a>

O HTTP Status Code sao codigo numericos que um servido web retorna ao navegador (ou cliente) para indicar o resultado de uma solicitacao HTTP. Sao fundamental para o comunicacao Web, permitindo que o cliente saiba se a requisicao foi bem-sucedida ou se houve algum erro.

## Streams:


