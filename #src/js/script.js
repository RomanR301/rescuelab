let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
      var testimonials = new Swiper('.testimonials-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        watchOverflow: true,
        navigation: {
            nextEl: '.testimonials-next',
            prevEl: '.testimonials-prev',
          },
          pagination: {
            el: '.testimonial-pagination',
          },
      });
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      if($(window).width() < 767) {
        $(document).on('click', '.scroll-to', function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top - 80
          }, 500);
          $('body').removeClass('active');
          $('.navbar').removeClass('active');
          $('.hamburger').removeClass('open');
          
          return false;
  
        });
      } else {
        $(document).on('click', '.scroll-to', function(){
          $('html, body').animate({
              scrollTop: $( $(this).attr('href') ).offset().top - 130
          }, 500);
          $('body').removeClass('active');
          $('.navbar').removeClass('active');
          $('.hamburger').removeClass('open');
          
          return false;
  
        });
      }
    
  }
};

jQuery(function () {
  front.init();    
});


$(document).on('click', '.arrow-down', function(e) {
  e.preventDefault();
  if ($(this).parent().hasClass("show")) {
    $(this).parent().removeClass("show");
} else {
  $('.menu-item-has-child').removeClass('show');
    $(this).parent().addClass('show');
}
});


$('html').click(function(e) {
var a = e.target;
if ($(a).parents('.menu-item-has-child').length === 0) {
  $('.menu-item-has-child').removeClass('show'); //hide menu item
}
});