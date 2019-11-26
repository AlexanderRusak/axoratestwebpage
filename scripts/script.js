$(document).ready(function () {
  
$('.similar-prdoduct-section').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows:false,
  speed: 300,
  variableWidth: false,
  responsive: [
   
    {

      breakpoint: 991,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 1,
      }
      
    },
    {

      breakpoint: 600,
      settings:"unslick"
      
    }
  ]
});
});
