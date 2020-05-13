const Mock = require('mockjs');
const util = require('./util');
const prefix = '/api';
const Random = Mock.Random;

module.exports = function(app, self) {
  app.get(prefix + '/user/userinfo', function(req, res) {
    var json = util.getJsonFile('./model/userInfo.json');
    res.json(Mock.mock(json));
  });
  app.get(prefix + '/banners', function(req, res) {
    let json = {
      "error": 0,
      'data|10-20': [{
        'id': ()=> Random.integer(20, 100),
        'title': ()=> Random.ctitle(),
        'link': ()=> Random.url(),
        'image': ()=> Random.image('200x100'),
        'createdDatetime':()=> Random.date("yyyy-MM-dd")
      }]
    }
    res.json(Mock.mock(json));
  });
}