var settings = new Store("settings");
var urlPattern = settings.get('urlPattern');
chrome.tabs.query({url: urlPattern}, function(tabs) {
    var countHtml = document.getElementById('count');
    countHtml.innerHTML = (tabs) ? tabs.length : '0';
  });
