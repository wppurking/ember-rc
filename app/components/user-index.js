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
  }.property('attrs.users.[]')

});
