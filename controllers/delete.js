const fs = require('fs');
const PATH = require('path');

let del = async (ctx, next) => {
  let path = PATH.resolve(__dirname, '../files/' + ctx.params.filename);
  let err = fs.accessSync(path, fs.constants.F_OK);
  if (err === undefined) {  // file exist
    fs.unlinkSync(path);
    ctx.body = { msg: '' };
  } else {  // file not exist
    ctx.body = { msg: ctx.params.filename + 'does not exist.' };
  }
  await next();
};

module.exports = {
  'POST /delete/:filename' : del
}