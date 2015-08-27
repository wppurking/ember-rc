import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('topics', function() {
    this.route('show', {path: '/:topic_id'});
    this.route('new');
  });

  this.route('nodes', function() {
    this.route('show', {path: '/:node_id'});
  });

  this.route('users', function() {
    this.route('show', {path: '/:user_id'});
  });

  this.route('notifications');

});

export default Router;
