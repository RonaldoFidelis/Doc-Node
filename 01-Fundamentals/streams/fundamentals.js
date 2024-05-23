import { Readable, Writable, Transform } from 'node:stream';

class OneToTenStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 10) {
        this.push(null); // Indica o fim da stream
      } else {
        const buffer = Buffer.from(String(i));
        this.push(buffer);
      }
    }, 1000); // Atraso de 1 segundo entre os números
  }
}

class TransformDataStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformedChunk = chunk.toString().concat(' oi').toUpperCase();
		const buffer = Buffer.from(transformedChunk);
    this.push(buffer);
    callback();
  }
}

class WritingStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
}

// Encadeando as streams: legível -> transform -> gravável
new OneToTenStream()
  .pipe(new TransformDataStream())
  .pipe(new WritingStream());
