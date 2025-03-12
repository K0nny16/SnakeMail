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

        // Skicka markerad text till popup.js via chrome.storage
        chrome.storage.local.set({ selectedText: info.selectionText }, () => {
            console.log("Selected text saved to storage.");
        });

        // Öppna popupen manuellt
        chrome.action.openPopup();
    }
});

