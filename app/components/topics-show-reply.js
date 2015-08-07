import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

export default Ember.Component.extend(SR, {
  tagName: 'div',
  classNames: 'reply',
  number: function() {
    return this.attrs.num.value + 1;
  }.property(),

  didInsertElement() {
    this.$('.markdown img').each((i, img) => {
      $(img).wrap(`<a href="${img.getAttribute('src')}"></a>`).parent().fluidbox({
        closeTrigger: [{selector: 'window', event: 'resize scroll'}]
      });
    });
  },

  actions: {
    scrollToit(reply) {
      this.scrollTo($("#reply-" + reply.get('id')));
    }
  }
});
