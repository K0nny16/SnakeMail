from googletrans import Translator
from transformers import pipeline

class TextSummarizer:
    def __init__(self):
        self.en_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
        self.translator = Translator()

    def remove_redundancy(self, summary):
        sentences = summary.split('. ')
        seen = set()
        filtered = [s for s in sentences if not (s in seen or seen.add(s))]
        return '. '.join(filtered)

    def clean_summary(self, summary):
        summary = summary.replace(' -', ' ').replace('  ', ' ')
        summary = summary.replace('.', '. ')
        return summary.strip()

    def summarize_text(self, text, language="sv", max_length=130, min_length=30):
        if len(text.split()) < 10:
            return text  # Returnera texten som den är om den är för kort

        try:
            if language == "sv":
                translated = self.translator.translate(text, src="sv", dest="en").text
                summarized = self.en_summarizer(translated, max_length=max_length, min_length=min_length, do_sample=False)
                summary_en = summarized[0]['summary_text']
                summary_sv = self.translator.translate(summary_en, src="en", dest="sv").text
                return self.clean_summary(summary_sv)
            elif language == "en":
                result = self.en_summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
                return self.remove_redundancy(result[0]['summary_text'])
        except Exception as e:
            return f"Summarization error: {str(e)}"