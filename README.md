# 🔗 URL Shortener App

This is a full-featured **React-based URL Shortener application** that allows users to shorten long URLs, specify custom shortcodes, add optional expiry times, and view detailed statistics for each shortened URL.

---

## 🚀 Features

- Shorten up to 5 URLs at once
- Optional validity (expiry) time in minutes
- Custom shortcodes supported
- Client-side validation (valid URLs, shortcode rules)
- Statistics Page:
  - Click count
  - Click timestamps
  - Source
  - Location (coarse-grained)
- Clean and responsive UI using **Material UI**
- Logging middleware with proper error/info logging
- Routing with React Router
- LocalStorage-based session persistence

---

## 🖼️ Screenshot
<img width="960" alt="Screenshot 2025-06-27 153628" src="https://github.com/user-attachments/assets/be5e4dc1-e48e-4279-ac79-be2878abe17a" />
<img width="960" alt="2nd" src="https://github.com/user-attachments/assets/cc8321e7-6ed4-43cd-9302-fe07a33a282b" />
<img width="960" alt="3rd" src="https://github.com/user-attachments/assets/43a35dd6-f534-48f6-9c34-5896e391d019" />
<img width="960" alt="4th" src="https://github.com/user-attachments/assets/4a29746e-8cb2-4d3f-ab56-ff92282e4bf8" />

---

## 🧪 Test Experience

I approached the test as a real-world, time-sensitive full-stack task. I carefully divided my 1-hour window to focus on essential aspects: building a clean frontend UI, implementing correct validation, wiring up routing and logging, and ensuring proper interaction with backend APIs. I prioritized functionality first, then layered in UX enhancements and error handling. I thoroughly tested form validations, route handling, and data flows to ensure a smooth and accurate user journey.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, React Router
- **UI:** Material UI
- **Logging:** Axios to custom logger API
- **State Management:** useState, useEffect
- **Deployment:** Vercel

---

## 📁 Folder Structure
```
frontend-test-submission/
│
├── .env                         # Environment variables (contains VITE_AUTH_TOKEN)
├── package.json                 # Project metadata and dependencies
├── vite.config.js               # Vite configuration
├── README.md                    # Project documentation
│
├── public/                      # Public assets
│
└── src/                         # Source files
    ├── main.jsx                 # App entry point
    ├── App.jsx                  # React Router setup
    │
    ├── pages/                   # App pages
    │   ├── ShortenerPage.jsx       # URL shortener form UI & logic
    │   ├── StatsPage.jsx           # Displays stats for shortened URLs
    │   └── RedirectPage.jsx        # Handles redirection from shortcodes
    │
    ├── services/
    │   └── shortenService.js       # Handles API calls to URL shortener
    │
    └── utils/
        └── logger.js              # Axios-based logging middleware
```
---

## 🚀 Getting Started
---
## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/maneeish/22131012416.git
cd 22131012416
  ```

2. **Install the dependencies**:
    ``` npm install  ```

3. **Add Environment Variables**:
``` Create a .env file in the root and add your token:
   VITE_AUTH_TOKEN=your_generated_token_here

   ```
3. **Run the Application**:

npm run dev


Then open http://localhost:5173 in your browser.


Author
Manish Mandal
GitHub: @maneeish

📄 License
This project is intended for educational and demonstration purposes only.




