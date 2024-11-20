# RustMailer Project

RustMailer is an advanced email analysis tool that combines a Chrome extension with a powerful backend built in Rust. The project is designed to be fast, user-friendly, and robust, offering a modern solution for extracting, analyzing, and managing email data.

## Features

- **Chrome Extension**:
  - Analyze email content directly from Gmail.
  - Option to analyze selected text via the context menu.
  - Responsive design with a dark, Rust-inspired theme.

- **Rust Backend**:
  - Processes email data for advanced analysis.
  - Efficient handling of large datasets.
  - Integrated with the Chrome extension via API requests.

---

## Project Structure

```
RustMailer/
├── extension/             # Chrome extension code
│   ├── icons/             # Extension icons
│   ├── web/               # HTML, CSS, and JS for popup and scripts
│   │   ├── popup.html
│   │   ├── styles.css
│   │   ├── popup.js
│   │   ├── content_script.js
│   │   ├── background.js
│   ├── manifest.json
│   ├── README.md          # Individual README for the extension
├── backend/               # Rust backend
│   ├── src/               # Rust source code
│   │   ├── main.rs
│   │   ├── handlers/
│   │   ├── models/
│   │   ├── utils/
│   ├── Cargo.toml         # Rust configuration
│   ├── README.md          # Individual README for the backend
├── LICENSE                # Project license
├── README.md              # Project overview (this file)
```

---

## Installation and Usage

### **1. Chrome Extension**
Follow these steps to install and use the extension:

1. Navigate to [RustMailer Extension README](./extension/README.md) for detailed installation instructions.
2. Open Gmail and interact with emails directly through the extension.

### **2. Rust Backend**
Follow these steps to set up and run the backend:

1. Navigate to [RustMailer Backend README](./backend/README.md) for detailed instructions.
2. Start the Rust server:
   ```bash
   cargo run
   ```
3. Connect the backend to the Chrome extension via the specified API endpoint.

---

## Communication Between Extension and Backend

- **Data Flow**:
  1. The Chrome extension sends email content to the backend via an HTTP POST request.
  2. The Rust backend processes the data and returns analyzed results.
  3. The results are displayed in the extension popup.

- **Example API Request**:
  - **Endpoint**: `/analyze`
  - **Method**: `POST`
  - **Request body**:
    ```json
    {
        "email_content": "This is the email content..."
    }
    ```
  - **Response body**:
    ```json
    {
        "analysis": "Analysis results from the backend..."
    }
    ```

---

## Technologies Used

- **Frontend (Chrome Extension)**:
  - HTML, CSS, JavaScript.
  - Chrome Extensions API.

- **Backend (Rust)**:
  - Rocket or Actix-web for the HTTP server.
  - Serde for JSON serialization and deserialization.
  - Efficient algorithms for text processing.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit:
   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.txt) file for details.

---

## Authors

- **[Karl Kowal]** - Developer
- **[GitHub Profile](https://github.com/K0nny16)**

---
