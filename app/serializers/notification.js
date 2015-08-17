import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: false,
  attrs: {
    actor: {embedded: 'always'},
    reply: {serialize: 'id', deserialize: 'id'},
    topic: {serialize: 'id', deserialize: 'id'}
  },

  //normalizeResponse(store, type, payload, id, requestType) {
  //  console.log("notification: normalizeResponse:" + id + "解析 json 到 object:" + payload);
  //  return this._super(store, type, payload, id, requestType);
  //}
  extractFindAll(store, typeClass, payload, id, requestType) {
    console.log(payload);
    payload['notifications'].forEach((noty) => {
      var replyObj = null;
      var hash = noty;
      switch(hash['type']) {
        case 'TopicReply':
          replyObj = hash['reply'];
          hash['topic'] = {id: replyObj['topic_id'], type: 'topic'};
          hash['reply'] = {id: replyObj['id'], type: 'reply'};
          break;
        case 'NodeChanged':
          break;
        case 'Follow':
          break;
        default:
          // Mention
          replyObj = hash['mention'];
          hash['topic'] = {id: replyObj['topic_id'], type: 'topic'};
          hash['reply'] = {id: replyObj['id'], type: 'reply'};
          break;
      }
    });
    console.log(payload);
    return this._super(store, typeClass, payload, id, requestType);
  }
});
