document.querySelector("#analyze-btn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0 || !tabs[0].id) {
            console.error("No active tab found or tab ID missing.");
            return;
        }

        const message = { action: "analyze" };
        chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
            if (chrome.runtime.lastError) {
                console.error("Error sending message:", chrome.runtime.lastError.message);
            } else if (response) {
               //Gör något med responset.
               console.log("Text response: ",response) 
            } else {
                console.log("No response from content script!");
            }
        });
    });
});

