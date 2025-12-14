// ============================================
// GAME AWARDS - REUSABLE COMPONENTS
// Dynamically injectable HTML components
// Razer Green & Black Theme
// ============================================

// Using GameComponents to avoid conflict with deprecated Components API
const GameComponents = {
  // ============================================
  // CONFIGURATION
  // ============================================
  config: {
    siteName: "Game Awards",
    siteIcon: "🎮",
    author: "Bohuslav Uličný",
    year: "2025",
  },

  // ============================================
  // NAVIGATION ITEMS
  // ============================================
  navItems: [
    { href: "index.html", label: "Domov", id: "home" },
    { href: "sub_pages/categories.html", label: "Kategórie", id: "categories" },
    { href: "sub_pages/nominees.html", label: "Nominovaní", id: "nominees" },
    { href: "sub_pages/gtg.html", label: "Hádaj Hru", id: "gtg" },
    { href: "sub_pages/faq.html", label: "FAQ", id: "faq" },
    { href: "sub_pages/about.html", label: "O nás", id: "about" },
    { href: "sub_pages/contact.html", label: "Kontakt", id: "contact" },
    { href: "sub_pages/messages.html", label: "Správy", id: "messages" },
  ],

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================

  // Get the base path based on current location
  getBasePath() {
    const path = window.location.pathname;
    if (path.includes("/sub_pages/")) {
      return "../";
    }
    return "";
  },

  // Get current page ID
  getCurrentPageId() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(".html", "") || "index";

    const pageMap = {
      index: "home",
      categories: "categories",
      nominees: "nominees",
      gtg: "gtg",
      faq: "faq",
      about: "about",
      contact: "contact",
      messages: "messages",
    };

    return pageMap[page] || "home";
  },

  // Adjust href based on current location
  adjustHref(href) {
    const basePath = this.getBasePath();
    if (basePath && href.startsWith("sub_pages/")) {
      return href.replace("sub_pages/", "");
    }
    if (basePath && href === "index.html") {
      return "../index.html";
    }
    if (!basePath && !href.startsWith("sub_pages/") && href !== "index.html") {
      return "sub_pages/" + href;
    }
    return href;
  },

  // ============================================
  // LOGO COMPONENT
  // ============================================
  logo(size = "default") {
    const basePath = this.getBasePath();
    const iconClass = size === "small" ? "logo-icon-sm" : "logo-icon";
    const textClass =
      size === "small" ? "font-bold text-green-400" : "logo-text";

    return `
      <a href="${basePath}index.html" class="logo">
        <div class="${iconClass}">
          <span class="${size === "small" ? "text-xl" : "text-2xl font-bold"}">${this.config.siteIcon}</span>
        </div>
        <span class="${textClass}">${this.config.siteName}</span>
      </a>
    `;
  },

  // ============================================
  // MOBILE MENU BUTTON COMPONENT
  // ============================================
  mobileMenuButton() {
    return `
      <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    `;
  },

  // ============================================
  // DESKTOP NAVIGATION COMPONENT
  // ============================================
  desktopNav() {
    const currentPageId = this.getCurrentPageId();

    const links = this.navItems
      .map((item) => {
        const href = this.adjustHref(item.href);
        const isActive = item.id === currentPageId;
        const className = isActive ? "nav-link nav-link-active" : "nav-link";
        return `<a href="${href}" class="${className}">${item.label}</a>`;
      })
      .join("\n        ");

    return `
      <div id="nav-links" class="nav-links">
        ${links}
      </div>
    `;
  },

  // ============================================
  // MOBILE NAVIGATION COMPONENT
  // ============================================
  mobileNav() {
    const currentPageId = this.getCurrentPageId();

    const links = this.navItems
      .map((item) => {
        const href = this.adjustHref(item.href);
        const isActive = item.id === currentPageId;
        const className = isActive
          ? "mobile-nav-link-active"
          : "mobile-nav-link";
        return `<a href="${href}" class="${className}">${item.label}</a>`;
      })
      .join("\n          ");

    return `
      <div id="mobile-nav" class="mobile-nav">
        <div class="mobile-nav-links">
          ${links}
        </div>
      </div>
    `;
  },

  // ============================================
  // FULL HEADER COMPONENT
  // ============================================
  header() {
    return `
    <header class="header">
      <nav class="header-nav">
        <div class="header-content">
          ${this.logo()}
          ${this.mobileMenuButton()}
          ${this.desktopNav()}
        </div>
        ${this.mobileNav()}
      </nav>
    </header>
    `;
  },

  // ============================================
  // FOOTER COMPONENT
  // ============================================
  footer() {
    const basePath = this.getBasePath();
    const contactHref = basePath ? "contact.html" : "sub_pages/contact.html";

    return `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-inner">
          <div class="footer-logo">
            <div class="logo-icon-sm">
              <span class="text-xl">${this.config.siteIcon}</span>
            </div>
            <span class="font-bold text-green-400">${this.config.siteName}</span>
          </div>
          <div class="mb-4 md:mb-0">
            <a href="${contactHref}" class="footer-link">Kontaktujte nás</a>
          </div>
          <div class="footer-copyright">© ${this.config.author} • ${this.config.year}</div>
        </div>
      </div>
    </footer>
    `;
  },

  // ============================================
  // PAGE HEADER COMPONENT
  // ============================================
  pageHeader(title, subtitle = "") {
    return `
    <section class="page-header">
      <h1 class="page-title">${title}</h1>
      ${subtitle ? `<p class="page-subtitle-center">${subtitle}</p>` : ""}
    </section>
    `;
  },

  // ============================================
  // FEATURE CARD COMPONENT
  // ============================================
  featureCard(icon, title, description) {
    return `
    <div class="feature-card">
      <div class="feature-card-icon">${icon}</div>
      <h3 class="feature-card-title">${title}</h3>
      <p class="feature-card-desc">${description}</p>
    </div>
    `;
  },

  // ============================================
  // CATEGORY CARD COMPONENT
  // ============================================
  categoryCard(icon, title, description, link = "", isHighlight = false) {
    const titleClass = isHighlight
      ? "category-card-title-highlight"
      : "category-card-title";

    return `
    <div class="category-card">
      <div class="category-card-icon">${icon}</div>
      <h3 class="${titleClass}">${title}</h3>
      <p class="category-card-desc">${description}</p>
      ${link ? `<a href="${link}" class="btn-link">Pozri nominovaných →</a>` : ""}
    </div>
    `;
  },

  // ============================================
  // GAME CARD COMPONENT
  // ============================================
  gameCard(options) {
    const {
      name,
      dataName,
      studio,
      description,
      icon,
      gradientFrom,
      gradientTo,
      badge,
      badgeType = "rpg",
      badgeLabel,
      showVoteBtn = true,
    } = options;

    const badgeHtml = badge
      ? `<span class="badge-favorite">${badge}</span>`
      : "";

    return `
    <div class="game-card" data-game="${dataName || name.toLowerCase()}">
      <div class="relative">
        <div class="game-card-image bg-gradient-to-br ${gradientFrom} ${gradientTo}">
          <span class="text-6xl">${icon}</span>
        </div>
        ${badgeHtml}
      </div>
      <div class="game-card-content">
        <h3 class="game-card-title">${name}</h3>
        <p class="game-card-studio">${studio}</p>
        <p class="game-card-desc">${description}</p>
        <div class="game-card-footer">
          <span class="badge badge-${badgeType}">${badgeLabel}</span>
          ${showVoteBtn ? '<button class="vote-btn">Hlasovať</button>' : ""}
        </div>
      </div>
    </div>
    `;
  },

  // ============================================
  // CATEGORY SECTION COMPONENT
  // ============================================
  categorySection(icon, title, categoryId, games = []) {
    const gamesHtml = games.map((game) => this.gameCard(game)).join("\n");

    return `
    <div class="category-section" data-category="${categoryId}">
      <h2 class="category-section-title">
        <span class="category-section-icon">${icon}</span>
        ${title}
      </h2>
      <div class="grid-3">
        ${gamesHtml}
      </div>
    </div>
    `;
  },

  // ============================================
  // INFO CARD COMPONENT
  // ============================================
  infoCard(icon, title, content) {
    return `
    <div class="info-card">
      <div class="info-card-header">
        <div class="info-card-icon">${icon}</div>
        <h2 class="info-card-title">${title}</h2>
      </div>
      <div class="text-gray-400 leading-relaxed">${content}</div>
    </div>
    `;
  },

  // ============================================
  // PROMO CARD COMPONENT
  // ============================================
  promoCard(title, description, buttonText, buttonHref) {
    const href = this.adjustHref(buttonHref);

    return `
    <section class="promo-card">
      <div class="promo-card-content">
        <div class="promo-card-text">
          <h2 class="promo-card-title">${title}</h2>
          <p class="promo-card-desc">${description}</p>
        </div>
        <a href="${href}" class="btn btn-white btn-lg">${buttonText}</a>
      </div>
    </section>
    `;
  },

  // ============================================
  // FAQ ITEM COMPONENT
  // ============================================
  faqItem(question, answer) {
    return `
    <div class="faq-item">
      <button class="faq-question">
        <span>${question}</span>
        <svg class="faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div class="faq-answer">
        <p>${answer}</p>
      </div>
    </div>
    `;
  },

  // ============================================
  // CONTACT INFO ITEM COMPONENT
  // ============================================
  contactInfoItem(icon, title, content) {
    return `
    <div class="contact-info-item">
      <div class="contact-info-icon">
        <span class="text-2xl">${icon}</span>
      </div>
      <div>
        <h3 class="contact-info-title">${title}</h3>
        <p class="contact-info-text">${content}</p>
      </div>
    </div>
    `;
  },

  // ============================================
  // SOCIAL LINKS COMPONENT
  // ============================================
  socialLinks(links = []) {
    const defaultLinks = [
      { icon: "📘", href: "#", type: "facebook" },
      { icon: "🐦", href: "#", type: "twitter" },
      { icon: "📸", href: "#", type: "instagram" },
      { icon: "🎬", href: "#", type: "youtube" },
      { icon: "🎮", href: "#", type: "discord" },
    ];

    const socialItems = (links.length ? links : defaultLinks)
      .map(
        (link) => `
      <a href="${link.href}" class="social-link social-link-${link.type}">
        <span class="text-xl">${link.icon}</span>
      </a>
    `,
      )
      .join("");

    return `<div class="social-links">${socialItems}</div>`;
  },

  // ============================================
  // BUTTON COMPONENT
  // ============================================
  button(text, href = "#", variant = "primary", size = "default") {
    const sizeClass = size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "";
    const adjustedHref = this.adjustHref(href);

    return `<a href="${adjustedHref}" class="btn btn-${variant} ${sizeClass}">${text}</a>`;
  },

  // ============================================
  // SUCCESS MESSAGE COMPONENT
  // ============================================
  successMessage(icon, message) {
    return `
    <div class="success-message hidden" id="success-message">
      <span class="text-2xl">${icon}</span>
      <p class="mt-2">${message}</p>
    </div>
    `;
  },

  // ============================================
  // NO RESULTS COMPONENT
  // ============================================
  noResults(icon = "🔍", title = "Žiadne výsledky", message = "") {
    return `
    <div id="no-results" class="no-results hidden">
      <div class="no-results-icon">${icon}</div>
      <h3 class="no-results-title">${title}</h3>
      <p class="no-results-text">${message}</p>
    </div>
    `;
  },

  // ============================================
  // MESSAGE CARD COMPONENT (for messages page)
  // ============================================
  messageCard(message, index) {
    const date = new Date(message.timestamp).toLocaleString("sk-SK");

    return `
    <div class="message-card" data-index="${index}">
      <div class="message-header">
        <div>
          <div class="message-sender">${message.name}</div>
          <div class="message-email">${message.email}</div>
        </div>
        <div class="text-right">
          <div class="message-date">${date}</div>
          <button class="message-delete-btn" onclick="MessagesManager.deleteMessage(${index})">
            🗑️ Zmazať
          </button>
        </div>
      </div>
      <div class="message-subject">📋 ${message.subject}</div>
      <div class="message-content">${message.message}</div>
    </div>
    `;
  },

  // ============================================
  // INJECT COMPONENTS INTO PAGE
  // ============================================
  inject(selector, component) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML =
        typeof component === "function" ? component.call(this) : component;
    }
  },

  // ============================================
  // AUTO-INJECT HEADER AND FOOTER
  // ============================================
  init() {
    // Auto-inject header
    const headerPlaceholder = document.querySelector(
      '[data-component="header"]',
    );
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = this.header();
    }

    // Auto-inject footer
    const footerPlaceholder = document.querySelector(
      '[data-component="footer"]',
    );
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = this.footer();
    }

    // Initialize mobile menu after injection
    this.initMobileMenu();
  },

  // ============================================
  // MOBILE MENU INITIALIZATION
  // ============================================
  initMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileNav = document.getElementById("mobile-nav");

    if (mobileMenuBtn && mobileNav) {
      mobileMenuBtn.addEventListener("click", function () {
        mobileNav.classList.toggle("hidden");

        const icon = mobileMenuBtn.querySelector("svg");
        if (icon) {
          if (mobileNav.classList.contains("hidden")) {
            icon.innerHTML = `
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            `;
          } else {
            icon.innerHTML = `
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            `;
          }
        }
      });
    }
  },
};

// ============================================
// MESSAGES MANAGER - localStorage operations
// ============================================
const MessagesManager = {
  STORAGE_KEY: "gameAwardsMessages",

  // Get all messages from localStorage
  getMessages() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  // Save a new message
  saveMessage(messageData) {
    const messages = this.getMessages();
    const newMessage = {
      ...messageData,
      timestamp: Date.now(),
      id: Date.now().toString(),
    };
    messages.unshift(newMessage); // Add to beginning
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
    return newMessage;
  },

  // Delete a message by index
  deleteMessage(index) {
    const messages = this.getMessages();
    messages.splice(index, 1);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));

    // Refresh the page display if on messages page
    if (typeof renderMessages === "function") {
      renderMessages();
    } else {
      // Reload page as fallback
      location.reload();
    }
  },

  // Clear all messages
  clearAllMessages() {
    localStorage.removeItem(this.STORAGE_KEY);
    if (typeof renderMessages === "function") {
      renderMessages();
    } else {
      location.reload();
    }
  },

  // Get message count
  getMessageCount() {
    return this.getMessages().length;
  },
};

// Auto-initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  GameComponents.init();
});

// Make available globally
window.GameComponents = GameComponents;
window.MessagesManager = MessagesManager;
