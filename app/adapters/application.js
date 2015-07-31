import ActiveModelAdapter from 'active-model-adapter';


export default ActiveModelAdapter.extend({
  // use ember-cli proxy: ember s --pr https://ruby-china.org
  host: 'https://ruby-china.org',
  namespace: 'api/v3',
  headers() {
    return {
      // 需要自行计算 access_token
      access_token: '39b8d09680bb472f036c621d1044f210cbe0e3fac9728d24cfb8fbd15cea06cd'
    }.property();
  }

});

/*
// 避免每次都向 Ruby-China 获取信息, 使用 FixtureAdapter 进行测试代替
// 测试 serializers 会出现问题
export default DS.FixtureAdapter.extend({});
*/
