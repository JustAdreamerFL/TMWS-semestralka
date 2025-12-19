document.addEventListener("DOMContentLoaded", function () {
  highlightActiveNavLink();
  setupSmoothScroll();
});
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("#nav-links a, #mobile-nav a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const linkPage = href.split("/").pop();
    link.classList.remove("text-purple-400", "font-semibold");
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
        const mobileNav = document.getElementById("mobile-nav");
        if (mobileNav && mobileNav.classList.contains("mobile-nav-open")) {
          mobileNav.classList.remove("mobile-nav-open");
        }
      }
    });
  });
}
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes("/sub_pages/")) {
    return "../";
  }
  return "";
}
function formatDate(date) {
  return new Date(date).toLocaleDateString("sk-SK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
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
  setTimeout(() => {
    notification.classList.remove("translate-y-full");
  }, 100);
  setTimeout(() => {
    notification.classList.add("translate-y-full");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}
window.showNotification = showNotification;
