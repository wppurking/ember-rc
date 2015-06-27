import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isActive:active'],
  // 将外部不断改变的元素传递进来
  activeTab: '',
  tab: '',

  isActive: function() {
    return this.get('tab') === this.get('activeTab');
  }.property('activeTab')
});
