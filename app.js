const Koa = require('koa');
const session = require('koa-session');

const logger = require('./middleware/logger');
const body = require('./middleware/body');
const controller = require('./middleware/controller');
const u = require('./setting').user;

const app = new Koa();

// Add logger middleware
app.use(logger());

// Add session middleware
app.keys = ['com.w-sfs' + Math.random().toString()];  /** Different key every time server start */
const SESSION_CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};
app.use(session(SESSION_CONFIG, app));
app.use(async (ctx, next) => {
  let url = ctx.request.url;
  if (url === '/' || url === '/login') { // login page and login request
    ctx.session.user = null;
    await next();
  } else if (url.includes('static')) {  // static files
    await next();
  } else { // not login page
    if (ctx.session.user && ctx.session.user === u) { // session match
      await next();
    } else {
      log(`[Session] Mismatch.`);
      ctx.redirect('/');
    }
  }
});

// Add body middleware
app.use(body());

// Add router middleware
app.use(controller());

module.exports = app;

app.listen(3000, () => {
  console.log('Leggiero is serving at port 3000...');
});