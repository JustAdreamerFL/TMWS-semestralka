// GTG - Guess The Game - Mini hra
// Databáza hier s opismi a nápovedami

const gamesDatabase = [
  {
    name: "The Witcher 3: Wild Hunt",
    aliases: ["witcher 3", "zaklínač 3", "the witcher 3"],
    description:
      "Hráš za bielovlasého lovca príšer, ktorý hľadá svoju adoptívnu dcéru. Hra sa odohráva v temnom fantasy svete plnom monster, politických intríg a morálnych dilem.",
    hints: [
      "Žáner: Akčné RPG s otvoreným svetom",
      "Rok vydania: 2015",
      "Hlavná postava má dve meče - strieborný a oceľový",
    ],
  },
  {
    name: "Minecraft",
    aliases: ["minecraft", "mine craft"],
    description:
      "Sandbox hra, kde môžeš ťažiť bloky, stavať čokoľvek si predstavíš a prežiť noc plnú nebezpečných príšer. Všetko je zložené z kociek.",
    hints: [
      "Žáner: Sandbox / Survival",
      "Vývojár: Mojang Studios",
      "Najpredávanejšia videohra všetkých čias",
    ],
  },
  {
    name: "Dark Souls",
    aliases: ["dark souls", "dark souls 1", "darksouls"],
    description:
      "Extrémne náročná akčná RPG hra, kde zomrieš znova a znova. Hráš za nemrtvého bojovníka v temnom fantasy svete plnom nebezpečných nepriateľov a bossov.",
    hints: [
      "Žáner: Akčné RPG (Soulslike)",
      "Vývojár: FromSoftware",
      "Známe heslo: 'Prepare to Die'",
    ],
  },
  {
    name: "Red Dead Redemption 2",
    aliases: ["rdr2", "red dead 2", "red dead redemption 2"],
    description:
      "Rozsiahla westernovka o gangoch v Amerike na konci 19. storočia. Hráš za člena gangu, ktorý sa snaží prežiť zatiaľ čo zákon im je v pätách.",
    hints: [
      "Žáner: Akčná adventúra s otvoreným svetom",
      "Vývojár: Rockstar Games",
      "Prequel k prvému dielu série",
    ],
  },
  {
    name: "Elden Ring",
    aliases: ["elden ring", "eldenring"],
    description:
      "Otvorený svet fantasy RPG kde hľadáš fragmenty rozbitého prsteňa. Bol vytvorený v spolupráci so známym fantasy autorom a ponúka náročný gameplay.",
    hints: [
      "Žáner: Akčné RPG / Open World Soulslike",
      "George R.R. Martin spolupracoval na príbehu",
      "Vývojár: FromSoftware, Rok: 2022",
    ],
  },
  {
    name: "God of War",
    aliases: ["god of war", "gow", "god of war 2018"],
    description:
      "Bývalý grécky boh vojny teraz žije v severskom svete s malým synom. Spolu sa vydávajú na cestu roztrúsiť popol matky na najvyššom vrchole.",
    hints: [
      "Žáner: Akčná adventúra",
      "Hlavná postava: Kratos",
      "Odohráva sa v severskom mytologickom svete",
    ],
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    aliases: [
      "zelda botw",
      "breath of the wild",
      "botw",
      "zelda breath of the wild",
    ],
    description:
      "Zobudíš sa po 100 rokoch spánku v zničenom kráľovstve. S takmer žiadnym vybavením musíš preskúmať obrovský otvorený svet a zachrániť princeznú.",
    hints: [
      "Žáner: Akčná adventúra s otvoreným svetom",
      "Platforma: Nintendo Switch",
      "Hlavný hrdina sa volá Link",
    ],
  },
  {
    name: "Portal 2",
    aliases: ["portal 2", "portal two", "portal II"],
    description:
      "Logická first-person hra kde používaš zariadenie vytvárajúce portály na riešenie hádaniek. Sprevádzaná sarkastickým AI, ktoré ťa chce zabiť.",
    hints: [
      "Žáner: Puzzle / First-person",
      "Vývojár: Valve",
      "Známa fráza: 'The cake is a lie'",
    ],
  },
  {
    name: "Hollow Knight",
    aliases: ["hollow knight", "hollowknight"],
    description:
      "2D metroidvania kde hráš za malého hmyzieho rytiera skúmajúceho podzemné kráľovstvo plné tajomstiev, nebezpečných nepriateľov a smutného príbehu.",
    hints: [
      "Žáner: Metroidvania",
      "Vývojár: Team Cherry",
      "Celá hra sa odohráva v podzemnom kráľovstve Hallownest",
    ],
  },
  {
    name: "Hades",
    aliases: ["hades", "hades 1"],
    description:
      "Roguelike hra kde sa snažíš uniknúť z podsvetia. Hráš za syna boha mŕtvych a musíš bojovať cez hordý nepriateľov znova a znova.",
    hints: [
      "Žáner: Roguelike / Akcia",
      "Vývojár: Supergiant Games",
      "Hlavná postava je Zagreus, syn Háda",
    ],
  },
  {
    name: "Stardew Valley",
    aliases: ["stardew", "stardew valley"],
    description:
      "Zdedil si starú farmu od dedka a musíš ju znova rozbehnúť. Pestuj plodiny, chovaj zvieratá, spoznávaj obyvateľov mestečka a možno sa aj zaľúbiš.",
    hints: [
      "Žáner: Farming / Simulátor",
      "Vytvoril jeden vývojár: ConcernedApe",
      "Inšpirované sériou Harvest Moon",
    ],
  },
  {
    name: "Celeste",
    aliases: ["celeste"],
    description:
      "Pixel art platformovka o dievčati, ktoré sa snaží vyliezť na záhadnú horu. Hra je známa vysokou náročnosťou a príbehom o mentálnom zdraví.",
    hints: [
      "Žáner: Platformer",
      "Hlavná postava sa volá Madeline",
      "Hra získala mnohé ocenenia za príbeh o depresii a úzkosti",
    ],
  },
  {
    name: "Sekiro: Shadows Die Twice",
    aliases: ["sekiro", "sekiro shadows die twice"],
    description:
      "Akčná hra v feudálnom Japonsku kde hráš za jednorukého shinobi. Bojový systém je založený na presnom blokovaní a odvete.",
    hints: [
      "Žáner: Akčná adventúra / Soulslike",
      "Vývojár: FromSoftware",
      "Hlavná postava má protézu namiesto ľavej ruky",
    ],
  },
  {
    name: "Undertale",
    aliases: ["undertale", "under tale"],
    description:
      "RPG kde nemusíš nikoho zabiť. Spadol si do podzemného sveta príšer a musíš nájsť cestu von. Každé rozhodnutie má následky.",
    hints: [
      "Žáner: RPG",
      "Vytvoril Toby Fox",
      "Známe postavy: Sans, Papyrus, Flowey",
    ],
  },
  {
    name: "Baldur's Gate 3",
    aliases: ["baldurs gate 3", "bg3", "baldur's gate 3"],
    description:
      "Rozsiahle RPG kde bol tebe a tvojej skupine implantovaný parazit. Musíte nájsť spôsob ako sa ho zbaviť kým vás nezmení na monštrum.",
    hints: [
      "Žáner: cRPG / Turn-based",
      "Vývojár: Larian Studios",
      "Založené na Dungeons & Dragons pravidlách",
    ],
  },
];

