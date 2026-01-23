window.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");
  const textBlock = document.getElementById("text-block");
  const ctaButtons = document.getElementById("cta-buttons");
  const exploreBtn = document.getElementById("explore-btn");

  // GSAP Timeline
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(
    logo,
    { opacity: 0, scale: 0.8, y: 50 },
    { opacity: 1, scale: 1, y: 0, duration: 1.2 }
  )
    .fromTo(
      textBlock.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      "-=0.6"
    )
    .fromTo(
      ctaButtons,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );

  // Logo float
  gsap.to(logo, {
    y: -15,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Scroll to Products
  exploreBtn.addEventListener("click", () => {
    const products = document.getElementById("products");
    if (products) {
      products.scrollIntoView({ behavior: "smooth" });
    }
  });
  
  // Floating decorative dots
gsap.utils.toArray(".floating-dot").forEach((dot, i) => {
  gsap.to(dot, {
    y: gsap.utils.random(-20, 20),
    x: gsap.utils.random(-15, 15),
    duration: gsap.utils.random(3, 6),
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: i * 0.3
  });
});


// ==============================================================================
// ==============================================================================
gsap.registerPlugin(ScrollTrigger);

// Title animation
gsap.fromTo(
  "#products-title > *",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#products-title",
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  }
);

// Cards animation
gsap.fromTo(
  "#products-cards > div",
  { opacity: 0, y: 60, scale: 0.95 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#products-cards",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  }
);


  gsap.fromTo(
    "#about-content > *",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#about-content",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  gsap.fromTo(
    "#features > *",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: "#features",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );

});