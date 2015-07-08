import Ember from 'ember';

// TextArea 集成自 Component, 所以也是 Component
export default Ember.TextArea.extend({
  didInsertElement() {
    // 目标: 将 element.heigh 设置成为 scrollHeight 的高度, scrollHeight 为包含内容后的总高度
    this.$().textareaAutoSize();
  }
});
