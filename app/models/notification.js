import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  read: DS.attr('boolean'),
  mention_type: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  // actor --> model user
  actor: DS.belongsTo('user', {async: false}),
  // reply -> model reply
  reply: DS.belongsTo('reply', {async: true}),
  //topic -> model topic
  topic: DS.belongsTo('topic', {async: true})
});
