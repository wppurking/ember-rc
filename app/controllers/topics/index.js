import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

// TODO 这里的分页代码, 很多通用的内容都可以抽取到 Ember.Serice 中通用处理.
export default Ember.Controller.extend(SR, {
  queryParams: ['page'],
  page: 1,


  // 可变的排序参数
  topicsSort: ['updated_at:desc'],

  // 是否可以向前页
  prevDisabled: function() {
    return this.get('page') > 1 ? '' : 'disabled';
  }.property('page'),

  /* sort 的几种写法.
  last_actived: function() {
    console.log('controller.last_actived trigger. offset:' + this.get('offset') + "::offsetEnd:" + this.get('limit'));
    // this.model 代表, route 中一次请求后, 设置到 controller 中的 model.
    // this.store 代表, 整个前端中已经持久化的数据
    // TODO 1: 自己手写 API 来处理.
    //return this.model.sortBy('updated_at').reverse();

    // TODO 2: 手写 property 来处理.
    return this.model;
  }.property('page', 'model'), // 每次 page 变化, last_actived 都变化一次
  */

  // TODO 3: 使用 Ember.computed.sort 来处理.
  last_actived: Ember.computed.sort('model', 'topicsSort'),


  actions: {
    plusPage(page) {
      this._super(page);
      this.send('scrollToTopics');
    },

    scrollToTopics() {
      this.send('resetScroll');
      this.scrollTo($('.topics'));
    }
  }
});
