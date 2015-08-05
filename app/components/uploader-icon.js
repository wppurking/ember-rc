import Ember from 'ember';

export default Ember.Component.extend({
  headers: function() {
    return {
      "Authorization": `${this.get('auth.token_type')} ${this.get('auth.token')}`
    };
  }.property('auth.token'),

  url: function() {
    var defaultUrl = 'https://ruby-china.org/api/v3/photos.json';
    return Ember.isBlank(this.attrs.url) ? defaultUrl : this.attrs.url;
  },

  didInsertElement() {
    console.log("uploader-img insert into dom tree.");
    console.log(this.url());

    var component = this;
    var dropZoneOptions = {
      url: this.url(),
      // 10 MB
      maxFilesize: 10,
      createImageThumbnails: true,
      addRemoveLinks: false,
      acceptedFiles: 'image/*',
      // 不需要 preview
      previewsContainer: '.dz-preview',
      init: function() {
        this.on('success', (file, resp) => {
          //image_url: "https://ruby-china-files.b0.upaiyun.com/photo/2015/46d68225e902b7f78eafeb0c0fae6e31.png"
          //![](https://ruby-china-files.b0.upaiyun.com/photo/2015/f2edef8cd04b05bc7c7ee11bc067e5c4.png)
          console.log(resp);
          component.sendAction('succCallBack', `![](${resp['image_url']})`);
        });
      }
    };

    this.$('i').dropzone(Ember.merge(dropZoneOptions, {headers: this.get('headers')}));
    this.$('span').tooltip();
  }
});
