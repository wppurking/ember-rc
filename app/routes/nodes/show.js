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
    return Ember.RSVP.hash({
      topics: this.store.query('topic', {node_id: params.node_id, offset: this.get('offset')}),
      node: this.store.all('node').get('length') > 0 ? this.store.find('node', params.node_id) : this.store.findAll('node').then((nodes) => {
        return nodes.findBy('id', params.node_id);
      })
    });
  },

  setupController(controller, modelHash) {
    controller.set('limit', this.get('limit')).set('offset', this.get('offset'));

    controller.set('topics', modelHash['topics']);
    this._super(controller, modelHash['node']);
  }
});
