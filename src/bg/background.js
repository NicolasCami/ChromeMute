// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

var checkAds = function() {
  chrome.tabs.query({title: 'Website', audible: true}, function(tabs) {
      tabs.forEach(function(tab) {
          if(~tab.title.indexOf('Website - Website')) { // Targeted title
            if(!tab.mutedInfo.muted) {
              chrome.tabs.update(tab.id, {muted:true});
              chrome.tabs.executeScript(tab.id,{code:"console.log('Ad detected : Tab muted');"});
            }
          }
          else {
            if(tab.mutedInfo.muted) {
              chrome.tabs.update(tab.id, {muted:false});
              chrome.tabs.executeScript(tab.id,{code:"console.log('No ad detected : Tab unmuted');"});
            }
          }
        });
    });
};

setInterval(checkAds, 500);
