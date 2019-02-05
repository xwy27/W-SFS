const md5 = require('js-md5');

const user = '123@mail.com';
const password = md5('123456');
const sizeLimit = 1024;

exports.user = user;
exports.password = password;
exports.sizeLimit = sizeLimit;
