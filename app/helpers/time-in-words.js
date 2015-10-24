import Ember from 'ember';
//import moment from 'moment';

export default Ember.Helper.helper(function(params) {
  // 暂时先不处理 ago 时间会每分钟变化一次的问题, 因为如果注册的 callback 没找到合适的位置注销, 那么会是一个内存溢出的点
  // 非常多的 timeInWords 调用注册 callback
  return moment(params[0]).fromNow();
});