// Herný stav
let gameState = {
  currentGame: null,
  score: 0,
  streak: 0,
  round: 1,
  attempts: 3,
  hintsShown: 0,
  usedGames: [],
};

// DOM elementy
let scoreEl,
  streakEl,
  roundEl,
  attemptsEl,
  descriptionEl,
  hintsEl,
  guessForm,
  guessInput;
let resultMessage, resultIcon, resultTitle, resultText, nextBtn, skipBtn;

// Inicializácia hry
document.addEventListener("DOMContentLoaded", function () {
  // Získanie DOM elementov
  scoreEl = document.getElementById("score");
  streakEl = document.getElementById("streak");
  roundEl = document.getElementById("round");
  attemptsEl = document.getElementById("attempts");
  descriptionEl = document.getElementById("game-description");
  hintsEl = document.getElementById("hints");
  guessForm = document.getElementById("guess-form");
  guessInput = document.getElementById("guess-input");
  resultMessage = document.getElementById("result-message");
  resultIcon = document.getElementById("result-icon");
  resultTitle = document.getElementById("result-title");
  resultText = document.getElementById("result-text");
  nextBtn = document.getElementById("next-btn");
  skipBtn = document.getElementById("skip-btn");

  // Event listeners
  guessForm.addEventListener("submit", handleGuess);
  nextBtn.addEventListener("click", nextRound);
  skipBtn.addEventListener("click", skipGame);

  // Štart hry
  loadNewGame();
});

