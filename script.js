let tl = gsap.timeline();

let page = document.querySelector("body");
let page1 = document.querySelector(".pages");
let box = document.querySelector(".container");
let cursor = document.querySelector("#cursor");
let letters = document.querySelector(".letters");

page.addEventListener("mousemove", (details) => {
  gsap.to(cursor, {
    x: details.x,
    y: details.y,
    duration: 1,
    ease: "expo.out",
  });
});

box.addEventListener("mouseover", (details) => {
  gsap.to(cursor, {
    scale: 10,
  });

  gsap.to(".letters", {
    //    y: 30,
    stagger: 0.1,
    scale: 3,
    ease: "bounce.out",
  });
});

box.addEventListener("mouseleave", (details) => {
  gsap.to(cursor, {
    scale: 1,
  });

  gsap.to(".letters", {
    //    y: 30,
    stagger: 0.1,
    scale: 1,
    ease: "bounce.out",
  });
});

gsap.from("h2", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
});

gsap.from("li", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  stagger: 0.3,
});

gsap.from("p", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  stagger: 0.3,
});

gsap.from(".letters", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  stagger: 0.1,
});

gsap.from("h3", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  stagger: 0.1,
});

gsap.from("#cta-group", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 0.6,
  stagger: 0.1,
});
