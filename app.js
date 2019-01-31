const fs = require('fs');
const Koa = require('koa');
const router = require('koa-router')();
const serve = require('koa2-static-middleware');

const logger = require('./middleware/logger');
const template = require('./middleware/templating');

// Create templating engine
let env = template('views', {
  watch: true,
  filters: {
    hex: function (n) { // prevent the xss: script injection
      return '0x' + n.toString(16);
    }
  }
});

const app = new Koa();

app.use(logger());

// Routers
router.all('/', async (ctx, next) => {
  let userFiles = [];
  fs.readdirSync('./files').forEach((file) => {
    let stats = fs.statSync('./files/' + file);
    userFiles.push({
      filename: file,
      time: stats.mtime.toUTCString().split(' GMT')[0],
      size: stats.size / 1000 + 'KB',
      icon: ''
    });
  });

  ctx.body = env.render('index.html', {
    title: 'W-FTP',
    files: userFiles,
  });
  await next();
});

// Static router
router.get('/static/*', serve('./static'));

// Add router middleware
app.use(router.routes());

app.listen(3000, () => {
  console.log('Serving at port 3000...');
});