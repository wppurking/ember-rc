import ActiveModelAdapter from 'active-model-adapter';


export default ActiveModelAdapter.extend({
  // use ember-cli proxy: ember s --pr https://ruby-china.org
  host: 'https://ruby-china.org',
  namespace: 'api/v3',

  //Adapter 中的 ajax 请求会使用这个参数, 但同时注意将 auth manager 给 inject 到 adapter 中
  headers: function() {
    return {
      "Authorization": `${this.get('auth.token_type')} ${this.get('auth.token')}`
    };
  }.property('auth.token')


});

/*
 // 避免每次都向 Ruby-China 获取信息, 使用 FixtureAdapter 进行测试代替
 // 测试 serializers 会出现问题
 export default DS.FixtureAdapter.extend({});
 */
