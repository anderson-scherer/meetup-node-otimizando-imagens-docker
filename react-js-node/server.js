const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
require('dotenv').config();

class Server {
  constructor() {
    this.express = express();
    this.env = process.env.REACT_APP_ENVIRONMENT || 'dev';

    this.port = process.env.PORT || 3000;

    this.middlewares();
    this.express.listen(this.port, this.serverStarted.bind(this));
  }

  serverStarted() {
    console.log(`[ENV] Running on ${this.env}`);
    console.log(`[HTTP] Listening to ${this.port}`);
  }

  middlewares() {
    this.express.use(favicon(__dirname + '/build/favicon.ico'));
    this.express.use(express.static(__dirname));
    this.express.use(express.static(path.join(__dirname, 'build')));
  }
}

new Server();
