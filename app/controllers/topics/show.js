import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';
import AjaxProcessing from 'ember-rc/mixins/ajax-processing';

export default Ember.Controller.extend(SR, AjaxProcessing, {
  queryParams: ['page', 'top'],

  isLoadingTopics: true,

  page: 1,
  perPage: 50,

  // 具体让哪一个 tab pane 激活
  activeTab: 'edit',

  replyContent: '',

  isHaveReplies: function() {
    return this.model.get('replies.length') > 0;
  }.property('model.replies.[]', 'page'),

  isHavePages: function() {
    return this.model.get('replies.length') > 50;
  }.property('model.replies.[]', 'page'),

  pagedReplies: function() {
    var offset = (this.get('page') - 1) * this.get('perPage');
    return this.model.get('replies').slice(offset, (offset + this.get('perPage')));
  }.property('page', 'model', 'model.replies.[]'), // 这个方法, 每当 page 和传入的 model 变化, 都需要重新计算

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

    selectTab(tab) {
      this.set('activeTab', tab);
    },

    appendToReply(content) {
      this.set('replyContent', `${this.get('replyContent')}\n${content}`.trim());
    },

    // 多键提交
    combSubmit() {
      if(this._isValidCombination(event)) {
        this.aroundProcess(() => {
          var reply = this.get('model').addReply(this.get('replyContent'));
          reply.save().then(() => {
            this.set('replyContent', '');
          });
        });
      }

    }
  },

  _hasCorrectModifier(event) {
    return event.ctrlKey || event.metaKey;
  },
  _isCorrectKeyCode: function(keyCode) {
    return keyCode === 13;
  },
  // ref: https://medium.com/the-ember-way/submit-an-ember-textarea-with-command-or-ctrl-enter-a933b4325b3b
  // 用于处理多个快捷键的 event 处理.
  _isValidCombination: function(event) {
    return this._hasCorrectModifier(event) && this._isCorrectKeyCode(event.keyCode);
  }

});
