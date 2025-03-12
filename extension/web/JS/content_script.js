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
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showAnalysis" && request.result) {
        console.log("Received analysis result:", request.result);

        // Skapa en snygg popup-ruta för att visa resultatet
        let resultBox = document.createElement("div");
        resultBox.style.position = "fixed";
        resultBox.style.bottom = "20px";
        resultBox.style.right = "20px";
        resultBox.style.backgroundColor = "#f9f9f9";
        resultBox.style.color = "#333";
        resultBox.style.padding = "15px";
        resultBox.style.border = "1px solid #d1d1d1";
        resultBox.style.borderRadius = "10px";
        resultBox.style.boxShadow = "0px 2px 6px rgba(0, 0, 0, 0.15)";
        resultBox.style.zIndex = "9999";

        resultBox.innerHTML = `
            <p><strong>Sentiment:</strong> ${request.result.data.sentiment.label}</p>
            <p><strong>Confidence:</strong> ${(request.result.data.sentiment.confidence * 100).toFixed(2)}%</p>
            <p><strong>Summary:</strong> ${request.result.data.summary}</p>
            <button id="closeResultBox" style="margin-top:10px; padding:5px; border:none; background:#d93025; color:#fff; border-radius:5px; cursor:pointer;">Close</button>
        `;

        document.body.appendChild(resultBox);

        document.getElementById("closeResultBox").addEventListener("click", () => {
            resultBox.remove();
        });
    }
});