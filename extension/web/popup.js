document.querySelector("#analyze-btn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) {
            console.error("No active tab found.");
        }

        const message = { action: "analyze" };
        chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
            if (response) {
                console.log("Response from content script:", response);
                // Hantera svaret här, t.ex. visa det i popupen
                //alert("Email Content: " + response.text); 
            } else {
                console.log("No response from content script!");
            }
        });
    });
});
