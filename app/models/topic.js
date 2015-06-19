import DS from 'ember-data';

var Topic = DS.Model.extend({
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
  hits: DS.attr('number'),

  deleted: DS.attr('boolean'),

  body: DS.attr('string'),
  body_html: DS.attr('string'),

  user: DS.belongsTo('user', {async: false}),
  replies: DS.hasMany('reply', {async: true}),

  refresh(force=false) {
    if(force) {
      return this.reload();
    } else if(Ember.isEmpty(this.get('body')) || Ember.isEmpty(this.get('body_html'))) {
      return this.reload();
    } else {
      return this;
    }
  }
});

Topic.reopenClass({
  //FIXTURES: [{"id":25747,"title":"如何优雅地将 CoffeeScript 写的 class 暴露给全局？","created_at":"2015-05-26T14:36:23.801+08:00","updated_at":"2015-05-27T00:18:59.250+08:00","replied_at":"2015-05-27T00:18:59.229+08:00","replies_count":13,"node_name":"JavaScript","node_id":5,"last_reply_user_id":11222,"last_reply_user_login":"billy","user":{"id":9162,"login":"cassiuschen","name":"陈小紫","avatar_url":"https://ruby-china.org/avatar/e8125fceed1cd4a27d2479b6fe8bfa11.png?s=120"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25749,"title":"[远程] Ruby 中文官网徵求志工","created_at":"2015-05-26T15:29:31.253+08:00","updated_at":"2015-05-26T23:54:18.758+08:00","replied_at":"2015-05-26T23:54:18.748+08:00","replies_count":24,"node_name":"招聘","node_id":25,"last_reply_user_id":18177,"last_reply_user_login":"huibean","user":{"id":1510,"login":"juanito","name":"Juanito Fatas","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/1510.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25431,"title":"[上海静安] DiningCity 鼎食聚 新一轮招聘开始了！~ Ruby 程序猿 \u0026 Strong 前端开发攻城狮！很少加班哦~","created_at":"2015-05-05T09:25:17.835+08:00","updated_at":"2015-05-26T23:25:19.178+08:00","replied_at":"2015-05-26T23:25:19.167+08:00","replies_count":37,"node_name":"招聘","node_id":25,"last_reply_user_id":2847,"last_reply_user_login":"yujing_z","user":{"id":16217,"login":"lyswjhh","name":"Heidi Yue","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/16217.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25759,"title":"TSHE.ME - 招募前端工程师 (早期员工)","created_at":"2015-05-26T22:52:53.512+08:00","updated_at":"2015-05-26T22:53:11.127+08:00","replied_at":null,"replies_count":0,"node_name":"招聘","node_id":25,"last_reply_user_id":null,"last_reply_user_login":null,"user":{"id":13229,"login":"citysheep","name":"citysheep","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/13229.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25728,"title":"如何在源码阶段写出更快的 Ruby","created_at":"2015-05-25T13:59:28.554+08:00","updated_at":"2015-05-26T23:06:36.947+08:00","replied_at":"2015-05-26T22:51:43.318+08:00","replies_count":2,"node_name":"翻译","node_id":68,"last_reply_user_id":1286,"last_reply_user_login":"meeasyhappy","user":{"id":11955,"login":"etnl","name":"","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/11955.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25741,"title":"Rails 5 - 将会有更快的 render collection 以及优化小细节","created_at":"2015-05-25T21:34:04.204+08:00","updated_at":"2015-05-26T22:38:32.228+08:00","replied_at":"2015-05-26T22:38:32.176+08:00","replies_count":19,"node_name":"Rails","node_id":2,"last_reply_user_id":9770,"last_reply_user_login":"clarkyi","user":{"id":2,"login":"huacnlee","name":"李华顺","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/2.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25753,"title":"解读 Rails - 适配器模式","created_at":"2015-05-26T17:28:25.444+08:00","updated_at":"2015-05-26T22:28:10.164+08:00","replied_at":"2015-05-26T22:27:51.895+08:00","replies_count":1,"node_name":"翻译","node_id":68,"last_reply_user_id":12224,"last_reply_user_login":"chanshunli","user":{"id":4755,"login":"martin91","name":"Martin","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/4755.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25757,"title":"更加感觉 Ruby China 是高质量社区","created_at":"2015-05-26T18:59:22.616+08:00","updated_at":"2015-05-26T22:28:08.082+08:00","replied_at":"2015-05-26T22:28:08.057+08:00","replies_count":6,"node_name":"瞎扯淡","node_id":27,"last_reply_user_id":861,"last_reply_user_login":"AlphaLiu","user":{"id":15482,"login":"answer","name":"Answer","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/15482.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25758,"title":"求一份兼职 Ruby 工作","created_at":"2015-05-26T22:00:34.576+08:00","updated_at":"2015-05-26T22:00:34.576+08:00","replied_at":null,"replies_count":0,"node_name":"求职","node_id":64,"last_reply_user_id":null,"last_reply_user_login":null,"user":{"id":17762,"login":"little","name":"小","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/17762.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25756,"title":"写了一个只有 100 行的 mini 版的 rails","created_at":"2015-05-26T18:40:18.500+08:00","updated_at":"2015-05-26T22:25:53.003+08:00","replied_at":"2015-05-26T21:45:49.950+08:00","replies_count":3,"node_name":"Rails","node_id":2,"last_reply_user_id":5485,"last_reply_user_login":"crazyjin","user":{"id":5485,"login":"crazyjin","name":"felix","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/5485.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25734,"title":"不用搭建环境，也可以学 Ruby！","created_at":"2015-05-25T16:57:49.804+08:00","updated_at":"2015-05-26T21:31:23.356+08:00","replied_at":"2015-05-26T21:31:23.341+08:00","replies_count":8,"node_name":"产品推广","node_id":69,"last_reply_user_id":17189,"last_reply_user_login":"papa","user":{"id":17189,"login":"papa","name":"","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/17189.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25743,"title":"【已解决】qiniu_direct_upload 有关变量问题","created_at":"2015-05-25T22:21:20.331+08:00","updated_at":"2015-05-26T20:57:55.405+08:00","replied_at":"2015-05-26T20:56:03.386+08:00","replies_count":2,"node_name":"Gem","node_id":3,"last_reply_user_id":15940,"last_reply_user_login":"somejump","user":{"id":15940,"login":"somejump","name":"三金","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/15940.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25705,"title":"[北京] 百度流程信息管理部招聘前端开发工程师 (15~30K)","created_at":"2015-05-22T19:01:11.757+08:00","updated_at":"2015-05-26T19:54:02.066+08:00","replied_at":"2015-05-26T18:53:21.359+08:00","replies_count":7,"node_name":"招聘","node_id":25,"last_reply_user_id":3226,"last_reply_user_login":"xieyu33333","user":{"id":3226,"login":"xieyu33333","name":"xieyu","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/3226.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25754,"title":"又一个轮子 EasyForm:  form builder without complex dsl","created_at":"2015-05-26T17:36:41.978+08:00","updated_at":"2015-05-26T22:26:59.098+08:00","replied_at":"2015-05-26T18:10:05.279+08:00","replies_count":2,"node_name":"Gem","node_id":3,"last_reply_user_id":273,"last_reply_user_login":"ruby_sky","user":{"id":2564,"login":"kikyous","name":"","avatar_url":"https://ruby-china.org/avatar/a948e6e068754e437c4047a2a693f659.png?s=120"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25755,"title":"Ruby On Rails【途途旅游网】持续招聘","created_at":"2015-05-26T17:52:49.025+08:00","updated_at":"2015-05-26T18:05:40.241+08:00","replied_at":"2015-05-26T18:05:40.213+08:00","replies_count":1,"node_name":"招聘","node_id":25,"last_reply_user_id":2455,"last_reply_user_login":"763914974","user":{"id":12757,"login":"tutu1234","name":"途途旅游","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/12757.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25547,"title":"为什么国外的创业公司更喜欢 Rails?","created_at":"2015-05-13T03:52:14.257+08:00","updated_at":"2015-05-26T18:02:00.657+08:00","replied_at":"2015-05-26T18:02:00.648+08:00","replies_count":60,"node_name":"Rails","node_id":2,"last_reply_user_id":2455,"last_reply_user_login":"763914974","user":{"id":121,"login":"lyfi2003","name":"windy","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/121.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25745,"title":"有 Ruby 2.3 的消息嗎?","created_at":"2015-05-26T12:06:35.634+08:00","updated_at":"2015-05-26T16:44:19.747+08:00","replied_at":"2015-05-26T16:44:19.726+08:00","replies_count":2,"node_name":"Ruby","node_id":1,"last_reply_user_id":1342,"last_reply_user_login":"ywjno","user":{"id":7929,"login":"ksec","name":"","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/7929.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25744,"title":"[上海] 添创招聘 Ruby 开发工程师","created_at":"2015-05-26T11:44:24.451+08:00","updated_at":"2015-05-26T18:09:33.710+08:00","replied_at":"2015-05-26T16:37:38.015+08:00","replies_count":18,"node_name":"招聘","node_id":25,"last_reply_user_id":13582,"last_reply_user_login":"rd084c","user":{"id":13582,"login":"rd084c","name":"大君","avatar_url":"https://ruby-china.org/avatar/14255cfc6bb9536de3a1bd8a81f0ab6d.png?s=120"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25729,"title":"Ruby Saturday 关于微服务在企业中的实践应用的 PPT","created_at":"2015-05-25T14:41:54.433+08:00","updated_at":"2015-05-26T18:52:37.194+08:00","replied_at":"2015-05-26T16:00:59.669+08:00","replies_count":6,"node_name":"分享","node_id":26,"last_reply_user_id":13903,"last_reply_user_login":"hooopo","user":{"id":4938,"login":"dy1901","name":"dy1901","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/4938.jpg"},"deleted":false,"abilities":{"update":false,"destroy":false}},{"id":25746,"title":"[北京] 财说招聘 Ruby 研发工程师","created_at":"2015-05-26T12:41:38.301+08:00","updated_at":"2015-05-26T16:44:18.244+08:00","replied_at":"2015-05-26T14:45:38.345+08:00","replies_count":1,"node_name":"招聘","node_id":25,"last_reply_user_id":68,"last_reply_user_login":"gazeldx","user":{"id":12104,"login":"caishuo","name":"财说","avatar_url":"https://ruby-china-files.b0.upaiyun.com/user/large_avatar/12104.png"},"deleted":false,"abilities":{"update":false,"destroy":false}}]

  //FIXTURES: [{"id":25747,"title":"如何优雅地将 CoffeeScript 写的 class 暴露给全局？","created_at":"2015-05-26T14:36:23.801+08:00","updated_at":"2015-05-27T00:18:59.250+08:00","replied_at":"2015-05-27T00:18:59.229+08:00","replies_count":13,"node_name":"JavaScript","node_id":5,"last_reply_user_id":11222,"last_reply_user_login":"billy","user":9162,"deleted":false,"abilities":{"update":false,"destroy":false}}]
  FIXTURES: [{"id":25747,"title":"如何优雅地将 CoffeeScript 写的 class 暴露给全局？","created_at":"2015-05-26T14:36:23.801+08:00","updated_at":"2015-05-27T00:18:59.250+08:00","replied_at":"2015-05-27T00:18:59.229+08:00","replies_count":13,"node_name":"JavaScript","node_id":5,"last_reply_user_id":11222,"last_reply_user_login":"billy","user":{"id":9162,"login":"cassiuschen","name":"陈小紫","avatar_url":"https://ruby-china.org/avatar/e8125fceed1cd4a27d2479b6fe8bfa11.png?s=120"},"deleted":false,"abilities":{"update":false,"destroy":false}}]
});

export default Topic;
