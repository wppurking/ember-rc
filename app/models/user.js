import DS from 'ember-data';

export default DS.Model.extend({
  /*
  id: 1510,
  login: "juanito",
  name: "Juanito Fatas",
  avatar_url: "https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1510.jpg"
   */
  login: DS.attr('string'),
  name: DS.attr('string'),
  avatar_url: DS.attr('string'),

  topics: DS.hasMany('topic')
});
