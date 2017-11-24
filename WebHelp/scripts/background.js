chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    code: " try { initApp(); } catch(e) { alert('Recarrgue a página para começar a utilizar o webHelp!') }"
    });
});
