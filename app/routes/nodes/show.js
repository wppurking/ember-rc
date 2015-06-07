import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  limit: 20,
  page: 1,

  offset: function() {
    return (this.get('page') - 1) * this.get('limit');
  }.property('page'),

  model(params) {
    this.set('page', params.page);
    return this.store.find('topic', {node_id: params.node_id, offset: this.get('offset')});
  },

  setupController(controller, model) {
    controller.set('limit', this.get('limit')).set('offset', this.get('offset'));
    this._super(controller, model);
  }
});
