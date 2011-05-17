#!/usr/bin/env node

var cluster = require('cluster'),
    port    = 80;

console.log("Opening server on port " + port + "...");

cluster('./app/config/app')
  .use(cluster.debug())
  .use(cluster.reload())
  .use(cluster.logger('logs', 'debug'))
  .use(cluster.stats())
  .use(cluster.pidfiles('pids'))
  .use(cluster.cli())
  .use(cluster.repl(8888))
  .listen(port);