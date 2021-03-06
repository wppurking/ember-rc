import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: false,
  attrs: {
    user: {embedded: 'always'},
    topic: {deserialize: false}
  },

  serialize(snapshot, options) {
    console.log(`in reply serialize: ${JSON.options}`);
    return this._super(snapshot, options);
  }
});
