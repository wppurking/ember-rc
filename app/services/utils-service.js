import Ember from 'ember';

export default Ember.Service.extend({
  // 初始化 Fluidbox 图片
  initFluidboxImg($imgs) {
    if(Ember.isArray($imgs)) {
      Ember.run.scheduleOnce('afterRender', function() {
        console.log('utils-service.afterRender....');
        $imgs.each((i, img) => {
          $(img).wrap(`<a href="${img.getAttribute('src')}"></a>`).parent().fluidbox({
            closeTrigger: [{selector: 'window', event: 'resize scroll'}]
          });
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
  }
});
