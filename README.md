# Game Awards 2025 🎮

Semestrálna práca - webová stránka venovaná oceneniam najlepších hier roku 2025.

**Téma:** Razer-style zeleno-čierna farebná schéma s neon glow efektmi.

## 📁 Štruktúra projektu

```
TMWS-semestralka/
├── index.html              # Hlavná stránka
├── components.js           # Reusovateľné JS komponenty (GameComponents)
├── script.js               # Všeobecný JavaScript
├── tailwind.config.js      # Tailwind CSS konfigurácia
├── package.json            # NPM konfigurácia
├── src/
│   └── input.css           # Zdrojový CSS s komponentami (@apply)
├── dist/
│   └── style.css           # Skompilovaný CSS (po builde)
└── sub_pages/
    ├── about.html          # O nás
    ├── categories.html     # Kategórie ocenení
    ├── contact.html        # Kontaktný formulár (ukladá do localStorage)
    ├── faq.html            # Často kladené otázky
    ├── gtg.html            # Mini hra "Hádaj Hru"
    ├── messages.html       # 📬 Prezeranie odoslaných správ
    ├── nominees.html       # Nominované hry
    └── scripts/
        ├── faq.js          # FAQ accordion funkcionalita
        ├── gtg.js          # Logika mini hry
        └── nominees.js     # Vyhľadávanie a hlasovanie
```

## 🚀 Inštalácia a spustenie

### Rýchle spustenie (bez buildu)

Projekt používa Tailwind CSS cez CDN, takže môžete jednoducho otvoriť `index.html` v prehliadači.

### S Tailwind CSS buildom (odporúčané pre produkciu)

1. **Nainštalujte závislosti:**
   ```bash
   npm install
   ```

2. **Build CSS (jednorazovo):**
   ```bash
   npm run build
   ```

3. **Alebo watch mód (pre vývoj):**
   ```bash
   npm run dev
   ```

4. **Otvorte `index.html` v prehliadači**

## 🎨 Farebná schéma - Razer Style

Projekt používa zeleno-čiernu farebnú schému inšpirovanú značkou Razer:

| Farba | Hex | Použitie |
|-------|-----|----------|
| **Neon Green** | `#00ff00` | Hlavná farba, tlačidlá, akcenty |
| **Dark Green** | `#009900` | Hover stavy, bordery |
| **Pure Black** | `#000000` | Pozadia |
| **Zinc 900** | `#18181b` | Karty, kontajnery |
| **Gray 500** | `#6b7280` | Sekundárny text |

### Glow efekty
- Tlačidlá a aktívne prvky majú `box-shadow` s zeleným glow
- Texty titulkov majú `text-shadow` pre neon efekt
- Hover stavy zosilňujú glow efekt

## 📦 Komponentový systém

### CSS Komponenty (src/input.css)

Používajú `@apply` direktívy Tailwind CSS:

| Kategória | Komponenty |
|-----------|------------|
| **Layout** | `.page-wrapper`, `.main-content`, `.section`, `.content-center` |
| **Header** | `.header`, `.header-nav`, `.header-content`, `.logo`, `.logo-icon` |
| **Footer** | `.footer`, `.footer-content`, `.footer-inner`, `.footer-logo` |
| **Navigácia** | `.nav-links`, `.nav-link`, `.nav-link-active`, `.mobile-nav` |
| **Tlačidlá** | `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.vote-btn` |
| **Karty** | `.card`, `.game-card`, `.category-card`, `.feature-card`, `.message-card` |
| **Formuláre** | `.form-input`, `.form-select`, `.form-textarea`, `.search-input` |
| **Badge** | `.badge`, `.badge-action`, `.badge-rpg`, `.badge-indie` |
| **Správy** | `.message-card`, `.message-header`, `.message-sender`, `.message-content` |

### JavaScript Komponenty (components.js)

```javascript
// Použitie komponentov
GameComponents.header()           // Vráti HTML pre header
GameComponents.footer()           // Vráti HTML pre footer
GameComponents.pageHeader(title, subtitle)
GameComponents.featureCard(icon, title, description)
GameComponents.gameCard(options)
GameComponents.messageCard(message, index)

// Správa správ
MessagesManager.getMessages()     // Získa všetky správy
MessagesManager.saveMessage(data) // Uloží novú správu
MessagesManager.deleteMessage(i)  // Zmaže správu
MessagesManager.clearAllMessages() // Zmaže všetky správy
```

### Auto-injektovanie

Header a footer sa automaticky injektujú na miesta označené:
```html
<div data-component="header"></div>
<div data-component="footer"></div>
```

## 🎮 Funkcie

### 📧 Kontaktný formulár so správami
- Odoslané správy sa ukladajú do **localStorage**
- Stránka `/sub_pages/messages.html` zobrazuje všetky správy
- Možnosť zmazať jednotlivé správy alebo všetky naraz
- Správy obsahujú: meno, email, predmet, správu a časovú pečiatku

### 🗺️ Navigácia
- Responzívna navigácia s mobilným menu
- Automatické zvýrazňovanie aktívnej stránky
- Zelené glow efekty pri hover

### 🏆 Stránka Nominovaní
- Vyhľadávanie hier podľa názvu
- Filtrovanie podľa kategórií
- Hlasovanie (ukladá sa do localStorage)

### 🎯 Mini hra "Hádaj Hru"
- 15 hier v databáze
- 3 pokusy na uhádnutie
- Bodovací systém so sériami
- Nápovedy po nesprávnej odpovedi

### ❓ FAQ
- Accordion s animáciami
- Prvá otázka automaticky otvorená

## 🛠️ Technológie

- **HTML5** - Sémantická štruktúra
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **JavaScript (Vanilla)** - Bez externých knižníc
- **CSS @apply** - Komponentový systém
- **localStorage** - Perzistencia dát (správy, hlasy)

## 📱 Responzivita

Stránka je plne responzívna:
- **Mobile** (< 768px): Hamburger menu, jednokolónový layout
- **Tablet** (768px - 1024px): 2-kolónový grid
- **Desktop** (> 1024px): 3-kolónový grid, plná navigácia

## 👤 Autor

**Bohuslav Uličný** - 2025

## 📄 Licencia

MIT License