// Global script for Game Awards website

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  initMobileMenu();

  // Highlight active navigation link
  highlightActiveNavLink();

  // Smooth scroll for anchor links
  setupSmoothScroll();
});

// Initialize mobile menu functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileNav.classList.toggle("hidden");

      // Animate hamburger icon
      const icon = mobileMenuBtn.querySelector("svg");
      if (icon) {
        if (mobileNav.classList.contains("hidden")) {
          // Hamburger icon
          icon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          `;
        } else {
          // Close icon
          icon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          `;
        }
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !mobileMenuBtn.contains(e.target) &&
        !mobileNav.contains(e.target) &&
        !mobileNav.classList.contains("hidden")
      ) {
        mobileNav.classList.add("hidden");
        const icon = mobileMenuBtn.querySelector("svg");
        if (icon) {
          icon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          `;
        }
      }
    });

    // Close mobile menu when window is resized to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768 && !mobileNav.classList.contains("hidden")) {
        mobileNav.classList.add("hidden");
        const icon = mobileMenuBtn.querySelector("svg");
        if (icon) {
          icon.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          `;
        }
      }
    });
  }
}

// Highlight the current page in navigation
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll("#nav-links a, #mobile-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const linkPage = href.split("/").pop();

    // Remove existing active styles
    link.classList.remove("text-purple-400", "font-semibold");

    // Add active styles if this is the current page
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html") ||
      (currentPage === "index.html" && href === "index.html") ||
      (currentPage === "index.html" && href === "../index.html")
    ) {
      link.classList.add("text-purple-400", "font-semibold");
    }
  });
}

// Setup smooth scrolling for anchor links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      e.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        const mobileNav = document.getElementById("mobile-nav");
        if (mobileNav && !mobileNav.classList.contains("hidden")) {
          mobileNav.classList.add("hidden");
        }
      }
    });
  });
}

// Utility function to get base path for links
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes("/sub_pages/")) {
    return "../";
  }
  return "";
}

// Utility function to format date
function formatDate(date) {
  return new Date(date).toLocaleDateString("sk-SK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Utility function to create element with classes
function createElement(tag, classes = [], textContent = "") {
  const element = document.createElement(tag);
  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

// Show notification/toast message
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transform transition-transform duration-300 translate-y-full`;

  switch (type) {
    case "success":
      notification.classList.add("bg-green-600", "text-white");
      break;
    case "error":
      notification.classList.add("bg-red-600", "text-white");
      break;
    default:
      notification.classList.add("bg-blue-600", "text-white");
  }

  notification.textContent = message;
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.classList.remove("translate-y-full");
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.add("translate-y-full");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Make showNotification globally available
window.showNotification = showNotification;
