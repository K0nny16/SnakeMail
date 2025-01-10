from googletrans import Translator
from transformers import pipeline

class TextSummarizer:
    def __init__(self):
        self.en_summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
        self.translator = Translator()

    def remove_redundancy(self, summary):
        sentences = summary.split('. ')
        seen = set()
        filtered = []

        for sentence in sentences:
            if sentence not in seen:
                filtered.append(sentence)
                seen.add(sentence)

        return '. '.join(filtered)


    def clean_summary(self, summary):
        # Ta bort onödiga mellanslag och bindestreck
        summary = summary.replace(' -', ' ').replace('  ', ' ')
        # Lägg till ett mellanslag efter punkt om saknas
        summary = summary.replace('.', '. ')
        return summary


    def summarize_text(self, text, language="sv", max_length=130, min_length=30):
        if len(text.split()) < 10:
            return text  # Returnera texten som den är om den är för kort

        if language == "sv":
            try:
                # Översätt svenska till engelska
                translated = self.translator.translate(text, src="sv", dest="en").text

                # Skapa sammanfattning
                summarized = self.en_summarizer(translated, max_length=max_length, min_length=min_length, do_sample=False)
                summary_en = summarized[0]['summary_text']

                # Översätt sammanfattningen tillbaka till svenska
                summary_sv = self.translator.translate(summary_en, src="en", dest="sv").text

                return self.clean_summary(summary_sv)
            except Exception as e:
                print("Error during summarization or translation:", str(e))
                return f"Error during summarization: {str(e)}"

        elif language == "en":
            try:
                result = self.en_summarizer(text, max_length=max_length, min_length=min_length, do_sample=False)
                summary = result[0]['summary_text']
                return self.remove_redundancy(summary)
            except Exception as e:
                print("Error generating summary in English:", str(e))
                return f"Error generating summary: {str(e)}"

        else:
            return "Unsupported language"
