const koaBody = require('koa-body');

module.exports = function (opt) {
  return koaBody(opt || {
    multipart: true,
    formidable: {
      maxFileSize: 200*1024*1024    // max size for a upload file
    }
  });
}