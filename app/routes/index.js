import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      nodes: this.store.findAll('node'),
      excellent: this.store.find('topic', {type: 'excellent'})
    });
  },

  setupController(controller, modelHash) {
    var sectionMap = this.splitSection(modelHash['nodes']);
    controller.set('sectionMap', sectionMap);
    controller.set('excellentTopics', modelHash['excellent']);

    // 让要关联的 controller 下使用 model 获取的就是 nodes
    this._super(controller, modelHash['nodes']);
  },

  // 将 nodes 按照 section id 切分
  // {section_id: {name: section_name, nodes: []}
  splitSection(models) {
    var sectionMap = {};
    models.forEach((item) => {
      var section_id = item.get('section_id');
      if(Ember.isBlank(sectionMap[section_id])) {
        sectionMap[section_id] = {
          name: item.get('section_name'),
          nodes: [item]
        };
      } else {
        sectionMap[section_id]['nodes'].push(item);
      }
    });
    return sectionMap;
  }
});
