import DS from 'ember-data';

export default DS.Model.extend({
  /*
  例子
   {
       id: 25749,
       title: "[远程] Ruby 中文官网徵求志工",
       created_at: "2015-05-26T15:29:31.253+08:00",
       updated_at: "2015-05-26T23:54:18.758+08:00",
       replied_at: "2015-05-26T23:54:18.748+08:00",
       replies_count: 24,
       node_name: "招聘",
       node_id: 25,
       last_reply_user_id: 18177,
       last_reply_user_login: "huibean",
       user: {
           id: 1510,
           login: "juanito",
           name: "Juanito Fatas",
           avatar_url: "https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1510.jpg"
       },
       deleted: false,
       abilities: {
           update: false,
           destroy: false
       }
   },

   */

  title: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  replied_at: DS.attr('date'),
  replies_count: DS.attr('number'),

  node_name: DS.attr('string'),
  node_id: DS.attr('number'),

  last_reply_user_id: DS.attr('number'),
  last_reply_user_login: DS.attr('string'),

  deleted: DS.attr('boolean')

  //user
});
