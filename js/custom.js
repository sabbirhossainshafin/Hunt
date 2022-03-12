$(function(){
   // Scroll Js
      //animation scroll js
      var html_body = $('html, body');
      $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            html_body.animate({
              scrollTop: target.offset().top - 80
            }, 2000);
            return false;
          }
        }
      });
// banner slider
$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:true,
    prevArrow:'<i class="fa fa-arrow-circle-o-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-arrow-circle-o-right nxt" aria-hidden="true"></i>',
  });
// service slider
$('.service-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    vertical:true,
    arrows:true,
  verticalSwiping:true,
  prevArrow:'<i class="fa fa-chevron-up up" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-chevron-down down" aria-hidden="true"></i>',
  centerMode:true,
  centerPadding:0,
});
//feedback slider
$('.feed-img-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow:'<i class="fa fa-chevron-down bottom" aria-hidden="true"></i>',
  prevArrow:'<i class="fa fa-chevron-up up top" aria-hidden="true"></i>',
  vertical:true,
  verticalSwiping:true,
  asNavFor: '.feed-content-slider',
  centerMode:true,
  centerPadding:0,
});
$('.feed-content-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  speed:1000,
  arrows:false,
  asNavFor: '.feed-img-slider',
  centerMode:true,
  centerPadding:0,
  
});

//.counter slider
$('.counter').counterUp({
  delay: 10,
  time: 4000
});
 //partnerSlider
 $('.partner-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode:true,
  centerPadding:0,
  });
/// Sticky Menu

$(window).scroll(function(){

  var scrolling = $(this).scrollTop();

  if( scrolling > 150){
      $('.main-menu').addClass('bg');
  }
  else{
      $('.main-menu').removeClass('bg');
  }
  if(scrolling > 300){
    $('.back-to-top').fadeIn(500);
  }
  else{
    $('.back-to-top').fadeOut(500);
  }
  // back top
  $('.back-to-top').click(function(){
    $('html,body').animate({scrollTop:0})
  })
})
});

