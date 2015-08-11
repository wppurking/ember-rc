import ApplicationAdapter from './application';

// 通过 Custome Adapter 来自定义 RESTFUL URL
export default ApplicationAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    // https://ruby-china.org/api/v3/topics/20981/replies.json
    console.log(`createURL: ${this.urlPrefix()}/topics/${snapshot.belongsTo('topic').id}/${this.pathForType(snapshot.modelName)}.json`);
    return `${this.urlPrefix()}/topics/${snapshot.belongsTo('topic').id}/${this.pathForType(snapshot.modelName)}.json`;
    //return `/topics/${snapshot.belongsTo('topic').id}/${this.pathForType(snapshot.modelName)}.json`;
  },

  urlForQuery(query, modelName) {
    // deal preload.
    var preload = query['preload'];
    var flag = delete query['preload'];
    if(flag) {
      return `${this._buildURL(this.pathForType('topic'), preload['topic'])}/${this.pathForType(modelName)}.json`;
    } else {
      return this._super(...arguments);
    }
  },

  createRecord(store, type, snapshot) {
    // 参考 https://github.com/emberjs/data/blob/master/packages/ember-data/lib/adapters/rest-adapter.js
    var data = {};
    var serializer = store.serializerFor(type.modelName);
    var url = this.buildURL(type.modelName, null, snapshot, 'createRecord');

    serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

    // 提交的 data 不需要 reply 这 root key, 直接抽取其里面的 model 即可.
    return this.ajax(url, "POST", { data: data[type.modelName] });
  }
});
