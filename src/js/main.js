// src/js/main.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
  
    // Ativação da animação no scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.dataset.anim || "animate__fadeInUp";
          element.classList.add("animate__animated", animation);
          observer.unobserve(element); // só anima uma vez
        }
      });
    }, {
      threshold: 0.1,
    });
  
    animatedElements.forEach(el => observer.observe(el));
  
    // Destaque do menu
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  });
  