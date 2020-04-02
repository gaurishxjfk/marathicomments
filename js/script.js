$('.testimonial-slider').slick({
  
    arrows: false,
    autoplay : true,
    autoplaySpeed : 2500,
    speed: 900,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
  
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,    
       
          slidesToShow: 1
        }
      }
    ]
  });

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  
  $temp.remove();
  alert ("copied");



}
