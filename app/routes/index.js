import Ember from 'ember';
import splitSection from 'ember-rc/utils/node-section';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      nodes: this.store.findAll('node'),
      excellent: this.store.query('topic', {type: 'excellent'})
    });
  },

  setupController(controller, modelHash) {
    var sectionMap = splitSection(modelHash['nodes']);
    controller.set('sectionMap', sectionMap);
    controller.set('excellentTopics', modelHash['excellent']);

    // 让要关联的 controller 下使用 model 获取的就是 nodes
    this._super(controller, modelHash['nodes']);
  }

});
