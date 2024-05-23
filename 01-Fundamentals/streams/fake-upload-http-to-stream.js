import { Readable } from "node:stream";

class ReadDate extends Readable {
	index = 1;

	_read() {
		const metadata = this.index++;

		setTimeout(() => {
			if(metadata > 5) {
				this.push(null);
			} else {
				const data = Buffer.from(String(metadata));
				this.push(data)
			}
		}, 1000)
	}
}

fetch('http://localhost:3334', {
	method: 'POST',
	body: new ReadDate(),
	duplex: 'half',
})
