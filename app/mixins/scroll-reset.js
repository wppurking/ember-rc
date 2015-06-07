import Ember from 'ember';

/**
 * 这个作为 route 的 mixin
 * 一定需要拥有: page 属性
 */
export default Ember.Mixin.create({
  // TODO: 在为了达到 scrollTo(0,0)  后会发现, 所有与 scroll 有关的 history 都会不见. 带来的体验就是, 当用户看完内页的信息,
  // 使用 history.back 返回首页的时候将丢失原来的 scroll 位置, 而这种感觉在经常阅读的应用中很不好...
  // 只有在 route 进入的时候才会触发, 进入后不断的 link-to 只要不跳出这个 route 就不会再次触发
  /*
  activate() {
    this._super();
    console.log('activate.scrollTo top');
    window.scrollTo(0, 0);
  }
  */

  /*
  actions: {
    didTransition() {
      window.scrollTo(0, 0);
      console.log('mixin didTransition');
      return true;
    }
  }
  */

  /**
   * 分页的页面条. 提供用于展示分页页码的数据条
   */
  pages: function() {
    var distance = 2;
    var start = this.get('page') - distance;
    if(start < 1) { start = 1; }
    var end = this.get('page') + distance;
    var links = [];
    for(var i = start; i <= end; i++) {
      links.push(i);
    }
    // 检查是否有第一页
    if(start !== 1) { links.unshift(1); }

    return links;
  }.property('page'),

  /**
   * 动态 scrollTo 传入的 jQuery Dom 元素
   */
  scrollToAn(jqDom) {
    console.log('scrollTo');
    $('html, body').animate({
      scrollTop: (jqDom.offset().top - 70)
    }, 800);
  },

  /**
   * 将页面直接快速定位到指定的 jQuery 元素
   */
  scrollTo(jqDom) {
    Ember.run.later(() => {
      window.scrollTo(0, jqDom.offset().top);
    }, 100);
  },

  /**
   * 将页面直接快速的定位的顶部
   */
  scrollToTop() {
    Ember.run.later(() => {
      window.scrollTo(0, 0);
    }, 100);
  },


  actions: {
    plusPage(page) {
      this.incrementProperty('page', page);
    }
  }
});
