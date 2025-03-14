document.querySelector("#analyze-btn").addEventListener("click", () => {
    const analyzeBtn = document.querySelector("#analyze-btn")
    const outputBox = document.querySelector("#output")

    console.log("popup.js is loaded!")
    console.log("Analyze button clicked!")

    // Dölj output och gör knappen till en spinner
    outputBox.style.display = "none"
    analyzeBtn.classList.add("loading")

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0 || !tabs[0].id) {
            console.error("No active tab found or tab ID missing.")
            analyzeBtn.classList.remove("loading");
            return;
        }

        const message = { action: "analyze" };
        console.log("Sending message to content script:", message);

        chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
            console.log("Response from content script:", response)

            if (chrome.runtime.lastError) {
                console.error("Error sending message:", chrome.runtime.lastError.message);
                analyzeBtn.classList.remove("loading");
            } else if (response && response.text) {
                console.log("Extracted Email Content:", response.text);

                // Skicka texten till Flask API
                fetch("http://127.0.0.1:5000/analyze", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text: response.text })
                })
                .then(res => res.json())
                .then(data => {
                    console.log("Flask API Response:", data)
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
                console.error("No response from content script!")
                analyzeBtn.classList.remove("loading")
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const analyzeBtn = document.querySelector("#analyze-btn")
    const outputBox = document.querySelector("#output");

    chrome.storage.local.get("selectedText", (data) => {
        if (data.selectedText) {
            console.log("Popup opened with selected text:", data.selectedText)

            // Visa spinner
            analyzeBtn.classList.add("loading");
            analyzeBtn.disabled = true;

            // Skicka markerad text till API:et
            fetch("http://127.0.0.1:5000/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: data.selectedText })
            })
            .then(res => res.json())
            .then(data => {
                console.log("Flask API Response:", data)
                // Visa resultatet i popupen
                outputBox.innerHTML = `
                    <p><strong>Sentiment:</strong> ${data.data.sentiment.label}</p>
                    <p><strong>Confidence:</strong> ${(data.data.sentiment.confidence * 100).toFixed(2)}%</p>
                    <p><strong>Summary:</strong> ${data.data.summary}</p>`
                outputBox.style.display = "block";
            })
            .catch(error => console.error("API request failed:", error))
            .finally(() => {
                analyzeBtn.classList.remove("loading")
                analyzeBtn.disabled = false
                analyzeBtn.style.display = "none"
            });
            // Rensa lagrad text efter att den har använts
            chrome.storage.local.remove("selectedText")
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-dark-mode");
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const body = document.body;

    // Kolla om dark mode är aktiverat
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeIcon.textContent = "☀️";
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            darkModeIcon.textContent = "🌙";
        } else {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            darkModeIcon.textContent = "☀️";
        }
    });
});