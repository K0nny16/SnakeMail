from flask import Flask, request, jsonify
from sentiment import SentimentAnalyzer
from summarize import TextSummarizer
import logging

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)

sentiment_analyzer = SentimentAnalyzer()
text_summarizer = TextSummarizer()

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.json
        text = data.get('text', '')
        language = data.get('language', 'sv')

        if not text:
            return jsonify({'error': 'No text provided'}), 400

        # Analysera sentiment
        sentiment = sentiment_analyzer.analyze_sentiment(text, language)

        # Skapa sammanfattning
        summary = text_summarizer.summarize_text(text, language)

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
