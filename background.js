chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.tabs.captureVisibleTab(null, null, sendResponse);
  return true; // need to return true to indicate that sendResponse will be called
});
