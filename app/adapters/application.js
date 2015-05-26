import DS from 'ember-data';

/*
export default DS.ActiveModelAdapter.extend({
  // use ember-cli proxy
  //host: 'https://ruby-china.org/api/v3',
  namespace: 'api/v3',
  headers() {
    return {
      // 需要自行计算 access_token
      access_token: '39b8d09680bb472f036c621d1044f210cbe0e3fac9728d24cfb8fbd15cea06cd'
    }.property();
  }

});
*/

// 避免每次都向 Ruby-China 获取信息, 使用 FixtureAdapter 进行测试代替
export default DS.FixtureAdapter.extend({});
