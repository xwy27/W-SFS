const fs = require('fs');
const PATH = require('path');

let del = async (ctx, next) => {
  let filename = ctx.params.filename;
  console.log('[Delete] Deleting ' + filename + '...');
  let path = PATH.resolve(__dirname, '../files/' + filename);
  let err = fs.accessSync(path, fs.constants.F_OK);
  if (err === undefined) {  // file exist
    fs.unlinkSync(path);
    console.log('[Delete] Delete ' + filename + ' successfully.');
    ctx.body = { msg: '' };
  } else {  // file not exist
    console.log('[Delete] Delete ' + filename + ' failed.');
    ctx.body = { msg: filename + 'does not exist.' };
  }
  await next();
};

module.exports = {
  'POST /delete/:filename' : del
}