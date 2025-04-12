
# 💖 Memory Keeper for Couples – A Smart Digital Scrapbook

![React Native](https://img.shields.io/badge/React_Native-Mobile_App-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-brightgreen?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![OpenAI](https://img.shields.io/badge/OpenAI-AI_Features-purple?logo=openai)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📝 Project Description

**Memory Keeper for Couples** is a private, interactive mobile app designed to help couples capture, relive, and celebrate their relationship milestones. From anniversary reminders to a shared bucket list, this smart digital scrapbook combines emotional connection with modern tech, including AI-powered features and a secure, intuitive experience.

## ✨ Features

- 📸 Upload & store photos, videos, audio, and notes
- 💬 AI-powered **Smart Chat & Love Notes** (Sentiment analysis + summary)
- 🗓️ Auto-tagged memories by events (anniversaries, vacations, date nights)
- 🎁 Anniversary reminders with **AI-generated gift ideas**
- 🧃 **Virtual Memory Jar** (store messages for the future)
- 🎯 **Shared Bucket List** for relationship goals
- 🔐 End-to-End Encryption & JWT-based Authentication

## ⚙️ Tech Stack

| Layer      | Technology               |
|------------|---------------------------|
| Frontend   | React Native              |
| Backend    | Node.js + Express         |
| Database   | MongoDB / Firebase        |
| AI/ML      | OpenAI API (LLM features) |
| Security   | AES-256 encryption, JWT   |
| DevOps     | Render / Docker / GitHub  |

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/memory-keeper-app.git
cd memory-keeper-app
```

### 2. Backend Setup
```bash
cd backend
npm install
touch .env
# Add your MongoDB URI, JWT secret, OpenAI key in .env
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npx react-native run-android   # or run-ios
```

## 🌐 Live Demo

🔗 **Deployed App (Backend)**:  
[https://s64-divyanshu-peswani-capstone-d2pe.onrender.com](https://s64-divyanshu-peswani-capstone-d2pe.onrender.com)

## 🧠 AI Features

| Feature                            | Description                                                                 |
|------------------------------------|-----------------------------------------------------------------------------|
| Sentiment Analysis                 | Analyzes couple chats and displays emotional summaries                      |
| Smart Autocomplete for Love Notes | AI-generated prompts and summaries of special messages                      |
| Gift Ideas Generator               | Personalized surprise suggestions based on chat patterns and anniversaries |

## 🛡️ Security Highlights

- AES-256 encrypted memory storage
- JWT-based secure authentication
- End-to-End encrypted private messaging
- Input validation and API protection

## ✅ Capstone Scoring Requirements Met

- 📐 Low & high-fidelity designs (Figma)
- ✅ GitHub project board with issues, milestones
- 🧪 Unit testing with Jest (5+ tests)
- 🚢 Dockerized full app with Render deployment
- 📦 RESTful APIs (GET, POST, PUT, DELETE)
- 💾 File uploads: photos, videos, voice notes
- 🔐 Auth (JWT + secure password handling)
- 🧠 AI LLM integration via OpenAI

## 👥 Contributing

We welcome contributions!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## 📅 Project Timeline

- **Week 1:** Planning, UI/UX research, wireframes & GitHub setup  
- **Week 2:** Backend + database + file uploads  
- **Week 3:** Frontend development with component integration  
- **Week 4:** AI features, testing, Docker, and deployment  

## 📃 License

This project is licensed under the [MIT License](LICENSE).

## 🙋‍♀️ Why This Project?

- 💖 Strengthens emotional connections for couples
- 🎯 High user engagement through personalized memories
- 🧠 Combines AI + real-time storage + security
- 📱 Ready for launch and scalability
