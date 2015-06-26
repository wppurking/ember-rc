import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

export default Ember.Controller.extend(SR, {
  queryParams: ['page', 'top'],

  isLoadingTopics: true,

  page: 1,
  perPage: 50,
  isPreview: false,

  replyContent: '',

  ishaveReplies: function() {
    return this.model.get('replies.length') > 0;
  }.property('model', 'page'),

  pagedReplies: function() {
    var offset = (this.get('page') - 1) * this.get('perPage');
    return this.model.get('replies').slice(offset, (offset + this.get('perPage')));
  }.property('page', 'model'), // 这个方法, 每当 page 和传入的 model 变化, 都需要重新计算


  actions: {
    plusPage(page) {
      this.set('page', page);
      this.scrollTo($('#replies'));
    },
    nextPage() {
      this.incrementProperty('page', 1);
      this.scrollTo($('#replies'));
    },
    prevPage() {
      if(this.get('page') > 1) {
        this.incrementProperty('page', -1);
        this.scrollTo($('#replies'));
      }
    },

    togglePreview() {
      Ember.$(event.target).parent().toggleClass('active');
      this.toggleProperty('isPreview');
    }
  }

});
