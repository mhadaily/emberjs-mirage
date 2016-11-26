import Ember from 'ember';

export default Ember.Component.extend({

  //TODO : Replace png image with SVG to implement pixle perfect approach
  //didInsertElement(){
  //  Ember.$('img.svg').each(function(){
  //    var $img = jQuery(this);
  //    var imgID = $img.attr('id');
  //    var imgClass = $img.attr('class');
  //    var imgURL = $img.attr('src');
  //
  //    Ember.$.get(imgURL, function(data) {
  //      // Get the SVG tag, ignore the rest
  //      var $svg = jQuery(data).find('svg');
  //
  //      if(typeof imgID !== 'undefined') {
  //        $svg = $svg.attr('id', imgID);
  //      }
  //      if(typeof imgClass !== 'undefined') {
  //        $svg = $svg.attr('class', imgClass+' replaced-svg');
  //      }
  //
  //      $svg = $svg.removeAttr('xmlns:a');
  //
  //      // Replace image with new SVG
  //      $img.replaceWith($svg);
  //
  //    }, 'xml');
  //
  //  });
  //}
});