// Načítanie novej hry
function loadNewGame() {
  // Reset pokusov a nápoved
  gameState.attempts = 3;
  gameState.hintsShown = 0;

  // Vyber náhodnú hru, ktorá ešte nebola použitá
  let availableGames = gamesDatabase.filter(
    (game) => !gameState.usedGames.includes(game.name)
  );

  // Ak sme prešli všetky hry, resetuj
  if (availableGames.length === 0) {
    gameState.usedGames = [];
    availableGames = gamesDatabase;
  }

  const randomIndex = Math.floor(Math.random() * availableGames.length);
  gameState.currentGame = availableGames[randomIndex];
  gameState.usedGames.push(gameState.currentGame.name);

  // Aktualizuj UI
  updateUI();
  descriptionEl.textContent = gameState.currentGame.description;
  hintsEl.innerHTML =
    '<p class="text-gray-400 italic">Nápovedy sa zobrazia po nesprávnej odpovedi</p>';

  // Skry výsledok a zobraz input
  resultMessage.classList.add("hidden");
  guessForm.classList.remove("hidden");
  skipBtn.classList.remove("hidden");
  guessInput.value = "";
  guessInput.focus();
}

// Spracovanie tipu
function handleGuess(e) {
  e.preventDefault();

  const guess = guessInput.value.trim().toLowerCase();
  if (!guess) return;

  const currentGame = gameState.currentGame;
  const correctAnswers = [currentGame.name.toLowerCase(), ...currentGame.aliases.map((a) => a.toLowerCase())];

  if (correctAnswers.includes(guess)) {
    // Správna odpoveď
    handleCorrectGuess();
  } else {
    // Nesprávna odpoveď
    handleWrongGuess();
  }

  guessInput.value = "";
}

// Správna odpoveď
function handleCorrectGuess() {
  // Vypočítaj body (viac bodov za menej pokusov)
  const points = gameState.attempts * 10;
  gameState.score += points;
  gameState.streak += 1;

  // Zobraz výsledok
  showResult(
    true,
    "🎉",
    "Správne!",
    `Hra bola: ${gameState.currentGame.name}. Získal si ${points} bodov!`
  );

  updateUI();
}

// Nesprávna odpoveď
function handleWrongGuess() {
  gameState.attempts -= 1;
  updateAttemptsDisplay();

  if (gameState.attempts <= 0) {
    // Koniec pokusov
    gameState.streak = 0;
    showResult(
      false,
      "😔",
      "Škoda!",
      `Správna odpoveď bola: ${gameState.currentGame.name}`
    );
    updateUI();
  } else {
    // Zobraz nápovedu
    showHint();
    guessInput.focus();
  }
}

// Zobrazenie nápovedy
function showHint() {
  const hints = gameState.currentGame.hints;
  if (gameState.hintsShown < hints.length) {
    const hintHtml =
      gameState.hintsShown === 0
        ? `<p class="text-yellow-400">💡 ${hints[gameState.hintsShown]}</p>`
        : hintsEl.innerHTML +
          `<p class="text-yellow-400">💡 ${hints[gameState.hintsShown]}</p>`;
    hintsEl.innerHTML = hintHtml;
    gameState.hintsShown++;
  }
}

// Zobrazenie výsledku
function showResult(success, icon, title, text) {
  resultIcon.textContent = icon;
  resultTitle.textContent = title;
  resultText.textContent = text;

  if (success) {
    resultMessage.className =
      "text-center py-6 rounded-xl mb-6 bg-green-900/50 border border-green-500";
  } else {
    resultMessage.className =
      "text-center py-6 rounded-xl mb-6 bg-red-900/50 border border-red-500";
  }

  resultMessage.classList.remove("hidden");
  guessForm.classList.add("hidden");
  skipBtn.classList.add("hidden");
}

// Ďalšie kolo
function nextRound() {
  gameState.round += 1;
  loadNewGame();
}

// Preskočenie hry
function skipGame() {
  gameState.streak = 0;
  showResult(
    false,
    "⏭️",
    "Preskočené",
    `Správna odpoveď bola: ${gameState.currentGame.name}`
  );
  updateUI();
}

// Aktualizácia pokusov
function updateAttemptsDisplay() {
  let html = "";
  for (let i = 0; i < 3; i++) {
    if (i < gameState.attempts) {
      html += '<span class="w-3 h-3 bg-green-500 rounded-full"></span>';
    } else {
      html += '<span class="w-3 h-3 bg-red-500 rounded-full"></span>';
    }
  }
  attemptsEl.innerHTML = html;
}

// Aktualizácia UI
function updateUI() {
  scoreEl.textContent = gameState.score;
  streakEl.textContent = gameState.streak;
  roundEl.textContent = gameState.round;
  updateAttemptsDisplay();
}
