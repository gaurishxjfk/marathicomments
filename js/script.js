$('.testimonial-slider').slick({
  
    arrows: false,
    autoplay : true,
    autoplaySpeed : 3000,
    speed: 200,
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