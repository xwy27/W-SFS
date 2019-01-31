const send = require('koa-send');

let download = async (ctx, next) => {
  let filename = ctx.params.filename;
  let path = `./files/${filename}`;
  ctx.attachment(path);
  await send(ctx, path);
}

module.exports = {
  'GET /download/:filename': download
}