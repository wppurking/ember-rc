import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';


// 1. http://andycrum.github.io/ember-data-model-maker/
// 2. https://gist.github.com/opsb/730188df99173bff3fc7
// 3. https://github.com/emberjs/data/blob/master/packages/ember-data/tests/integration/serializers/embedded-records-mixin-test.js

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: false,
  attrs: {
    user: {embedded: 'always'}
  },

  extract(store, type, payload, id) {
    //console.log("extract;" + id + "解析 json 到 object.");
    return this._super(...arguments);
  },

  extractFind(store, primaryModelClass, payload) {
    //console.log('extractFind..' + payload);
    return this._super(...arguments);
  },

  // ------------- isNewSerializerAPI 的开发决定: true 调用新的 hook API(below), false 调用老的 hook API(up) -----------------

  normalizeResponse(store, type, payload, id, requestType) {
    console.log("normalizeResponse;" + id + "解析 json 到 object:" + payload);
    return this._super(store, type, payload, id, requestType);
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload) {
    console.log('normalizeFindRecordResponse..' + payload);
    return this._super(...arguments);
  }
});
