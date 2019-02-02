const send = require('koa-send');

let download = async (ctx, next) => {
  let filename = ctx.params.filename;
  console.log(`[Download] Downloading ${filename}...`);
  let path = `./files/${filename}`;
  console.log(`[Download] Download ${filename} successfully`);
  ctx.attachment(path);
  await send(ctx, path);
}

module.exports = {
  'GET /download/:filename': download
}