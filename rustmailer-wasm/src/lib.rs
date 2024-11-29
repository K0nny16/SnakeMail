use wasm_bindgen::prelude::*;
use rust_bert::pipelines::sentiment::{SentimentConfig, SentimentModel, SentimentPolarity};
use rust_bert::pipelines::summarization::{SummarizationConfig,SummarizationModel};
mod text_processor;
mod sentiment;
mod summarize;
use text_processor::TextProcessor;

#[wasm_bindgen]
pub struct TextAnalyzer {
    sentiment_model: SentimentModel,
    summarization_model: SummarizationModel,
}

#[wasm_bindgen]
impl TextAnalyzer {
    #[wasm_bindgen(constructor)]
    pub fn new() -> TextAnalyzer {
        //Laddar modeller.
        let sentiment_model = SentimentModel::new(SentimentConfig::default()).unwrap();
        let summarization_model = SummarizationModel::new(SummarizationConfig::default()).unwrap();
        TextAnalyzer{
            sentiment_model,
            summarization_model,
        }
    }

    //Sentiment analys.
    pub fn analyze_sentiment(&self, text: &str) -> String{
        let predictions = self.sentiment_model.predict(&[text]);
        let prediction = &predictions[0];
        if prediction.score > 0.7 {
            match prediction.polarity {
                SentimentPolarity::Positive => "Positive".to_string(),
                SentimentPolarity::Negative => "Negative".to_string(),
            }
        }else{
            "Neutral".to_string()
        }
    }

    //Sammanfattar texten
    pub fn summarize_text(&self, text: &str) -> Result<String, String>{
        let result = self.summarization_model.summarize(&[text]);
        match result {
            Ok(summaries) => {
                if let Some(summary) = summaries.get(0){
                    Ok(summary.clone())
                }else {
                    Err("No summary generated.".to_string())
                }
            }
            Err(e) => Err(format!("Error summarizing text: {}",e))
        }
    }
}

#[wasm_bindgen]
pub fn summarize(input_text: &str) -> String {
   let processor = match TextProcessor::new(){
    Ok(proc) => proc,
    Err(err) => return format!("Init error: {}",err),
   };

   match processor.summarize_text(input_text){
    Ok(summary) => summary,
    Err(err) => format!("Error summarizing text: {}",err),
   }
}