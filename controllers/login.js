const template = require('../middleware/templating')();
const u = require('../setting').user;
const p = require('../setting').password;

function loginMatch(user, password) {
  return u === user && p === password;
}

let login = async ctx => {
  let body = ctx.request.body;
  let user = body.user;
  let password = body.password;
  let date = new Date();
  if (loginMatch(user, password)) {
    console.log(`${date.toUTCString()} [Login] [Success] user: ${user}, psd: ${password}`);
    ctx.session.user = user;
    ctx.response.body = {
      msg: ''
    };
  } else {
    console.log(`${date.toUTCString()} [Login] [Fail] user: ${user}, psd: ${password}`);
    ctx.session = null;
    ctx.response.body = {
      msg: 'User Error or Password Error'
    };
  }
}

let loginPage = async ctx => {
  ctx.body = template.render('login.html', {
    title: 'W-SFS',
  });
}

module.exports = {
  'GET /': loginPage,
  'POST /login': login
}