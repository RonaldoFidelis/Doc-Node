import http from "node:http";
import {Transform} from "node:stream";

class TransformDataStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformedChunk = chunk.toString().concat(' oi').toUpperCase();
		const buffer = Buffer.from(transformedChunk);
    this.push(buffer);
    callback();
  }
}

const server = http.createServer( async (req, res) => {
	const buffers = [];

	for await(const chunk of req) {
		buffers.push(chunk);
	}

	const buff = Buffer.concat(buffers).toString();

	return res.end(buff);
});

server.listen(3334);
