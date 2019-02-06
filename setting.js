const md5 = require('js-md5');

// Program mode, helps decide the log output file
const test = false;  // true: test mode; false: online mode

// Account information
const user = '123@mail.com';  // username, any form is ok
const password = md5('123456'); // password, md5 encrypt is necessary

// File size limitation
const sizeLimit = 1024; // KB size

exports.test = test;
exports.user = user;
exports.password = password;
exports.sizeLimit = sizeLimit;
