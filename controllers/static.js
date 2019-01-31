const serve = require('koa2-static-middleware');

let static = serve('./static');

module.exports = {
  'GET /static/*' : static
}