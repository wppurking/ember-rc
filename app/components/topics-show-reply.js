import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'reply',
  number: function() {
    return this.attrs.num.value + 1;
  }.property(),

  actions: {
    scrollToit(reply) {
      $('html, body').animate({
        scrollTop: ($("#reply-" + reply.get('id')).offset().top - 70)
      }, 800);
    }
  }
});
