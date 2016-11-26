import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement(){
    this._super(...arguments);
    Ember.$(".slider-for").not('.slick-initialized').slick({
      lazyLoad: 'ondemand',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    //
    Ember.$(".slider-nav").not('.slick-initialized').slick({
      lazyLoad: 'ondemand',
      speed: 300,
      prevArrow:`<a class="left carousel-control" role="button"><span class="icon-prev" aria-hidden="true"></span><span class="sr-only">Previous</span></a>`,
      nextArrow:`<a class="right carousel-control" role="button"><span class="icon-next" aria-hidden="true"></span><span class="sr-only">Next</span></a>`,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]

    });
  },

  willDestroyElement(){
    // it will destroy slider once we leave component, it's good for performance
    this._super(...arguments);
    Ember.$(".slider-for").not('.slick-initialized').slick('unslick');
    Ember.$(".slider-nav").not('.slick-initialized').slick('unslick');
  }


});
