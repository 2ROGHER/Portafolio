const chalk = require('chalk');
const { conn } = require('./src/database/db.js');
const server = require('./src/server/index.js');
const storeData = require('./src/config/storeData.js');
const { skill, project } = require('../api/src/database/db.js');
const dataProjects = require('./src/services/data/data.json');
const data =require('../api/src/config/data-conversion.js');
const serverPort = 3001;
/**
* use listen method to run the server
 */
 console.log(dataProjects);
conn

    .sync({ force: true })
    .then(() => {
        console.log(chalk.rgb(255, 100, 100)("Server on!"));

    })
    .then(()=> storeData(data, skill))
    .then(() => storeData(dataProjects, project))
    .then((e) => {
        server.listen(serverPort, () => {
            console.log(chalk.rgb(128, 128, 255)(`Listen on ${serverPort}`));
        })
    })
    .catch((error) => console.log(error));