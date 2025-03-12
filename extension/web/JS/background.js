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
                console.log("Extracted Email Content:", response.text);

                // Skicka texten till Flask API
                fetch("http://127.0.0.1:5000/analyze", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text: response.text })
                })
                .then(res => res.json())
                .then(data => {
                    console.log("Flask API Response:", data);
                    // Visa resultatet
                    outputBox.innerHTML = `
                        <p><strong>Sentiment:</strong> ${data.data.sentiment.label}</p>
                        <p><strong>Confidence:</strong> ${(data.data.sentiment.confidence * 100).toFixed(2)}%</p>
                        <p><strong>Summary:</strong> ${data.data.summary}</p>
                    `;
                    outputBox.style.display = "block";
                })
                .catch(error => console.error("API request failed:", error))
                .finally(() => {
                    analyzeBtn.classList.remove("loading");
                    analyzeBtn.style.display = "none"; // Dölj knappen helt efter analys
                });
            } else {
                console.log("No response from content script!");
            }
        });
    }
});
