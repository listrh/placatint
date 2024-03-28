document.addEventListener("DOMContentLoaded", () => {
  const paths = document.querySelectorAll("svg path");

  anime({
    targets: paths,
    duration: 3000,
    delay: 10,
    easing: "easeInOutExpo",
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: function (el, i) {
      return i * 250;
    },
    direction: "alternate",
    loop: true,
  });
  const timeline = anime.timeline({
    duration: 3000,
    easing: "easeInOutExpo",
  });

  timeline.add({
    targets: svg1.svg,
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: anime.stagger(2500),
  });
});
