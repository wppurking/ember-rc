import DS from 'ember-data';

export default DS.Model.extend({
  body_html: DS.attr('string'),

  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  deleted: DS.attr('boolean'),

  topic: DS.belongsTo('topic'),
  user: DS.belongsTo('user', {async: false})
});
