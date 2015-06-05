import Ember from 'ember';
import SR from 'ember-rc/mixins/scroll-reset';

export default Ember.Route.extend(SR, {
  // topic.show 内的 replies 分页不需要历史
  queryParams: {
    page: {
      replace: true
    }
  },


  // TODO: 为什么带有参数的 route, 在应用内 transition 不会 trigger model hook, 只有当 hit url 的时候才会 trigger model hook
  // http://discuss.emberjs.com/t/why-is-it-not-possible-to-trigger-the-model-hook-via-link-to-helper/3984/3
  // http://guides.emberjs.com/v1.10.0/routing/asynchronous-routing/

  afterModel(model, transition) {
    var route = this;
    var topic = model.refresh();
    // 如果不是 model, 则一定是 promise 对象
    if(topic !== model) {
      topic.then((m) => {
        if(!Ember.isBlank(transition.queryParams.top) && transition.queryParams.top === 'true') {
          route.scrollToTop();
        }
        return m;
      })
    }
    return topic;
  },


  // 不会触发 beforeModel, model, afterModel 中的 loading 事件
  setupController(controller, model) {
    var route = this;
    // 加载 links 中的数据. 因为 afterModel 中无法存在两个 promise, 所以将 replies 的加载, 使用 loading 标示符进行处理.
    controller.set('isLoadingTopics', true);
    // 能够让 Topic 与 repliy 之间的 hasMany 关系合作起来, 需要参考:
    // 1. 测试代码: https://github.com/emberjs/data/blob/ec006005fa4e4be43587e50d45a889f4011fc2ef/packages/ember-data/tests/integration/relationships/has-many-test.js
    // 2. 一个还没有合并的 pull request. https://github.com/emberjs/data/issues/2162
    model.get('replies').then(()=> {
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
