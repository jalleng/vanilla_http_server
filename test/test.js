var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

require('../server');

describe('server test', function() {
  it('should greet the user', function(done) {
    chai.request('localhost:3000')
      .get('/greet/Jeff')
      .end(function(err, res) {
        expect(res.status).to.eql(200);
        expect(res.text).to.eql('Hello Jeff');
        done();
      });
  });

  it('should post a greet', function(done) {
    chai.request('localhost:3000')
      .post('/greet')
      .send({Name: 'Jeff'})
      .end(function(err, res) {
        expect(res.text).to.eql('{"greet":"Hello Jeff"}');
        done();
      });
  });

  it('should tell the server time ', function(done) {
    chai.request('localhost:3000')
      .get('/time')
      .send()
      .end(function(err, res) {
        expect(res.status).to.eql(200);
        var time = new Date();
        expect(res.text).to.eql(time.toString());
        done();
      });
  });
});

