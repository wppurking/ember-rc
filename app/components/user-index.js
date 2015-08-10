import Ember from 'ember';

export default Ember.Component.extend({

  modelToDulArray: function() {
    var dulArray = Ember.A();
    dulArray.push(Ember.A());
    this.attrs.users.value.forEach((user, index) => {
      dulArray[dulArray.length - 1].push(user);
      if((index + 1) % 4 === 0) {
        dulArray.push(Ember.A());
      }
    });
    return dulArray.filter((array) => { return array.length > 0});
  }.property('attrs.users.[]'),

  actions: {
    follow(user) {
      alert(`还未实现 "关注" 功能. 所以还不能 '关注': ${user}`);
      console.log('还未实现 "关注" 的功能.');
    }
  }

});
