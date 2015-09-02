import Ember from 'ember';

// 通过每一个 URL 对应的 Ember.Route 单例, 记录下页面的 scroll 位置
export default Ember.Mixin.create({
  // 当 URL 离开 topics.index 的时候
  deactivate() {
    this.set('scrollTop', Ember.$(window).scrollTop());
  },

  // 进入的时候, 添加到 afterRender Queue 后面
  activate() {
    var scrollTop = this.get('scrollTop');
    if(Ember.isPresent(scrollTop)) {
      Ember.run.scheduleOnce('afterRender', function() {
        Ember.$(window).scrollTop(scrollTop);
      });
    }
  }
});
