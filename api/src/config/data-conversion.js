const fs = require('fs');
const path = require('path');
const relativePath = "../services/svg";
const abslutePath = path.join(__dirname, relativePath);
module.exports =
    fs.readdirSync(abslutePath).map((i) => {
        return {
            "name": i.split("-")[0],
            "url": "http://localhost:3001/public/images/" + i
        }
    })
