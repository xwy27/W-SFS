const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const logger = require('./middleware/logger');
const body = require('./middleware/body');
const controller = require('./middleware/controller');

const app = new Koa();

// Add logger middleware
app.use(logger());

// Add body middleware
app.use(body());

// Add body parser middleware
app.use(bodyParser());

// Add router middleware
app.use(controller());

app.listen(3000, () => {
  console.log('Serving at port 3000...');
});