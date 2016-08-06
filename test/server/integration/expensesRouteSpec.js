const supertest = require('supertest')
    , index     = require('../../../server/index');

exports.get_expenses_route_should_exist = function(done) {
  supertest(index)
    .get('/v1/api/expenses')
    .expect((res) => {
      if (res.status == 404) throw new Error('route does not exist!');
    })
    .end(done);
};

exports.post_expenses_route_should_exist = function(done) {
  supertest(index)
    .post('/v1/api/expenses/')
    .expect((res) => {
      if (res.status == 404) throw new Error('route does not exist!');
    })
    .end(done);
};

exports.put_expenses_route_should_exist = function(done) {
  supertest(index)
    .put('/v1/api/expenses/')
    .expect((res) => {
      if (res.status == 404) throw new Error('route does not exist!');
    })
    .end(done);
}

exports.put_expenses_for_id_route_should_exist = function(done) {
  supertest(index)
    .put('/v1/api/expenses/1')
    .expect((res) => {
      if (res.status == 404) throw new Error('route does not exist!');
    })
    .end(done);
};
