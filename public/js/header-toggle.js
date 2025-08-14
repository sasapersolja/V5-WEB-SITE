document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
