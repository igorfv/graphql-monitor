const extensionData = {
  trancingRequests: []
}

chrome.devtools.panels.create(
  "Apollo Tracing",
  "./panel/logo.png",
  "./panel/index.html",
)
