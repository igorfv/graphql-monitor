chrome.devtools.panels.create(
  "Apollo Tracing",
  "assets/icon-16.png",
  "devtools/panel.html",
  (panel) => {
    if (chrome.runtime.lastError) console.error(chrome.runtime.lastError);
    console.log("panel", panel);
  }
);
