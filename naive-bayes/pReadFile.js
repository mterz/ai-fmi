const fs = require('fs');

// readFile with promises
const pReadFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

module.exports = {
    pReadFile
};