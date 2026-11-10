/* =========================================
   little cider. | Main JavaScript
   ========================================= */

/*
  INFORMATION SETTINGS

  NEWS / MEMBERS / MUSIC / LIVE / GALLERY
  の情報は基本的にここから変更できます。

  以下は制作確認用の仮情報です。
  公開前に実際の情報へ差し替えてください。
*/


// 1. NEWS
const newsList = [
  {
    date: "2026.11.05",
    category: "INFO",
    title: "no_data",
    demo: true
  },
  {
    date: "2026.11.05",
    category: "INFO",
    title: "no_data",
    demo: true
  }
];


// 2. MEMBERS
const members = [
  {
    name: "Member 01",
    role: "VOCAL",
    symbol: "Vo.",
    description: "Vocal / 仮プロフィール"
  },
  {
    name: "Member 02",
    role: "GUITAR",
    symbol: "Gt.",
    description: "Guitar / 仮プロフィール"
  },
  {
    name: "Member 03",
    role: "BASS",
    symbol: "Ba.",
    description: "Bass / 仮プロフィール"
  },
  {
    name: "Member 04",
    role: "DRUMS",
    symbol: "Dr.",
    description: "Drums / 仮プロフィール"
  }
];


// 3. MUSIC
const music = {
  title: "サウダージ",
  category: "DEBUT SONG",
  description: "little cider. のデビュー曲として紹介する楽曲です。",
  release: "RELEASE INFORMATION",
  demo: true
};


// 4. LIVE
const liveList = [
  /*
  ライブ情報を追加するときは以下の形式で記述してください。
  */

  {
    date: "2026.12.20",
    title: "LIVE TITLE",
    venue: "会場名",
    status: "NNCT"
  }

];


// 5. GALLERY
const galleryList = [
  {
    title: "LITTLE MOMENT 01",
    symbol: "01",
    color: "green"
  },
  {
    title: "LITTLE MOMENT 02",
    symbol: "02",
    color: "orange"
  },
  {
    title: "LITTLE MOMENT 03",
    symbol: "03",
    color: "yellow"
  },
  {
    title: "LITTLE MOMENT 04",
    symbol: "04",
    color: "orange"
  },
  {
    title: "LITTLE MOMENT 05",
    symbol: "05",
    color: "green"
  },
  {
    title: "LITTLE MOMENT 06",
    symbol: "06",
    color: "yellow"
  }
];


// 6. SOCIAL LINKS
const socialLinks = {
  instagram: ""
};


/* =========================================
   UTILITY
   ========================================= */

// HTMLとして解釈させず、安全な文字列に変換
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return entities[character];
  });
}


// 要素が存在するときだけHTMLを変更
function setHTML(selector, html) {
  const element = document.querySelector(selector);

  if (!element) {
    console.warn(`little cider: 要素が見つかりません: ${selector}`);
    return null;
  }

  element.innerHTML = html;
  return element;
}


/* =========================================
   NEWS
   ========================================= */

function renderNews() {
  const container = document.getElementById("news-list");

  if (!container) return;

  if (!newsList.length) {
    container.innerHTML = `
      <p class="empty-message">
        NEW INFORMATION COMING SOON.
      </p>
    `;
    return;
  }

  container.innerHTML = newsList.map(item => `
    <article class="news-item">
      <time class="news-date">
        ${escapeHTML(item.date)}
      </time>

      <span class="news-category">
        ${escapeHTML(item.category)}
      </span>

      <p class="news-title">
        ${escapeHTML(item.title)}
      </p>
    </article>
  `).join("");
}


/* =========================================
   MEMBERS
   ========================================= */

function renderMembers() {
  const container = document.getElementById("member-grid");

  if (!container) return;

  if (!members.length) {
    container.innerHTML = `
      <p class="empty-message">
        MEMBERS COMING SOON.
      </p>
    `;
    return;
  }

  container.innerHTML = members.map((member, index) => `
    <article class="member-card">

      <div class="member-art">
        <span class="member-index">
          MEMBER ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="member-symbol">
          ${escapeHTML(member.symbol)}
        </span>
      </div>

      <h3 class="member-name">
        ${escapeHTML(member.name)}
      </h3>

      <p class="member-role">
        ${escapeHTML(member.role)}
      </p>

      <p class="member-description">
        ${escapeHTML(member.description)}
      </p>

    </article>
  `).join("");
}


/* =========================================
   MUSIC
   ========================================= */

