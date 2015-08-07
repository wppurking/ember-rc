import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.utils.initFluidboxImg(this.$('.topic-detail .markdown img'));
  }
});
