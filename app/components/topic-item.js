import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['topicId'],

  isShowReplyCount: function() {
    return this.attrs.topic.value.get('replies_count') > 0;
  }.property('attrs.topic'),


  topicId: function() {
    return "topic-" + this.attrs.topic.value.id;
  }.property('attrs.topic')
});
