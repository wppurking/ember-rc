import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],

  isLoadingTopics: true,

  page: 1,
  perPage: 50,

  ishaveReplies: function() {
    return this.model.get('replies.length') > 0;
  }.property('model', 'page'),

  pagedReplies: function() {
    var offset = (this.get('page') - 1) * this.get('perPage');
    return this.model.get('replies').slice(offset, (offset + this.get('perPage')));
  }.property('page', 'model'), // 这个方法, 每当 page 和传入的 model 变化, 都需要重新计算


  actions: {
    turnPage(page) {
      this.set('page', page);
    },
    nextPage() {
      this.incrementProperty('page', 1);
    },
    prevPage() {
      if(this.get('page') > 1) {
        this.incrementProperty('page', -1);
      }
    }
  }

});
