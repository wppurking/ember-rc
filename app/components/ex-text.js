import Ember from 'ember';

// TextArea 集成自 Component, 所以也是 Component
export default Ember.TextArea.extend({
  didInsertElement() {
    // 目标: 将 element.heigh 设置成为 scrollHeight 的高度, scrollHeight 为包含内容后的总高度
    this.$().textareaAutoSize();
    this.initAtWho();
  },

  initAtWho: function() {
    if(!Ember.isBlank(this.attrs.replies)) {
      console.log(`reply counts: ${this.attrs.replies.value.get('length')}`);
      var commenters = Ember.A();
      this.attrs.replies.value.forEach((r) => {
        commenters.push(r.get('user.login'));
      });

      $('.atwho-container').remove();
      this.$().atwho({
        at: "@",
        data: commenters.uniq(),
        search_key: "search",
        tpl: "<li data-value='${login}'>${login} <small>${name}</small></li>"
      });
    }
  }
});
