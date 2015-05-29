import Ember from 'ember';

// TODO 这里的分页代码, 很多通用的内容都可以抽取到 Ember.Serice 中通用处理.
export default Ember.Controller.extend({
  queryParams: ['page'],
  page: 1,

  // 是否可以向前页
  prevDisabled: function() {
    return this.get('page') > 1 ? '' : 'disabled';
  }.property('page'),

  // 能够选择的中间的 links
  pages: function() {
    var distance = 2;
    var start = this.get('page') - distance;
    if(start < 1) start = 1;
    var end = this.get('page') + distance;
    var links = [];
    for(var i = start; i <= end; i++) {
      links.push(i);
    }
    // 检查是否有第一页
    if(start != 1) links.unshift(1);

    return links;
  }.property('page'),


  last_actived: function() {
    console.log('controller.last_actived trigger. offset:' + this.get('offset') + "::offsetEnd:" + this.get('limit'));
    // this.model 代表, route 中一次请求后, 设置到 controller 中的 model.
    // this.store 代表, 整个前端中已经持久化的数据
    return this.model.sortBy('updated_at');
  }.property('page'), // 每次 page 变化, last_actived 都变化一次


  actions: {
    turnPage: function(page) {
      this.incrementProperty('page', page);
    }
  }
});
