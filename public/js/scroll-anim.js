document.addEventListener("DOMContentLoaded", () => {
  let itemIndex = 0;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a staggered delay based on the order elements appear
          setTimeout(() => {
            entry.target.classList.add("scroll-fade");
          }, itemIndex * 150); // 150ms per item
          itemIndex++;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".section, .card").forEach((el) => {
    observer.observe(el);
  });
});
