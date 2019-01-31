// Loggers
function logger() {
  return async (ctx, next) => {
    let date = new Date();
    console.log(`${date.toUTCString()} [${ctx.request.method}] ${ctx.request.url}`);
    // TODO: Write into logger file
    await next();
  }
}

module.exports = logger;