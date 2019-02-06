const supertest = require('supertest');
const chai = require('chai');
const md5 = require('js-md5');
const app = require('./../app');

const request = supertest(app.listen());

// no-session
describe('Start test static router', () => {
  it('Test request: [GET] /', (done) => {
    request
      .get('/')
      .send()
      .expect('Content-Type', /html/)
      .expect(200, done)
    });

    it('Test request: [GET] /static/*', (done) => {
    request
      .get('/static/css/index.css')
      .expect('Content-Type', /text/)
      .expect(200, done);
    });
  });
  
// login
describe('Start test login', () => {
  it('Test request: [POST] /login ~Fail', (done) => {
    request
      .post('/login')
      .send({
        user: '123@mail.com',
        password: '123456'
      })
      .expect(200, {
        msg: 'User Error or Password Error'
      }, done);
  });

  it('Test request: [POST] /login ~Success', (done) => {
    request
      .post('/login')
      .send({
        user: '123@mail.com',
        password: md5('123456')
      })
      .expect(200, {
        msg: ''
      }, done);
  });
});

// session-required
describe('Start test api', () => {
  var cookie;
  beforeEach((done) => {
    request
      .post('/login')
      .send({
        user: '123@mail.com',
        password: md5('123456')
      })
      .end(function(err, res) {
        if (!err) {
          cookie = res.header['set-cookie'];
          done();
        }
      });
  });

  it('Test request: [GET] /index', (done) => {
    request
      .get('/index')
      .set('Cookie', cookie)
      .send()
      .expect('Content-Type', /html/)
      .expect(200, done);
  });

  it('Test request: [GET] /:filename', (done) => {
    request
      .get('/download/README.md')
      .set('Cookie', cookie)
      .send()
      .expect('Content-Disposition', /attachment/)
      .expect(200, done)
  });
  
  it('Test request: Fail - [POST] /delete/:filename', (done) => {
    request
    .post('/delete/error.md')
      .set('Cookie', cookie)
      .send()
      .expect(200, {
        msg: 'error.md does not exist.'
      }, done);
  });
});