# Flask Backend - Email Sentiment & Summarization API

Detta är en Flask-baserad backend som analyserar sentiment och sammanfattar innehållet i e-postmeddelanden. Backenden används av ett Chrome-tillägg för att extrahera text från Gmail och skicka den till API:et för analys.

## Funktioner
- **Sentimentanalys**: Identifierar om texten är positiv, negativ eller neutral.
- **Sammanfattning**: Genererar en kort sammanfattning av e-postens innehåll.
- **REST API**: Tar emot text via en `POST`-request och returnerar analysresultaten.

---

## **Installation**

### Klona projektet
```bash
git clone https://github.com/ditt-repo/flask-backend.git
cd flask-backend
```

### Skapa och aktivera en virtuell miljö
#### För Windows (PowerShell)
```powershell
python -m venv venv
venv\Scripts\Activate
```
#### För macOS/Linux
```bash
python3 -m venv venv
source venv/bin/activate
```

### Installera beroenden
```bash
pip install -r requirements.txt
```

---

## **Starta API:et**
```bash
python app.py
```
Backenden körs nu på **http://127.0.0.1:5000/**.

---

## **API Dokumentation**

### **Analysera text**
**Endpoint:**  
```
POST /analyze
```
**Exempel Request:**
```json
{
  "text": "Detta är ett testmeddelande för analys."
}
```

**Exempel Response:**
```json
{
  "status": "success",
  "data": {
    "sentiment": {
      "label": "NEUTRAL",
      "confidence": 73.41
    },
    "summary": "Detta är ett testmeddelande."
  }
}
```

---