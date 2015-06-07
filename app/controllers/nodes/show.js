import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

export default Ember.Controller.extend(SR, {
  queryParams: ['page'],
  page: 1,

  actions: {
    plusPage(page) {
      this._super(page);
      this.send('scrollToTopics');
    },

    scrollToTopics() {
      this.scrollTo($('.topics'));
    }
  }
});
