
chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        if( request.message === "start" ) {
         start();
             }
      }
    );



function start(){
                var range, frag, sel = window.getSelection();
                    if (sel.rangeCount) {
                        range = sel.getRangeAt(0);
                        frag = range.cloneContents();
                    }
                    var div = document.createElement("div");
                    div.appendChild(frag);
                    savedata(div.innerHTML);                   
}


function savedata(htmlcontent){
  /*  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("content", htmlcontent );
    //
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
    
    */
    chrome.storage.local.set({'content': htmlcontent}, function() {        
          console.log("content Saved");
        });
    chrome.runtime.sendMessage({"message": "open_new_tab"});
}
