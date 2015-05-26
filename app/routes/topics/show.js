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
  }


  // 不会触发 beforeModel, model, afterModel 中的 loading 事件
  //setupController(controller, model) {
  //  controller.set('model', this.store.fetchById('topic', model.id));
  //}

});
