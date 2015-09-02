import Ember from 'ember';

// 通过每一个 URL 对应的 Ember.Route 单例, 记录下页面的 scroll 位置
export default Ember.Mixin.create({
  reset: false,

  // 当 URL 离开 topics.index 的时候
  recordScroll: function() {
    console.log('in route.mixin recordScroll ............');
    var scrollTop = Ember.$(window).scrollTop();
    if(this.get('reset')) {
      scrollTop = 0;
      this.set('reset', false);
    }
    this.set('scrollTop', scrollTop);
  }.on('deactivate'),

  actions: {
    // 进入的时候, 添加到 afterRender Queue 后面
    didTransition() {
      console.log('in route.mixin didTransition ............');
      var scrollTop = this.get('scrollTop');
      if(Ember.isPresent(scrollTop)) {
        Ember.run.scheduleOnce('afterRender', function() {
          Ember.$(window).scrollTop(scrollTop);
        });
      }
    },

    resetScroll() {
      this.set('reset', true);
    }
  }
});
