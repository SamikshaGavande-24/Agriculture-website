// =========================
// Mobile Navbar Toggle
// =========================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// =========================
// Product Filter
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");

const filterItems = document.querySelectorAll(".filter-item");

filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    // Remove active class
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    filterItems.forEach((item) => {

      if (
        filterValue === "all" ||
        item.classList.contains(filterValue)
      ) {

        item.style.display = "block";

      } else {

        item.style.display = "none";

      }

    });

  });

});

// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(
  ".card, .product-card, .gallery-card, .stat-card"
);

window.addEventListener("scroll", revealCards);

function revealCards() {

  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach((card) => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }

  });

}

// Initial Animation State

cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";

});

// Run once on page load

revealCards();