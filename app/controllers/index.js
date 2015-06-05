import Ember from 'ember';

export default Ember.Controller.extend({
  sections: function() {
    var sections = Ember.A();
    for(let i in this.sectionMap) {
      sections.push(this.sectionMap[i]);
    }
    return sections;
  }.property('model')
});
