# JobPortal - Dark-Themed Job Portal

A production-ready dark-themed job portal built with React, TypeScript, Tailwind, Express and in-memory storage featuring authentication and payment integration.

## Features

- 🌙 Dark-themed modern UI with Tailwind CSS
- 👤 Authentication with email/password and Google login
- 💼 Job posting and application system
- 💰 Premium job listings with Stripe payment
- 🔍 Advanced job search and filtering
- 📊 Dashboard for employers and job seekers
- 📱 Fully responsive design

## Prerequisites

- Node.js (v16 or newer)
- npm or yarn

## Setup & Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   PORT=5000
   NODE_ENV=development
   SESSION_SECRET=your-session-secret

   # Stripe Keys (Optional for payment functionality)
   # STRIPE_SECRET_KEY=your-stripe-secret-key
   # VITE_STRIPE_PUBLIC_KEY=your-stripe-public-key
   
   # Firebase Authentication (Optional)
   # VITE_FIREBASE_API_KEY=your-firebase-api-key
   # VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   # VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
   # VITE_FIREBASE_APP_ID=your-firebase-app-id
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Access the application:
   ```
   Frontend: http://localhost:5173
   Backend API: http://localhost:5000
   ```

## Development Setup

The application consists of two main parts:

1. **Backend Server (Express)**: Handles API requests, authentication and data storage
2. **Frontend Client (React/Vite)**: Provides the user interface

For development, both run concurrently with the `npm run dev` command.

## Troubleshooting

### Common Issues

1. **"Error: Cannot find module..."**
   - Ensure all dependencies are installed correctly: `npm install`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

2. **"Address already in use" error**
   - Check if another process is using port 5000: `npx kill-port 5000`
   - Change the port in the .env file

3. **TypeError [ERR_INVALID_ARG_TYPE] errors in vite.config.ts**
   - Make sure you're using the included vite.config.ts.new file
   - Run with: `npm run client` (for frontend only)

4. **Firebase Authentication issues**
   - Ensure you've provided the correct Firebase credentials in .env
   - Check your Firebase console for any errors or restrictions

5. **Windows-specific path issues**
   - Ensure you're using the CommonJS versions of the files
   - Use the server.js instead of server/index.ts

### Demo Login Credentials

For testing purposes, you can use these pre-configured accounts:

**Employer Account:**
- Email: employer@example.com
- Password: password123

**Job Seeker Account:**
- Email: jobseeker@example.com
- Password: password123

## Project Structure

```
job-portal/
├── client/           # Frontend React application
│   ├── public/       # Public assets
│   └── src/          # React source code
│       ├── components/ # UI components
│       ├── contexts/   # Context providers
│       ├── hooks/      # Custom React hooks
│       ├── lib/        # Utility functions
│       └── pages/      # Page components
├── server/           # Backend Express server
│   ├── routes.js     # API routes
│   └── storage.js    # In-memory data storage
├── shared/           # Shared code between client and server
├── .env              # Environment variables
├── server.js         # Express server entry point
└── package.json      # Project dependencies
```

## License

MIT