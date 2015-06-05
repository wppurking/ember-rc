import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('node');
  },

  setupController(controller, models) {
    var sectionMap = this.splitSection(models);
    console.log(sectionMap);
    controller.set('sectionMap', sectionMap);

    this._super(controller, models);
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
        }
      } else {
        sectionMap[section_id]['nodes'].push(item);
      }
    });
    return sectionMap;
  }
});
