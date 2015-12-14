const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('Hello world', function(){
    it('should say "hello world"', function(done){
        request.
            get('/').
            expect(200).
            expect('Hello world', done);
    });
});
