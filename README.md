# koa 搭建 支持页面渲染与接口调用服务

get => kao-swig+react16+antdv4 渲染页面，post => 返回 json 数据
使用 es6 语法编写 gulp 编译
awlix-koa 依赖注入
接口数据 mock
log4 错误日志收集

    开发环境 build => watch => build => nodemon
    生产环境 build => pm2

    npm run dev:build 开发环境打包
    npm run prod:build 生产环境打包
    npm run dev:start 开发环境启动
    npm run prod:start 生产环境启动
