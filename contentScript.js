// () => {}     - is an Immediately Invoked Function Expression
//              - defines a function with no parameters
//              - variables inside are not accessible from outside
//              - used for initialization tasks
(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";                  // current videoId
    let currentVideoBookmarks = [];        // bookmarks for the current video

    // listener that listens to incoming message from background.js (NEW)
    chrome.runtime.onMessage.addListener((message, sender, response) => {
        // deconstruct message for code readability
        const {type, value, videoId} = message;

        // if the message type is NEW, set the current video to the videoId (from background.js)
        if (type === "NEW") {
            currentVideo = videoId;     // set the currentVideo to the videoId from background.js (message.videoID)
            newVideoLoaded();           // call a function to handle any actions with new video
        }
    });

    // function to handle new video
    const newVideoLoaded = () => {
    }




})();

