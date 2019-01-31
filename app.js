const Koa = require('koa');

const logger = require('./middleware/logger');
const controller = require('./middleware/controller');

const app = new Koa();

// Add logger middleware
app.use(logger());

// Add router middleware
app.use(controller());

app.listen(3000, () => {
  console.log('Serving at port 3000...');
});