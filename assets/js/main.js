
  $(document).ready(function() {
	$('.popup-video').magnificPopup({
    type: 'iframe'
  });
});

//header.......
 $(document).ready(function (){
    var windowOn = $(window);
    windowOn.on("scroll", function () {
  if ($(this).scrollTop() > 700) {
    $(".header").addClass("sticky-header");
  } else {
    $(".header").removeClass("sticky-header");
  }
});
 });

//  $(document).ready(function (){
//   function mobileMenu() {
//     const windowWidth = $(window).width(); 

//     if (windowWidth < 992) {
//     }
//   }
//   mobileMenu();
// // On resize
//   $(window).on("resize", function () {
//      mobileMenu();
//   });
// });
 

 $(".header-selector").click(function(){
  $(".header-selector-wrap").addClass("header-selector-wrap-active")
 })
 $(".header-search").click(function(){
  $(".ri_header-search").addClass("ri_header-search-active")
 })
 $(".search-close").click(function(){
  $(".ri_header-search").removeClass("ri_header-search-active")
 })
 $(".header-menubar").click(function(){
  $(".mobile-menu").toggleClass("mobile-menu-active")
  $(".mobile-menu-close").removeClass("mobile-menu-active")
  $(".mobile-menu-overlay").removeClass("mobile-menu-active")
 })
 $(".mobile-menu-close").click(function(){
  $(".mobile-menu").removeClass("mobile-menu-active")

 })
 $(".mobile-menu-overlay").click(function(){
  $(".mobile-menu").removeClass("mobile-menu-active")
 })


// header end.......

// <<<<<<------Hero------->>>>>>
$(".member-left").click(function(){
  $(".member-right").addClass("member-right-active")
  $(".member-left").addClass("member-left-hidden")
  $(".member-text").addClass("member-text-active")
  $(".member-strip").addClass("member-strip-active")
 })
$(".member-right").click(function(){
  $(".member-right").removeClass("member-right-active")
  $(".member-left").removeClass("member-left-hidden")
  $(".member-text").removeClass("member-text-active")
  $(".member-strip").removeClass("member-strip-active")

 })
$(".booknow-btn").click(function(){
  $(".booknow-wrap").addClass("booknow-wrap-active")
 })
$(".booknow-close-btn").click(function(){
  $(".booknow-wrap").removeClass("booknow-wrap-active")
 })

// <<<<<<-------Room Start-------->>>>>>>
  $('.room1').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1400,
    // effect: fade,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
        }
      },
      
    
    ]

    
  });

//   $(document).ready(function (){
//   function mobileMenu() {
//     const windowWidth = $(window).width(); 

//     if (windowWidth > 992) {
//       if($(".room2").hasClass("slick-initialized")){
//         $(".room2").slick("unslick");
//       }
//     } else{
//       if(!$(".room2").hasClass("slick-initialized")){
//        $('.room2').slick({
//         dots: false,
//         infinite: true,
//         slidesToShow: 3,
//         speed: 900,
//         autoplay: true,
//         autoplaySpeed: 5000,
//         arrows:false,
//         responsive: [
//            {
//         breakpoint: 767,
//         settings: {
//           centerMode: true,
//           slidesToShow: 1,
//           centerPadding:'200px'
//           }
//         },
//         {
//         breakpoint: 992,
//         settings: {
//           dots: false,
//           centerMode: true,
//           slidesToShow: 1,
//           centerPadding:'200px'
//           }
//         },
       
//         {
//         breakpoint: 575,
//         settings: {
//           dots: false,
//           centerMode: true,
//           slidesToShow: 1,
//           centerPadding:'200px'
//           }
//         }
//         ]
//        });
//       }
//     }

//   }
//   mobileMenu();
// // On resize
//   $(window).on("resize", function () {
//      mobileMenu();
//   });
// });
  
// <<<<<<------- Room end-------->>>>>>>
// <<<<<<-------Special Start-------->>>>>>>

$(document).ready(function (){
  function mobileMenu() {
    const windowWidth = $(window).width(); 

    if (windowWidth < 992) {
      if($(".special1").hasClass("slick-initialized")){
        $(".special").slick("unslick");
      }
    } else{
      if(!$(".special1").hasClass("slick-initialized")){
        $('.special1').slick({
          infinite: true,
          slidesToShow: 3,
          speed: 700,
          autoplay:true,
          autoplaySpeed: 3000,
          arrows: true,
          centerMode:true,
          centerMode: true,
          centerPadding: '0',
          
        });
      }
    }

  }
  mobileMenu();
// On resize
  $(window).on("resize", function () {
     mobileMenu();
  });
});

// $(document).ready(function (){
//   function handleSlick() {
//     const windowWidth = $(window).width();

//     if (windowWidth < 991) {
//       if ($(".special1").hasClass("slick-initialized")) {
//         $(".special1").slick("unslick");
//       }
//     } else {
//       if (!$(".special1").hasClass("slick-initialized")) {
//         $('.special1').slick({
//           infinite: true,
//           slidesToShow: 3,
//           spaceBetween: 40,
//           speed: 700,
//           autoplay:true,
//           autoplaySpeed: 3000,
//           arrows: true,
//           centerMode:true,
//           centerMode: true,
//           centerPadding: '0',
//         });
//       }
//     }
//   }
//   handleSlick();
// // On resize
//   $(window).on("resize", function () {
//     handleSlick();
//   });
// });


// <<<<<<------- Special end-------->>>>>>>
// <<<<<<-------Sport Start-------->>>>>>>
$('.sport1').slick({
  infinite: true,
  slidesToShow: 3,
  spaceBetween: 0,
  speed: 700,
  autoplay:true,
  autoplaySpeed: 3000,
  arrows: true,
  centerMode: true,
  centerPadding: '0',
  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        centerPadding: '180px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '100px',
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        centerPadding: '50px',
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px',
      },
    },
  ]
});

// <<<<<<------- Sport end-------->>>>>>>
// <<<<<<------- Spa Start-------->>>>>>>
    $('.spa-details-1').slick({
  infinite: true,
  slidesToShow: 4,
  spaceBetween: 0,
  speed: 700,
  autoplay:true,
  speed: 1000,
  autoplaySpeed: 5000,
  arrows: false,
  centerMode: true,
  centerPadding: '0',
  responsive: [
   
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerPadding: '50px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '100px',
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        centerPadding: '70px',
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        centerPadding: '30px',
      },
    },
  ]
});

// <<<<<<------- Spa end-------->>>>>>>
// <<<<<<------- gallery Start-------->>>>>>>
  $(document).ready(function(){
$('.gallery-popup').magnificPopup({
	type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
			enabled:true
		},

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

});
// <<<<<<------- Gallery end-------->>>>>>>

// <<<<-------- Back to top Start------->>>>>>>

 $(document).ready(function (){
var btn = $('#back-to-top-btn');
$(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});

 });
// <<<<-------- Back to top End------->>>>>>>
// <<<<<<------- Wow start-------->>>>>>>
    wow = new WOW 
    (
          {
            boxClass:     'wow',      
            animateClass: 'animated', 
            offset:       0,          
            mobile:       true,       
            live:         true        
        }
    )
    wow.init();

  // new WOW().init();
// <<<<<<------- Wow end-------->>>>>>>

// var list = document.getElementsByClassName('data-bg');
 var list = document.querySelectorAll("[data-bg-src]");

for (var i = 0; i < list.length; i++) {
var src = list[i].getAttribute('data-bg-src');
   list[i].style.backgroundImage="url('" + src + "')"}
