from flask import Flask, request, jsonify
from flask_cors import CORS
from sentiment import SentimentAnalyzer
from summarize import TextSummarizer
import logging

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app)  # Gör så att Chrome-tillägget kan göra API-anrop

# Ladda modeller endast vid första användningen
sentiment_analyzer = None
text_summarizer = None

def get_sentiment_analyzer():
    global sentiment_analyzer
    if sentiment_analyzer is None:
        sentiment_analyzer = SentimentAnalyzer()
    return sentiment_analyzer

def get_text_summarizer():
    global text_summarizer
    if text_summarizer is None:
        text_summarizer = TextSummarizer()
    return text_summarizer


@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.json
        text = data.get('text', '')
        language = data.get('language', 'sv')

        if not text or len(text) < 10:
            return jsonify({'error': 'Invalid or too short text'}), 400

        # Ladda in modeller om det behövs
        sentiment = get_sentiment_analyzer().analyze_sentiment(text, language)
        summary = get_text_summarizer().summarize_text(text, language)

        response = {
            "status": "success",
            "data": {
                "sentiment": sentiment,
                "summary": summary
            }
        }
        return jsonify(response)

    except Exception as e:
        logging.error(f"Error during analysis: {str(e)}")
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)