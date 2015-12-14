'use strict'; 

const koa = require('koa');
const app = module.exports = koa();

app.use(function *(){
    this.body = 'Hello world';
});

if (!module.parent) app.listen(process.env.PORT || 3000)

