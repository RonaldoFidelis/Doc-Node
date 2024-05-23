import http from "node:http";

/*
Request => Requisicoes que fazemos para quem estar acessando o server
Response => Resposta do servidor
*/

const users = [];

const server = http.createServer((request, response) => {
  const {method, url} = request;

  if(method === 'GET' && url === '/users') {
    return response
    .setHeader('Content-type', 'Application/json')
    .writeHead(200)
    .end(JSON.stringify(users));
  }

  if(method === 'POST' && url === '/users') {
    users.push({
      name: 'Bilbo',
      id: 1,
      email: 'Bilbo.fi@gmail.com' 
    });
    return response.writeHead(201).end('Users Created');
  }

  return response.writeHead(404).end();
});

server.listen(3333);