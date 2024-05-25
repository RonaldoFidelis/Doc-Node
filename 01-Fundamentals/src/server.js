import http from "node:http";
import { Database } from "./db-server.js";
import { json } from "./middleware/json.js";

const database = new Database();

const server = http.createServer(async (request, response) => {
	const { method, url } = request;

	await json(request, response);

	if (method === 'GET' && url === '/users') {
		try {
			const users = database.select('users')

			return response
				.writeHead(200)
				.end(JSON.stringify(users));
		} catch (e) {
			console.log(e);
			return response
				.writeHead(404);
		}
	}

	if (method === 'POST' && url === '/users') {
		const { id, name, email, address } = request.body;
		const users = {
			id,
			name,
			email,
			address
		};

		try {
			database.insert('users', users);
			return response.writeHead(201).end('Users Created');
		} catch (e) {
			console.log(e)
			return response.writeHead(201).end('Error');
		}
	}

	if (method === 'DELETE' && url === '/users') {
		const { id } = request.body;

		const indexToRemove = users.findIndex(user => user.id === id);
		console.log(indexToRemove);
		if (indexToRemove !== -1) {
			users.splice(indexToRemove, 1);
			return response.writeHead(200).end('User deleted');
		} else {
			return response.writeHead(404).end('User not found');
		}
	}

	return response.writeHead(404).end();
});

server.listen(3333, () => {
	console.log('Servido rodando na porta: http://localhosto:3333/users\n')
});
