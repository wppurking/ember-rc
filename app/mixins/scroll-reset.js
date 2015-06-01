import Ember from 'ember';

// 这个作为 route 的 mixin
export default Ember.Mixin.create({
  // 只有在 route 进入的时候才会触发, 进入后不断的 link-to 只要不跳出这个 route 就不会再次触发
  //activate() {
  //  this._super();
  //  console.log('scrollTo top');
  //  window.scrollTo(0, 0);
  //}

  actions: {
    didTransition() {
      window.scrollTo(0, 0);
      console.log('mixin didTransition');
      return true;
    }
  }
});
