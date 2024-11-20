console.log("Content script loaded!");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "analyze") {
        // Hämta e-postmeddelandets innehåll
        const emailContent = document.querySelector(".a3s");
        if (emailContent) {
            console.log("Email content found:", emailContent.innerText);
            sendResponse({ text: emailContent.innerText });
        } else {
            console.log("No email content found.");
            sendResponse({ text: "No email content found!" });
        }
    } else if (request.action === "analyzeSelection") {
        console.log("Analyzing selected text:", request.text);
        sendResponse({ result: request.text });
    } else {
        console.warn("Unsupported action:", request.action);
        sendResponse({ error: "Unsupported action" });
    }

    return true; // Indikera att svaret skickas asynkront
});
