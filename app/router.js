import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('topics', function() {
    this.route('show', {path: '/:topic_id'});
  });

  this.route('nodes', function() {
    this.route('show', {path: '/:node_id'});
  });
});

export default Router;
