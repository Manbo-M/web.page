/* =========================================
   little cider. | Main JavaScript
   ========================================= */

/*
  INFORMATION SETTINGS

  NEWS / MEMBER / MUSIC / LIVE / GALLERY
  の情報は基本的にここから変更できます。

  以下はすべて仮の情報です。
  公開前に実際の情報へ差し替えてください。
*/

// 1. News
const newsList = [
  {
    date: "2026.11.05",
    category: "INFO",
    title: "little cider. Website Preview",
    demo: true
  },
  {
    date: "2026.11.05",
    category: "MUSIC",
    title: "Debut song : サウダージ",
    demo: true
  }
];

// 2. Members
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

// 3. Music
const music = {
  title: "サウダージ",
  category: "DEBUT SONG",
  description: "little cider. のデビュー曲として紹介する楽曲です。",
  release: "RELEASE INFORMATION",
  demo: true
};

// 4. Live
const liveList = [
  // ライブ情報を追加するときは以下の形式で記述
  //
  // {
  //   date: "2026.12.20",
  //   title: "LIVE TITLE",
  //   venue: "会場名",
  //   status: "UPCOMING"
  // }
];

// 5. Gallery
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

// 6. SNS Settings
const socialLinks = {
  instagram: ""
};


/* =========================================
   RENDER FUNCTIONS
   ========================================= */

// News
function renderNews() {
  const container = document.getElementById("news-list");

  if (!newsList.length) {
    container.innerHTML =
      '<p class="empty-message">NEW INFORMATION COMING SOON.</p>';
    return;
  }

  container.innerHTML = newsList.map(item => `
    <article class="news-item">
      <time class="news-date">${escapeHTML(item.date)}</time>
      <span class="news-category">${escapeHTML(item.category)}</span>
      <p class="news-title">${escapeHTML(item.title)}</p>
    </article>
  `).join("");
}


// Members
function renderMembers() {
  const container = document.getElementById("member-grid");

  if (!members.length) {
    container.innerHTML =
      '<p class="empty-message">MEMBERS COMING SOON.</p>';
    return;
  }

  container.innerHTML = members.map((member, index) => `
    <article class="member-card">
      <div class="member-art">
        <span class="member-index">MEMBER 0${index + 1}</span>
        <span class="member-symbol">${escapeHTML(member.symbol)}</span>
      </div>
      <h3 class="member-name">${escapeHTML(member.name)}</h3>
      <p class="member-role">${escapeHTML(member.role)}</p>
      <p class="member-description">
        ${escapeHTML(member.description)}
      </p>
    </article>
  `).join("");
}


// Music
function renderMusic() {
  const container = document.getElementById("music-feature");

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


// Live
function renderLive() {
  const container = document.getElementById("live-list");

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
      <time class="live-date">${escapeHTML(item.date)}</time>

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


// Gallery
function renderGallery() {
  const container = document.getElementById("gallery-grid");

  container.innerHTML = galleryList.map((item, index) => `
    <button
      class="gallery-item"
      type="button"
      data-gallery-index="${index}"
      aria-label="${escapeHTML(item.title)}を表示"
    >
      <span class="gallery-art">${escapeHTML(item.symbol)}</span>
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
  const closeButton = modal.querySelector(".modal-close");

  function openModal(item) {
    modalArt.textContent = item.symbol;
    modalCaption.textContent = item.title;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  document.getElementById("gallery-grid").addEventListener("click", event => {
    const button = event.target.closest("[data-gallery-index]");

    if (!button) return;

    const index = Number(button.dataset.galleryIndex);
    const item = galleryList[index];

    if (item) openModal(item);
  });

  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
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

  if (socialLinks.instagram.trim()) {
    link.href = socialLinks.instagram;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#contact";
    link.addEventListener("click", event => {
      event.preventDefault();
      alert("InstagramのURLがまだ設定されていません。");
    });
  }
}


/* =========================================
   SECURITY / UTILITY
   ========================================= */

// HTMLとして解釈させず、文字列として表示する
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
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

  document.getElementById("current-year").textContent =
    new Date().getFullYear();
}

initializeSite();