const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

class Store {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }

    getNotes() {
        return this.read().then((notes) => {
            return JSON.parse(notes)
        });
    }
}


module.exports = new Store()