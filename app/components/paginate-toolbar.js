import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

export default Ember.Component.extend(SR, {

  pages: function() {
    var links = [];
    for(var i = 1; i <= this.get('totalPages'); i++) {
      links.push(i);
    }
    return links;
  }.property('totalPages'),

  totalPages: function() {
    return Math.ceil(this.attrs.totalCount.value / 50);
  }.property('attrs.totalCount'),

  isHaveNext: function() {
    return this.get('currentPage') < this.get('totalPages');
  }.property('currentPage', 'totalPages'),

  isHavePrev: function() {
    return this.get('currentPage') > 1;
  }.property('currentPage'),

  actions: {
    scrollReplies() {
      this.scrollTo($('#replies'));
    },

    nextPage() {
      // 将 Component 中的事件, 传递到 Controller 中去
      // next: 绑定的参数名字, 非 action 名字
      if (this.get('isHaveNext')) {
        this.sendAction('next');
      }
    },

    prevPage() {
      if (this.get('isHavePrev')) {
        this.sendAction('prev');
      }
    }
  }
});