function renderMusic() {
  const container = document.getElementById("music-feature");

  if (!container) return;

  if (!music || !music.title) {
    container.innerHTML = `
      <p class="empty-message">
        MUSIC INFORMATION COMING SOON.
      </p>
    `;
    return;
  }

  container.innerHTML = `
    <div class="music-art">
      <span class="music-art-title">
        ${escapeHTML(music.title)}
      </span>

      <span class="music-art-label">
        LITTLE CIDER. / MUSIC
      </span>
    </div>

    <div class="music-info">
      <p class="section-kicker">
        ${escapeHTML(music.category)}
      </p>

      <h3>${escapeHTML(music.title)}</h3>

      <p>${escapeHTML(music.description)}</p>

      <div class="music-meta">
        ${escapeHTML(music.release)}
      </div>

      <p class="demo-note">
        ※楽曲の配信先や作品情報は、確認後に追加してください。
      </p>
    </div>
  `;
}


/* =========================================
   LIVE
   ========================================= */

function renderLive() {
  const container = document.getElementById("live-list");

  if (!container) return;

  if (!liveList.length) {
    container.innerHTML = `
      <p class="empty-message">
        LIVE INFORMATION COMING SOON.
      </p>
    `;
    return;
  }

  container.innerHTML = liveList.map(item => `
    <article class="live-item">

      <time class="live-date">
        ${escapeHTML(item.date)}
      </time>

      <div class="live-info">
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.venue)}</p>
      </div>

      <span class="live-status">
        ${escapeHTML(item.status || "INFO")}
      </span>

    </article>
  `).join("");
}


/* =========================================
   GALLERY
   ========================================= */

function renderGallery() {
  const container = document.getElementById("gallery-grid");

  if (!container) return;

  if (!galleryList.length) {
    container.innerHTML = `
      <p class="empty-message">
        GALLERY COMING SOON.
      </p>
    `;
    return;
  }

  container.innerHTML = galleryList.map((item, index) => `
    <button
      class="gallery-item"
      type="button"
      data-gallery-index="${index}"
      aria-label="${escapeHTML(item.title)}を表示"
    >
      <span class="gallery-art">
        ${escapeHTML(item.symbol)}
      </span>
    </button>
  `).join("");
}


/* =========================================
   GALLERY MODAL
   ========================================= */

function setupGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  const modalArt = document.getElementById("modal-art");
  const modalCaption = document.getElementById("modal-caption");
  const closeButton = modal?.querySelector(".modal-close");
  const gallery = document.getElementById("gallery-grid");

  if (!modal || !modalArt || !modalCaption || !closeButton || !gallery) {
    return;
  }

  let previousFocus = null;

  function openModal(item, trigger) {
    if (!item) return;

    previousFocus = trigger;

    modalArt.textContent = item.symbol;
    modalCaption.textContent = item.title;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    closeButton.focus();
  }

  function closeModal() {
    if (!modal.classList.contains("is-open")) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (previousFocus && document.contains(previousFocus)) {
      previousFocus.focus();
    }
  }

  gallery.addEventListener("click", event => {
    const button = event.target.closest("[data-gallery-index]");

    if (!button) return;

    const index = Number(button.dataset.galleryIndex);
    const item = galleryList[index];

    openModal(item, button);
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (
      event.key === "Escape" &&
      modal.classList.contains("is-open")
    ) {
      closeModal();
    }
  });
}


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

function setupNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".global-nav");

  if (!toggle || !nav) return;

  const navLinks = nav.querySelectorAll("a");

  function closeNavigation() {
    toggle.classList.remove("is-active");
    nav.classList.remove("is-open");

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "メニューを開く");
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    toggle.classList.toggle("is-active", isOpen);

    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "メニューを閉じる" : "メニューを開く"
    );
  });

  navLinks.forEach(link => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeNavigation();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) {
      closeNavigation();
    }
  });
}


/* =========================================
   INSTAGRAM
   ========================================= */

function setupInstagram() {
  const link = document.getElementById("instagram-link");
  const note = document.getElementById("instagram-note");

  if (!link) return;

  const instagramURL = socialLinks.instagram.trim();

  if (instagramURL) {
    link.href = instagramURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    if (note) {
      note.hidden = true;
    }
  } else {
    link.href = "#";
    link.setAttribute("aria-disabled", "true");

    link.addEventListener("click", event => {
      event.preventDefault();
    });

    if (note) {
      note.hidden = false;
      note.textContent = "※InstagramのURLは準備中です。";
    }
  }
}


/* =========================================
   INITIALIZE
   ========================================= */

function initializeSite() {
  renderNews();
  renderMembers();
  renderMusic();
  renderLive();
  renderGallery();

  setupGalleryModal();
  setupNavigation();
  setupInstagram();

  const year = document.getElementById("current-year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}


// HTML読み込み後に実行
initializeSite();