const GameComponents = {
  config: {
    siteName: "Game Awards",
    siteIcon: "GA",
    author: "Bohuslav Uličný",
    year: "2025",
  },
  navItems: [
    { href: "index.html", label: "Domov", id: "home" },
    { href: "sub_pages/categories.html", label: "Kategórie", id: "categories" },
    { href: "sub_pages/nominees.html", label: "Nominovaní", id: "nominees" },
    { href: "sub_pages/gtg.html", label: "Hádaj Hru", id: "gtg" },
    { href: "sub_pages/about.html", label: "O nás", id: "about" },
    { href: "sub_pages/contact.html", label: "Kontakt", id: "contact" },
    { href: "sub_pages/messages.html", label: "Správy", id: "messages" },
  ],
  getBasePath() {
    const path = window.location.pathname;
    if (path.includes("/sub_pages/")) {
      return "../";
    }
    return "";
  },
  getCurrentPageId() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace(".html", "") || "index";
    const pageMap = {
      index: "home",
      categories: "categories",
      nominees: "nominees",
      gtg: "gtg",
      about: "about",
      contact: "contact",
      messages: "messages",
    };
    return pageMap[page] || "home";
  },
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
  mobileMenuButton() {
    return `
      <button
        id="mobile-menu-btn"
        class="mobile-menu-btn"
        aria-label="Toggle menu"
        aria-expanded="false"
        type="button"
      >
        <svg data-icon="open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg data-icon="close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    `;
  },
  themeToggleButton() {
    return `
      <button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle theme" title="Prepnúť tému">
        <svg id="theme-icon-dark" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
        <svg id="theme-icon-light" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <svg id="theme-icon-system" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </button>
    `;
  },
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
  header() {
    return `
    <header class="header">
      <nav class="header-nav">
        <div class="header-content">
          ${this.logo()}
          <div class="header-actions">
            ${this.themeToggleButton()}
            ${this.mobileMenuButton()}
          </div>
          ${this.desktopNav()}
        </div>
        ${this.mobileNav()}
      </nav>
    </header>
    `;
  },
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
  pageHeader(title, subtitle = "") {
    return `
    <section class="page-header">
      <h1 class="page-title">${title}</h1>
      ${subtitle ? `<p class="page-subtitle-center">${subtitle}</p>` : ""}
    </section>
    `;
  },
  featureCard(title, description) {
    return `
    <div class="feature-card">
      <h3 class="feature-card-title">${title}</h3>
      <p class="feature-card-desc">${description}</p>
    </div>
    `;
  },
  categoryCard(title, description, link = "", isHighlight = false) {
    const titleClass = isHighlight
      ? "category-card-title-highlight"
      : "category-card-title";
    return `
    <div class="category-card">
      <h3 class="${titleClass}">${title}</h3>
      <p class="category-card-desc">${description}</p>
      ${link ? `<a href="${link}" class="btn-link">Pozri nominovaných →</a>` : ""}
    </div>
    `;
  },
  gameCard(options) {
    const {
      name,
      dataName,
      studio,
      description,
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
  categorySection(title, categoryId, games = []) {
    const gamesHtml = games.map((game) => this.gameCard(game)).join("\n");
    return `
    <div class="category-section" data-category="${categoryId}">
      <h2 class="category-section-title">
        ${title}
      </h2>
      <div class="grid-3">
        ${gamesHtml}
      </div>
    </div>
    `;
  },
  infoCard(title, content) {
    return `
    <div class="info-card">
      <div class="info-card-header">
        <h2 class="info-card-title">${title}</h2>
      </div>
      <div class="text-gray-400 leading-relaxed">${content}</div>
    </div>
    `;
  },
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
  contactInfoItem(title, content) {
    return `
    <div class="contact-info-item">
      <div>
        <h3 class="contact-info-title">${title}</h3>
        <p class="contact-info-text">${content}</p>
      </div>
    </div>
    `;
  },
  socialLinks(links = []) {
    const defaultLinks = [
      { label: "Facebook", href: "#", type: "facebook" },
      { label: "X", href: "#", type: "twitter" },
      { label: "Instagram", href: "#", type: "instagram" },
      { label: "YouTube", href: "#", type: "youtube" },
      { label: "Discord", href: "#", type: "discord" },
    ];
    const socialItems = (links.length ? links : defaultLinks)
      .map(
        (link) => `
      <a href="${link.href}" class="social-link social-link-${link.type}">
        <span class="text-sm font-medium">${link.label}</span>
      </a>
    `,
      )
      .join("");
    return `<div class="social-links">${socialItems}</div>`;
  },
  button(text, href = "#", variant = "primary", size = "default") {
    const sizeClass = size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "";
    const adjustedHref = this.adjustHref(href);
    return `<a href="${adjustedHref}" class="btn btn-${variant} ${sizeClass}">${text}</a>`;
  },
  successMessage(message) {
    return `
    <div class="success-message hidden" id="success-message">
      <p class="mt-2">${message}</p>
    </div>
    `;
  },
  noResults(title = "Žiadne výsledky", message = "") {
    return `
    <div id="no-results" class="no-results hidden">
      <h3 class="no-results-title">${title}</h3>
      <p class="no-results-text">${message}</p>
    </div>
    `;
  },
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
            Zmazať
          </button>
        </div>
      </div>
      <div class="message-subject">${message.subject}</div>
      <div class="message-content">${message.message}</div>
    </div>
    `;
  },
  inject(selector, component) {
    const element = document.querySelector(selector);
    if (element) {
      element.innerHTML =
        typeof component === "function" ? component.call(this) : component;
    }
  },
  init() {
    const headerPlaceholder = document.querySelector(
      '[data-component="header"]',
    );
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = this.header();
    }
    const footerPlaceholder = document.querySelector(
      '[data-component="footer"]',
    );
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = this.footer();
    }
    this.initMobileMenu();
    this.initThemeToggle();
  },
  initThemeToggle() {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const iconDark = document.getElementById("theme-icon-dark");
    const iconLight = document.getElementById("theme-icon-light");
    const iconSystem = document.getElementById("theme-icon-system");
    if (!themeToggleBtn) return;
    const STORAGE_KEY = "theme-preference";
    const getStoredTheme = () => localStorage.getItem(STORAGE_KEY) || "system";
    const getSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    const updateIcon = (mode) => {
      iconDark.classList.add("hidden");
      iconLight.classList.add("hidden");
      iconSystem.classList.add("hidden");
      if (mode === "dark") {
        iconDark.classList.remove("hidden");
      } else if (mode === "light") {
        iconLight.classList.remove("hidden");
      } else {
        iconSystem.classList.remove("hidden");
      }
    };
    const applyTheme = (mode) => {
      const effectiveTheme = mode === "system" ? getSystemTheme() : mode;
      document.documentElement.setAttribute("data-theme", effectiveTheme);
      updateIcon(mode);
    };
    const cycleTheme = () => {
      const currentMode = getStoredTheme();
      let nextMode;
      if (currentMode === "system") {
        nextMode = "light";
      } else if (currentMode === "light") {
        nextMode = "dark";
      } else {
        nextMode = "system";
      }
      localStorage.setItem(STORAGE_KEY, nextMode);
      applyTheme(nextMode);
    };
    applyTheme(getStoredTheme());
    themeToggleBtn.addEventListener("click", cycleTheme);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (getStoredTheme() === "system") {
          applyTheme("system");
        }
      });
  },
  initMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileNav = document.getElementById("mobile-nav");
    if (!mobileMenuBtn || !mobileNav) return;
    const openIcon = mobileMenuBtn.querySelector('[data-icon="open"]');
    const closeIcon = mobileMenuBtn.querySelector('[data-icon="close"]');
    const setState = (isOpen) => {
      mobileNav.classList.toggle("mobile-nav-open", isOpen);
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (openIcon && closeIcon) {
        openIcon.classList.toggle("hidden", isOpen);
        closeIcon.classList.toggle("hidden", !isOpen);
      }
    };
    mobileMenuBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldOpen = !mobileNav.classList.contains("mobile-nav-open");
      setState(shouldOpen);
    });
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setState(false));
    });
    document.addEventListener("click", (event) => {
      if (
        mobileNav.classList.contains("mobile-nav-open") &&
        !mobileMenuBtn.contains(event.target) &&
        !mobileNav.contains(event.target)
      ) {
        setState(false);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setState(false);
      }
    });
  },
};
const MessagesManager = {
  STORAGE_KEY: "gameAwardsMessages",
  getMessages() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },
  saveMessage(messageData) {
    const messages = this.getMessages();
    const newMessage = {
      ...messageData,
      timestamp: Date.now(),
      id: Date.now().toString(),
    };
    messages.unshift(newMessage); 
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
    return newMessage;
  },
  deleteMessage(index) {
    const messages = this.getMessages();
    messages.splice(index, 1);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
    if (typeof renderMessages === "function") {
      renderMessages();
    } else {
      location.reload();
    }
  },
  clearAllMessages() {
    localStorage.removeItem(this.STORAGE_KEY);
    if (typeof renderMessages === "function") {
      renderMessages();
    } else {
      location.reload();
    }
  },
  getMessageCount() {
    return this.getMessages().length;
  },
};
document.addEventListener("DOMContentLoaded", function () {
  GameComponents.init();
});
window.GameComponents = GameComponents;
window.MessagesManager = MessagesManager;
