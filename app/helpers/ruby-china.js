import Ember from 'ember';

/**
 * 返回 Ruby China 的连接
 * @param params
 * @returns {*}
 */
export default Ember.Helper.helper(function(params) {
  return `<a style="margin-left: 5px" target="_blank" href="https://ruby-china.org/topics/${params[0]}"><span class="glyphicon glyphicon-share" aria-hidden="true"></span></a>`;
});
