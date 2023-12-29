let cursor = document.querySelector(".cursor");
let crsr_blr = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", (dets) => {
  console.log(dets.x);
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";

  crsr_blr.style.left = dets.x - 150 + "px";
  crsr_blr.style.top = dets.y - 150 + "px";
});

let h4all = document.querySelectorAll("#navbar h4");
console.log(h4all);
h4all.forEach(function (element) {
  element.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid #fff";
  });
  element.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#91b508";
    cursor.style.border = "0 px solid #91b508";
  });
});

gsap.to("#navbar", {
  //   delay: 1,
  backgroundColor: "#000",
  duration: 0.5,
  height: "80px",
  scrollTrigger: {
    trigger: "#navbar",
    scroller: "body",
    // markers: true,
    start: "top -2%",
    end: "top -3%",

    scrub: true,
  },
});

// gsap for main
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "top -50%",

    end: "top -100%",
    scrub: "2",
  },
});

gsap.from(".about-us img,.about-us-in", {
  y: 170,
  duration: 2,
  // x: 30,
  opacity: 0,
  // for element to appear one by one
  // stagger: 0.2,
  duration: 4,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    markers: true,
    start: "top 30%",
    end: "top 20%",
    scrub: 2,
  },
});

gsap.from("#quote-1", {
  y: -50,
  x: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "quote-1",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 55%",
  },
});

gsap.from("#quote-2", {
  y: 50,
  x: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "quote-1",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 55%",
  },
});
gsap.from(".pg4-text", {
  y: 50,

  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".pg4-text",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 65%",
  },
});
