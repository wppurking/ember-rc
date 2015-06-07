import Ember from 'ember';

export default Ember.Controller.extend({
  sections: function() {
    var sections = Ember.A();
    for(let i in this.sectionMap) {
      sections.push(this.sectionMap[i]);
    }
    return sections;
  }.property('sectionMap'),


  // 左边的十个
  leftTopics: function() {
    return this.excellentTopics.slice(0, 10);
  }.property('excellentTopics'),


  // 右边的十个
  rightTopics: function() {
    return this.excellentTopics.slice(10, 20);
  }.property('excellentTopics')
});
