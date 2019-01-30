const Koa = require('koa');
const router = require('koa-router')();
const serve = require('koa2-static-middleware');
const nunjucks = require('nunjucks');

/**
 * 
 * @param {string} path:  filePath for html template 
 * @param {object} opts:  options for nunjucks environment
 */
function createEnv(path, opts) {
  let
    autoescape = opts.autoescape === undefined ? true : opts.autoescape,
    noCache = opts.noCache || false,
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false,
    env = new nunjucks.Environment(
      new nunjucks.FileSystemLoader(path, {
        noCache: noCache,
        watch: watch,
      }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
      });
  if (opts.filters) {
    for (var f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

// Create nunjucks
let env = createEnv('views', {
  watch: true,
  filters: {
    hex: function (n) { // prevent the xss: script injection
      return '0x' + n.toString(16);
    }
  }
});

const app = new Koa();

// Loggers
app.use(async (ctx, next) => {
  let date = new Date();
  console.log(`${date.toUTCString()} [${ctx.request.method}] ${ctx.request.url}`);
  // TODO: Write into logger file
  await next();
});

// Routers
router.all('/', async (ctx, next) => {
  let html = env.render('index.html', {
    title: 'W-FTP',
  });
  ctx.body = html;
  await next();
});

router.get('/static/*', serve('./static'));

// Add router middleware
app.use(router.routes());

app.listen(3000, () => {
  console.log('Serving at port 3000...');
});