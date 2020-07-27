import Koa from 'koa'
import config from './config'
import serve from 'koa-static'
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import render from 'koa-swig'
import co from 'co'
import session from 'koa-session'
import {
  errorHandler,
  awilixKoa,
  log,
  sessionAuth
} from "./middlewares"

const app = new Koa()
app.context.render = co.wrap(render({
  root: config.viewSrc,
  autoescape: true,
  varControls: ["[[", "]]"],
  cache: false, // disable, set to false 'memory'
  ext: 'html',
  writeBody: false
}))
//log4js
log(app)
//errorHandler
app.use(errorHandler())
//session
app.keys = ['this is my secret'];
app.use(session({
  key: 'koa.sess', /** cookie的名称 */
  maxAge: 7200000, /** ，cookie的过期时间，这里表示2个小时 */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
}, app));
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(serve(config.staticSrc))
//sessionAuth
app.use(sessionAuth())
//awilixKoa
awilixKoa(app)

app.listen(config.port, () => {
  console.log(`启动成功 http://localhost:${config.port}`);
});