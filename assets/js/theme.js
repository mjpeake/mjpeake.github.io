(function () {
  var STORAGE_KEY = "theme";
  var MEDIA_QUERY = "(prefers-color-scheme: dark)";
  var root = document.documentElement;
  var metaThemeColor = document.querySelector('meta[name="theme-color"]');
  var darkQuery = window.matchMedia ? window.matchMedia(MEDIA_QUERY) : null;

  function getSystemTheme() {
    return darkQuery && darkQuery.matches ? "dark" : "light";
  }

  function getStoredTheme() {
    try {
      var storedTheme = window.localStorage.getItem(STORAGE_KEY);
      return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
    } catch (error) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      return;
    }
  }

  function updateThemeColor() {
    if (!metaThemeColor) return;

    var backgroundColor = window.getComputedStyle(root).getPropertyValue("--bgcolor").trim();
    if (backgroundColor) {
      metaThemeColor.setAttribute("content", backgroundColor);
    }
  }

  function updateToggleState(theme) {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    var isDark = theme === "dark";
    toggle.setAttribute("data-theme-icon", isDark ? "sun" : "moon");
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  function updateThemeAssets(theme) {
    var themedImages = document.querySelectorAll("[data-light-src][data-dark-src]");
    for (var index = 0; index < themedImages.length; index += 1) {
      var image = themedImages[index];
      var nextSrc = theme === "dark" ? image.getAttribute("data-dark-src") : image.getAttribute("data-light-src");
      if (nextSrc && image.getAttribute("src") !== nextSrc) {
        image.setAttribute("src", nextSrc);
      }
    }
  }

  function applyTheme(theme, options) {
    var settings = options || {};
    root.dataset.theme = theme;

    if (settings.persist) {
      setStoredTheme(theme);
    }

    updateThemeColor();
    updateToggleState(theme);
    updateThemeAssets(theme);

    document.dispatchEvent(new CustomEvent("themechange", {
      detail: {
        theme: theme,
        source: settings.source || "system"
      }
    }));
  }

  function toggleTheme() {
    var nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, { persist: true, source: "toggle" });
  }

  function handleSystemThemeChange() {
    if (getStoredTheme()) return;
    applyTheme(getSystemTheme(), { source: "system" });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var currentTheme = root.dataset.theme || getStoredTheme() || getSystemTheme();
    applyTheme(currentTheme, { source: "load" });

    var toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      toggle.addEventListener("click", toggleTheme);
    }
  });

  if (darkQuery) {
    if (typeof darkQuery.addEventListener === "function") {
      darkQuery.addEventListener("change", handleSystemThemeChange);
    } else if (typeof darkQuery.addListener === "function") {
      darkQuery.addListener(handleSystemThemeChange);
    }
  }
})();
