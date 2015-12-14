'use strict'; 

const koa = require('koa');
const _ = require('koa-route');
const app = module.exports = koa();

app.
    use(_.get('/', function *(){
        this.body = 'Hello world';
    })).
    use(_.get('/users/:name', function *(name){
        this.body = 'Hello, ' + name + '!';
    }));

if (!module.parent) app.listen(process.env.PORT || 3000);
