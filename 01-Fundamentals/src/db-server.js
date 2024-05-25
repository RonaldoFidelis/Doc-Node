import fs from "node:fs/promises"
import { url } from "node:inspector";

const pathFile = new URL('database/db-json.json', import.meta.url);
console.log(pathFile)

export class Database {
	#database = {};

	constructor() {
		fs.readFile(pathFile, 'utf8')
			.then(data => {
				this.#database = JSON.parse(data);
			})
			.catch(() => {
				this.#persist();
			})
	}

	#persist() {
		fs.writeFile(pathFile, JSON.stringify(this.#database))
	}

	select(table) {
		const data = this.#database[table] ?? []
		return data;
	}

	insert(table, data) {
		if(Array.isArray(this.#database[table])){
			this.#database[table].push(data);
		} else {
			this.#database[table] = [data];
		}

		this.#persist();
		return data;
	}

	delete(table, id) {

	}
}
