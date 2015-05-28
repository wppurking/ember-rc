import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: 'reply',

  actions: {
    scrollToit(reply) {
      $('html, body').animate({
        scrollTop: ($("#reply-" + reply.get('id')).offset().top - 70)
      }, 800);
    }
  }
});
