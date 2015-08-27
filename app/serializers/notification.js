import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: false,
  attrs: {
    actor: {embedded: 'always'},
    reply: {serialize: 'id', deserialize: 'id'},
    topic: {serialize: 'id', deserialize: 'id'}
  },

  // extractArray 与 extractSingle 是一对(老 API 中, 新的为 normalize<xxx>Response)
  // 所有处理返回 Array 数组的结构都使用此方法.
  extractArray(store, primaryTypeClass, rawPayload) {
    // 由于 Ruby-China 获取的 Json 数据与 ember-data 之间的数据不匹配, 需要做一些处理.
    rawPayload['notifications'].forEach((noty) => {
      this.rubyChinaNotyAdapter(noty);
    });
    return this._super(store, primaryTypeClass, rawPayload);
  },

  // will effect origin noty hash
  rubyChinaNotyAdapter(noty) {
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
    return hash;
  }
});
