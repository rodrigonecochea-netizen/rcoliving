
(() => {
  const VERSION = "1.1.0";
  document.documentElement.dataset.rcoVersion = VERSION;
  window.addEventListener("online", () => document.body.classList.remove("offline"));
  window.addEventListener("offline", () => document.body.classList.add("offline"));
})();
