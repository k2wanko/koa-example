'use strict'; 

const koa = require('koa');
const _ = require('koa-route');
const views = require('co-views');
const app = module.exports = koa();

let render = views(__dirname + '/views', { ext: 'jade'});

let title = 'koa-example';

app.
    use(_.get('/', function *(){
        this.body = yield render('index', {
            title: title
        });
    })).
    use(_.get('/users/:name', function *(name){
        this.body = yield render('user', {
            title: name + ' - ' + title,
            user: {
                name: name
            }
        });
    }));

if (!module.parent) app.listen(process.env.PORT || 3000);
