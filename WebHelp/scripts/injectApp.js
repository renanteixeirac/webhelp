document.addEventListener("DOMContentLoaded", function() {
  insertApp();
});

function insertApp() {
  var app  = document.createElement("div");
  app.id = "webHelp-root";
  app.innerHTML = getApp();
  document.body.insertBefore (app, document.body.firstChild);
}

function getApp() {
  var xmlHttp = null;
  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", chrome.extension.getURL ("app.html"), false );
  xmlHttp.send( true );

  return xmlHttp.responseText;
}

function initApp() {
  try {
    openApp();
  } catch (e) {
    console.log(e);
  }
}

function openApp() {
  var app = document.getElementById('webHelp-toolbar');
  if(app.classList.contains('active')) {
    app.classList.remove('active');
  } else {
    app.classList.add('active');
  }
}
