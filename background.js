
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      //  var content = localStorage.getItem("lastname");
        chrome.tabs.create({"url": "ReadingPage.html"});
    }
  }
);








