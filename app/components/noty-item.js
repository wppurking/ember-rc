import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['media', 'notification'],
  classNameBindings: ['remove'],
  remove: false,
  isNeedUserInfo: false,

  summary: function() {
    var type = this.noty.get('type');
    console.log('change something....');
    if(type === 'Follow') {
      this.set('isNeedUserInfo', false);
      return '开始关注你了.';
    } else if(type === 'TopicReply' || type === 'Mention') {
      this.set('isNeedUserInfo', true);
      if(Ember.isBlank(this.noty.get('reply.body'))) {
        this.noty.get('reply');
        return "...";
      } else {
        return this.noty.get('reply.body');
      }
    }
  }.property('noty.reply.body'),

  actions: {
    // 现在是 fake 删除
    remove() {
      this.set('remove', true);
      // 推迟的时间根据 notification.scss 中的 transition 时间来
      Ember.run.later(() => {
        this.$().remove();
      }, 600);
    }
  }
});
