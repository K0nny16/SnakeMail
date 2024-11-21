console.log("Content script loaded!");
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyze") {
        // Hämta e-postmeddelandets innehåll
        const emailContent = document.querySelector(".a3s");
        if (emailContent) {
            sendResponse({ text: emailContent.innerText });
        } else {
            console.log("No email content found.");
            sendResponse({ text: "No email content found!" });
        }
    } else {
        sendResponse({ error: "Unsupported action" });
    }
    return true; // Indikera att svaret skickas asynkront
});
