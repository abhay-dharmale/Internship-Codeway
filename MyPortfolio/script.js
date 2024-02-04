// function smoothScroll() {
//   const lenis = new Lenis()

//   lenis.on('scroll', (e) => {
//     console.log(e)
//   })

//   lenis.on('scroll', ScrollTrigger.update)

//   gsap.ticker.add((time) => {
//     lenis.raf(time * 900)
//   })

//   gsap.ticker.lagSmoothing(0)
// }
// smoothScroll();

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);