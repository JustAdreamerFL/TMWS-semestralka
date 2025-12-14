// Nominees page functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const nomineesContainer = document.getElementById("nominees-container");
  const noResults = document.getElementById("no-results");
  const gameCards = document.querySelectorAll(".game-card");
  const categorySections = document.querySelectorAll(".category-section");
  const voteButtons = document.querySelectorAll(".vote-btn");

  // Search functionality
  searchInput.addEventListener("input", filterGames);
  categoryFilter.addEventListener("change", filterGames);

  function filterGames() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    let visibleGames = 0;
    let visibleSections = 0;

    categorySections.forEach((section) => {
      const sectionCategory = section.dataset.category;
      const cards = section.querySelectorAll(".game-card");
      let sectionVisible = false;

      // Check if section matches category filter
      const categoryMatch =
        selectedCategory === "all" || sectionCategory === selectedCategory;

      if (!categoryMatch) {
        section.style.display = "none";
        return;
      }

      cards.forEach((card) => {
        const gameName = card.dataset.game || "";
        const gameTitle =
          card.querySelector("h3")?.textContent.toLowerCase() || "";
        const gameDesc =
          card.querySelector("p.text-gray-300")?.textContent.toLowerCase() ||
          "";
        const gameStudio =
          card.querySelector("p.text-gray-400")?.textContent.toLowerCase() ||
          "";

        const matchesSearch =
          searchTerm === "" ||
          gameName.includes(searchTerm) ||
          gameTitle.includes(searchTerm) ||
          gameDesc.includes(searchTerm) ||
          gameStudio.includes(searchTerm);

        if (matchesSearch) {
          card.style.display = "block";
          sectionVisible = true;
          visibleGames++;
        } else {
          card.style.display = "none";
        }
      });

      if (sectionVisible) {
        section.style.display = "block";
        visibleSections++;
      } else {
        section.style.display = "none";
      }
    });

    // Show/hide no results message
    if (visibleGames === 0) {
      noResults.classList.remove("hidden");
      nomineesContainer.classList.add("hidden");
    } else {
      noResults.classList.add("hidden");
      nomineesContainer.classList.remove("hidden");
    }
  }

  // Vote button functionality
  voteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const gameCard = this.closest(".game-card");
      const gameName =
        gameCard.querySelector("h3")?.textContent || "Neznáma hra";
      const categorySection = this.closest(".category-section");
      const categoryName =
        categorySection.querySelector("h2")?.textContent.trim() ||
        "Neznáma kategória";

      // Check if already voted in this category
      const categoryVotes =
        JSON.parse(localStorage.getItem("gameAwardsVotes")) || {};
      const categoryKey = categorySection.dataset.category;

      if (categoryVotes[categoryKey]) {
        // Already voted - show message
        showNotification(
          `Už ste hlasovali v kategórii ${categoryName.replace(/^[\s\S]*?\s/, "")}`,
          "error",
        );
        return;
      }

      // Toggle vote
      if (this.classList.contains("voted")) {
        this.classList.remove("voted");
        this.textContent = "Hlasovať";
        delete categoryVotes[categoryKey];
      } else {
        // Remove vote from other games in same category
        const categoryButtons =
          categorySection.querySelectorAll(".vote-btn.voted");
        categoryButtons.forEach((btn) => {
          btn.classList.remove("voted");
          btn.textContent = "Hlasovať";
        });

        // Add vote to this game
        this.classList.add("voted");
        this.textContent = "✓ Odhlasované";
        categoryVotes[categoryKey] = gameName;

        showNotification(`Hlasovali ste za ${gameName}!`, "success");
      }

      // Save to localStorage
      localStorage.setItem("gameAwardsVotes", JSON.stringify(categoryVotes));
    });
  });

  // Load existing votes from localStorage
  function loadVotes() {
    const categoryVotes =
      JSON.parse(localStorage.getItem("gameAwardsVotes")) || {};

    Object.keys(categoryVotes).forEach((categoryKey) => {
      const votedGame = categoryVotes[categoryKey];
      const section = document.querySelector(
        `.category-section[data-category="${categoryKey}"]`,
      );

      if (section) {
        const cards = section.querySelectorAll(".game-card");
        cards.forEach((card) => {
          const gameName = card.querySelector("h3")?.textContent;
          if (gameName === votedGame) {
            const button = card.querySelector(".vote-btn");
            if (button) {
              button.classList.add("voted");
              button.textContent = "✓ Odhlasované";
            }
          }
        });
      }
    });
  }

  // Show notification
  function showNotification(message, type = "info") {
    // Check if global showNotification exists
    if (typeof window.showNotification === "function") {
      window.showNotification(message, type);
      return;
    }

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

  // Initialize
  loadVotes();
});
