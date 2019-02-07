const fs = require('fs');
const path = require('path');
const t = require('../../setting').test;

// Logger middleware
function logger(msg) {
  let date = new Date();
  let logPath = '../../logs/' + (t ? 'test.log' : 'server.log');
  if (msg) {
    fs.appendFileSync(
      path.resolve(__dirname, logPath),
      `${date.toUTCString()} [MSG] ${msg}\n`
    );
  } else {
    return async (ctx, next) => {
      fs.appendFileSync(
        path.resolve(__dirname, logPath),
        `${date.toUTCString()} [${ctx.request.method}] ${ctx.request.url}\n`
      );
      // console.log(`${date.toUTCString()} [${ctx.request.method}] ${ctx.request.url}`);
      await next();
    }
  }
}


module.exports = logger;