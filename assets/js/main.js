// Welcome Swiper (vertical)
const welcomeSwiper = new Swiper(".welcome-Swiper", {
  direction: "vertical",
  slidesPerView: 1,
  loop: true,
  mousewheel: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

// Scroll to technology section
function scrollToContent() {
  const techSection = document.getElementById("technology-section");
  if (techSection) {
    techSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
const newProducts = new Swiper(".new-swiper", {
  slidesPerView: 4,
  spaceBetween: 85,
  navigation: {
    nextEl: ".new-swiper .swiper-pagination-next",
    prevEl: ".new-swiper .swiper-pagination-prev",
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
  loop: true,
});

const popularProducts = new Swiper(".popular-swiper", {
  slidesPerView: 4,
  spaceBetween: 85,
  navigation: {
    nextEl: ".popular-swiper .swiper-pagination-next",
    prevEl: ".popular-swiper .swiper-pagination-prev",
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
  loop: true,
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    tabPanels.forEach((panel) => panel.classList.remove("active"));
    document.getElementById(`tab-${target}`).classList.add("active");

    if (target === "new") {
      setTimeout(() => newProducts.update(), 100);
    } else if (target === "popular") {
      setTimeout(() => popularProducts.update(), 100);
    }
  });
});
const gallerySwipper = new Swiper(".gallery-swiper", {
  slidesPerView: 2.5,
  spaceBetween: 71,
  navigation: {
    clickable: true,
  },
  breakpoints: {
    1024: { slidesPerView: 2.5 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },
  loop: true,
});
const commentSlider = new Swiper(".comment-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".comment-slider .custom-button-next",
    prevEl: ".comment-slider .custom-button-prev",
  },
  loop: true,
  autoHeight: true,
});
