const send = require('koa-send');
const log = require('../middleware/logger');

let download = async ctx => {
  let filename = ctx.params.filename;
  log(`[Download] Downloading ${filename}...`);
  let path = `./files/${filename}`;
  log(`[Download] Download ${filename} successfully`);
  ctx.attachment(path);
  await send(ctx, path);
}

module.exports = {
  'GET /download/:filename': download
}