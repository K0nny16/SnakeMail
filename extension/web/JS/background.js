chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "analyzeSelection",
        title: "Analyze selected text",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "analyzeSelection" && info.selectionText) {
        console.log("Selected text:", info.selectionText);
        
        // Skicka texten till Flask API
        fetch("http://127.0.0.1:5000/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: info.selectionText })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Flask API Response:", data);

            // Skicka svaret tillbaka till innehållsskriptet för visning
            chrome.tabs.sendMessage(tab.id, {
                action: "showAnalysis",
                result: data
            });
        })
        .catch(error => console.error("API request failed:", error));
    }
});
