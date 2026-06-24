(function () {
"use strict";

var logoUrl = "https://kevin-heckmann.app.mentortools.com/media_api/file/download?id=c0d4a93c66c4fc4bdbaa76f878cdb3f28744&filename=Holi+You%21+-+Logo+%285000+x+1313+px%29.svg";

var headerLinks = [
["Home", "/"],
["Login", "/login"],
["Wissenspakete", "/wissenspakete"],
["Empfehlungen", "/empfehlungen"]
];

var footerLinks = [
["Login", "/login"],
["Empfehlungen", "/empfehlungen"],
["Partnerprogramm", "/partnerprogramm"]
];

var legalLinks = [
["Impressum", "/impressum"],
["Datenschutz", "/datenschutz"],
["Disclaimer", "/disclaimer"]
];

var socialLinks = [
["Facebook", "https://www.facebook.com/goholiyou"],
["Instagram", "https://www.instagram.com/kevin_holi_heckmann/"],
["TikTok", "https://www.tiktok.com/@kevin_holiyou"],
["YouTube", "https://www.youtube.com/@holiyou"],
["Telegram", "https://t.me/holi_you"]
];

function escapeHtml(text) {
return String(text || "")
.replace(/&/g, "&")
.replace(/</g, "<")
.replace(/>/g, ">")
.replace(/"/g, """);
}

function makeNav(links, className) {
var html = "";

```
for (var i = 0; i < links.length; i++) {
  html += '<a class="' + className + '" href="' + escapeHtml(links[i][1]) + '">' + escapeHtml(links[i][0]) + "</a>";
}

return html;
```

}

function makeSocials() {
var html = '<div class="hy-socials">';

```
for (var i = 0; i < socialLinks.length; i++) {
  html += '<a class="hy-social" href="' + escapeHtml(socialLinks[i][1]) + '" target="_blank" rel="noopener">' + escapeHtml(socialLinks[i][0]) + "</a>";
}

html += "</div>";
return html;
```

}

function addStyles() {
if (document.getElementById("hy-global-styles")) return;

```
var css =
  "#global-header,.hy-global-header-target,#global-footer,.hy-global-footer-target{box-sizing:border-box;font-family:inherit;width:100%;}" +

  "#global-header *,.hy-global-header-target *,#global-footer *,.hy-global-footer-target *{box-sizing:border-box;}" +

  "#global-header,.hy-global-header-target{background:#fff;border-bottom:1px solid rgba(121,157,219,.45);box-shadow:0 6px 24px rgba(67,62,177,.06);position:relative;z-index:9999;}" +
  "#global-header:after,.hy-global-header-target:after{content:'';display:block;height:2px;background:linear-gradient(90deg,transparent,#799DDB,#433EB1,#799DDB,transparent);}" +

  ".hy-header-inner{max-width:1220px;margin:0 auto;padding:15px 26px;display:flex;align-items:center;justify-content:space-between;gap:24px;}" +
  ".hy-logo{height:42px;width:auto;max-width:220px;display:block;}" +
  ".hy-logo-link{display:inline-flex;align-items:center;text-decoration:none;flex-shrink:0;}" +

  ".hy-nav{display:flex;align-items:center;justify-content:center;gap:8px;flex:1;}" +
  ".hy-nav a{color:#1f2340;text-decoration:none;font-size:15px;font-weight:500;padding:11px 14px;border-radius:999px;white-space:nowrap;}" +
  ".hy-nav a:hover{color:#433EB1;background:rgba(121,157,219,.13);}" +

  ".hy-header-social{display:flex;align-items:center;gap:8px;}" +
  ".hy-follow{font-size:13px;color:#6f7490;white-space:nowrap;}" +
  ".hy-socials{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}" +
  ".hy-social{display:inline-flex;align-items:center;justify-content:center;min-height:34px;padding:7px 10px;border-radius:999px;border:1px solid rgba(121,157,219,.45);background:rgba(121,157,219,.12);color:#433EB1;text-decoration:none;font-size:12px;font-weight:600;}" +
  ".hy-social:hover{background:#433EB1;color:#fff;}" +

  ".hy-burger{display:none;width:42px;height:42px;border-radius:999px;border:1px solid rgba(121,157,219,.45);background:#fff;color:#433EB1;font-size:24px;line-height:1;cursor:pointer;}" +
  ".hy-mobile-panel{display:none;padding:0 20px 18px;}" +
  ".hy-mobile-card{max-width:1220px;margin:0 auto;background:#fff;border:1px solid rgba(121,157,219,.35);border-radius:20px;box-shadow:0 14px 40px rgba(67,62,177,.1);padding:12px;}" +
  ".hy-mobile-nav{display:flex;flex-direction:column;gap:4px;}" +
  ".hy-mobile-nav a{color:#1f2340;text-decoration:none;font-size:16px;font-weight:500;padding:13px 14px;border-radius:14px;}" +
  ".hy-mobile-nav a:hover{background:rgba(121,157,219,.13);color:#433EB1;}" +
  ".hy-mobile-social-wrap{margin-top:12px;padding-top:14px;border-top:1px solid rgba(121,157,219,.22);}" +
  ".hy-menu-open .hy-mobile-panel{display:block;}" +

  "#global-footer,.hy-global-footer-target{background:#fff;border-top:1px solid rgba(121,157,219,.42);position:relative;z-index:1;}" +
  "#global-footer:before,.hy-global-footer-target:before{content:'';display:block;height:2px;background:linear-gradient(90deg,transparent,#799DDB,#433EB1,#799DDB,transparent);}" +
  ".hy-footer-inner{max-width:1220px;margin:0 auto;padding:42px 26px 26px;}" +
  ".hy-footer-main{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:34px;align-items:start;}" +
  ".hy-footer-logo{height:46px;width:auto;max-width:230px;display:block;margin-bottom:16px;}" +
  ".hy-footer-text{color:#6f7490;font-size:15px;line-height:1.65;max-width:430px;margin:0;}" +
  ".hy-footer-title{color:#433EB1;font-size:14px;text-transform:uppercase;letter-spacing:.08em;font-weight:700;margin:0 0 14px;}" +
  ".hy-footer-links{display:flex;flex-direction:column;gap:10px;}" +
  ".hy-footer-links a{color:#1f2340;text-decoration:none;font-size:15px;line-height:1.3;}" +
  ".hy-footer-links a:hover{color:#433EB1;}" +
  ".hy-footer-bottom{margin-top:34px;padding-top:20px;border-top:1px solid rgba(121,157,219,.22);display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;color:#6f7490;font-size:13px;}" +
  ".hy-footer-bottom a{color:#6f7490;text-decoration:none;}" +
  ".hy-footer-bottom a:hover{color:#433EB1;}" +

  "@media(max-width:980px){" +
  ".hy-header-inner{padding:13px 20px;}" +
  ".hy-nav,.hy-header-social{display:none;}" +
  ".hy-burger{display:inline-flex;align-items:center;justify-content:center;}" +
  ".hy-logo{height:38px;max-width:200px;}" +
  "}" +

  "@media(max-width:860px){" +
  ".hy-footer-main{grid-template-columns:1fr;gap:28px;}" +
  ".hy-footer-inner{padding:36px 20px 24px;}" +
  "}" +

  "@media(max-width:480px){" +
  ".hy-header-inner{padding:12px 16px;}" +
  ".hy-logo{height:34px;max-width:185px;}" +
  ".hy-footer-logo{height:38px;max-width:200px;}" +
  ".hy-footer-bottom{flex-direction:column;align-items:flex-start;}" +
  "}";

var style = document.createElement("style");
style.id = "hy-global-styles";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
```

}

function renderHeader(target) {
if (!target) return;
if (target.getAttribute("data-hy-ready") === "header") return;

```
target.setAttribute("data-hy-ready", "header");
target.className += " hy-global-header-target";

target.innerHTML =
  '<div class="hy-header-inner">' +
    '<a class="hy-logo-link" href="/" aria-label="holiYou Home">' +
      '<img class="hy-logo" src="' + escapeHtml(logoUrl) + '" alt="holiYou!">' +
    "</a>" +

    '<nav class="hy-nav">' +
      makeNav(headerLinks, "hy-nav-link") +
    "</nav>" +

    '<div class="hy-header-social">' +
      '<span class="hy-follow">Folge uns:</span>' +
      makeSocials() +
    "</div>" +

    '<button class="hy-burger" type="button" aria-label="Menü öffnen">☰</button>' +
  "</div>" +

  '<div class="hy-mobile-panel">' +
    '<div class="hy-mobile-card">' +
      '<nav class="hy-mobile-nav">' +
        makeNav(headerLinks, "hy-mobile-link") +
      "</nav>" +
      '<div class="hy-mobile-social-wrap">' +
        '<span class="hy-follow">Folge uns:</span>' +
        makeSocials() +
      "</div>" +
    "</div>" +
  "</div>";

var button = target.querySelector(".hy-burger");

if (button) {
  button.onclick = function () {
    if (target.className.indexOf("hy-menu-open") === -1) {
      target.className += " hy-menu-open";
      button.innerHTML = "×";
    } else {
      target.className = target.className.replace("hy-menu-open", "");
      button.innerHTML = "☰";
    }
  };
}
```

}

function renderFooter(target) {
if (!target) return;
if (target.getAttribute("data-hy-ready") === "footer") return;

```
target.setAttribute("data-hy-ready", "footer");
target.className += " hy-global-footer-target";

var legalHtml = "";
for (var i = 0; i < legalLinks.length; i++) {
  legalHtml += '<a href="' + escapeHtml(legalLinks[i][1]) + '">' + escapeHtml(legalLinks[i][0]) + "</a>";
  if (i < legalLinks.length - 1) legalHtml += " · ";
}

target.innerHTML =
  '<div class="hy-footer-inner">' +
    '<div class="hy-footer-main">' +
      "<div>" +
        '<a class="hy-logo-link" href="/" aria-label="holiYou Home">' +
          '<img class="hy-footer-logo" src="' + escapeHtml(logoUrl) + '" alt="holiYou!">' +
        "</a>" +
        '<p class="hy-footer-text">holiYou! steht für ganzheitliches Wissen, inspirierende Experten und alltagstaugliche Impulse für mehr Gesundheit, Bewusstsein und Lebensqualität.</p>' +
      "</div>" +

      "<div>" +
        '<h3 class="hy-footer-title">Navigation</h3>' +
        '<div class="hy-footer-links">' +
          makeNav(footerLinks, "hy-footer-link") +
        "</div>" +
      "</div>" +

      "<div>" +
        '<h3 class="hy-footer-title">Folge uns</h3>' +
        makeSocials() +
      "</div>" +
    "</div>" +

    '<div class="hy-footer-bottom">' +
      "<div>© 2026 holiYou! Alle Rechte vorbehalten.</div>" +
      '<div class="hy-legal-links">' + legalHtml + "</div>" +
    "</div>" +
  "</div>";
```

}

function renderAll() {
addStyles();

```
var headers = document.querySelectorAll("#global-header, .hy-global-header-target, [data-hy-global='header']");
var footers = document.querySelectorAll("#global-footer, .hy-global-footer-target, [data-hy-global='footer']");

for (var i = 0; i < headers.length; i++) {
  renderHeader(headers[i]);
}

for (var j = 0; j < footers.length; j++) {
  renderFooter(footers[j]);
}
```

}

function start() {
renderAll();
setTimeout(renderAll, 200);
setTimeout(renderAll, 700);
setTimeout(renderAll, 1500);
setTimeout(renderAll, 3000);
setTimeout(renderAll, 6000);

```
if (window.MutationObserver) {
  var observer = new MutationObserver(function () {
    renderAll();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  setTimeout(function () {
    observer.disconnect();
  }, 15000);
}
```

}

if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", start);
} else {
start();
}
})();
