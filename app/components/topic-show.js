import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.utils.initFluidboxImg(this.$('.markdown img'));
  }
});
