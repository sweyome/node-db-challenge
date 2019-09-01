const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express());
// server.use('/api/projects',projectsRouter)

module.exports = server;