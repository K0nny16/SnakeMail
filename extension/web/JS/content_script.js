console.log("Content script loaded!");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyze") {
        console.log("Analyze request received in content script.");
        
        let emailContent = document.querySelector(".a3s");
        
        if (!emailContent) {
            emailContent = document.querySelector(".ii.gt"); // Alternativ Gmail selector
        }

        if (emailContent) {
            console.log("Extracted email content:", emailContent.innerText);
            sendResponse({ text: emailContent.innerText });
        } else {
            console.warn("No email content found!");
            sendResponse({ text: "No email content found!" });
        }
    } else {
        console.warn("Unsupported action received in content script.");
        sendResponse({ error: "Unsupported action" });
    }
    return true;
});