document.addEventListener("DOMContentLoaded", () => {
  let animation = anime({
    targets: ".ima35",
    translateX: 30,
    translateY: 25,
    rotate: 360,
    scale: 1.5,
    duration: 300,
    easing: "linear",
    direction: "alternate",
    loop: true,
  });

  $(document).ready(function () {
    $(".ima35").click(function () {
      $("#ima325").css({ display: "Block" });
    });
  });
  $(document).ready(function () {
    $(".ima35").click(function () {
      $(".ima326").css({ display: "Block" });
    });
  });
  $(document).ready(function () {
    $(".ima35").click(function () {
      $(".ima328").css({ display: "Block" });
    });
  });
  $(document).ready(function () {
    $(".ima35").click(function () {
      $(".ima327").css({ display: "Block" });
    });
  });
  anime({
    targets: "#ima325",
    translateX: {
      value: 50,
      duration: 800,
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: "easeInOutSine",
    },
    scale: {
      value: 1.2,
      duration: 1600,
      delay: 300,
      easing: "easeInOutQuart",
    },
    delay: 250,
    loop: true,
  });

  /*anime({
    targets: ".ima326",
    translateX: [
      { value: 250, duration: 1000, delay: 500 },
      { value: 0, duration: 1000, delay: 500 },
    ],
    translateY: [
      { value: -40, duration: 500 },
      { value: 40, duration: 500, delay: 1000 },
      { value: 0, duration: 500, delay: 1000 },
    ],
    scaleX: [
      { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
      { value: 1, duration: 900 },
      { value: 4, duration: 100, delay: 500, easing: "easeOutExpo" },
      { value: 1, duration: 900 },
    ],
    scaleY: [
      { value: [1.75, 1], duration: 500 },
      { value: 2, duration: 50, delay: 1000, easing: "easeOutExpo" },
      { value: 1, duration: 450 },
      { value: 1.75, duration: 50, delay: 1000, easing: "easeOutExpo" },
      { value: 1, duration: 450 },
    ],
    easing: "easeOutElastic(1, .8)",
    loop: true,
  });*/
  let animation3 = anime({
    targets: ".vect327, .ima328",
    translateX: 30,
    scale: 1.2,
    duration: 300,
    easing: "linear",
    direction: "alternate",
    loop: true,
  });
});
//$(‘.ima35’).click(function(){
//  $(‘.ima325’).css({display: ‘block’})
//  })
