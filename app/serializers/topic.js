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
    console.log("extract;" + id + "解析 json 到 object.");
    return this._super(...arguments);
  },

  extractFind(store, primaryModelClass, payload) {
    console.log('extractFind..');
    this.loadReplies(payload);
    return this._super(...arguments);
  },

  // ------------- isNewSerializerAPI 的开发决定: true 调用新的 hook API(below), false 调用老的 hook API(up) -----------------

  normalizeResponse(store, type, payload, id, requestType) {
    console.log("normalizeResponse;" + id + "解析 json 到 object:" + payload);
    return this._super(store, type, payload, id, requestType);
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload) {
    console.log('normalizeFindRecordResponse..');
    this.loadReplies(payload);
    return this._super(...arguments);
  },

  loadReplies(preload) {
    if(preload['topic']) {
      var topic = preload['topic'];
      /*
      // 这部分因为 Topic 的 Reply 会被删除, 所以这部分不可靠.
      var replies_count = topic['replies_count'];
      if(Ember.isBlank(replies_count) || replies_count < 20) { replies_count = 20; }

      // ruby-china api 限制最多 100
      if(replies_count > 100) { replies_count = 100; }
      */
      // 因为测试 Reply 的 API 最多不出错拿 100 个
      var replies_count = 100;

      topic.links = {
        // 这个回复在这里最好一次性取出, 做本地分页.
        replies: `replies.json?limit=${replies_count}`
      };
      console.log(preload);
    }
    return preload;
  }
});
