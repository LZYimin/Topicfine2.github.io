$(document).ready(function() {
    // init ScrollMagic controller
    let controller = new ScrollMagic.Controller();
  
    // set Timeline
    let timeLine = new TimelineMax()
  
      .to("#block3", 10, { x: -50, opacity: 0 })
      .to(".title3", 9, { opacity: 0 })
      .to(".page1", 9, { opacity: 0 });
  
    // build ScrollMagic scene
    new ScrollMagic.Scene({
      triggerHook: "onLeave",
      triggerElement: "#page1",
      duration: "50%"
    })
      .setTween(timeLine)
      .setPin("#page1")
  
      .addTo(controller);
  
    // init ScrollMagic controller
    let controller2 = new ScrollMagic.Controller();
  
    // set Timeline
    let timeLine2 = new TimelineMax()
  
      .to("#title2", 1, { x: -10 })
      .to("#block", 10, { opacity: 0 })
      .from(".block", 24, { opacity: 0 }, 15)
      .from(".title2", 20, { opacity: 0 }, 6)
      .from(".page2", 20, { opacity: 0 }, 6)
      .to("#block", 10, { x: -50, opacity: 0 })
      .to(".title2", 9, { opacity: 0 })
      .to(".page2", 9, { opacity: 0 });
  
    // build ScrollMagic scene
    new ScrollMagic.Scene({
      triggerHook: "onLeave",
      triggerElement: "#page2",
      duration: "70%"
    })
      .setTween(timeLine2)
      .setPin("#page2")
  
      .addTo(controller2);






 
      
  
  
  
  
    
    // Load JSON file
    let openingAnimWindow = document.querySelector("#openingLottie");
    let openingAnimData = {
      container: openingAnimWindow,
      animType: "svg",
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/history.json',
    };
  
  
    // set bodymovin
    let openingAnim = bodymovin.loadAnimation(openingAnimData);
  
    $("#lottie-start").click(function() {
      openingAnim.play();
    });
  
  
    // Load JSON file1
    let openingAnimWindow1 = document.querySelector("#openingLottie1");
    let openingAnimData1 = {
      container: openingAnimWindow1,
      animType: "svg",
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/award.json',
    };
  
  
    // set bodymovin1
    let openingAnim1 = bodymovin.loadAnimation(openingAnimData1);
  
    $("#lottie-start").click(function() {
      openingAnim1.play();
    });
  
  
    // Load JSON file2
    let openingAnimWindow2 = document.querySelector("#openingLottie2");
    let openingAnimData2 = {
      container: openingAnimWindow2,
      animType: "svg",
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/goal.json',
    };
  
  
    // set bodymovin2
    let openingAnim2 = bodymovin.loadAnimation(openingAnimData2);
  
    $("#lottie-start").click(function() {
      openingAnim2.play();
    });
  
  




    // Load JSON file3
    let openingAnimWindow3 = document.querySelector("#openingLottie3");
    let openingAnimData3 = {
      container: openingAnimWindow3,
      animType: "svg",
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/history_m.json',
    };
  
  
    // set bodymovin3
    let openingAnim3 = bodymovin.loadAnimation(openingAnimData3);
  
    $("#lottie-start").click(function() {
      openingAnim3.play();
    });
  
  
  

    // Load JSON file4
    let openingAnimWindow4 = document.querySelector("#openingLottie4");
    let openingAnimData4 = {
      container: openingAnimWindow4,
      animType: "svg",
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/award_M.json',
    };
  
  
    // set bodymovin4
    let openingAnim4 = bodymovin.loadAnimation(openingAnimData4);
  
    $("#lottie-start").click(function() {
      openingAnim4.play();
    });



    // Load JSON file5
    let openingAnimWindow5 = document.querySelector("#openingLottie5");
    let openingAnimData5 = {
      container: openingAnimWindow5,
      animType: "svg",
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/goal_m.json',
    };
  
  
    // set bodymovin5
    let openingAnim5 = bodymovin.loadAnimation(openingAnimData5);
  
    $("#lottie-start").click(function() {
      openingAnim5.play();
    });


  // Load JSON file6
  let openingAnimWindow6 = document.querySelector("#openingLottie6");
  let openingAnimData6 = {
    container: openingAnimWindow6,
    animType: "svg",
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/history_m.json',
  };


  // set bodymovin6
  let openingAnim6 = bodymovin.loadAnimation(openingAnimData6);

  $("#lottie-start").click(function() {
    openingAnim6.play();
  });





  // Load JSON file7
  let openingAnimWindow7 = document.querySelector("#openingLottie7");
  let openingAnimData7 = {
    container: openingAnimWindow7,
    animType: "svg",
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/award_M.json',
  };


  // set bodymovin5
  let openingAnim7 = bodymovin.loadAnimation(openingAnimData7);

  $("#lottie-start").click(function() {
    openingAnim7.play();
  });




  // Load JSON file8
  let openingAnimWindow8 = document.querySelector("#openingLottie8");
  let openingAnimData8 = {
    container: openingAnimWindow8,
    animType: "svg",
    loop: true,
    prerender: true,
    autoplay: true,
    path: 'json/goal_m.json',
  };


  // set bodymovin8
  let openingAnim8 = bodymovin.loadAnimation(openingAnimData8);

  $("#lottie-start").click(function() {
    openingAnim8.play();
  });






  

  
  
    // Scrolling Effect
  
    $(".menu-icon").on("click", function() {
      $("nav div ul").toggleClass("showing");
    });
  
    
  
    $(window).on("scroll", function() {
      if ($(window).scrollTop()) {
        $("nav").addClass("black");
      } else {
        $("nav").removeClass("black");
      }
    });
  });

