/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: ['app']
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/font-awesome/css/font-awesome.css');
  app.import('bower_components/font-awesome/fonts/FontAwesome.otf', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts'
  });
  app.import('bower_components/slick-carousel/slick/fonts/slick.eot',{
    destDir: 'assets/fonts'
  });
  app.import('bower_components/slick-carousel/slick/fonts/slick.svg',{
    destDir: 'assets/fonts'
  });
  app.import('bower_components/slick-carousel/slick/fonts/slick.ttf',{
    destDir: 'assets/fonts'
  });
  app.import('bower_components/slick-carousel/slick/fonts/slick.woff',{
    destDir: 'assets/fonts'
  });
  app.import('bower_components/slick-carousel/slick/ajax-loader.gif',{
    destDir: 'assets'
  });
  app.import('bower_components/slick-carousel/slick/slick.min.js');
  app.import('bower_components/slick-carousel/slick/slick.css');
  app.import('bower_components/slick-carousel/slick/slick-theme.css');



  return app.toTree();
};
