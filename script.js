const tl = gsap.timeline()
tl.from('#ak', {y: -20, opacity:0, duration: 0.4, delay:0.2})
tl.from('#home', {y: -20, opacity:0, duration: 0.4})
tl.from('#about', {y: -20, opacity:0, duration: 0.4})
tl.from('#contact', {y: -20, opacity:0, duration: 0.4})
tl.from('#sign', {y: -20, opacity:0, duration: 0.4})
// tl.from('#left', {x: -400, opacity:0, duration: 0.5})
// tl.from('#right', {x: 400, opacity:0, duration: 0.5})
tl.from(".h2",{
    y: 20,
    opacity: 0,
    duration: 0.4,
    stagger:1,
})