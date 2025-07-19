# Backend Setup Boilerplate 🏗️

A scalable and modular Node.js backend boilerplate setup using ES Modules, Express.js, and support for multiple environments with `.env` files. Includes PM2 ecosystem for production and `nodemon` for local development.

## 🧩 Features

- 🚀 Express.js setup
- 📂 Modular folder structure
- ✅ Async error handling with centralized middleware
- 🔄 Nodemon for dev with auto-restart
- 📦 PM2 support with ecosystem config for dev, test, and prod
- 🔐 Environment variable handling using dotenv
- 🌐 CORS, JSON parsing, compression pre-configured
- 🧪 Basic test route `/api/v1/test` to verify setup

---

## 📁 Folder Structure

```bash
.
├── constants/
│   └── config.js          # Loads environment variables and constants
├── controller/
│   └── test.controller.js # Sample controller
├── middlewares/
│   ├── asyncHandler.js
│   └── errorHandler.js
├── routes/
│   └── test.route.js      # Sample route
├── utils/
│   └── Response.js
├── .env                   # Default environment variables
├── .env.production
├── .env.staging
├── ecosystem.config.cjs   # PM2 configuration
├── package.json
├── server.js              # Entry point (outside `src`)
└── ...
# backend-sertup


🛠️ Installation

git clone https://github.com/SantoshPayasi/backend-setup.git
cd backend-setup
npm install

⚙️ Environment Setup
Create your .env, .env.production, and .env.staging files at the root. Example:

PORT=3001
NODE_ENV=development

🧪 Development
npm run dev
