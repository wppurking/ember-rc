import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'topic-show',
  didInsertElement() {
    this.utils.initFluidboxImg(this.$('.markdown img'));
  }
});
