const fs = require("fs").promises;

async function listFiles() {
    try {
        let files = await fs.readdir("./");
        console.log(files);
    } catch (err) {
        console.error(err);
    }
    console.log("Code is done");
}

listFiles();
