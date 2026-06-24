/*
  holiYou! Global Header & Footer
  Version: 1.0.0

  Einbau auf Mentortools-Seiten:

  Header + Footer:
  <div id="global-header"></div>
  ...
  <div id="global-footer"></div>
  <script src="https://DEINE-DOMAIN/holiyou-global.js"></script>

  Nur Footer:
  <div id="global-footer"></div>
  <script src="https://DEINE-DOMAIN/holiyou-global.js"></script>

  Nur Header:
  <div id="global-header"></div>
  <script src="https://DEINE-DOMAIN/holiyou-global.js"></script>
*/

(function () {
  "use strict";

  var HY = {
    logoUrl: "https://kevin-heckmann.app.mentortools.com/media_api/file/download?id=c0d4a93c66c4fc4bdbaa76f878cdb3f28744&filename=Holi+You%21+-+Logo+%285000+x+1313+px%29.svg",

    nav: [
      { label: "Home", url: "/" },
      { label: "Login", url: "/login" },
      { label: "Wissenspakete", url: "/wissenspakete" },
      { label: "Empfehlungen", url: "/empfehlungen" }
    ],

    footerNav: [
      { label: "Login", url: "/login" },
      { label: "Empfehlungen", url: "/empfehlungen" },
      { label: "Partnerprogramm", url: "/partnerprogramm" }
    ],

    legalNav: [
      { label: "Impressum", url: "/impressum" },
      { label: "Datenschutz", url: "/datenschutz" },
      { label: "Disclaimer", url: "/disclaimer" }
    ],

    socials: [
      { label: "Facebook", type: "facebook", url: "https://www.facebook.com/goholiyou" },
      { label: "Instagram", type: "instagram", url: "https://www.instagram.com/kevin_holi_heckmann/" },
      { label: "TikTok", type: "tiktok", url: "https://www.tiktok.com/@kevin_holiyou" },
      { label: "YouTube", type: "youtube", url: "https://www.youtube.com/@holiyou" },
      { label: "Telegram", type: "telegram", url: "https://t.me/holi_you" }
    ],

    footerText: "holiYou! steht für ganzheitliches Wissen, inspirierende Experten und alltagstaugliche Impulse für mehr Gesundheit, Bewusstsein und Lebensqualität.",
    copyright: "© 2026 holiYou! Alle Rechte vorbehalten."
  };

  var ICON_PATHS = {
    facebook: "M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.01 3.66 9.16 8.44 9.91v-7.01H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34v7.01C18.34 21.22 22 17.07 22 12.06Z",
    instagram: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
    tiktok: "M16.75 2c.22 1.76 1.2 3.3 2.62 4.25A6.9 6.9 0 0 0 22 7.27v3.16a9.62 9.62 0 0 1-5.16-1.52v6.72A6.37 6.37 0 1 1 10.46 9.3c.34 0 .68.03 1 .08v3.28a3.15 3.15 0 1 0 2.15 2.98V2h3.14Z",
    youtube: "M21.58 7.19a2.7 2.7 0 0 0-1.9-1.91C18 4.83 12 4.83 12 4.83s-6 0-7.68.45a2.7 2.7 0 0 0-1.9 1.91A28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .42 4.81 2.7 2.7 0 0 0 1.9 1.91c1.68.45 7.68.45 7.68.45s6 0 7.68-.45a2.7 2.7 0 0 0 1.9-1.91A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.42-4.81ZM10 15.18V8.82L15.2 12 10 15.18Z",
    telegram: "M21.9 4.3 18.7 19.5c-.24 1.08-.88 1.34-1.78.84l-4.93-3.64-2.38 2.29c-.26.26-.49.49-1 .49l.36-5.03 9.16-8.28c.4-.36-.09-.56-.62-.2L6.18 13.1l-4.88-1.53c-1.06-.33-1.08-1.06.22-1.56L20.6 2.65c.88-.33 1.65.2 1.3 1.65Z"
  };

  function esc(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function attr(value) {
    return esc(value);
  }

  function icon(type) {
    var path = ICON_PATHS[type] || "";
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + path + '"></path></svg>';
  }

  function navLinks(items, className) {
    return items.map(function (item) {
      return '<a href="' + attr(item.url) + '" class="' + className + '">' + esc(item.label) + "</a>";
    }).join("");
  }

  function socialLinks(extraClass) {
    return '<div class="hy-socials ' + (extraClass || "") + '">' + HY.socials.map(function (social) {
      return '<a class="hy-social-link" href="' + attr(social.url) + '" target="_blank" rel="noopener" aria-label="' + attr(social.label) + '">' + icon(social.type) + "</a>";
    }).join("") + "</div>";
  }

  function injectStyles() {
    if (document.getElementById("hy-global-css")) return;

    var css = `
      #global-header,
      #global-footer,
      #global-header *,
      #global-header *::before,
      #global-header *::after,
      #global-footer *,
      #global-footer *::before,
      #global-footer *::after {
        box-sizing: border-box;
      }

      #global-header,
      #global-footer {
        font-family: inherit;
      }

      #global-header {
        position: relative;
        z-index: 9999;
        width: 100%;
        background: rgba(255, 255, 255, 0.96);
        border-bottom: 1px solid rgba(121, 157, 219, 0.45);
        box-shadow: 0 6px 24px rgba(67, 62, 177, 0.04);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
      }

      #global-header::after {
        content: "";
        display: block;
        height: 2px;
        background: linear-gradient(90deg, transparent, #799DDB, #433EB1, #799DDB, transparent);
        opacity: 0.95;
      }

      #global-header .hy-header-inner {
        max-width: 1220px;
        margin: 0 auto;
        padding: 15px 26px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 26px;
      }

      #global-header .hy-logo-link,
      #global-footer .hy-logo-link {
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        flex-shrink: 0;
      }

      #global-header .hy-logo {
        height: 42px;
        width: auto;
        max-width: 220px;
        display: block;
      }

      #global-header .hy-desktop-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        flex: 1;
      }

      #global-header .hy-desktop-nav a,
      #global-header .hy-mobile-nav a {
        color: #1f2340;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        line-height: 1;
        padding: 12px 14px;
        border-radius: 999px;
        transition: all 0.22s ease;
        white-space: nowrap;
      }

      #global-header .hy-desktop-nav a:hover,
      #global-header .hy-mobile-nav a:hover {
        color: #433EB1;
        background: linear-gradient(135deg, rgba(121, 157, 219, 0.13), rgba(67, 62, 177, 0.08));
        box-shadow: 0 8px 20px rgba(67, 62, 177, 0.08);
      }

      #global-header .hy-social-wrap {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
      }

      #global-header .hy-follow-text,
      #global-footer .hy-follow-text {
        font-size: 13px;
        color: #6f7490;
        font-weight: 500;
        margin-right: 2px;
        white-space: nowrap;
      }

      #global-header .hy-socials,
      #global-footer .hy-socials {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
      }

      #global-header .hy-social-link,
      #global-footer .hy-social-link {
        width: 36px;
        height: 36px;
        min-width: 36px;
        min-height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        color: #433EB1;
        background: linear-gradient(145deg, #ffffff, rgba(121, 157, 219, 0.16));
        border: 1px solid rgba(121, 157, 219, 0.42);
        box-shadow: 0 8px 22px rgba(67, 62, 177, 0.12), inset 0 1px 0 rgba(255,255,255,0.8);
        text-decoration: none;
        padding: 0 !important;
        transition: all 0.22s ease;
        flex-shrink: 0;
      }

      #global-header .hy-social-link:hover,
      #global-footer .hy-social-link:hover {
        transform: translateY(-2px);
        color: #ffffff;
        background: linear-gradient(135deg, #799DDB, #433EB1);
        box-shadow: 0 12px 28px rgba(67, 62, 177, 0.26);
      }

      #global-header .hy-social-link svg,
      #global-footer .hy-social-link svg {
        width: 18px;
        height: 18px;
        fill: currentColor;
        display: block;
      }

      #global-header .hy-burger {
        display: none;
        width: 42px;
        height: 42px;
        border-radius: 999px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid rgba(121, 157, 219, 0.45);
        background: linear-gradient(145deg, #ffffff, rgba(121, 157, 219, 0.12));
        box-shadow: 0 8px 22px rgba(67, 62, 177, 0.10);
        padding: 0;
      }

      #global-header .hy-burger span,
      #global-header .hy-burger span::before,
      #global-header .hy-burger span::after {
        content: "";
        display: block;
        width: 19px;
        height: 2px;
        background: #433EB1;
        border-radius: 99px;
        transition: all 0.22s ease;
      }

      #global-header .hy-burger span::before { transform: translateY(-7px); }
      #global-header .hy-burger span::after { transform: translateY(5px); }

      #global-header .hy-mobile-panel {
        display: none;
        max-width: 1220px;
        margin: 0 auto;
        padding: 0 26px 20px;
      }

      #global-header .hy-mobile-card {
        background: #ffffff;
        border: 1px solid rgba(121, 157, 219, 0.35);
        border-radius: 22px;
        box-shadow: 0 14px 40px rgba(67, 62, 177, 0.10);
        padding: 12px;
      }

      #global-header .hy-mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      #global-header .hy-mobile-social {
        margin-top: 12px;
        padding-top: 14px;
        border-top: 1px solid rgba(121, 157, 219, 0.22);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      #global-header .hy-mobile-panel .hy-social-link {
        width: 42px;
        height: 42px;
        min-width: 42px;
        min-height: 42px;
        color: #ffffff !important;
        background: linear-gradient(135deg, #799DDB, #433EB1);
        border: 1px solid rgba(255, 255, 255, 0.55);
        box-shadow: 0 10px 26px rgba(67, 62, 177, 0.28);
      }

      #global-header .hy-mobile-panel .hy-social-link svg {
        width: 20px;
        height: 20px;
      }

      #global-header.hy-menu-open .hy-mobile-panel { display: block; }
      #global-header.hy-menu-open .hy-burger span { background: transparent; }
      #global-header.hy-menu-open .hy-burger span::before { transform: translateY(0) rotate(45deg); }
      #global-header.hy-menu-open .hy-burger span::after { transform: translateY(-2px) rotate(-45deg); }

      #global-footer {
        width: 100%;
        background: #ffffff;
        border-top: 1px solid rgba(121, 157, 219, 0.42);
        position: relative;
        z-index: 1;
      }

      #global-footer::before {
        content: "";
        display: block;
        height: 2px;
        background: linear-gradient(90deg, transparent, #799DDB, #433EB1, #799DDB, transparent);
        opacity: 0.95;
      }

      #global-footer .hy-footer-inner {
        max-width: 1220px;
        margin: 0 auto;
        padding: 42px 26px 26px;
      }

      #global-footer .hy-footer-main {
        display: grid;
        grid-template-columns: 1.4fr 1fr 1fr;
        gap: 34px;
        align-items: start;
      }

      #global-footer .hy-footer-logo {
        height: 46px;
        width: auto;
        max-width: 230px;
        display: block;
        margin-bottom: 16px;
      }

      #global-footer .hy-footer-text {
        color: #6f7490;
        font-size: 15px;
        line-height: 1.65;
        max-width: 430px;
        margin: 0;
      }

      #global-footer .hy-footer-title {
        color: #433EB1;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-weight: 700;
        margin: 0 0 14px;
      }

      #global-footer .hy-footer-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      #global-footer .hy-footer-links a {
        color: #1f2340;
        text-decoration: none;
        font-size: 15px;
        line-height: 1.3;
        transition: all 0.22s ease;
        width: fit-content;
      }

      #global-footer .hy-footer-links a:hover {
        color: #433EB1;
        transform: translateX(3px);
      }

      #global-footer .hy-footer-bottom {
        margin-top: 34px;
        padding-top: 20px;
        border-top: 1px solid rgba(121, 157, 219, 0.22);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        flex-wrap: wrap;
        color: #6f7490;
        font-size: 13px;
      }

      #global-footer .hy-footer-bottom a {
        color: #6f7490;
        text-decoration: none;
        transition: color 0.22s ease;
      }

      #global-footer .hy-footer-bottom a:hover { color: #433EB1; }

      @media (max-width: 980px) {
        #global-header .hy-header-inner { padding: 13px 20px; }
        #global-header .hy-desktop-nav,
        #global-header .hy-social-wrap { display: none; }
        #global-header .hy-burger { display: inline-flex; }
        #global-header .hy-logo { height: 38px; }
      }

      @media (max-width: 860px) {
        #global-footer .hy-footer-main {
          grid-template-columns: 1fr;
          gap: 28px;
        }
        #global-footer .hy-footer-inner { padding: 36px 20px 24px; }
      }

      @media (max-width: 480px) {
        #global-header .hy-header-inner { padding: 12px 16px; }
        #global-header .hy-logo { height: 34px; max-width: 190px; }
        #global-header .hy-mobile-panel { padding: 0 16px 18px; }
        #global-header .hy-mobile-social {
          align-items: flex-start;
          flex-direction: column;
        }
        #global-footer .hy-footer-logo { height: 38px; max-width: 200px; }
        #global-footer .hy-footer-bottom {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `;

    var style = document.createElement("style");
    style.id = "hy-global-css";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildHeader() {
  var headers = document.querySelectorAll("#global-header");
  if (!headers || !headers.length) return;

  headers.forEach(function (header) {
    if (header.getAttribute("data-hy-rendered") === "header") return;

    header.setAttribute("data-hy-rendered", "header");

    header.innerHTML = `
      <div class="hy-header-inner">
        <a class="hy-logo-link" href="/" aria-label="holiYou Home">
          <img class="hy-logo" src="${attr(HY.logoUrl)}" alt="holiYou!">
        </a>

        <nav class="hy-desktop-nav" aria-label="Hauptnavigation">
          ${navLinks(HY.nav, "hy-nav-link")}
        </nav>

        <div class="hy-social-wrap">
          <span class="hy-follow-text">Folge uns:</span>
          ${socialLinks("hy-desktop-socials")}
        </div>

        <button type="button" class="hy-burger" aria-label="Menü öffnen">
          <span></span>
        </button>
      </div>

      <div class="hy-mobile-panel">
        <div class="hy-mobile-card">
          <nav class="hy-mobile-nav" aria-label="Mobile Navigation">
            ${navLinks(HY.nav, "hy-mobile-nav-link")}
          </nav>

          <div class="hy-mobile-social">
            <span class="hy-follow-text">Folge uns:</span>
            ${socialLinks("hy-mobile-socials")}
          </div>
        </div>
      </div>
    `;

    var burger = header.querySelector(".hy-burger");

    if (burger) {
      burger.addEventListener("click", function () {
        header.classList.toggle("hy-menu-open");
      });
    }

    var mobileLinks = header.querySelectorAll(".hy-mobile-nav a");

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("hy-menu-open");
      });
    });
  });
}

