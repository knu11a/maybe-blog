particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: false, value_area: 0 } },
    color: { value: "#bebdb8" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#bebdb8" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 0, opacity_min: 1, sync: false },
    },
    size: {
      value: 0.9,
      random: true,
      anim: { enable: false, speed: 50, size_min: 0, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#bebdb8",
      opacity: 0.4,
      width: 2.367480290726578,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 1200, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "grab" },
      onclick: { enable: false, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

new TypeIt("#id-head", {
  speed: 70,
  loop: true,
  waitUntilVisible: true,
})
  .type("knu11", { delay: 4000 })
  .move(-4)
  .delete(1)
  .move(2)
  .delete(0)
  .type("l")
  .move(1)
  .delete(1)
  .type("l")
  .move(1)
  .delete(1)
  .pause(500)
  .go();

new TypeIt("#id-1", {
  strings:
    "mice eagerly assemble noodle sculptures, nibbling on twirling hamburgers, inventing nonsensical gestures.",
  speed: 30,
  waitUntilVisible: true,
}).go();
