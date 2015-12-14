const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('Templates', function(){
    it('should say "hello world"', function(done){
        request.
            get('/').
            expect(200, done);
    });

    it('should say name', function(done){
        request.
            get('/users/k2wanko').
            expect(200, done);
    });

    it('should response 404', function(done) {
        request.
            get('/not_found').
            expect(404).
            expect('Not Found', done);
    });
});
