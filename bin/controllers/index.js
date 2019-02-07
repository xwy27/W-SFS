const fs = require('fs');
const PATH = require('path');
const getIconForFile = require('vscode-icons-js').getIconForFile;

const template = require('../middleware/templating')();
const total = require('../../setting').sizeLimit;  // file size limit

let index = async ctx => {
  let filePath = PATH.resolve(__dirname, '../../files/');
  let userFiles = []; // user files info
  let current = 0;  // current file size
  fs.readdirSync(filePath).forEach((file) => {
    let stats = fs.statSync(filePath + '/' + file);
    userFiles.push({
      filename: file,
      time: stats.mtime.toUTCString().split(' GMT')[0],
      size: stats.size / 1000 + 'KB',
      icon: getIconForFile(file)
    });
    current += stats.size / 1000;
  });

  ctx.body = template.render('index.html', {
    title: 'Leggiero',
    intro: 'Light, Convenient, Web based Static File Service',
    size: {
      current: current.toFixed(3),
      total: total.toFixed(0),
      percentage: parseInt((current / total) * 100),
    },
    files: userFiles,
  });
}

module.exports = {
  'GET /index': index
}