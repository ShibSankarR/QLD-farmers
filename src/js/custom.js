// banner Slider

$(document).ready(function() {
  $('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    dots: false,
    nav:false,
    autoplay: true,
    autoplayHoverPause:true,
    animateIn:"fadeIn",
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fas fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })



  $('.pro-slider').owlCarousel({
    loop:true,
    margin: 40,
    dots: false,
    nav:false,
    autoplay: true,
    autoplayHoverPause:true,
    animateIn:"fadeIn",
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fas fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })


  $('.gal-slider').owlCarousel({
    loop:true,
    margin: 10,
    dots: true,
    nav:false,
    autoplay: true,
    autoplayHoverPause:true,
    animateIn:"fadeIn",
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
  })


  

















  });







<!--end-->