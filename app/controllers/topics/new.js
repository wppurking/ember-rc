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

    appendToReply(content) {
      this.set('topicContent', `${this.get('topicContent')}\n${content}`.trim());
    },

    //TODO: 可以思考如何 创建 Topic/回复 Topic(创建 Reply) 的两个编辑框合并成为一个 Component.
    saveTopic() {
      console.log('save Topic, and content is :' + this.get('topicContent'));
    }
  }

});
