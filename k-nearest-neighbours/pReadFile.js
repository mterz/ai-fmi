const fs = require('fs');

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