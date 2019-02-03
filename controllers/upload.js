const fs = require('fs');
const path = require('path');

let upload = async (ctx, next) => {
  const files = ctx.request.files.file; // file: id of the input
  if (files.length > 1) {
    for (var file of files) {
      console.log(`[Upload] Saving ${file.name}...`);
      const reader = fs.createReadStream(file.path);
      let filePath = path.join(__dirname, '../files/') + `/${file.name}`;
      const upStream = fs.createWriteStream(filePath);
      reader.pipe(upStream);
      console.log(`[Upload] Save ${file.name} successfully.`);
    }
  } else if (files.length == 1) {
    console.log(`[Upload] Saving ${files.name}...`);
    const reader = fs.createReadStream(files.path);
    let filePath = path.join(__dirname, '../files/') + `/${files.name}`;
    const upStream = fs.createWriteStream(filePath);
    reader.pipe(upStream);
    console.log(`[Upload] Save ${files.name} successfully.`);
  }

  ctx.response.redirect('/');
}

module.exports = {
  'POST /upload': upload,
}