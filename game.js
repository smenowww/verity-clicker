(() => {
  "use strict";

  const SAVE_KEY = "echo_clicker_save_v1";
  const SAVE_VERSION = 1;
  const SKIN_ASSETS = {
    sunshine: "assets/verity_sunny.png",
    berry: "assets/verity_hat.png",
    mint: "assets/verity_block.png",
    midnight: "assets/verity_mono.png"
  };
  const SKIN_PREVIEW_ASSETS = {
    sunshine: "assets/preview_sunny_eyes.png",
    berry: "assets/preview_hat_eyes.png",
    mint: "assets/preview_block_eyes.png",
    midnight: "assets/verity_mono.png"
  };
  const SKIN_ICON_ASSETS = {
    sunshine: "assets/preview_sunny_eyes.png",
    berry: "assets/preview_hat_eyes.png",
    mint: "assets/preview_block_eyes.png",
    midnight: "assets/verity_mono.png"
  };

  const STRINGS = {
    en: {
      loading: "Loading memory…",
      title: "VERITY CLICKER",
      subtitle: "Verity is listening.",
      echoes: "VERITY COINS",
      combo: "Combo",
      truth: "Truth chance",
      loop: "Loop",
      instability: "VERITY INSTABILITY",
      upgrades: "Shop",
      missions: "Missions",
      loopTab: "Loop",
      leaderboardTab: "Top",
      luckTab: "Luck",
      luckTitle: "VERITY LUCK",
      wheelTitle: "Wheel of Fortune",
      wheelDesc: "One spin every 12 hours. Come back when the timer reaches zero.",
      wheelFree: "FREE SPIN",
      wheelPaid: "WAIT",
      wheelNext: "Next free spin",
      rewardCoins: "Coins",
      rewardKey: "Box Key",
      rewardKeys: "Box Keys",
      rewardSkin: "New Skin",
      rewardBoost: "×2 Coin Boost · 60s",
      rewardShield: "Calm Shield · 60s",
      rewardDuplicate: "Duplicate skin converted to coins",
      luckIncomeBoost: "Coin boost",
      luckShieldBoost: "Calm shield",
      leaderboardTitle: "YOUTUBE TOP",
      leaderboardDesc: "The global ranking is built by YouTube from the score sent by the game.",
      leaderboardMetric: "All-time Verity Coins",
      leaderboardMine: "My score",
      leaderboardSynced: "Synced with YouTube",
      leaderboardLocal: "Local test — YouTube ranking is available after publishing as a Playable.",
      leaderboardHint: "YouTube displays the global ranking in its own Playables UI.",
      session: "Session:",
      best: "Best:",
      saved: "Saved",
      saving: "Saving…",
      localSave: "Local test save",
      tapSignal: "Tap Verity",
      glitchRush: "GLITCH RUSH ×4",
      upgradeClick: "Tap Boost",
      upgradeClickDesc: "Each tap gives more Verity Coins.",
      upgradePassive: "Coin Generator",
      upgradePassiveDesc: "Generates Verity Coins while the session is active.",
      upgradeCrit: "Lucky Smile",
      upgradeCritDesc: "Raises the chance of a Truth Click worth ×8.",
      upgradeCombo: "Combo Ribbon",
      upgradeComboDesc: "Keeps your combo alive longer between taps.",
      level: "Lv.",
      buy: "BUY",
      missionClicks: "Keep listening",
      missionClicksDesc: "Tap the signal 75 times in one loop.",
      missionEarn: "Collect the noise",
      missionEarnDesc: "Earn 5,000 echoes in one loop.",
      missionGlitch: "Break the picture",
      missionGlitchDesc: "Trigger Glitch Rush 3 times.",
      reward: "Reward",
      claim: "CLAIM",
      claimed: "CLAIMED",
      loopTitle: "BREAK THE LOOP",
      loopDesc: "Reset echoes and upgrades to gain permanent Memory Fragments. Each fragment permanently increases all echo gain by 25%.",
      fragments: "Memory Fragments",
      nextFragments: "Fragments on reset",
      loopRequirement: "Requires 10,000 lifetime echoes in this loop.",
      reset: "BREAK THE LOOP",
      glitchIn: "Glitch Rush",
      truthClick: "TRUTH",
      whisper1: "HI, FRIEND!",
      whisper2: "LET'S PLAY TOGETHER.",
      whisper3: "YOU'RE DOING GREAT!",
      whisper4: "KEEP SMILING.",
      whisper5: "ONE MORE TAP!",
      soundOn: "Sound on",
      soundOff: "Sound off",
      coinLabel: "VERITY COINS",
      shopUpgrades: "Upgrades",
      shopSkins: "Skins",
      shopExtras: "Extras",
      skinDefault: "Sunny Smile",
      skinBerry: "Hat Trick",
      skinMint: "Block Buddy",
      skinMidnight: "Mono Verity",
      skinEquip: "EQUIP",
      skinEquipped: "EQUIPPED",
      extraLucky: "Lucky Halo",
      extraLuckyDesc: "+15% to all coin gain forever.",
      extraCalm: "Calm Ribbon",
      extraCalmDesc: "Instability grows 20% slower.",
      extraMagnet: "Coin Magnet",
      extraMagnetDesc: "+30% passive coin gain.",
      owned: "OWNED",
      skinPrice: "Price",
      skinFree: "FREE",
      skinLocked: "Tap to view",
      startTitle: "VERITY CLICKER",
      startSubtitle: "A bright little friend is waiting for you.",
      startHint: "Tap start. Audio begins after interaction.",
      startButton: "START",
      continueButton: "CONTINUE",
    },
    ru: {
      loading: "Загрузка памяти…",
      title: "VERITY CLICKER",
      subtitle: "Верити тебя слышит.",
      echoes: "МОНЕТЫ ВЕРИТИ",
      combo: "Комбо",
      truth: "Шанс истины",
      loop: "Цикл",
      instability: "НЕСТАБИЛЬНОСТЬ ВЕРИТИ",
      upgrades: "Магазин",
      missions: "Задания",
      loopTab: "Цикл",
      leaderboardTab: "Топ",
      luckTab: "Удача",
      luckTitle: "УДАЧА ВЕРИТИ",
      wheelTitle: "Колесо удачи",
      wheelDesc: "Один спин каждые 12 часов. Возвращайся, когда таймер дойдёт до нуля.",
      wheelFree: "БЕСПЛАТНЫЙ СПИН",
      wheelPaid: "ЖДАТЬ",
      wheelNext: "Следующий бесплатный спин",
      rewardCoins: "Монеты",
      rewardKey: "Ключ от бокса",
      rewardKeys: "Ключи от бокса",
      rewardSkin: "Новый скин",
      rewardBoost: "×2 к монетам · 60 сек",
      rewardShield: "Щит спокойствия · 60 сек",
      rewardDuplicate: "Повторный скин превращён в монеты",
      luckIncomeBoost: "Буст монет",
      luckShieldBoost: "Щит спокойствия",
      leaderboardTitle: "ТОП YOUTUBE",
      leaderboardDesc: "Глобальный рейтинг формирует YouTube из результата, который отправляет игра.",
      leaderboardMetric: "Монеты Верити за всё время",
      leaderboardMine: "Мой результат",
      leaderboardSynced: "Синхронизировано с YouTube",
      leaderboardLocal: "Локальный тест — рейтинг YouTube появится после публикации как Playable.",
      leaderboardHint: "Глобальный список игроков отображается средствами YouTube Playables.",
      session: "Сессия:",
      best: "Рекорд:",
      saved: "Сохранено",
      saving: "Сохранение…",
      localSave: "Локальное сохранение",
      tapSignal: "Нажать на Верити",
      glitchRush: "GLITCH RUSH ×4",
      upgradeClick: "Усиление клика",
      upgradeClickDesc: "Каждый клик даёт больше монет Верити.",
      upgradePassive: "Генератор монет",
      upgradePassiveDesc: "Создаёт монеты Верити, пока сессия активна.",
      upgradeCrit: "Улыбка удачи",
      upgradeCritDesc: "Повышает шанс Truth Click, который даёт ×8.",
      upgradeCombo: "Лента комбо",
      upgradeComboDesc: "Комбо дольше не сбрасывается между кликами.",
      level: "Ур.",
      buy: "КУПИТЬ",
      missionClicks: "Продолжай слушать",
      missionClicksDesc: "Нажми на сигнал 75 раз за один цикл.",
      missionEarn: "Собери шум",
      missionEarnDesc: "Заработай 5 000 эха за один цикл.",
      missionGlitch: "Сломай картинку",
      missionGlitchDesc: "Запусти Glitch Rush 3 раза.",
      reward: "Награда",
      claim: "ЗАБРАТЬ",
      claimed: "ПОЛУЧЕНО",
      loopTitle: "РАЗОРВАТЬ ЦИКЛ",
      loopDesc: "Сбрось эхо и улучшения, чтобы получить постоянные Фрагменты памяти. Каждый фрагмент навсегда увеличивает весь доход эха на 25%.",
      fragments: "Фрагменты памяти",
      nextFragments: "Фрагментов за сброс",
      loopRequirement: "Нужно 10 000 эха, заработанного в этом цикле.",
      reset: "РАЗОРВАТЬ ЦИКЛ",
      glitchIn: "Glitch Rush",
      truthClick: "ИСТИНА",
      whisper1: "ПРИВЕТ, ДРУГ!",
      whisper2: "НЕ ОТВОРАЧИВАЙСЯ.",
      whisper3: "У ТЕБЯ ОТЛИЧНО ПОЛУЧАЕТСЯ!",
      whisper4: "ЦИКЛ ЕЩЁ ТЁПЛЫЙ.",
      whisper5: "ЕЩЁ ОДИН КЛИК!",
      soundOn: "Звук включён",
      soundOff: "Звук выключен",
      coinLabel: "МОНЕТЫ ВЕРИТИ",
      shopUpgrades: "Улучшения",
      shopSkins: "Скины",
      shopExtras: "Экстрас",
      skinDefault: "Солнечная улыбка",
      skinBerry: "Верити в шляпе",
      skinMint: "Крафтовый Верити",
      skinMidnight: "Чёрно-белый Верити",
      skinEquip: "НАДЕТЬ",
      skinEquipped: "НАДЕТО",
      extraLucky: "Счастливый ореол",
      extraLuckyDesc: "+15% ко всем монетам навсегда.",
      extraCalm: "Спокойная лента",
      extraCalmDesc: "Нестабильность растёт на 20% медленнее.",
      extraMagnet: "Магнит монет",
      extraMagnetDesc: "+30% к пассивным монетам.",
      owned: "КУПЛЕНО",
      skinPrice: "Цена",
      skinFree: "БЕСПЛАТНО",
      skinLocked: "Нажми, чтобы открыть",
      startTitle: "VERITY CLICKER",
      startSubtitle: "Яркий маленький друг уже ждёт тебя.",
      startHint: "Нажми старт. Звук начнёт играть после взаимодействия.",
      startButton: "СТАРТ",
      continueButton: "ПРОДОЛЖИТЬ",
    }
  };

  const DEFAULT_STATE = () => ({
    version: SAVE_VERSION,
    echoes: 0,
    lifetimeEchoes: 0,
    totalLifetimeEchoes: 0,
    fragments: 0,
    upgrades: { click: 0, passive: 0, crit: 0, combo: 0 },
    loopStats: { clicks: 0, glitches: 0 },
    missionClaims: { clicks: false, earn: false, glitch: false },
    bestScore: 0,
    leaderboardScore: 0,
    skins: { sunshine: true, berry: false, mint: false, midnight: false },
    equippedSkin: "sunshine",
    extras: { lucky: false, calm: false, magnet: false },
    lastWheelSpin: 0,
  });

  let state = DEFAULT_STATE();
  let lang = "en";
  let t = STRINGS.en;
  let paused = false;
  let saveLoaded = false;
  let saveDirty = false;
  let saveInFlight = false;
  let audioEnabled = true;
  let localAudioMuted = false;
  let audioContext = null;
  let masterGain = null;
  let musicGain = null;
  let sfxGain = null;
  let musicStarted = false;
  let musicPulseTimer = 0;
  let musicStep = 0;
  let bgMusic = null;
  let musicUnlocked = false;
  let lastVoiceIndex = -1;
  let currentVoice = null;
  let nextVoiceAllowedAt = 0;
  const mouseClickPool = [];
  let mouseClickPoolIndex = 0;
  const activeVoiceSounds = [];
  const verityVoiceFiles = Array.from({ length: 8 }, (_, i) => `audio/click_${i + 1}.wav`);

  let comboCount = 0;
  let lastClickAt = 0;
  let corruption = 0;
  let glitchTime = 0;
  let glitchMoveCooldown = 0;
  let sessionScore = 0;
  let riskBuffTime = 0;
  let nextWhisper = 5;
  let lastFrame = performance.now();
  let autosaveTimer = 0;
  let scoreSendCooldown = 0;
  let rafId = 0;
  let lookTargetX = 0;
  let lookTargetY = 0;
  let currentLookX = 0;
  let currentLookY = 0;
  let eyeLookX = 0;
  let eyeLookY = 0;
  let blinkTimer = 1.8 + Math.random() * 2.4;
  let blinkTime = 0;
  let gameStarted = false;
  let currentShopSection = "upgrades";
  let instabilityCooling = false;
  let luckBusy = false;
  let luckResult = null;
  let wheelRotation = 0;
  let luckIncomeBoostTime = 0;
  let luckShieldTime = 0;
  let selectedSkinKey = null;
  let lastRenderedBalance = -1;

  const $ = (id) => document.getElementById(id);
  const els = {};

  function inPlayables() {
    return typeof window.ytgame !== "undefined" && window.ytgame && window.ytgame.IN_PLAYABLES_ENV;
  }

  function safeSdkCall(fn, fallback) {
    try { return fn(); } catch (_) { return fallback; }
  }

  function detectLanguage() {
    if (typeof window.ytgame !== "undefined" && window.ytgame?.system?.getLanguage) {
      const locale = safeSdkCall(() => window.ytgame.system.getLanguage(), "en");
      return String(locale || "en").toLowerCase().startsWith("ru") ? "ru" : "en";
    }
    return "en";
  }

  function cacheElements() {
    [
      "loading","loadingText","app","gameTitle","gameSubtitle","echoLabel","echoes","perSecond",
      "comboLabel","combo","truthLabel","critChance","loopLabel","loopMult","corruptionLabel",
      "corruptionText","corruptionBar","arena","whisper","orbButton","floatLayer","glitchBanner",
      "glitchTimer","tabPlay","tabUpgrades","tabMissions","tabLuck","tabLeaderboard","tabLoop","panel-upgrades","panel-missions","panel-luck","panel-leaderboard","panel-loop",
      "sessionScoreLabel","sessionScore","bestScoreLabel","bestScore","saveState","coinCounterLabel","coinCounterValue",
      "audioToggle","startScreen","startTitle","startSubtitle","startHint","startButton","glitchTransition","skinModal","skinModalClose","skinModalImage","skinModalTitle","skinModalStatus","skinModalPriceLabel","skinModalPrice","skinModalAction"
    ].forEach(id => els[id] = $(id));
  }

  function applyLanguage() {
    lang = detectLanguage();
    t = STRINGS[lang] || STRINGS.en;
    document.documentElement.lang = lang;
    els.loadingText.textContent = t.loading;
    if (els.gameTitle) els.gameTitle.textContent = t.title;
    if (els.gameSubtitle) els.gameSubtitle.textContent = t.subtitle;
    els.echoLabel.textContent = t.echoes;
    if (els.coinCounterLabel) els.coinCounterLabel.textContent = t.coinLabel;
    els.comboLabel.textContent = t.combo;
    els.truthLabel.textContent = t.truth;
    els.loopLabel.textContent = t.loop;
    els.corruptionLabel.textContent = t.instability;
    els.tabUpgrades.textContent = t.upgrades;
    els.tabMissions.textContent = t.missions;
    if (els.tabLuck) els.tabLuck.textContent = t.luckTab;
    els.tabLeaderboard.textContent = t.leaderboardTab;
    els.tabLoop.textContent = t.loopTab;
    els.sessionScoreLabel.textContent = t.session;
    els.bestScoreLabel.textContent = t.best;
    els.orbButton.setAttribute("aria-label", t.tapSignal);
    els.glitchBanner.textContent = t.glitchRush;
    if (els.startTitle) els.startTitle.textContent = t.startTitle;
    if (els.startSubtitle) els.startSubtitle.textContent = t.startSubtitle;
    if (els.startHint) els.startHint.textContent = t.startHint;
    if (els.startButton) els.startButton.textContent = hasProgress() ? t.continueButton : t.startButton;
    updateAudioButton();
  }

  function formatNumber(n) {
    if (!Number.isFinite(n)) return "0";
    const abs = Math.abs(n);
    if (abs < 1000) return Math.floor(n).toLocaleString(lang === "ru" ? "ru-RU" : "en-US");
    const units = [[1e12,"T"],[1e9,"B"],[1e6,"M"],[1e3,"K"]];
    for (const [v,u] of units) {
      if (abs >= v) {
        const val = n / v;
        return `${val >= 100 ? val.toFixed(0) : val >= 10 ? val.toFixed(1) : val.toFixed(2)}${u}`;
      }
    }
    return String(Math.floor(n));
  }


  const balanceGlyphFiles = {
    "0":"assets/balance_font/0.png","1":"assets/balance_font/1.png","2":"assets/balance_font/2.png","3":"assets/balance_font/3.png","4":"assets/balance_font/4.png",
    "5":"assets/balance_font/5.png","6":"assets/balance_font/6.png","7":"assets/balance_font/7.png","8":"assets/balance_font/8.png","9":"assets/balance_font/9.png",
    ".":"assets/balance_font/dot.png",",":"assets/balance_font/comma.png","K":"assets/balance_font/K.png","M":"assets/balance_font/M.png","B":"assets/balance_font/B.png","T":"assets/balance_font/T.png"
  };

  function formatFullBalance(value) {
    if (!Number.isFinite(value)) return "0";
    const whole = Math.max(0, Math.floor(value));
    return String(whole).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function formatCompactBalance(value) {
    if (!Number.isFinite(value)) return "0";
    const n = Math.max(0, value);
    const units = [[1e12, "T"], [1e9, "B"], [1e6, "M"], [1e3, "K"]];
    for (const [size, suffix] of units) {
      if (n >= size) {
        const scaled = n / size;
        const decimals = scaled < 100 ? 1 : 0;
        let text = scaled.toFixed(decimals);
        if (text.endsWith(".0")) text = text.slice(0, -2);
        return text + suffix;
      }
    }
    return String(Math.floor(n));
  }

  function renderBalanceGlyphs(value) {
    const textValue = formatCompactBalance(value);
    return Array.from(textValue).map(ch => {
      if (ch === ".") return `<span class="balance-decimal" aria-hidden="true">.</span>`;
      const src = balanceGlyphFiles[ch];
      return src ? `<img class="balance-glyph" src="${src}" alt="${ch}">` : `<span class="balance-fallback">${ch}</span>`;
    }).join("");
  }

  function hasProgress() {
    return !!(state.totalLifetimeEchoes > 0 || state.fragments > 0 || state.bestScore > 0 || state.loopStats.clicks > 0);
  }

  function permanentMultiplier() { return 1 + state.fragments * 0.25; }
  function extraIncomeMultiplier() { return (state.extras.lucky ? 1.15 : 1) * (luckIncomeBoostTime > 0 ? 2 : 1); }
  function passiveBonusMultiplier() { return state.extras.magnet ? 1.3 : 1; }
  function instabilityMultiplier() { return (state.extras.calm ? 0.8 : 1) * (luckShieldTime > 0 ? 0.5 : 1); }
  function clickPower() { return (1 + state.upgrades.click * 1.15) * permanentMultiplier(); }
  function passivePerSecond() {
    const lvl = state.upgrades.passive;
    return lvl === 0 ? 0 : (0.75 * lvl * (1 + lvl * 0.16)) * permanentMultiplier() * passiveBonusMultiplier();
  }
  function critChance() { return Math.min(0.05 + state.upgrades.crit * 0.0225, 0.35); }
  function comboWindowMs() { return 900 + state.upgrades.combo * 130; }
  function comboMultiplier() { return 1 + Math.min(comboCount, 30) * 0.04; }
  function glitchMultiplier() { return glitchTime > 0 ? 4 : 1; }
  function riskMultiplier() { return riskBuffTime > 0 ? 2 : 1; }

  function upgradeCost(key) {
    const level = state.upgrades[key];
    const base = { click: 25, passive: 70, crit: 140, combo: 110 }[key];
    const growth = { click: 1.63, passive: 1.72, crit: 1.82, combo: 1.68 }[key];
    return Math.floor(base * Math.pow(growth, level));
  }

  function addEchoes(amount) {
    if (!Number.isFinite(amount) || amount <= 0) return;
    amount *= extraIncomeMultiplier();
    state.echoes += amount;
    state.lifetimeEchoes += amount;
    state.totalLifetimeEchoes += amount;
    state.leaderboardScore = Math.max(state.leaderboardScore || 0, Math.floor(state.totalLifetimeEchoes));
    sessionScore += amount;
    state.bestScore = Math.max(state.bestScore, Math.floor(sessionScore));
    saveDirty = true;
  }

  function canPlayAudio() {
    return audioEnabled && !localAudioMuted;
  }

  function updateAudioButton() {
    if (!els.audioToggle) return;
    const enabled = canPlayAudio();
    els.audioToggle.textContent = enabled ? "🔊" : "🔇";
    els.audioToggle.classList.toggle("is-muted", !enabled);
    els.audioToggle.setAttribute("aria-label", enabled ? t.soundOff : t.soundOn);
    els.audioToggle.title = enabled ? t.soundOff : t.soundOn;
  }

  function initAudio() {
    if (audioContext) return;
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = audioContext.createGain();
      musicGain = audioContext.createGain();
      sfxGain = audioContext.createGain();
      masterGain.gain.value = 0.72;
      musicGain.gain.value = 0.095;
      sfxGain.gain.value = 0.7;
      musicGain.connect(masterGain);
      sfxGain.connect(masterGain);
      masterGain.connect(audioContext.destination);
    } catch (_) {
      audioContext = null;
      masterGain = musicGain = sfxGain = null;
    }
  }

  function resumeAudio() {
    if (!canPlayAudio()) return;
    initAudio();
    if (!audioContext) return;
    if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
  }

  function scheduleTone(freq, duration, type = "sine", volume = 0.05, delay = 0, endFreq = null, bus = sfxGain) {
    if (!canPlayAudio()) return;
    resumeAudio();
    if (!audioContext || !bus) return;
    const now = audioContext.currentTime + delay;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(1, freq), now);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), now + duration);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, volume), now + Math.min(0.025, duration * 0.2));
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(bus);
    osc.start(now);
    osc.stop(now + duration + 0.03);
  }

  function ensureMediaAudio() {
    if (!bgMusic) {
      bgMusic = new Audio();
      bgMusic.src = "audio/music.mp3";
      bgMusic.loop = true;
      bgMusic.preload = "auto";
      bgMusic.volume = 0.26;
      bgMusic.addEventListener("error", () => {
        // Fallback to the original user-provided M4A if MP3 decoding is unavailable.
        if (!bgMusic.src.endsWith("music.m4a")) {
          bgMusic.src = "audio/music.m4a";
          bgMusic.load();
        }
      });
    }
  }

  function stopVoiceSounds() {
    if (currentVoice) {
      try { currentVoice.pause(); currentVoice.currentTime = 0; } catch (_) {}
      currentVoice = null;
    }
    while (activeVoiceSounds.length) {
      const a = activeVoiceSounds.pop();
      try { a.pause(); a.currentTime = 0; } catch (_) {}
    }
    nextVoiceAllowedAt = Date.now() + 1000;
  }

  function ensureMouseClickPool() {
    if (mouseClickPool.length) return;
    for (let i = 0; i < 4; i += 1) {
      const a = new Audio("audio/mouse_click.wav");
      a.preload = "auto";
      a.volume = 0.18;
      mouseClickPool.push(a);
    }
  }

  function syncMediaAudio() {
    ensureMediaAudio();
    if (!canPlayAudio() || paused) {
      if (bgMusic) bgMusic.pause();
      return;
    }
    if (musicUnlocked && bgMusic?.paused) bgMusic.play().catch(() => {});
  }

  function startMusic() {
    musicUnlocked = true;
    ensureMediaAudio();
    syncMediaAudio();
  }

  function playMouseClickSound() {
    if (!canPlayAudio()) return;
    startMusic();
    ensureMouseClickPool();
    if (!mouseClickPool.length) return;
    const tick = mouseClickPool[mouseClickPoolIndex];
    mouseClickPoolIndex = (mouseClickPoolIndex + 1) % mouseClickPool.length;
    try {
      tick.pause();
      tick.currentTime = 0;
      const p = tick.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    } catch (_) {}
  }

  function playVerityClickSound() {
    if (!canPlayAudio()) return;
    startMusic();
    const now = Date.now();
    if (currentVoice || now < nextVoiceAllowedAt) return;

    let index = Math.floor(Math.random() * verityVoiceFiles.length);
    if (verityVoiceFiles.length > 1 && index === lastVoiceIndex) index = (index + 1 + Math.floor(Math.random() * (verityVoiceFiles.length - 1))) % verityVoiceFiles.length;
    lastVoiceIndex = index;

    const voice = new Audio(verityVoiceFiles[index]);
    voice.preload = "auto";
    voice.volume = 0.78;
    currentVoice = voice;
    activeVoiceSounds.length = 0;
    activeVoiceSounds.push(voice);

    const cleanup = () => {
      const pos = activeVoiceSounds.indexOf(voice);
      if (pos >= 0) activeVoiceSounds.splice(pos, 1);
      if (currentVoice === voice) currentVoice = null;
      nextVoiceAllowedAt = Date.now() + 1000;
    };

    voice.addEventListener("ended", cleanup, { once: true });
    voice.addEventListener("error", cleanup, { once: true });
    voice.play().catch(cleanup);
  }

  function playSfx(name) {
    if (!canPlayAudio()) return;
    resumeAudio();
    startMusic();
    if (!audioContext) return;

    if (name === "click") {
      scheduleTone(235 + Math.min(comboCount, 24) * 6, 0.075, "sine", 0.036, 0, 190 + Math.min(comboCount, 24) * 4);
    } else if (name === "crit") {
      scheduleTone(620, 0.24, "triangle", 0.105, 0, 920);
      scheduleTone(930, 0.18, "sine", 0.045, 0.035, 1240);
    } else if (name === "buy") {
      scheduleTone(330, 0.11, "triangle", 0.055);
      scheduleTone(495, 0.14, "triangle", 0.05, 0.07);
    } else if (name === "mission") {
      scheduleTone(523.25, 0.18, "sine", 0.055);
      scheduleTone(659.25, 0.18, "sine", 0.055, 0.09);
      scheduleTone(783.99, 0.28, "sine", 0.06, 0.18);
    } else if (name === "glitch") {
      scheduleTone(78, 0.72, "sawtooth", 0.08, 0, 42);
      scheduleTone(710, 0.21, "square", 0.034, 0.04, 240);
      scheduleTone(1180, 0.12, "square", 0.02, 0.21, 420);
    } else if (name === "risk") {
      scheduleTone(145, 0.34, "sawtooth", 0.07, 0, 290);
      scheduleTone(360, 0.21, "square", 0.025, 0.08, 170);
    } else if (name === "safe") {
      scheduleTone(329.63, 0.2, "sine", 0.045);
      scheduleTone(440, 0.32, "sine", 0.05, 0.11);
    } else if (name === "prestige") {
      [130.81, 164.81, 196, 261.63].forEach((f, i) => scheduleTone(f, 1.15, i % 2 ? "triangle" : "sine", 0.04, i * 0.055, f * 1.01));
    }
  }

  function toggleLocalAudio() {
    localAudioMuted = !localAudioMuted;
    if (localAudioMuted) {
      if (audioContext?.state === "running") audioContext.suspend().catch(() => {});
      if (bgMusic) bgMusic.pause();
      stopVoiceSounds();
    } else {
      audioEnabled = inPlayables() ? audioEnabled : true;
      resumeAudio();
      ensureMediaAudio();
      musicUnlocked = true;
      if (bgMusic) {
        const p = bgMusic.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
      syncMediaAudio();
      // Audible confirmation that the sound button really switched on.
      scheduleTone(440, 0.08, "sine", 0.045);
      scheduleTone(660, 0.11, "sine", 0.035, 0.06);
    }
    updateAudioButton();
  }

  function pulseBalance() {
    const counter = document.getElementById("coinCounter");
    if (!counter || document.body.classList.contains("glitch-blackout")) return;
    counter.classList.remove("balance-pulse");
    void counter.offsetWidth;
    counter.classList.add("balance-pulse");
  }

  function spawnCoinVisuals(clientX, clientY) {
    if (document.body.classList.contains("glitch-blackout") || !els.arena) return;
    const rect = els.arena.getBoundingClientRect();
    const startX = (clientX ?? (rect.left + rect.width / 2)) - rect.left;
    const startY = (clientY ?? (rect.top + rect.height / 2)) - rect.top;

    for (let i = 0; i < 4; i += 1) {
      const p = document.createElement("span");
      p.className = "coin-spark";
      p.style.left = `${startX}px`;
      p.style.top = `${startY}px`;
      p.style.setProperty("--coin-dx", `${(Math.random() - 0.5) * 90}px`);
      p.style.setProperty("--coin-dy", `${-35 - Math.random() * 65}px`);
      p.style.setProperty("--coin-delay", `${i * 24}ms`);
      els.floatLayer.appendChild(p);
      window.setTimeout(() => p.remove(), 760);
    }

    const counter = document.getElementById("coinCounter");
    if (counter) {
      const c = counter.getBoundingClientRect();
      const targetX = (c.left + c.width / 2) - rect.left;
      const targetY = (c.top + c.height / 2) - rect.top;
      const fly = document.createElement("span");
      fly.className = "coin-fly";
      fly.style.left = `${startX}px`;
      fly.style.top = `${startY}px`;
      fly.style.setProperty("--fly-x", `${targetX - startX}px`);
      fly.style.setProperty("--fly-y", `${targetY - startY}px`);
      els.floatLayer.appendChild(fly);
      window.setTimeout(() => { fly.remove(); pulseBalance(); }, 650);
    }
  }

  function spawnFloat(text, clientX, clientY, crit = false) {
    const arenaRect = els.arena.getBoundingClientRect();
    const x = clientX ? clientX - arenaRect.left : arenaRect.width / 2;
    const y = clientY ? clientY - arenaRect.top : arenaRect.height / 2;
    const node = document.createElement("div");
    node.className = `float-number${crit ? " crit" : ""}`;
    node.textContent = text;
    node.style.left = `${Math.max(20, Math.min(arenaRect.width - 20, x))}px`;
    node.style.top = `${Math.max(20, Math.min(arenaRect.height - 20, y))}px`;
    els.floatLayer.appendChild(node);
    window.setTimeout(() => node.remove(), 720);
  }

  function moveOrbForGlitch() {
    if (glitchTime <= 0 || !els.orbButton) return;
    // Keep the full character visible while still making the movement feel frantic.
    const x = 25 + Math.random() * 50;
    const y = 30 + Math.random() * 40;
    // CSS centering uses !important, so Glitch Rush must override it with the same priority.
    els.orbButton.style.setProperty("left", `${x}%`, "important");
    els.orbButton.style.setProperty("top", `${y}%`, "important");
    els.orbButton.classList.remove("glitch-jump");
    void els.orbButton.offsetWidth;
    els.orbButton.classList.add("glitch-jump");
  }

  function resetOrbPosition() {
    if (!els.orbButton) return;
    els.orbButton.style.setProperty("left", "50%", "important");
    els.orbButton.style.setProperty("top", "52%", "important");
    els.orbButton.classList.remove("glitch-jump");
    glitchMoveCooldown = 0;
  }

  function triggerGlitch() {
    corruption = 0;
    glitchTime = 8;
    document.body.classList.add("glitch-blackout");
    document.body.classList.add("glitch-entering");
    els.glitchTransition?.classList.add("is-active");
    state.loopStats.glitches += 1;
    playSfx("glitch");
    els.arena.classList.add("glitching");
    els.glitchBanner.classList.add("show");
    glitchMoveCooldown = 0.12;
    moveOrbForGlitch();
    els.whisper.textContent = lang === "ru" ? "НЕ ОТВОДИ ВЗГЛЯД." : "DON'T LOOK AWAY.";
    saveDirty = true;
    window.setTimeout(() => { document.body.classList.remove("glitch-entering"); els.glitchTransition?.classList.remove("is-active"); }, 820);
    window.setTimeout(() => els.glitchBanner.classList.remove("show"), 1450);
  }

  function clickSignal(ev) {
    if (paused) return;
    if (ev?.clientX != null && ev?.clientY != null) setLookFromPoint(ev.clientX, ev.clientY);
    const now = performance.now();
    comboCount = now - lastClickAt <= comboWindowMs() ? comboCount + 1 : 1;
    lastClickAt = now;

    const crit = Math.random() < critChance();
    let amount = clickPower() * comboMultiplier() * glitchMultiplier() * riskMultiplier();
    if (crit) amount *= 8;
    addEchoes(amount);
    state.loopStats.clicks += 1;
    if (glitchTime <= 0) {
      corruption = Math.min(100, corruption + (1.8 + Math.random() * 1.3) * instabilityMultiplier());
    }

    spawnFloat(`${crit ? t.truthClick + " " : "+"}${formatNumber(amount)}`, ev?.clientX, ev?.clientY, crit);
    spawnCoinVisuals(ev?.clientX, ev?.clientY);
    playMouseClickSound();
    playVerityClickSound();
    if (crit) playSfx("crit");
    els.orbButton.classList.remove("pulse-hit");
    void els.orbButton.offsetWidth;
    els.orbButton.classList.add("pulse-hit");
    if (glitchTime > 0) moveOrbForGlitch();
    if (corruption >= 100 && glitchTime <= 0) triggerGlitch();
    renderHUD();
    renderPanels();
  }

  function skinCost(key) {
    return { sunshine: 0, berry: 900, mint: 1600, midnight: 2600 }[key] || 0;
  }

  function extraCost(key) {
    return { lucky: 2200, calm: 1800, magnet: 2400 }[key] || 0;
  }

  function setSkin(key) {
    if (!state.skins[key]) return;
    state.equippedSkin = key;
    document.body.dataset.skin = key;
    saveDirty = true;
  }

  function buySkin(key) {
    if (state.skins[key]) {
      setSkin(key);
      renderAll();
      saveGame();
      return;
    }
    const cost = skinCost(key);
    if (state.echoes < cost) return;
    state.echoes -= cost;
    state.skins[key] = true;
    setSkin(key);
    playSfx("buy");
    renderAll();
    saveGame();
  }

  function buyExtra(key) {
    if (state.extras[key]) return;
    const cost = extraCost(key);
    if (state.echoes < cost) return;
    state.echoes -= cost;
    state.extras[key] = true;
    playSfx("buy");
    saveDirty = true;
    renderAll();
    saveGame();
  }

  function buyUpgrade(key) {
    const cost = upgradeCost(key);
    if (state.echoes < cost) return;
    state.echoes -= cost;
    state.upgrades[key] += 1;
    playSfx("buy");
    saveDirty = true;
    renderAll();
    saveGame();
  }

  const missionDefs = [
    { id: "clicks", target: 75, reward: 420, progress: () => state.loopStats.clicks, title: () => t.missionClicks, desc: () => t.missionClicksDesc },
    { id: "earn", target: 5000, reward: 1200, progress: () => state.lifetimeEchoes, title: () => t.missionEarn, desc: () => t.missionEarnDesc },
    { id: "glitch", target: 3, reward: 1800, progress: () => state.loopStats.glitches, title: () => t.missionGlitch, desc: () => t.missionGlitchDesc },
  ];

  function claimMission(id) {
    const m = missionDefs.find(x => x.id === id);
    if (!m || state.missionClaims[id] || m.progress() < m.target) return;
    state.missionClaims[id] = true;
    addEchoes(m.reward);
    playSfx("mission");
    renderAll();
    saveGame();
  }

  function prestigeReward() {
    if (state.lifetimeEchoes < 10000) return 0;
    return Math.max(1, Math.floor(Math.sqrt(state.lifetimeEchoes / 10000)));
  }

  function breakLoop() {
    const gain = prestigeReward();
    if (gain <= 0) return;
    state.fragments += gain;
    playSfx("prestige");
    document.body.classList.remove("glitch-blackout");
    document.body.classList.remove("glitch-entering");
    document.body.classList.remove("instability-cooling");
    els.glitchTransition?.classList.remove("is-active");
    state.echoes = 0;
    state.lifetimeEchoes = 0;
    state.upgrades = { click: 0, passive: 0, crit: 0, combo: 0 };
    state.loopStats = { clicks: 0, glitches: 0 };
    state.missionClaims = { clicks: false, earn: false, glitch: false };
    comboCount = 0;
    corruption = 0;
    glitchTime = 0;
    instabilityCooling = false;
    document.body.classList.remove("instability-cooling");
    riskBuffTime = 0;
    resetOrbPosition();
    els.arena.classList.remove("glitching");
    saveDirty = true;
    renderAll();
    saveGame();
  }



  function setLookFromPoint(clientX, clientY) {
    const rect = els.arena.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((clientY - rect.top) / rect.height) * 2 - 1;
    lookTargetX = Math.max(-1, Math.min(1, nx)) * 0.9;
    lookTargetY = Math.max(-1, Math.min(1, ny)) * 0.9;
  }

  function resetLookTarget() {
    lookTargetX = 0;
    lookTargetY = 0;
  }

  function updateLook(dt) {
    const ease = Math.min(1, dt * 10.5);
    currentLookX += (lookTargetX - currentLookX) * ease;
    currentLookY += (lookTargetY - currentLookY) * ease;
    eyeLookX += (((lookTargetX * 1.35)) - eyeLookX) * Math.min(1, dt * 13.5);
    eyeLookY += (((lookTargetY * 1.35)) - eyeLookY) * Math.min(1, dt * 13.5);
    els.arena.style.setProperty('--look-x', currentLookX.toFixed(3));
    els.arena.style.setProperty('--look-y', currentLookY.toFixed(3));
    els.arena.style.setProperty('--eye-x', Math.max(-1, Math.min(1, eyeLookX)).toFixed(3));
    els.arena.style.setProperty('--eye-y', Math.max(-1, Math.min(1, eyeLookY)).toFixed(3));

    if (glitchTime <= 0) {
      if (blinkTime > 0) {
        blinkTime = Math.max(0, blinkTime - dt);
      } else {
        blinkTimer -= dt;
        if (blinkTimer <= 0) {
          blinkTime = 0.14;
          blinkTimer = 2.2 + Math.random() * 3.4;
        }
      }
    } else {
      blinkTime = 0;
    }
    const blinkOpen = blinkTime > 0 ? Math.max(0.05, blinkTime / 0.14) : 1;
    els.arena.style.setProperty('--blink-open', blinkOpen.toFixed(3));
  }

  function getWhisperOptions() {
    if (lang === 'ru') {
      if (glitchTime > 0) return ['НЕ ОТВОДИ ВЗГЛЯД.', 'Я ВИЖУ ТЕБЯ.', 'ТЕПЕРЬ СМОТРИ НА МЕНЯ.', 'ЭТО ЕЩЁ НЕ КОНЕЦ.', 'ТЫ СЛИШКОМ ДАЛЕКО ЗАШЁЛ.'];
      if (corruption >= 70) return ['Я РЯДОМ.', 'НЕ МОРГАЙ.', 'Я ПОМНЮ ТВОИ КАСАНИЯ.', 'НЕ ПЫТАЙСЯ УЙТИ.', 'ТЫ МЕНЯ СЛЫШИШЬ?'];
      if (corruption >= 35) return [t.whisper1, t.whisper2, t.whisper3, 'МНЕ НРАВИТСЯ, КОГДА ТЫ СМОТРИШЬ.', 'ОСТАНЬСЯ ЕЩЁ НЕМНОГО.'];
      return [t.whisper1, t.whisper2, t.whisper3, t.whisper4, t.whisper5];
    }
    if (glitchTime > 0) return ["DON'T LOOK AWAY.", 'I CAN SEE YOU.', 'LOOK AT ME NOW.', 'THIS IS NOT THE END.', 'YOU WENT TOO FAR.'];
    if (corruption >= 70) return ['I AM CLOSE.', "DON'T BLINK.", 'I REMEMBER YOUR TOUCH.', "DON'T TRY TO LEAVE.", 'CAN YOU HEAR ME?'];
    if (corruption >= 35) return [t.whisper1, t.whisper2, t.whisper3, 'I LIKE IT WHEN YOU WATCH.', 'STAY A LITTLE LONGER.'];
    return [t.whisper1, t.whisper2, t.whisper3, t.whisper4, t.whisper5];
  }

  function startGame() {
    if (gameStarted) return;
    gameStarted = true;
    paused = false;
    els.startScreen?.classList.add('is-hidden');
    document.body.classList.add('game-started');
    resumeAudio();
    startMusic();
    lastFrame = performance.now();
    if (!rafId) rafId = requestAnimationFrame(frame);
  }

  function renderHUD() {
    els.echoes.textContent = formatNumber(state.echoes);
    if (els.coinCounterValue) {
      const wholeBalance = Math.floor(state.echoes);
      els.coinCounterValue.innerHTML = renderBalanceGlyphs(state.echoes);
      els.coinCounterValue.setAttribute("aria-label", formatFullBalance(state.echoes));
      if (lastRenderedBalance >= 0 && wholeBalance !== lastRenderedBalance && gameStarted && !document.body.classList.contains("glitch-blackout")) {
        els.coinCounterValue.classList.add("number-pop");
        window.clearTimeout(els.coinCounterValue._popTimer);
        els.coinCounterValue._popTimer = window.setTimeout(() => els.coinCounterValue.classList.remove("number-pop"), 140);
      }
      lastRenderedBalance = wholeBalance;
    }
    document.body.dataset.skin = state.equippedSkin || "sunshine";
    const activeSkinAsset = SKIN_ASSETS[state.equippedSkin] || SKIN_ASSETS.sunshine;
    const activeIconAsset = SKIN_ICON_ASSETS[state.equippedSkin] || activeSkinAsset;
    const normalFace = document.querySelector(".normal-face");
    const coinIcon = document.querySelector(".coin-counter-icon");
    if (normalFace && normalFace.getAttribute("src") !== activeSkinAsset) normalFace.setAttribute("src", activeSkinAsset);
    if (coinIcon && coinIcon.getAttribute("src") !== activeIconAsset) coinIcon.setAttribute("src", activeIconAsset);
    els.perSecond.textContent = formatNumber(passivePerSecond());
    els.combo.textContent = `x${comboMultiplier().toFixed(2)}`;
    els.critChance.textContent = `${Math.round(critChance() * 100)}%`;
    els.loopMult.textContent = `x${permanentMultiplier().toFixed(2)}`;
    els.corruptionText.textContent = `${Math.floor(corruption)}%`;
    els.corruptionBar.style.width = `${Math.max(0, Math.min(100, corruption))}%`;
    els.corruptionBar.parentElement.setAttribute("aria-valuenow", String(Math.floor(corruption)));
    els.glitchTimer.textContent = glitchTime > 0 ? `${t.glitchIn}: ${glitchTime.toFixed(1)}s ×4` : riskBuffTime > 0 ? `×2: ${riskBuffTime.toFixed(1)}s` : "";
    els.sessionScore.textContent = formatNumber(sessionScore);
    els.bestScore.textContent = formatNumber(state.bestScore);
    const uneasy = corruption >= 34;
    const disturbed = corruption >= 72 || glitchTime > 0;
    const creepOpacity = glitchTime > 0 ? 1 : Math.max(0, Math.min(0.42, ((corruption - 45) / 55) * 0.42));
    els.arena.style.setProperty('--creep-opacity', String(Math.max(0, Math.min(1, creepOpacity)).toFixed(3)));
    els.arena.classList.toggle("uneasy", uneasy);
    els.arena.classList.toggle("disturbed", disturbed);
  }

  function upgradeCard(key, title, desc) {
    const cost = upgradeCost(key);
    return `<article class="card">
      <div class="card-head"><div><h3>${title}</h3><p>${desc}</p></div><span class="level">${t.level} ${state.upgrades[key]}</span></div>
      <button class="buy-btn" data-buy="${key}" ${state.echoes < cost ? "disabled" : ""}>${t.buy} · ${formatNumber(cost)}</button>
    </article>`;
  }

  function renderUpgrades() {
    const skinCard = (key, title) => {
      const owned = !!state.skins[key];
      const equipped = state.equippedSkin === key;
      const cost = skinCost(key);
      const preview = SKIN_PREVIEW_ASSETS[key] || SKIN_ASSETS[key] || SKIN_ASSETS.sunshine;
      const priceFooter = !owned ? `<span class="skin-tile-footer">${formatNumber(cost)} 🪙</span>` : "";
      const ownedBadge = equipped ? `<span class="skin-tile-badge is-equipped">${t.skinEquipped}</span>` : owned ? `<span class="skin-tile-badge">${t.owned}</span>` : "";
      return `<button class="skin-tile ${equipped ? "is-equipped" : ""}" data-skin-tile="${key}" type="button" aria-label="${title}">
        ${ownedBadge}
        <span class="skin-tile-art-wrap"><img class="skin-tile-art" src="${preview}" alt="" aria-hidden="true" /></span>
        <span class="skin-tile-name">${title}</span>
        ${priceFooter}
      </button>`;
    };
    const extraCard = (key, title, desc) => {
      const owned = !!state.extras[key];
      const cost = extraCost(key);
      return `<article class="card">
        <div class="card-head"><div><h3>${title}</h3><p>${desc}</p></div><span class="level">${owned ? "✨" : "➕"}</span></div>
        <button class="buy-btn" data-buy-extra="${key}" ${owned || state.echoes < cost ? "disabled" : ""}>${owned ? t.owned : `${t.buy} · ${formatNumber(cost)}`}</button>
      </article>`;
    };

    const nav = `<div class="shop-subtabs" role="tablist" aria-label="Shop categories">
      <button class="shop-subtab ${currentShopSection === "upgrades" ? "is-active" : ""}" data-shop-tab="upgrades" type="button">${t.shopUpgrades}</button>
      <button class="shop-subtab ${currentShopSection === "skins" ? "is-active" : ""}" data-shop-tab="skins" type="button">${t.shopSkins}</button>
      <button class="shop-subtab ${currentShopSection === "extras" ? "is-active" : ""}" data-shop-tab="extras" type="button">${t.shopExtras}</button>
    </div>`;

    let content = "";
    if (currentShopSection === "upgrades") {
      content = `<div class="shop-section"><h3 class="shop-heading">${t.shopUpgrades}</h3>${[
        upgradeCard("click", t.upgradeClick, t.upgradeClickDesc),
        upgradeCard("passive", t.upgradePassive, t.upgradePassiveDesc),
        upgradeCard("crit", t.upgradeCrit, t.upgradeCritDesc),
        upgradeCard("combo", t.upgradeCombo, t.upgradeComboDesc),
      ].join("")}</div>`;
    } else if (currentShopSection === "skins") {
      content = `<div class="shop-section"><h3 class="shop-heading">${t.shopSkins}</h3><div class="skin-grid">${[
        skinCard("sunshine", t.skinDefault),
        skinCard("berry", t.skinBerry),
        skinCard("mint", t.skinMint),
        skinCard("midnight", t.skinMidnight),
      ].join("")}</div></div>`;
    } else {
      content = `<div class="shop-section"><h3 class="shop-heading">${t.shopExtras}</h3>${[
        extraCard("lucky", t.extraLucky, t.extraLuckyDesc),
        extraCard("calm", t.extraCalm, t.extraCalmDesc),
        extraCard("magnet", t.extraMagnet, t.extraMagnetDesc),
      ].join("")}</div>`;
    }

    els["panel-upgrades"].innerHTML = nav + content;
  }

  function renderMissions() {
    els["panel-missions"].innerHTML = missionDefs.map(m => {
      const p = Math.min(m.target, m.progress());
      const pct = Math.max(0, Math.min(100, (p / m.target) * 100));
      const done = p >= m.target;
      const claimed = state.missionClaims[m.id];
      return `<article class="card">
        <div class="card-head"><div><h3>${m.title()}</h3><p>${m.desc()}</p></div><span class="level">${formatNumber(p)} / ${formatNumber(m.target)}</span></div>
        <div class="progress-line"><span style="width:${pct}%"></span></div>
        <p>${t.reward}: +${formatNumber(m.reward)} ${t.echoes.toLowerCase()}</p>
        <button class="claim-btn" data-claim="${m.id}" ${!done || claimed ? "disabled" : ""}>${claimed ? t.claimed : t.claim}</button>
      </article>`;
    }).join("");
  }


  function renderLeaderboard() {
    const score = Math.max(0, Math.floor(state.leaderboardScore || state.totalLifetimeEchoes || 0));
    const statusClass = inPlayables() ? "yt-status live" : "yt-status local";
    const statusText = inPlayables() ? t.leaderboardSynced : t.leaderboardLocal;
    els["panel-leaderboard"].innerHTML = `<div class="leaderboard-wrap">
      <div class="yt-leaderboard-hero">
        <div class="yt-crown" aria-hidden="true">♛</div>
        <div>
          <div class="yt-title">${t.leaderboardTitle}</div>
          <p>${t.leaderboardDesc}</p>
        </div>
      </div>
      <article class="card leaderboard-my-score">
        <div class="leaderboard-score-row">
          <span>${t.leaderboardMine}</span>
          <strong>${formatNumber(score)}</strong>
        </div>
        <div class="leaderboard-metric">${t.leaderboardMetric}</div>
      </article>
      <div class="${statusClass}"><span class="yt-status-dot"></span>${statusText}</div>
      <p class="leaderboard-hint">${t.leaderboardHint}</p>
    </div>`;
  }

  const WHEEL_FREE_MS = 12 * 60 * 60 * 1000;

  function formatLuckTime(ms) {
    const sec = Math.max(0, Math.ceil(ms / 1000));
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m`;
    if (m > 0) return `${m}m ${String(s).padStart(2, "0")}s`;
    return `${s}s`;
  }

  function wheelIsFree() {
    return !state.lastWheelSpin || Date.now() - state.lastWheelSpin >= WHEEL_FREE_MS;
  }

  function randomUnownedSkin() {
    const keys = Object.keys(state.skins).filter(k => !state.skins[k]);
    return keys.length ? keys[Math.floor(Math.random() * keys.length)] : null;
  }

  function addDirectCoins(amount) {
    amount = Math.max(0, Math.floor(amount));
    state.echoes += amount;
    state.lifetimeEchoes += amount;
    state.totalLifetimeEchoes += amount;
    state.leaderboardScore = Math.max(state.leaderboardScore || 0, Math.floor(state.totalLifetimeEchoes));
    sessionScore += amount;
    state.bestScore = Math.max(state.bestScore, sessionScore);
    saveDirty = true;
  }

  function makeReward(type, amount = 0, extra = null) {
    return { type, amount, extra };
  }

  function applyLuckReward(reward) {
    if (!reward) return;
    if (reward.type === "coins") addDirectCoins(reward.amount);
    if (reward.type === "boost") luckIncomeBoostTime = Math.max(luckIncomeBoostTime, reward.amount);
    if (reward.type === "shield") luckShieldTime = Math.max(luckShieldTime, reward.amount);
    if (reward.type === "skin") {
      const skin = reward.extra || randomUnownedSkin();
      if (skin) {
        state.skins[skin] = true;
        reward.extra = skin;
        saveDirty = true;
      } else {
        reward.type = "coins";
        reward.amount = 3000;
        reward.extra = "duplicate";
        addDirectCoins(3000);
      }
    }
  }

  function rewardLabel(reward) {
    if (!reward) return "";
    if (reward.type === "coins") return `🪙 ${formatNumber(reward.amount)} ${t.rewardCoins}`;
    if (reward.type === "boost") return `⚡ ${t.rewardBoost}`;
    if (reward.type === "shield") return `🛡️ ${t.rewardShield}`;
    if (reward.type === "skin") {
      const skinName = reward.extra ? ({sunshine:t.skinDefault,berry:t.skinBerry,mint:t.skinMint,midnight:t.skinMidnight}[reward.extra] || t.rewardSkin) : t.rewardSkin;
      return `🎨 ${t.rewardSkin}: ${skinName}`;
    }
    return "";
  }

  function rollWheelReward() {
    const r = Math.random();
    if (r < .24) return { reward: makeReward("coins", 350), segment: 0 };
    if (r < .45) return { reward: makeReward("coins", 750), segment: 1 };
    if (r < .58) return { reward: makeReward("boost", 60), segment: 2 };
    if (r < .72) return { reward: makeReward("coins", 1200), segment: 3 };
    if (r < .84) return { reward: makeReward("coins", 1500), segment: 4 };
    if (r < .92) return { reward: makeReward("shield", 60), segment: 5 };
    if (r < .98) return { reward: makeReward("coins", 2500), segment: 6 };
    return { reward: makeReward("skin", 0, randomUnownedSkin()), segment: 7 };
  }

  function spinFortuneWheel() {
    if (luckBusy || !wheelIsFree()) return;
    state.lastWheelSpin = Date.now();
    saveDirty = true;
    luckBusy = true;
    luckResult = null;
    const rolled = rollWheelReward();
    const wheel = document.getElementById("fortuneWheel");
    const segmentAngle = 360 / 8;
    const target = 360 - (rolled.segment * segmentAngle + segmentAngle / 2);
    wheelRotation += 1440 + target;
    if (wheel) {
      wheel.style.setProperty("--wheel-rotation", `${wheelRotation}deg`);
      wheel.classList.add("is-spinning");
    }
    window.setTimeout(() => {
      applyLuckReward(rolled.reward);
      luckResult = { kind: "wheel", rewards: [rolled.reward] };
      luckBusy = false;
      renderLuck();
      renderHUD();
      playSfx("buy");
      saveGame();
    }, 2400);
  }

  function renderLuck() {
    const panel = els["panel-luck"];
    if (!panel) return;
    const free = wheelIsFree();
    const untilFree = Math.max(0, WHEEL_FREE_MS - (Date.now() - (state.lastWheelSpin || 0)));
    const boostBadges = [
      luckIncomeBoostTime > 0 ? `<span class="luck-badge">⚡ ${t.luckIncomeBoost}: ${Math.ceil(luckIncomeBoostTime)}s</span>` : "",
      luckShieldTime > 0 ? `<span class="luck-badge">🛡️ ${t.luckShieldBoost}: ${Math.ceil(luckShieldTime)}s</span>` : ""
    ].join("");
    const result = luckResult ? `<div class="luck-result wheel">${luckResult.rewards.map(r => `<div>${rewardLabel(r)}</div>`).join("")}</div>` : "";
    panel.innerHTML = `<div class="luck-screen luck-wheel-only">
      <div class="luck-heading"><div><h2>${t.luckTitle}</h2><p>${t.wheelDesc}</p></div></div>
      <div class="luck-badges">${boostBadges}</div>
      ${result}
      <article class="luck-card wheel-card wheel-only-card">
        <h3>${t.wheelTitle}</h3>
        <div class="wheel-wrap">
          <div class="wheel-pointer">▼</div>
          <div id="fortuneWheel" class="fortune-wheel" style="--wheel-rotation:${wheelRotation}deg">
            <span class="wheel-label l1">350</span><span class="wheel-label l2">750</span><span class="wheel-label l3">×2</span><span class="wheel-label l4">1.2K</span>
            <span class="wheel-label l5">1.5K</span><span class="wheel-label l6">🛡</span><span class="wheel-label l7">2.5K</span><span class="wheel-label l8">🎨</span>
            <div class="wheel-center">V</div>
          </div>
        </div>
        <button class="luck-action wheel-spin-btn" data-luck-action="wheel" ${(!free || luckBusy) ? "disabled" : ""}>${free ? t.wheelFree : t.wheelPaid}</button>
        <div class="luck-note">${free ? "✨ READY" : `${t.wheelNext}: ${formatLuckTime(untilFree)}`}</div>
      </article>
    </div>`;
  }

  function skinTitleFor(key) {
    return ({sunshine:t.skinDefault, berry:t.skinBerry, mint:t.skinMint, midnight:t.skinMidnight})[key] || key;
  }

  function renderSkinModal() {
    if (!selectedSkinKey || !els.skinModal) return;
    const key = selectedSkinKey;
    const owned = !!state.skins[key];
    const equipped = state.equippedSkin === key;
    const cost = skinCost(key);
    const preview = SKIN_PREVIEW_ASSETS[key] || SKIN_ASSETS[key] || SKIN_ASSETS.sunshine;
    els.skinModalImage.src = preview;
    els.skinModalTitle.textContent = skinTitleFor(key);
    els.skinModalPriceLabel.textContent = t.skinPrice;
    els.skinModalPrice.textContent = cost === 0 ? t.skinFree : `${formatNumber(cost)} 🪙`;
    const priceRow = els.skinModalPrice?.parentElement;
    if (priceRow) priceRow.classList.toggle("is-hidden", owned);
    els.skinModalStatus.textContent = equipped ? t.skinEquipped : owned ? t.owned : t.skinLocked;
    els.skinModalAction.textContent = equipped ? t.skinEquipped : owned ? t.skinEquip : `${t.buy} · ${cost === 0 ? t.skinFree : formatNumber(cost)}`;
    els.skinModalAction.disabled = equipped || (!owned && state.echoes < cost);
  }

  function openSkinModal(key) {
    if (!state.skins.hasOwnProperty(key)) return;
    selectedSkinKey = key;
    renderSkinModal();
    els.skinModal.classList.remove("is-hidden");
  }

  function closeSkinModal() {
    selectedSkinKey = null;
    els.skinModal?.classList.add("is-hidden");
  }

  function skinModalAction() {
    if (!selectedSkinKey) return;
    buySkin(selectedSkinKey);
    renderSkinModal();
    renderUpgrades();
  }

  function renderLoop() {
    const gain = prestigeReward();
    els["panel-loop"].innerHTML = `<div class="loop-hero">
      <div class="loop-big">x${permanentMultiplier().toFixed(2)}</div>
      <div class="loop-meta">${t.fragments}: <b>${state.fragments}</b><br>${t.nextFragments}: <b>${gain}</b></div>
    </div>
    <article class="card">
      <h3>${t.loopTitle}</h3>
      <p>${t.loopDesc}</p>
      <p>${t.loopRequirement}</p>
      <div class="progress-line"><span style="width:${Math.min(100, state.lifetimeEchoes / 10000 * 100)}%"></span></div>
      <button class="loop-btn" data-loop-reset ${gain <= 0 ? "disabled" : ""}>${t.reset} · +${gain}</button>
    </article>`;
  }

  function renderPanels() {
    renderUpgrades();
    renderMissions();
    renderLeaderboard();
    renderLoop();
    if (!luckBusy) renderLuck();
  }

  function renderAll() {
    renderHUD();
    renderPanels();
  }

  function serializeState() {
    return JSON.stringify({ ...state, version: SAVE_VERSION });
  }

  function sanitizeLoaded(raw) {
    const base = DEFAULT_STATE();
    if (!raw || typeof raw !== "object") return base;
    const out = {
      ...base,
      ...raw,
      upgrades: { ...base.upgrades, ...(raw.upgrades || {}) },
      loopStats: { ...base.loopStats, ...(raw.loopStats || {}) },
      missionClaims: { ...base.missionClaims, ...(raw.missionClaims || {}) },
      skins: { ...base.skins, ...(raw.skins || {}) },
      extras: { ...base.extras, ...(raw.extras || {}) },
      equippedSkin: raw.equippedSkin || base.equippedSkin,
      lastWheelSpin: Number(raw.lastWheelSpin ?? base.lastWheelSpin),
    };
    const numeric = ["echoes","lifetimeEchoes","totalLifetimeEchoes","fragments","bestScore","leaderboardScore","lastWheelSpin"];
    numeric.forEach(k => { if (!Number.isFinite(Number(out[k])) || Number(out[k]) < 0) out[k] = 0; else out[k] = Number(out[k]); });
    Object.keys(out.upgrades).forEach(k => out.upgrades[k] = Math.max(0, Math.floor(Number(out.upgrades[k]) || 0)));
    out.loopStats.clicks = Math.max(0, Math.floor(Number(out.loopStats.clicks) || 0));
    out.loopStats.glitches = Math.max(0, Math.floor(Number(out.loopStats.glitches) || 0));
    out.leaderboardScore = Math.max(out.leaderboardScore || 0, Math.floor(out.totalLifetimeEchoes || 0));
    if (!out.skins.sunshine) out.skins.sunshine = true;
    if (!out.skins[out.equippedSkin]) out.equippedSkin = "sunshine";
    return out;
  }

  async function loadGame() {
    try {
      let raw = "";
      if (inPlayables() && window.ytgame?.game?.loadData) {
        raw = await window.ytgame.game.loadData();
      } else {
        raw = window.localStorage.getItem(SAVE_KEY) || "";
      }
      if (raw) state = sanitizeLoaded(JSON.parse(raw));
    } catch (_) {
      state = DEFAULT_STATE();
    } finally {
      saveLoaded = true;
    }
  }

  async function saveGame() {
    if (!saveLoaded || saveInFlight || !saveDirty) return;
    saveInFlight = true;
    els.saveState.textContent = t.saving;
    const data = serializeState();
    try {
      if (inPlayables() && window.ytgame?.game?.saveData) {
        await window.ytgame.game.saveData(data);
      } else {
        window.localStorage.setItem(SAVE_KEY, data);
      }
      saveDirty = false;
      els.saveState.textContent = inPlayables() ? t.saved : t.localSave;
      sendLeaderboardScore();
    } catch (_) {
      els.saveState.textContent = t.saving;
    } finally {
      saveInFlight = false;
    }
  }

  async function sendLeaderboardScore() {
    if (scoreSendCooldown > 0 || !inPlayables() || !window.ytgame?.engagement?.sendScore) return;
    const score = Math.max(0, Math.floor(state.leaderboardScore || state.totalLifetimeEchoes || 0));
    scoreSendCooldown = 5;
    try {
      await window.ytgame.engagement.sendScore({ value: score });
      if (els["panel-leaderboard"]) renderLeaderboard();
    } catch (_) {
      // YouTube may retry on a later save; the saved leaderboardScore remains authoritative.
    }
  }

  function installSdkCallbacks() {
    // Outside YouTube Playables, ytgame may still exist because the SDK script loaded.
    // In that case its audio state must NOT override the local sound button.
    if (!inPlayables()) {
      audioEnabled = true;
      updateAudioButton();
      return;
    }

    if (window.ytgame?.system?.isAudioEnabled) {
      audioEnabled = !!safeSdkCall(() => window.ytgame.system.isAudioEnabled(), true);
    }
    if (window.ytgame?.system?.onAudioEnabledChange) {
      safeSdkCall(() => window.ytgame.system.onAudioEnabledChange((enabled) => {
        audioEnabled = !!enabled;
        if (!audioEnabled) {
          if (audioContext?.state === "running") audioContext.suspend().catch(() => {});
          if (bgMusic) bgMusic.pause();
          stopVoiceSounds();
        }
        if (audioEnabled && !localAudioMuted) {
          resumeAudio();
          startMusic();
          syncMediaAudio();
        }
        updateAudioButton();
      }), undefined);
    }
    if (window.ytgame?.system?.onPause) safeSdkCall(() => window.ytgame.system.onPause(pauseGame), undefined);
    if (window.ytgame?.system?.onResume) safeSdkCall(() => window.ytgame.system.onResume(resumeGame), undefined);
  }

  function pauseGame() {
    if (paused) return;
    paused = true;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    if (audioContext?.state === "running") audioContext.suspend().catch(() => {});
    if (bgMusic) bgMusic.pause();
    stopVoiceSounds();
    saveGame();
  }

  function resumeGame() {
    if (!gameStarted) return;
    if (!paused) return;
    paused = false;
    lastFrame = performance.now();
    if (canPlayAudio() && audioContext?.state === "suspended") audioContext.resume().catch(() => {});
    syncMediaAudio();
    rafId = requestAnimationFrame(frame);
  }

  function frame(now) {
    if (paused) return;
    const dt = Math.min(0.1, Math.max(0, (now - lastFrame) / 1000));
    lastFrame = now;

    updateLook(dt);

    const passive = passivePerSecond();
    if (passive > 0) addEchoes(passive * dt);

    if (comboCount > 0 && now - lastClickAt > comboWindowMs()) comboCount = 0;
    if (glitchTime > 0) {
      glitchTime = Math.max(0, glitchTime - dt);
      glitchMoveCooldown -= dt;
      if (glitchMoveCooldown <= 0 && glitchTime > 0) {
        moveOrbForGlitch();
        glitchMoveCooldown = 0.22 + Math.random() * 0.18;
      }
      if (glitchTime === 0) {
        els.arena.classList.remove("glitching");
        document.body.classList.remove("glitch-blackout");
    document.body.classList.remove("glitch-entering");
    document.body.classList.remove("instability-cooling");
    els.glitchTransition?.classList.remove("is-active");
        resetOrbPosition();
      }
    }
    if (riskBuffTime > 0) riskBuffTime = Math.max(0, riskBuffTime - dt);
    if (luckIncomeBoostTime > 0) luckIncomeBoostTime = Math.max(0, luckIncomeBoostTime - dt);
    if (luckShieldTime > 0) luckShieldTime = Math.max(0, luckShieldTime - dt);

    const coolingNow = glitchTime <= 0 && corruption > 0 && (now - lastClickAt > 3000);
    if (coolingNow) {
      corruption = Math.max(0, corruption - 8.5 * dt);
    }
    if (coolingNow !== instabilityCooling) {
      instabilityCooling = coolingNow;
      document.body.classList.toggle("instability-cooling", coolingNow);
      els.arena.classList.toggle("calming", coolingNow);
    }

    nextWhisper -= dt;
    if (nextWhisper <= 0) {
      const options = getWhisperOptions();
      els.whisper.textContent = options[Math.floor(Math.random() * options.length)];
      nextWhisper = 6 + Math.random() * 8;
    }

    autosaveTimer += dt;
    scoreSendCooldown = Math.max(0, scoreSendCooldown - dt);
    if (autosaveTimer >= 12) {
      autosaveTimer = 0;
      saveGame();
    }

    renderHUD();
    if (Math.floor(now / 500) !== Math.floor((now - dt * 1000) / 500)) renderPanels();
    rafId = requestAnimationFrame(frame);
  }

  function activateMainSection(section) {
    const isPlay = section === "play";
    const playPanel = document.getElementById("playPanel");
    const sidePanel = document.getElementById("sidePanel");

    document.body.dataset.section = section;

    document.querySelectorAll(".bottom-tab").forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.tab === section);
    });

    if (playPanel) playPanel.classList.toggle("is-screen-active", isPlay);
    if (sidePanel) sidePanel.classList.toggle("is-screen-active", !isPlay);

    document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("is-active"));
    if (!isPlay) {
      const panel = document.getElementById("panel-" + section);
      if (panel) panel.classList.add("is-active");
    }
  }

  function installEvents() {
    const unlockAudio = () => {
      resumeAudio();
      startMusic();
    };
    document.addEventListener("pointerdown", unlockAudio, { once: true, passive: true });
    els.audioToggle.addEventListener("click", toggleLocalAudio);
    els.startButton?.addEventListener("click", startGame);
    els.skinModalClose?.addEventListener("click", closeSkinModal);
    els.skinModalAction?.addEventListener("click", skinModalAction);
    els.skinModal?.addEventListener("click", (ev) => { if (ev.target === els.skinModal) closeSkinModal(); });
    els.orbButton.addEventListener("pointerdown", clickSignal);

    document.addEventListener("click", (ev) => {
      const luckAction = ev.target.closest("[data-luck-action]");
      if (luckAction) { spinFortuneWheel(); return; }
      const skinTile = ev.target.closest("[data-skin-tile]");
      if (skinTile) { openSkinModal(skinTile.dataset.skinTile); return; }
      const shopTabBtn = ev.target.closest("[data-shop-tab]");
      if (shopTabBtn) { currentShopSection = shopTabBtn.dataset.shopTab; renderUpgrades(); return; }
      const buy = ev.target.closest("[data-buy]");
      if (buy) buyUpgrade(buy.dataset.buy);
      const buySkinBtn = ev.target.closest("[data-buy-skin]");
      if (buySkinBtn) buySkin(buySkinBtn.dataset.buySkin);
      const buyExtraBtn = ev.target.closest("[data-buy-extra]");
      if (buyExtraBtn) buyExtra(buyExtraBtn.dataset.buyExtra);
      const claim = ev.target.closest("[data-claim]");
      if (claim) claimMission(claim.dataset.claim);
      if (ev.target.closest("[data-loop-reset]")) breakLoop();
    });

    document.querySelectorAll(".tab").forEach(btn => btn.addEventListener("click", () => {
      activateMainSection(btn.dataset.tab);
    }));

    activateMainSection("play");

    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && els.skinModal && !els.skinModal.classList.contains("is-hidden")) { closeSkinModal(); return; }
      if ((ev.key === " " || ev.key === "Enter") && document.activeElement === document.body) els.orbButton.click();
    });

    els.arena.addEventListener("pointermove", (ev) => setLookFromPoint(ev.clientX, ev.clientY), { passive: true });
    els.arena.addEventListener("pointerdown", (ev) => setLookFromPoint(ev.clientX, ev.clientY), { passive: true });
    els.arena.addEventListener("pointerleave", resetLookTarget, { passive: true });
    els.arena.addEventListener("pointercancel", resetLookTarget, { passive: true });

    document.addEventListener("visibilitychange", () => {
      if (inPlayables()) return;
      if (document.hidden) {
        if (audioContext?.state === "running") audioContext.suspend().catch(() => {});
        if (bgMusic) bgMusic.pause();
        stopVoiceSounds();
        resetLookTarget();
      } else if (canPlayAudio()) {
        resumeAudio();
        syncMediaAudio();
      }
    });

    window.addEventListener("resize", () => {
      // Preserve state; only return the movable target to a valid centered position outside Glitch Rush.
      if (glitchTime <= 0) resetOrbPosition();
    });
  }

  async function init() {
    try {
      cacheElements();
      applyLanguage();

      if (typeof window.ytgame !== "undefined" && window.ytgame?.game?.firstFrameReady) {
        safeSdkCall(() => window.ytgame.game.firstFrameReady(), undefined);
      }

      installSdkCallbacks();
      updateAudioButton();
      installEvents();
      await loadGame();
      renderAll();
      applyLanguage();
      activateMainSection("play");

      paused = true;
      if (els.saveState) els.saveState.textContent = inPlayables() ? t.saved : t.localSave;

      if (typeof window.ytgame !== "undefined" && window.ytgame?.game?.gameReady) {
        safeSdkCall(() => window.ytgame.game.gameReady(), undefined);
      }

      lastFrame = performance.now();
    } catch (error) {
      console.error("VERITY init error:", error);
    } finally {
      if (els.loading) els.loading.classList.add("is-hidden");
      if (els.app) els.app.classList.remove("is-hidden");
      if (els.startScreen) els.startScreen.classList.remove("is-hidden");
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
