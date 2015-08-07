import Ember from 'ember';

export default Ember.Service.extend({
  initFluidboxImg($imgs) {
    if(Ember.isArray($imgs)) {
      Ember.run.scheduleOnce('afterRender', this, function() {
        console.log('utils-service.afterRender....');
        $imgs.each((i, img) => {
          $(img).wrap(`<a href="${img.getAttribute('src')}"></a>`).parent().fluidbox({
            closeTrigger: [{selector: 'window', event: 'resize scroll'}]
          });
        });
      });
    }
  }
});
