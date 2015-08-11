import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

export default Ember.Route.extend(SR, {
  // topic.show 内的 replies 分页不需要历史
  queryParams: {
    page: {
      replace: true
    }
  },

  model(params) {
    console.log("trigger model hook in route..");
    // find 老方法. 无缓存发 HTTP, 有缓存理解返回.(都返回 Promise)
    //return this.store.find('topic', params.topic_id);

    // 强制每一次都 reload 最新的
    //return this.store.findRecord('topic', params.topic_id, {reload: true});

    // 使用缓存, 但每一次都重新出发后台 reload ,成功后在更新缓存 [ findRecord 的默认方法 ]
    // 但是 backgroundReload 的判断依据来自 adapter.shouldBackgroundReloadRecord 方法
    //return this.store.findRecord('topic', params.topic_id, {backgroundReload: true});

    // 如果有 cache, 但无 body 那么则直接 reload 避免只刷出 title 然后等着异步的 body
    var cacheTopic = this.store.peekRecord('topic', params.topic_id);
    var isReload = Ember.isPresent(cacheTopic) && Ember.isBlank(cacheTopic.get('body_html'));
    return this.store.findRecord('topic', params.topic_id, {reload: isReload});
  },


  // TODO: 为什么带有参数的 route, 在应用内 transition 不会 trigger model hook, 只有当 hit url 的时候才会 trigger model hook
  // http://discuss.emberjs.com/t/why-is-it-not-possible-to-trigger-the-model-hook-via-link-to-helper/3984/3
  // http://guides.emberjs.com/v1.10.0/routing/asynchronous-routing/

  afterModel(model, transition) {
    if(!Ember.isBlank(transition.queryParams.top) && transition.queryParams.top === 'true') {
      this.scrollToTop();
    }
    return model;
  },


  // 不会触发 beforeModel, model, afterModel 中的 loading 事件
  setupController(controller, model) {
    // 每次进入 show 都情况原来的 replyContent
    controller.set('replyContent', '');

    // 如果有 replies 则让后台更新, 前台不需要等着
    if(model.get('replies.length') <= 0) {
      controller.set('isLoadingTopics', true);
    }

    // 能够让 Topic 与 repliy 之间的 hasMany 关系合作起来, 需要参考:
    // 1. 测试代码: https://github.com/emberjs/data/blob/ec006005fa4e4be43587e50d45a889f4011fc2ef/packages/ember-data/tests/integration/relationships/has-many-test.js
    // 2. 一个还没有合并的 pull request. https://github.com/emberjs/data/issues/2162
    // 3. 这种写法现在还无法到达 #2162 的效果. 现在其效果为: 如果 model.replies: [1,2,3] 则调用 DS.Adapter.findManys 去处理. 如果 model.links.xxx: 'url' 则调用 FindHasMany 去处理.
    /*
    model.get('replies').then(()=> {
      controller.set('isLoadingTopics', false);
    });
    */
    // 直接将嵌套 loadReplies 封装到 topic model 的方法中去了.
    model.loadReplies().finally(() => {
      controller.set('isLoadingTopics', false);
    });

    // TODO 这样的 URL, 还要添加上分页需要做下面两件事情
    // 1. 要将 controller 下层传递的 queryParams 传递到这里;
    // 2. 需要想办法将 queryParams 中的参数, 传递给 model 的 links : {}, 然后由 Ember Data 自己处理 findHasMany 的时候自动处理.
    // --|| 我多么想有一个 API 能够自动调用 hasMany 的 ajax...

    this._super(controller, model);
  },

  // 重置页面参数的方法一: 直接利用 ember 提供的 resetController hook
  resetController(controller, isExiting) {
    if(isExiting) {
      controller.set('page', 1);
    }
  }


  /* 重置页面参数的方法二: 使用 didTransition 这个 route 进入事件来进行清空 controller
   actions: {
   // 在每次 route 进入的时候, 需要将内页的 page 参数重置
   didTransition() {
   if(this.controller) {
   this.controller.set('page', 1);
   }
   }
   }
   */

});
