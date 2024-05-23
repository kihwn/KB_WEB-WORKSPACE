const fs = require("fs").promises;

fs.readdir("./")
    .then(files => {
        console.log(files);
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        console.log("Code is done");
    });
