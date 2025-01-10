from transformers import pipeline

class SentimentAnalyzer:
    def __init__(self):
        # Initialiserar modeller för båda språken
        self.sv_model = pipeline("text-classification", model="KBLab/robust-swedish-sentiment-multiclass")
        self.en_model = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")


    def analyze_sentiment(self, text, language="sv"):
        if language == "sv":
            result = self.sv_model(text)
        elif language == "en":
            result = self.en_model(text)
        else:
            return {"error": "Unsupported language"}

        label = result[0]['label']
        score = result[0]['score']

        return {
            "label": label,
            "confidence": score
        }