$(document).ready(function() {
  $(".testimonial-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: $(".testimonial-carousel-controls .prev"),
    nextArrow: $(".testimonial-carousel-controls .next")
  });


});
$( ".navigation nav ul li" ).hover(
    function() {
        $(this).find("span").stop().animate({
        width:"100%",
        opacity:"1",
      }, 400, function () {
      })
    }, function() {
        $(this).find("span").stop().animate({
        width:"0%",
        opacity:"0",
      }, 400, function () {
      })
    }
  );
