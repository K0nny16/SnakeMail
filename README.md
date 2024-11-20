# RustMailer Project

RustMailer är ett avancerat verktyg för e-postanalys som kombinerar ett Chrome-tillägg med en kraftfull backend byggd i Rust. Projektet är designat för att vara snabbt, användarvänligt och robust, och det erbjuder en modern lösning för att extrahera, analysera och hantera e-postdata.

## Funktioner

- **Chrome-tillägg**:
  - Analysera e-postinnehåll direkt från Gmail.
  - Möjlighet att analysera markerad text med högerklicksmenyn.
  - Responsiv design med ett mörkt, Rust-inspirerat tema.

- **Rust-backend**:
  - Bearbetning av e-postdata för avancerad analys.
  - Effektiv hantering av stora datamängder.
  - Integrerad med Chrome-tillägget via API-anrop.

---

## Projektstruktur

```
RustMailer/
├── extension/             # Chrome-tilläggskod
│   ├── icons/             # Ikoner för tillägget
│   ├── web/               # HTML, CSS och JS för popup och scripts
│   │   ├── popup.html
│   │   ├── styles.css
│   │   ├── popup.js
│   │   ├── content_script.js
│   │   ├── background.js
│   ├── manifest.json
│   ├── README.md          # Individuell README för tillägget
├── backend/               # Rust-backend
│   ├── src/               # Rust-källkod
│   │   ├── main.rs
│   │   ├── handlers/
│   │   ├── models/
│   │   ├── utils/
│   ├── Cargo.toml         # Rust-konfiguration
│   ├── README.md          # Individuell README för backenden
├── LICENSE                # Projektets licens
├── README.md              # Projektöversikt (den här filen)
```

---

## Installation och Användning

### **1. Chrome-tillägg**
Följ dessa steg för att installera och använda tillägget:

1. Navigera till [RustMailer Extension README](./extension/README.md) för att få detaljerade instruktioner om installationen.
2. Starta Gmail och interagera med e-postmeddelanden direkt via tillägget.

### **2. Rust-backend**
Följ dessa steg för att sätta upp och köra backenden:

1. Navigera till [RustMailer Backend README](./backend/README.md) för detaljerade instruktioner.
2. Starta Rust-servern:
   ```bash
   cargo run
   ```
3. Anslut backenden till Chrome-tillägget via den specificerade API-endpointen.

---

## Kommunikation mellan tillägget och backenden

- **Dataflöde**:
  1. Chrome-tillägget skickar e-postinnehållet till backenden via en HTTP POST-förfrågan.
  2. Rust-backenden bearbetar datan och returnerar analyserade resultat.
  3. Resultatet visas i popupen i tillägget.

- **Exempel på API-anrop**:
  - **Endpoint**: `/analyze`
  - **Metod**: `POST`
  - **Request body**:
    ```json
    {
        "email_content": "Det här är e-postens innehåll..."
    }
    ```
  - **Response body**:
    ```json
    {
        "analysis": "Analyserade resultat från backenden..."
    }
    ```

---

## Tekniker och Verktyg

- **Frontend (Chrome-tillägg)**:
  - HTML, CSS, JavaScript.
  - Chrome Extensions API.

- **Backend (Rust)**:
  - Rocket eller Actix-web för HTTP-server.
  - Serde för JSON-serialisering och deserialisering.
  - Effektiva algoritmer för bearbetning av text.

---

## Bidra till projektet

1. Forka projektet.
2. Skapa en ny branch (`git checkout -b feature/YourFeature`).
3. Gör dina ändringar och commit:
   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push till din branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Öppna en Pull Request.

---

## Licens

Detta projekt är licensierat under MIT-licensen. Se filen [LICENSE](./LICENSE.txt) för mer information.

---

## Författare

- **[Karl Kowal]** - Utvecklare
- **[Ditt GitHub Profil](https://github.com/K0nny16)**

---