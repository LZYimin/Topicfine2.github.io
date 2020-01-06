 $(document).ready(function() {


   


     
    
    // Load JSON file
  let openingAnimWindow = document.querySelector("#openingAnimation");
  let openingAnimData = {
    container: openingAnimWindow,
    animType: "svg",
    loop: false,
    prerender: true,
    autoplay: true,
    path: 'json/loading.json',
  };


  // set bodymovin
  let openingAnim = bodymovin.loadAnimation(openingAnimData);

  $("#lottie-start").click(function() {
    openingAnim.play();
  });
    
    
// Scrolling Effect    
      $(".menu-icon").on("click", function() {
          $("nav div ul").toggleClass("showing");
    });




     $(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }
  
    else {
          $('nav').removeClass('black');
    }
  })

});
  
$(document).ready(function(){
      setTimeout(function(){
        $(".loading").fadeOut(500);}, 5000);
  });
