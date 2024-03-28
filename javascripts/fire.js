document.addEventListener("DOMContentLoaded", () => {
  var ima12 = anime({
    targets: document.getElementById("#ima12"),
    translateX: 1,
  });
  let animation = anime({
    // Цели
    targets: ".ima6",
    // Свойства
    translateX: 100,

    // Параметры свойств
    duration: 2000,
    easing: "linear",
    // Параметры анимации
    direction: "alternate",
    loop: true,
  });
  /*timeline.add({
    targets: ima6,
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: anime.stagger(2500),
  });*/
  var ima8 = anime({
    targets: document.getElementById("#ima8"),
    translateX: 1,
  });
  let animation1 = anime({
    // Цели
    targets: "#ima8",
    // Свойства
    translateX: 7,
    translateY: 7,
    rotate: 10,

    // Параметры свойств
    duration: 300,
    easing: "linear",
    // Параметры анимации
    direction: "alternate",
    loop: true,
  });
  let animation2 = anime({
    targets: ".vect251",
    translateX: 30,
    scale: 1.5,

    rotate: 10,
    duration: 300,
    easing: "linear",
    direction: "alternate",
    loop: true,
  });
  anime({
    targets: "#ima7",
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
  });
  anime({
    targets: ".ima13,#ima12",
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
  });

  anime({
    targets: ".ima10",
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
  });
  let animation3 = anime({
    targets: ".vect247, .ima9",
    translateX: 30,

    duration: 300,
    easing: "linear",
    direction: "alternate",
    loop: true,
  });
  let animation4 = anime({
    targets: ".vect248",
    translateY: 30,

    duration: 300,
    easing: "linear",
    direction: "alternate",
    loop: true,
  });
});
