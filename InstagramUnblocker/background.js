chrome.runtime.onInstalled.addListener(function () {
    chrome.webNavigation.onCompleted.addListener(function () {
        // alert("This is my favorite website!");
        // chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
        //     console.log(changeInfo);
        // });
        document.body.innerHTML = "<h1>Instagram yay!</h1>";
    }, {
        url: [{
            urlMatches: 'https://www.instagram.com/'
        }]
    });
});