$(document).ready(function() {

    'use strict';
  
  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: [ "Luke Vaissiere","Apprenti developpeur web", "à la recherche d'une Alternance",],
      typeSpeed: 100,
      loop: true,
    });
  });
}); 

  // ========================================================================= //
  //  Skill Bar
  // ========================================================================= //
  jQuery(document).ready(function(){
    jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },3000);
    });
  });

    // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  });


  // ========================================================================= //
  //  Projets cards carousel
  // ========================================================================= //
  
  $('#owl-carousel').owlCarousel({
    stagePadding: 30,
    loop:true,
    margin:10,
    dots:true,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
  
     // ========================================================================= //
  //  Smooth scroll
  // ========================================================================= //
  /*
  $(function(){
	
    var $window = $(window);		//Window object
    
    var scrollTime = 0.5;			//Scroll time
    var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
      
    $window.on("mousewheel DOMMouseScroll", function(event){
      
      event.preventDefault();	
                      
      var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
      var scrollTop = $window.scrollTop();
      var finalScroll = scrollTop - parseInt(delta*scrollDistance);
        
      TweenMax.to($window, scrollTime, {
        scrollTo : { y: finalScroll, autoKill:true },
          ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
          autoKill: true,
          overwrite: 5							
        });
            
    });

  });  

*/

  $("#owl-demo").owlCarousel({
 
    nav : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    responsiveClass: true,
    navText : ['<i class="fa fa-angle-left 5x" aria-hidden="true"></i>','<i class="fa fa-angle-right 5x" aria-hidden="true"></i>'],
    items: 1,
   itemsDesktop : false,
  itemsDesktopSmall : false,
  itemsTablet: false,
  itemsMobile : false,
  dots: true,
   

});

$(function() {
  /**
  * Smooth scrolling to page anchor on click
  **/
  $("a[href*='#']:not([href='#'])").click(function() {
      if (
          location.hostname == this.hostname
          && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
      ) {
          var anchor = $(this.hash);
          anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
          if ( anchor.length ) {
              $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
          }
      }
  });
});