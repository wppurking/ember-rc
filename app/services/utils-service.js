import Ember from 'ember';

/**
 * jQuery 插件初始化服务
 */
export default Ember.Service.extend({
  // 初始化 Fluidbox 图片
  initFluidboxImg($imgs) {
    if(Ember.isArray($imgs)) {
      Ember.run.scheduleOnce('afterRender', function() {
        $imgs.each((i, img) => {
          var className = img.getAttribute('class');
          if(Ember.isPresent(className) && className.indexOf('emoji') >= 0) {
            console.log("跳过 emoji 表情.");
          } else {
            $(img).wrap(`<a href="${img.getAttribute('src')}"></a>`).parent().fluidbox({
              closeTrigger: [{selector: 'window', event: 'resize scroll'}]
            });
          }
        });
      });
    }
  },

  // 初始化 Dropzone 区域
  initDropzone($el, options) {
    Ember.run.scheduleOnce('afterRender', function() {
      $('.dz-hidden-input').remove();
      $el.dropzone(options);
    });
  },

  /**
   * options 有默认的, 如果无需改变请直接传入 {data: [xxx]} 即可
   */
  initAtwho($el, options) {
    Ember.run.scheduleOnce('afterRender', function() {
      // https://github.com/ichord/At.js/blob/6c452f3e7327bcb126aad7795558bc6a9ab6cb39/dist/js/jquery.atwho.js#L1070
      // 查看 jquery 插件的 $.fn.xxx 来观察是否有插件初始化的代码
      const commeterOptions = {
        at: "@",
        search_key: "search",
        tpl: "<li data-value='${login}'>${login} <small>${name}</small></li>"
      };

      const emojiOptions = {
        at: ":",
        data: window.EMOJI_LIST,
        tpl: "<li data-value='${name}:'><img src='https://ruby-china-files.b0.upaiyun.com/assets/emojis/${name}.png' height='20' width='20'/> ${name} </li>"
      };


      var opts = Ember.merge(commeterOptions, options);

      if(Ember.isPresent($el.data('atwho'))) {
        $el.atwho('load', opts.at, options.data);
      } else {
        $('.atwho-container').remove();
        $el.atwho(opts);
        // 占时先补不开放 emoji 表情, 因为图片没搞定.. - -||
          //.atwho(emojiOptions);
      }
    });
  }
});
