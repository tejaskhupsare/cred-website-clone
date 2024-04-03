let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".part-2",
      start: "0% 50%", // when the top of the trigger hits the top of the viewport
      end: "50% 50%", // end after scrolling 500px beyond the start
      // markers:true,
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      
    },
  });
  

  
// add animations and labels to the timeline
tl.to("#imgthree", 
{ 
    bottom: "-5vh",
});

tl.to("#imgtwo , #imgfour", 
{ 
    bottom: "-10vh",
});

tl.to("#imgone , #imgfive", 
{ 
    bottom: "-20vh",
});



let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#part-5",
    start: "50% 50%", // when the top of the trigger hits the top of the viewport
    end: "150% 50%", // end after scrolling 500px beyond the start
    // markers:true,
    pin: true, // pin the trigger element while active
    scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    
  },
});



// add animations and labels to the timeline
tl2.to("#scroll-1", 
{ 
  bottom: "50vh",

});
tl2.to("#scroll-1", 
{ 
  opacity: "0",

});
tl2.to("#scroll-2", 
{ 
  opacity: "1",
  
},'arrf');

tl2.to(".phone-img", 
{ 
    x: "-29%",  
},'arrf');

tl2.to("#scroll-2", 
{ 
  bottom: "50vh",

});

tl2.to("#scroll-2", 
{ 
  opacity: "0",

});
tl2.to("#scroll-3", 
{ 
  opacity: "1",
  
},'arrs');

tl2.to(".phone-img", 
{ 
    x: "-58%", 
},'arrs');

tl2.to("#scroll-3", 
{ 
  bottom: "50vh",

});

tl2.to("#scroll-3", 
{ 
  opacity: "0",

});
tl2.to("#scroll-4", 
{ 
  opacity: "1",
  
},'arrt');

tl2.to(".phone-img", 
{ 
    x: "-88%", 
},'arrt');

tl2.to("#scroll-4", 
{ 
  bottom:"40vh",
  
});



//swiper code


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});







  