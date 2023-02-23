gsap.fromTo("#b1", { alpha: 0 },{ duration: 1, rotation: -90, alpha: 0.3 });
gsap.fromTo("#b2", { alpha: 0 },{ duration: 1, rotation: -45, alpha: 0.3 });
gsap.fromTo("#b3", { alpha: 0 },{ duration: 1, rotation: -67, alpha: 0.3 });

gsap.to("#b1", { y: -200, delay: 1, duration: 0.8, rotation: 0, alpha: 1.0 });
gsap.to("#b2", { y: -150, delay: 1, duration: 1.0, rotation: 0, alpha: 1.0 });
gsap.to("#b3", { y: -100, delay: 1, duration: 1.2, rotation: 0, alpha: 1.0 });
