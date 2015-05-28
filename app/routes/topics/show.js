import Ember from 'ember';

export default Ember.Route.extend({
  // TODO: 为什么带有参数的 route, 在应用内 transition 不会 trigger model hook, 只有当 hit url 的时候才会 trigger model hook
  // http://discuss.emberjs.com/t/why-is-it-not-possible-to-trigger-the-model-hook-via-link-to-helper/3984/3
  // http://guides.emberjs.com/v1.10.0/routing/asynchronous-routing/

  //model(params) {
  //  console.log(params);
  //  return this.store.fetchById('topic', params.topic_id);
  //},

  afterModel(model) {
    return model.refresh();
  },


  // 不会触发 beforeModel, model, afterModel 中的 loading 事件
  setupController(controller, model) {
    // 加载 links 中的数据
    controller.set('isLoadingTopics', true);
    // 能够让 Topic 与 repliy 之间的 hasMany 关系合作起来, 需要参考:
    // 1. 测试代码: https://github.com/emberjs/data/blob/ec006005fa4e4be43587e50d45a889f4011fc2ef/packages/ember-data/tests/integration/relationships/has-many-test.js
    // 2. 一个还没有合并的 pull request. https://github.com/emberjs/data/issues/2162
    model.get('replies').then(()=> {
      controller.set('isLoadingTopics', false);
    });
    this._super(controller, model);
  }

});
