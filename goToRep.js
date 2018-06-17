chrome.browserAction.onClicked.addListener(function(tab) {
    var url = "https://rep.repubblica.it/";
    chrome.tabs.update(tab.id, {url: url});
});