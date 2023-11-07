const express = require('express');
const path = require('path');
const server = express();
const morgan = require('morgan');
//Let's import routes from "../routes/index.js";
const routes = require('../routes/index.js');
const cors = require('cors');

/**
* @return error message
* Middleware to error
 */
 // lets available CORS header for all requests
 server.use(cors());
server.use(morgan('dev'));
// server.use((err, req, res) => {
//     const status = err.status || 500;
//     const message = err.message || err;
//     res.status(status).send(message);
// });
/**
 * Lets create a new service to serve the images from the back-end;
 */
const pathNameSkills = path.join(__dirname, "../services/svg");
server.use('/public/images', express.static(pathNameSkills));
const pathNameProjects = path.join(__dirname, "../services/images");
console.log(pathNameProjects);
server.use("/public/projects", express.static(pathNameProjects));
/**
* lets create end-point to svg images
 */


/**

    * Main router 
    * @return routers to server
 */
// here we can use const router = require('express);

server.use('/', routes);
module.exports = server;