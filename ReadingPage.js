
function GetContent() {
        
   chrome.storage.local.get('content', function (result) {
        document.getElementById("field").innerHTML = result.content;
    });
}

GetContent();