document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector("[data-slider]");
  var timer = 500;

  slider.addEventListener("input", (e) => {
    timer = 700 - slider.value;
  });

  addCircles();

  function addCircles() {
    setTimeout(() => {
      addCircle(...randomPosition());
      addCircles();
    }, timer);
  }

  function addCircle(x, y) {
    var circle = document.createElement("div");
    var animationTime = Math.round(Math.random() * 10);
    circle.classList.add("circle");
    circle.style.left = x + "vw";
    circle.style.top = y + "vh";
    circle.style.backgroundColor = randomColor();
    circle.style.setProperty("--grow-time", `${animationTime}s`);

    requestAnimationFrame(() => {
      document.body.appendChild(circle);
      setTimeout(removeCircle.bind(this, circle), animationTime * 3000);
    });
  }

  function removeCircle(circle) {
    document.body.removeChild(circle);
  }

  function randomPosition() {
    return [Math.random() * 100 + 1, Math.random() * 100 + 1];
  }

  function randomColor() {
    const colors = [
      "#3956EE",
      "#CA7512",
      "#AC1A1A",
      "#DDB858",
      "#9D6B30",
      "#365D8B",
      "#53447A",
      "#5D7D5B",
      "#B1C4AC",
      "#5A3450",
      "#3956EE",
      "#CA7512",
    ];

    return colors[Math.round(Math.random() * colors.length)];
  }
  let animation1 = anime({
    targets: ".water",
    translateX: 5,
    translateY: 5,

    duration: 300,
    easing: "linear",
    direction: "alternate",
    loop: true,
  });
});
