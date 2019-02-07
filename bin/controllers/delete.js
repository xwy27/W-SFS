const fs = require('fs');
const PATH = require('path');
const log = require('../middleware/logger');

let del = async ctx => {
  let filename = ctx.params.filename;
  log('[Delete] Deleting ' + filename + '...');
  let path = PATH.resolve(__dirname, '../../files/' + filename);
  if (fs.existsSync(path)) {  // file exist
    fs.unlinkSync(path);
    log('[Delete] Delete ' + filename + ' successfully.');
    ctx.body = { msg: '' };
  } else {  // file not exist
    log('[Delete] Delete ' + filename + ' failed.');
    ctx.body = { msg: filename + ' does not exist.' };
  }
};

module.exports = {
  'POST /delete/:filename' : del
}