const fs = require('fs');
const PATH = require('path');
const getIconForFile = require('vscode-icons-js').getIconForFile;

const template = require('../middleware/templating')();

let index = async (ctx, next) => {
  let userFiles = []; // user files info
  let current = 0;  // current file size
  let total = 1024;  // file size limit
  fs.readdirSync(PATH.resolve(__dirname, '../files')).forEach((file) => {
    let stats = fs.statSync(PATH.resolve(__dirname, '../files/' + file));
    userFiles.push({
      filename: file,
      time: stats.mtime.toUTCString().split(' GMT')[0],
      size: stats.size / 1000 + 'KB',
      icon: getIconForFile(file)
    });
    current += stats.size / 1000;
  });

  ctx.body = template.render('index.html', {
    title: 'W-SFS',
    intro: 'Light, Convenient, Web based Static File Service',
    size: {
      current: current,
      total: total,
      percentage: parseInt((current / total) * 100),
    },
    files: userFiles,
  });
  await next();
}

module.exports = {
  'GET /': index
}