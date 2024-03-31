// this file serves as the background script for the extension

// this script is run when the browser starts
// it sets up the event listeners for the browser action button
// it also sets up the event listeners for the context menu
// it allows the extension to know when youtube is loaded


// listen for an update to tabs
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    // check if the tab url includes youtube.com/watch and target only those tabs
    if (tab.url && tab.url.includes("youtube.com/watch")) {
        // set query parameter using the video id after "watch?v="
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);
        
        // TODO: remove debug code when done
        console.log(urlParameters);

        // send message to content script that a new video has been loaded
        chrome.tabs.sendMessage(tab.id, {
            type: "NEW", 
            videoId: urlParameters.get("v")
        });

    }
}) 

