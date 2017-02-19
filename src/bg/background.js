var settings = new Store("settings");

var checkAds = function() {
  var urlPattern = settings.get('urlPattern');
  var titleMutePattern = settings.get('titleMutePattern');

  chrome.tabs.query({url: urlPattern}, function(tabs) {
    tabs.forEach(function(tab) {
        if(~tab.title.indexOf(titleMutePattern)) { // Targeted title
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
