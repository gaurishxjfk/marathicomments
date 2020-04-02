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

  function copyClipboard() {
    var elm = document.getElementById("divClipboard");
    // for Internet Explorer
  
    if(document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(elm);
      range.select();
      document.execCommand("Copy");
      alert("Copied div content to clipboard");
    }
    else if(window.getSelection) {
      // other browsers
  
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      alert("Copied div content to clipboard");
    }
  }
