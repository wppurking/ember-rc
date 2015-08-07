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
    scrollToit(reply) {
      this.scrollTo($("#reply-" + reply.get('id')));
    }
  }
});
