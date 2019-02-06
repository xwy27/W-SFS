const fs = require('fs');
const path = require('path');
const log = require('../middleware/logger');

let upload = async ctx => {
  const files = ctx.request.files.file; // file: id of the input
  if (files.length > 1) { // list of files
    for (var file of files) {
      log(`[Upload] Saving ${file.name}...`);
      const reader = fs.createReadStream(file.path);
      let filePath = path.join(__dirname, '../files/') + `/${file.name}`;
      const upStream = fs.createWriteStream(filePath);
      reader.pipe(upStream);
      log(`[Upload] Save ${file.name} successfully.`);
    }
  } else if (files) { // single file
    log(`[Upload] Saving ${files.name}...`);
    const reader = fs.createReadStream(files.path);
    let filePath = path.join(__dirname, '../files/') + `/${files.name}`;
    const upStream = fs.createWriteStream(filePath);
    reader.pipe(upStream);
    log(`[Upload] Save ${files.name} successfully.`);
  }

  ctx.response.redirect('/index');
}

module.exports = {
  'POST /upload': upload,
}