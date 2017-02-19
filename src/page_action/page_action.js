
chrome.tabs.query({title: '*Spotify*', audible: true}, function(tabs) {
    console.log(tabs);
    chrome.tabs.executeScript(tabs[0].id,{code:"var audios = document.querySelectorAll('audio');console.log(audios);"});
    chrome.tabs.update(tabs[0].id, {muted:false});
    // var audios = document.querySelectorAll("audio");
    // console.log(audios);
  });
