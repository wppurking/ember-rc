import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  topics_count: DS.attr('number'),
  summary: DS.attr('string'),

  sort: DS.attr('number'),
  section_name: DS.attr('string'),
  updated_at: DS.attr('date'),

  // 直接记录父类的 id
  section_id: DS.attr('number')
  // one2many
  //section: DS.belongsTo('node', {async: true})
});
