
# RustMailer WASM

RustMailer WASM is a part of the RustMailer project, designed to perform advanced text analysis directly in the browser using WebAssembly (WASM). This module handles sentiment analysis and text summarization, enabling fast and efficient text data processing.

## Features
- **Sentiment Analysis**: Determine whether a text is positive, negative, or neutral.
- **Text Summarization**: Generate a concise summary of a longer text.
- **Multi-Language Support**: Supports both Swedish and English text analysis.

## Technologies
- **Rust**: For high-performance logic and data handling.
- **WebAssembly (WASM)**: To integrate Rust into web browsers.
- **rust-bert**: For advanced language models.
- **tch**: For tensor-based operations.
- **wasm-bindgen**: To expose Rust functions to JavaScript.

---

## Installation and Build
### Requirements
- **Rust** (installed via [rustup](https://rustup.rs/)).
- **WASM-bindgen CLI**:
  ```bash
  cargo install wasm-bindgen-cli
  ```

### Build the Project
1. **Compile to WASM**:
   ```bash
   wasm-pack build --target web
   ```
   This generates a `pkg/` directory containing the necessary WASM files.

2. **Integrate into Your Project**:
   Add the generated WASM files to your browser application. Example:
   ```html
   <script type="module">
     import init, { analyze_text, summarize_text } from './pkg/rustmailer_wasm.js';

     async function runAnalysis() {
       await init();
       const sentiment = analyze_text("Sample text");
       console.log("Sentiment:", sentiment);
     }
   </script>
   ```

---

## Exposed Functions
### Sentiment Analysis
```rust
#[wasm_bindgen]
pub fn analyze_text(text: &str) -> String;
```
- **Input**: A text string (`&str`).
- **Output**: A result indicating sentiment (`"Positive"`, `"Negative"`, or `"Neutral"`).

### Text Summarization
```rust
#[wasm_bindgen]
pub fn summarize_text(text: &str) -> String;
```
- **Input**: A text string (`&str`).
- **Output**: A concise summary of the text.

---

## Structure
### Files and Modules
- `src/lib.rs`: Main file for WASM export.
- `src/sentiment.rs`: Contains functionality for sentiment analysis.
- `src/summarize.rs`: Handles text summarization.
- `src/text_processor.rs`: Abstraction layer that combines sentiment analysis and text summarization.

---

## Future Features
- **Optimizations for Faster WASM Performance**.
- **Support for Additional Languages with Lingua**.
- **Improved Text Summarization with Advanced Models**.
