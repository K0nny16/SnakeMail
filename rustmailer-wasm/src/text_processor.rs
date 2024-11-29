use crate::sentiment::{SentimentAnalyzer,SentimentPolarity};
use crate::summarize::TextSummarizer;

pub struct TextProcessor {
    sentiment_analyzer: SentimentAnalyzer,
    text_summarizer: TextSummarizer,
}

impl TextProcessor {
    //Slapar en ny instans av TextProcessor
    pub fn new() -> Result<Self,String> {
        let sentiment_analyzer = SentimentAnalyzer::new().map_err(|e| format!("Failed to init: {}",e))?;
        let text_summarizer = TextSummarizer::new().map_err(|e| format!("Failed to init: {}",e))?;

        Ok(Self {
            sentiment_analyzer,
            text_summarizer,
        })
    }

    //Utför sentitment analys
    pub fn analyze_sentiment(&self, text: &str) -> Result<SentimentPolarity,String>{
        self.sentiment_analyzer.analyze_sentiment(text)
    }

    //Text sammanfattning.
    pub fn summarize_text(&self,text: &str) -> Result<String,String> {
        self.text_summarizer.summerize_text(text)
    }
}
