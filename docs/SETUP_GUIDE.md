# Setup Guide

## Prerequisites

- Node.js (v14+)
- Python (3.8+)
- MongoDB (v4.4+)
- npm or yarn
- Git

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/dkdevkumar18982-png/technology-driven-entrepreneurship.git
cd technology-driven-entrepreneurship
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# Important: Update MongoDB URI, JWT_SECRET, and other sensitive values

# Start the server
npm start
# Or for development with auto-reload
npm run dev
```

**Backend will run on:** http://localhost:5000

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

**Frontend will run on:** http://localhost:3000

### 4. AI Service Setup (Optional)

```bash
cd backend/ai-service

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate
# On Windows:
venv\\Scripts\\activate

# Install Python dependencies
pip install -r requirements.txt

# Start the AI service
python app.py
```

**AI Service will run on:** http://localhost:5001

## MongoDB Setup

### Local Installation

1. **Windows**: Download from https://www.mongodb.com/try/download/community
2. **Mac**: `brew install mongodb-community`
3. **Linux**: Follow platform-specific instructions at https://docs.mongodb.com/manual/installation/

### Start MongoDB

```bash
# Local MongoDB
mongod

# Or use MongoDB Atlas (Cloud)
# Update MONGODB_URI in .env with your connection string
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/tech-entrepreneurship

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d

# CORS
CORS_ORIGIN=http://localhost:3000
```

## Verification

### Check Backend

```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{"status": "API is running", "timestamp": "2024-06-06T..."}
```

### Check Frontend

Open browser and navigate to: http://localhost:3000

You should see the dashboard with key metrics.

## Troubleshooting

### MongoDB Connection Error

**Error**: `connect ECONNREFUSED 127.0.0.1:27017`

**Solution**:
- Ensure MongoDB service is running
- Check MONGODB_URI in .env
- For MongoDB Atlas, ensure IP whitelist includes your machine

### Port Already in Use

**Error**: `EADDRINUSE: address already in use :::5000`

**Solution**:
```bash
# Find process using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process
kill -9 <PID>  # Mac/Linux
taskkill /PID <PID> /F  # Windows
```

### Module Not Found

**Error**: `Cannot find module 'express'`

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Development Tips

1. **Hot Reload**: Use `npm run dev` for backend to enable auto-reload
2. **React DevTools**: Install browser extension for better debugging
3. **API Testing**: Use Postman or Insomnia to test endpoints
4. **Database Monitoring**: Use MongoDB Compass for database visualization

## Docker Setup (Optional)

```bash
# Build and run with Docker
docker-compose up
```

Ensure `docker-compose.yml` is properly configured.

## Production Deployment

1. Update `.env` with production values
2. Set `NODE_ENV=production`
3. Build React app: `npm run build`
4. Use process manager like PM2: `pm2 start src/server.js`
5. Set up reverse proxy (Nginx)
6. Enable HTTPS with SSL certificates
