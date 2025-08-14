document.addEventListener("DOMContentLoaded", () => {
  let itemIndex = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger delay: faster on mobile (<768px), slower on desktop
          const delay = window.innerWidth < 768 ? 100 : 150;

          setTimeout(() => {
            entry.target.classList.add("scroll-fade");

            // If the element has images, trigger zoom-in after fade
            const imgs = entry.target.querySelectorAll("img");
            imgs.forEach((img) => {
              img.classList.add("loaded");
            });
          }, itemIndex * delay);

          itemIndex++;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Watch all sections and cards for fade effect
  document.querySelectorAll(".section, .card").forEach((el) => {
    observer.observe(el);
  });
});
