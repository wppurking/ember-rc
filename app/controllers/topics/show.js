import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';
import AjaxProcessing from 'ember-rc/mixins/ajax-processing';

export default Ember.Controller.extend(SR, AjaxProcessing, {
  queryParams: ['page', 'top'],

  isLoadingTopics: true,

  page: 1,
  perPage: 50,

  // --- tab 相关的操作 ---
  // 拥有的所有 tabs:
  //  1. 展示 tab 的 li 操作
  //  2. 给予 tab pane 拥有 action 名字
  tabs: [
    {action: 'edit', text: '编辑'},
    {action: 'preview', text: '预览'}
  ],
  // 具体让哪一个 tab pane 激活
  activeTab: 'edit',

  replyContent: '',

  isHaveReplies: function() {
    return this.model.get('replies_count') > 0;
  }.property('model'),

  isHavePages: function() {
    return this.model.get('replies_count') > 50;
  }.property('model'),

  pagedReplies: function() {
    var offset = (this.get('page') - 1) * this.get('perPage');
    return this.model.get('replies').slice(offset, (offset + this.get('perPage')));
  }.property('page', 'model', 'model.replies.@each'), // 这个方法, 每当 page 和传入的 model 变化, 都需要重新计算


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

    // 多键提交
    combSubmit() {
      var controller = this;
      if(this._isValidCombination(event)) {
        this.aroundProcess(() => {
          //topics/:id/replies.json
          controller.get('model').postReply(controller.get('replyContent')).then(() => {
            controller.set('replyContent', '');
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
