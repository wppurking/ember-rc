import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: {embedded: 'always'},
    topic: {deserialize: false}
  }
});
