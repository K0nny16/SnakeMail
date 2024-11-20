# RustMailer Chrome Extension

RustMailer is a sleek and modern Chrome extension designed to analyze emails directly from Gmail. With its intuitive interface and powerful functionality, RustMailer is built to streamline email analysis, combining the aesthetics of a Rust-inspired theme with efficient JavaScript logic.

## Features

- Extract and analyze email content directly from Gmail.
- Option to analyze selected text using the context menu.
- Rust-inspired dark theme with an elegant and polished interface.
- Responsive design with hover effects for interactive elements.

## Installation

1. **Clone or download this repository**:
   ```bash
   git clone https://github.com/K0nny16/rustmailer.git
   ```

2. **Load the extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions`.
   - Enable "Developer mode" in the top right corner.
   - Click on **"Load unpacked"** and select the project folder.

3. **Ready to go**:
   - RustMailer will now appear in the Chrome toolbar.
   - Pin the extension to the toolbar for easier access.

## How to Use

### Analyze an Email
1. Open an email in Gmail.
2. Click on the RustMailer icon in the Chrome toolbar.
3. Click the **"Analyze Email"** button to extract and analyze the email content.
4. The analyzed text will be displayed in the extension's output box.

### Analyze Selected Text
1. Highlight any text in Gmail or any webpage.
2. Right-click and select **"Analyze selected text"** from the context menu.
3. The selected text will be processed and displayed in the console (or use your own logic to handle it).

## Project Structure

```
rustmailer/
├── icons/                    # Folder for icons (16x16, 48x48, 128x128)
│   ├── rustmailer-icon-16.png
│   ├── rustmailer-icon-48.png
│   ├── rustmailer-icon-128.png
├── web/
│   ├── JS/
│   │   ├── popup.js          # Handles popup logic
│   │   ├── content_script.js # Handles message and email analysis logic
│   │   ├── background.js     # Manages context menu
│   ├── popup.html            # Popup interface
│   ├── styles.css            # Styling for the popup
├── manifest.json             # Chrome extension configuration
```

## Technologies Used

- **HTML/CSS**: For designing the popup UI.
- **JavaScript**: For handling logic, communication, and interaction.
- **Chrome APIs**: Used for context menu, messaging, and content scripts.

## Contributing

Contributions are welcome! If you'd like to improve this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE.txt) file for details.

## Author

- **Karl Kowal** - [Profile](https://github.com/K0nny16)
