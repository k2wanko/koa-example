'use strict'; 

const koa = require('koa');
const request = require('request-promise');
const app = module.exports = koa();

app.use(function *(){
    let options = {
        uri: 'https://github.com' + this.request.url
    };

    this.body = yield request(options);
});

if (!module.parent) app.listen(process.env.PORT || 3000);

