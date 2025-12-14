// FAQ Accordion Functionality

document.addEventListener("DOMContentLoaded", function () {
  initializeFAQAccordion();
});

function initializeFAQAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (question && answer) {
      question.addEventListener("click", function () {
        const isOpen = !answer.classList.contains("hidden");

        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          const otherAnswer = otherItem.querySelector(".faq-answer");
          const otherIcon = otherItem.querySelector(".faq-icon");
          if (otherItem !== item && otherAnswer) {
            otherAnswer.classList.add("hidden");
            otherItem.classList.remove("active");
            if (otherIcon) {
              otherIcon.classList.remove("rotate-180");
            }
          }
        });

        // Toggle current FAQ item
        if (isOpen) {
          answer.classList.add("hidden");
          item.classList.remove("active");
          if (icon) {
            icon.classList.remove("rotate-180");
          }
        } else {
          answer.classList.remove("hidden");
          item.classList.add("active");
          if (icon) {
            icon.classList.add("rotate-180");
          }
        }
      });
    }
  });

  // Open first FAQ item by default
  if (faqItems.length > 0) {
    const firstAnswer = faqItems[0].querySelector(".faq-answer");
    const firstIcon = faqItems[0].querySelector(".faq-icon");
    if (firstAnswer) {
      firstAnswer.classList.remove("hidden");
      faqItems[0].classList.add("active");
      if (firstIcon) {
        firstIcon.classList.add("rotate-180");
      }
    }
  }
}

// Keyboard accessibility
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" || e.key === " ") {
    const focused = document.activeElement;
    if (focused && focused.classList.contains("faq-question")) {
      e.preventDefault();
      focused.click();
    }
  }
});
