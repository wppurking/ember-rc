import Ember from 'ember';
import splitSection from 'ember-rc/utils/node-section';

export default Ember.Controller.extend({

  topicContent: '',
  activeTab: 'edit',

  selectContent: function() {
    console.log('selectContent');
    var sectionMap = splitSection(this.model);
    var sections = Ember.A();
    for(let i in sectionMap) {
      sections.push(sectionMap[i]);
    }
    return sections;
  }.property('model'),

  actions: {
    selectTab(tab) {
      this.set('activeTab', tab);
    },

    saveTopic() {
      console.log('save Topic, and content is :' + this.get('topicContent'));

    }
  }

});
