import DS from 'ember-data';

export default DS.Model.extend({
  /*

   id: 1
   login: "rei"
   name: "Rei"
   avatar_url: "https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1.jpg"

   bio: "Twitter @chloerei↵↵https://selfstore.io 创始人"
   company: ""
   created_at: "2011-10-28T00:17:50.000+08:00"
   email: "chloerei@gmail.com"
   github: "chloerei"
   location: "广西"
   tagline: "中下水平 Rails 程序员"
   twitter: "chloerei"
   website: "http://chloerei.com"
   */
  login: DS.attr('string'),
  name: DS.attr('string'),
  avatar_url: DS.attr('string'),
  bio: DS.attr('string'),
  company: DS.attr('string'),
  email: DS.attr('string'),
  github: DS.attr('string'),
  location: DS.attr('string'),
  tagline: DS.attr('string'),
  twitter: DS.attr('string'),
  website: DS.attr('string'),
  created_at: DS.attr('date'),


  topics: DS.hasMany('topic'),
  replies: DS.hasMany('reply')
});
