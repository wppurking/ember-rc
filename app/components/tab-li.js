import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isActive:active'],
  tagName: 'li',
  activeTab: '',
  tab: '',

  isActive: function() {
    return this.get('tab') === this.get('activeTab');
  }.property('activeTab')

});
