import Ember from 'ember';

// TextArea 集成自 Component, 所以也是 Component
export default Ember.TextArea.extend({
  didInsertElement() {
    // 目标: 将 element.heigh 设置成为 scrollHeight 的高度, scrollHeight 为包含内容后的总高度
    this.$().textareaAutoSize();
    this.initAtWho();
  },

  didReceiveAttrs(tuple) {
    if(Ember.isPresent(tuple.oldAttrs) &&
      tuple.oldAttrs.replies.value.get('length') !== tuple.newAttrs.replies.value.get('length')) {
      this.initAtWho();
    }
  },

  initAtWho: function() {
    if(Ember.isPresent(this.attrs.replies) && Ember.isPresent(this.$())) {
      console.log(`reply counts: ${this.attrs.replies.value.get('length')}`);
      var commenters = Ember.A();
      this.attrs.replies.value.forEach((r) => {
        commenters.push(r.get('user.login'));
      });

      this.utils.initAtwho(this.$(), {data: commenters.uniq()});
    }
  }
});
