import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  page: 1,


  last_actived: function() {
    console.log('controller.last_actived trigger. offset:' + this.get('offset') + "::offsetEnd:" + this.get('limit'));
    // this.model 代表, route 中一次请求后, 设置到 controller 中的 model.
    // this.store 代表, 整个前端中已经持久化的数据
    return this.model.sortBy('updated_at');
  }.property('page') // 每次 page 变化, last_actived 都变化一次
});
