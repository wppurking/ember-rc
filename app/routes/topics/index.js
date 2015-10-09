import Ember from 'ember';
import RRP from 'ember-rc/mixins/route-remeber-position';

export default Ember.Route.extend(RRP, {
  // 在 Route 中的 queryParams 是配置
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
    return this.store.query('topic', {offset: this.get('offset')});
  },

  setupController(controller, model) {
    controller.set('limit', this.get('limit'));
    controller.set('offset', this.get('offset'));
    this._super(controller, model);
  }

});
