import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['topicId'],
  topicId: function() {
    return "topic-" + this.attrs.topic.value.id;
  }.property('this.attrs.topic')
});
