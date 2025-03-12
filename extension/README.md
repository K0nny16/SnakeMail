# Chrome Extension - Email Sentiment & Summarization

Detta är ett Chrome-tillägg som extraherar text från Gmail och analyserar innehållet genom att skicka det till en Flask-backend. Tillsammans ger de sentimentanalys och en kort sammanfattning av e-postmeddelanden.

## Funktioner

- **Extraherar e-posttext från Gmail**
- **Analyserar sentiment (positivt, negativt eller neutralt)**
- **Genererar en kort sammanfattning av innehållet**
- **Integrerar med Flask API för analys**
- **Visar resultatet direkt i popup-fönstret**

---

## **Installation**

### Klona projektet

```bash
git clone https://github.com/ditt-repo/chrome-extension.git
cd chrome-extension
```

### Lägg till tillägget i Chrome

1. Gå till **chrome://extensions/** i webbläsaren.
2. Aktivera **Developer mode** (utvecklarläge) i högra hörnet.
3. Klicka på **Load unpacked** (Ladda okomprimerad).
4. Välj mappen `chrome-extension`.
5. Tillägget bör nu visas i verktygsfältet!

---

## **Användning**

1. Öppna ett Gmail-meddelande.
2. Klicka på Chrome-tilläggets ikon.
3. Klicka på **Analyze Email**.
4. Se sentimentanalysen och sammanfattningen direkt i popup-fönstret.

---

## **Projektstruktur**

```
chrome-extension/
│-- manifest.json          # Tilläggets konfiguration
│-- icons/                 # Ikoner för tillägget
│   │-- icon-16.png
│   │-- icon-48.png
│   │-- icon-128.png
│-- web/
│   │-- popup.html         # Popup-fönstrets UI
│   │-- popup.js           # Hanterar knappar och API-anrop
│   │-- style.css          # Styling för popupen
│   │-- JS/
│       │-- background.js  # Hanterar bakgrundsprocesser
│       │-- content_script.js  # Extraherar text från Gmail
```

---