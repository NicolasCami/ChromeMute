
chrome.tabs.query({url: '*://website.com/*'}, function(tabs) {
    var countHtml = document.getElementById('count');
    countHtml.innerHTML = tabs.length;
  });
