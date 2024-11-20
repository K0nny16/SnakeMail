chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "analyzeSelection",
        title: "Analyze selected text",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "analyzeSelection" && info.selectionText) {
        chrome.tabs.sendMessage(tab.id, { action: "analyzeSelection", text: info.selectionText }, (response) => {
            if (chrome.runtime.lastError) {
                console.error("Error:", chrome.runtime.lastError.message);
            } else if (response) {
                console.log("Response from content script:", response);
            } else {
                console.log("No response from content script!");
            }
        });
    }
});
