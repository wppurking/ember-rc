import Ember from 'ember';

// 这个作为 route 的 mixin
export default Ember.Mixin.create({
  // TODO: 在为了达到 scrollTo(0,0)  后会发现, 所有与 scroll 有关的 history 都会不见. 带来的体验就是, 当用户看完内页的信息,
  // 使用 history.back 返回首页的时候将丢失原来的 scroll 位置, 而这种感觉在经常阅读的应用中很不好...
  // 只有在 route 进入的时候才会触发, 进入后不断的 link-to 只要不跳出这个 route 就不会再次触发
  /*
  activate() {
    this._super();
    console.log('activate.scrollTo top');
    window.scrollTo(0, 0);
  }
  */

  /*
  actions: {
    didTransition() {
      window.scrollTo(0, 0);
      console.log('mixin didTransition');
      return true;
    }
  }
  */
});
