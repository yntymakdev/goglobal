// Navigation Script - Universal for all GoGlobal pages

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  if (burger && navLinks) {
    // Toggle burger menu
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        burger.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
});
