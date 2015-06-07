import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

// TODO 这里的分页代码, 很多通用的内容都可以抽取到 Ember.Serice 中通用处理.
export default Ember.Controller.extend(SR, {
  queryParams: ['page'],
  page: 1,

  // 是否可以向前页
  prevDisabled: function() {
    return this.get('page') > 1 ? '' : 'disabled';
  }.property('page'),

  last_actived: function() {
    console.log('controller.last_actived trigger. offset:' + this.get('offset') + "::offsetEnd:" + this.get('limit'));
    // this.model 代表, route 中一次请求后, 设置到 controller 中的 model.
    // this.store 代表, 整个前端中已经持久化的数据
    return this.model.sortBy('updated_at');
  }.property('page', 'model'), // 每次 page 变化, last_actived 都变化一次


  actions: {
    plusPage(page) {
      this._super(page);
      this.send('scrollToTopics');
    },

    scrollToTopics() {
      this.scrollTo($('.topics'));
    }
  }
});
