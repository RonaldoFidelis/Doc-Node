import {Readable} from "node:stream"

class oneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if(i > 100) {
        this.push(null);
      } else {
        const buffer = Buffer.from(String(i).concat(' '));
        this.push(buffer)
      }
    }, 1000);
  }

}

new oneToHundredStream()
.pipe(process.stdout);