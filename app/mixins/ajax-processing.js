import Ember from 'ember';

/**
 * 为 Ajax 请求添加 isProcessing 的标示符以及方便的 API.
 * 例如: jquery_ujs 中 ajax 请求自动 disable button/link
 */
export default Ember.Mixin.create({
  isProcessing: false,

  beforeProcess() {
    console.log('beforeProcess...');
    this.set('isProcessing', true);
  },

  afterProcess() {
    console.log('afterProcess...');
    this.set('isProcessing', false);
  },

  aroundProcess(callback) {
    this.beforeProcess();
    callback.apply();
    this.afterProcess();
  }

});
