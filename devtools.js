const extensionData = {
  trancingRequests: []
}

chrome.devtools.panels.create(
  "Apollo Tracing",
  "logo.png",
  "./panel/index.html",
)