function buildFooter() {
  var footers = document.querySelectorAll("#global-footer");
  if (!footers || !footers.length) return;

  footers.forEach(function (footer) {
    if (footer.getAttribute("data-hy-rendered") === "footer") return;

    footer.setAttribute("data-hy-rendered", "footer");

    footer.innerHTML = `
      <div class="hy-footer-inner">
        <div class="hy-footer-main">
          <div>
            <a class="hy-logo-link" href="/" aria-label="holiYou Home">
              <img class="hy-footer-logo" src="${attr(HY.logoUrl)}" alt="holiYou!">
            </a>

            <p class="hy-footer-text">${esc(HY.footerText)}</p>
          </div>

          <div>
            <h3 class="hy-footer-title">Navigation</h3>
            <div class="hy-footer-links">
              ${navLinks(HY.footerNav, "hy-footer-nav-link")}
            </div>
          </div>

          <div>
            <h3 class="hy-footer-title">Folge uns</h3>
            ${socialLinks("hy-footer-socials")}
          </div>
        </div>

        <div class="hy-footer-bottom">
          <div>${esc(HY.copyright)}</div>
          <div class="hy-legal-links">
            ${HY.legalNav.map(function (item, index) {
              var divider = index < HY.legalNav.length - 1 ? "&nbsp;·&nbsp;" : "";
              return '<a href="' + attr(item.url) + '">' + esc(item.label) + '</a>' + divider;
            }).join("")}
          </div>
        </div>
      </div>
    `;
  });
}

function run() {
  injectStyles();
  buildHeader();
  buildFooter();
}

function startGlobalHeaderFooter() {
  run();

  setTimeout(run, 300);
  setTimeout(run, 800);
  setTimeout(run, 1500);
  setTimeout(run, 3000);

  var observer = new MutationObserver(function () {
    run();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  setTimeout(function () {
    observer.disconnect();
  }, 10000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startGlobalHeaderFooter);
} else {
  startGlobalHeaderFooter();
}
})();
