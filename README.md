# Email Sentiment & Summarization Project

Detta projekt kombinerar en **Flask-backend** och ett **Chrome-tillägg** för att analysera sentiment och sammanfatta innehållet i e-postmeddelanden från Gmail.

---

## **Projektöversikt**

- **Chrome-tillägg**: Extraherar text från Gmail och skickar den till API:et.
- **Flask-backend**: Utför sentimentanalys och genererar en sammanfattning.
- **Resultat**: Visas direkt i Chrome-tilläggets popup-fönster.

---

## **Installation & Användning**

För detaljerade installationsinstruktioner och användning, se respektive README:

 **[Flask Backend README](Backend/README.md)** - Hur man startar API:et.  
 **[Chrome Extension README](extension/README.md)** - Hur man installerar och använder tillägget.  

---

## **Projektstruktur**

```
project-root/
│-- backend/              # Flask-backend för sentimentanalys och sammanfattning
│   │-- app.py            # Flask-applikationen
│   │-- sentiment.py      # Sentimentanalys-logik
│   │-- summarize.py      # Textsammanfattning
│   │-- requirements.txt  # Beroenden
│   │-- README.md         # Dokumentation för backenden
│-- extension/            # Chrome-tillägg
│   │-- manifest.json     # Tilläggets konfiguration
│   │-- icons/            # Ikoner för tillägget
│   │-- web/              # Popup och tilläggslogik
│   │   │-- popup.html    # UI för popupen
│   │   │-- popup.js      # Logik för att skicka requests
│   │   │-- style.css     # Popupens styling
│   │   │-- JS/
│   │       │-- background.js      # Bakgrundsprocesser
│   │       │-- content_script.js  # Extraherar text från Gmail
│   │-- README.md         # Dokumentation för tillägget
│-- README.md             # Övergripande dokumentation för hela projektet
```

---