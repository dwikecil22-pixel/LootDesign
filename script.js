const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
const themeToggle = document.querySelector("#themeToggle");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const projectDialog = document.querySelector("#projectDialog");
const dialogClose = document.querySelector("#dialogClose");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

document.querySelector("#year").textContent = new Date().getFullYear();

/* ---------- Gambar cadangan ----------
   Jika sebuah gambar gagal dimuat (internet putus, link Unsplash sudah tidak
   valid, salah nama file, dll.), tampilkan gambar pengganti agar layout tidak rusak. */
const FALLBACK_IMAGE = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" preserveAspectRatio="xMidYMid slice">' +
  '<rect width="400" height="360" fill="#d9d8d0"/>' +
  '<circle cx="270" cy="110" r="42" fill="#c8c8be"/>' +
  '<path d="M0 360V250l110-80 100 85 70-55 120 90v70z" fill="#b7b8ae"/>' +
  '</svg>'
);

function applyImageFallback(img) {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "true";
  img.classList.add("img-fallback");
  img.src = FALLBACK_IMAGE;
}

// Menangkap error semua <img>, termasuk gambar yang kamu tambahkan nanti.
document.addEventListener("error", (event) => {
  if (event.target instanceof HTMLImageElement) applyImageFallback(event.target);
}, true);

// Untuk gambar yang sudah terlanjur gagal sebelum script ini berjalan.
function sweepBrokenImages() {
  document.querySelectorAll("img").forEach((img) => {
    const src = img.currentSrc || img.src;
    const isSvgOrInline = /^data:/i.test(src) || /\.svg([?#]|$)/i.test(src);
    if (img.complete && img.naturalWidth === 0 && src && !isSvgOrInline) applyImageFallback(img);
  });
}
sweepBrokenImages();
window.addEventListener("load", sweepBrokenImages);

/* ---------- Menu mobile ---------- */
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup navigasi" : "Buka navigasi");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
  });
});

/* ---------- Tema terang / gelap ---------- */
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.setAttribute("aria-label", isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap");
  if (themeColorMeta) themeColorMeta.setAttribute("content", isDark ? "#1f201e" : "#f7f6f2");
});

/* ---------- Filter galeri ---------- */
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    projectCards.forEach((card) => {
      const matches = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("hidden", !matches);
    });
  });
});

/* ---------- Detail proyek (dialog) ---------- */
document.querySelectorAll(".project-image").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#dialogTitle").textContent = button.dataset.title;
    document.querySelector("#dialogCategory").textContent = button.dataset.categoryLabel;
    document.querySelector("#dialogDescription").textContent = button.dataset.description;
    if (typeof projectDialog.showModal === "function") projectDialog.showModal();
  });
});

dialogClose.addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

/* ---------- Menu aktif sesuai bagian yang sedang dibaca ----------
   Bagian terakhir (Contact) pendek, jadi tidak pernah menyentuh garis tengah layar.
   Karena itu, saat halaman sudah mentok di bawah, bagian terakhir dianggap aktif. */
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];

function updateActiveLink() {
  if (!sections.length) return;
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
  const line = window.innerHeight * 0.4;
  let currentId = sections[0].id;
  if (atBottom) {
    currentId = sections[sections.length - 1].id;
  } else {
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= line) currentId = section.id;
    });
  }
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}

let scrollTicking = false;
window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    updateActiveLink();
    scrollTicking = false;
  });
}, { passive: true });
window.addEventListener("resize", updateActiveLink);
updateActiveLink();
