import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

export default Ember.Component.extend(SR, {
  tagName: 'div',
  classNames: 'reply',
  number: function() {
    return this.attrs.num.value + 1;
  }.property(),

  didInsertElement() {
    this.utils.initFluidboxImg(this.$('.markdown img'));
  },

  actions: {
    scrollToit() {
      this.scrollTo($("#reply-" + this.reply.get('id')));
    },

    likeIt() {
      var msg = `喜欢评论(#${this.reply.get('id')})的功能还没有实现呢.`;
      console.log(msg);
      alert(msg);
    }
  }
});
