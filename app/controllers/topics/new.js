import Ember from 'ember';
import splitSection from 'ember-rc/utils/node-section';

export default Ember.Controller.extend({

  topicContent: '',


  selectContent: function() {
    console.log('selectContent');
    var sectionMap = splitSection(this.model);
    var sections = Ember.A();
    for(let i in sectionMap) {
      sections.push(sectionMap[i]);
    }
    return sections;
  }.property('model')
});
