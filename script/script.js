



$( document ).ready(function() {
  var $slider = $('.banner-slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).html('<span class="active_slide_count">'+currentSlide + '</span><span class="sub_text">/' +slidesCount+'</span>')
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
    dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
      
    });
}
  });


$( document ).ready(function() {
AOS.init();
});

$( document ).ready(function() {
//  Set caption from card text
$('.card-deck a').fancybox({
  caption : function( instance, item ) {
    return $(this).parent().find('.card-text').html();
  }
});
  
});