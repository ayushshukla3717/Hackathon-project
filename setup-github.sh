#!/bin/bash

# PASHU MITRA - GitHub Repository Setup Script
# This script helps you set up the project in a new GitHub repository

echo "🐄 PASHU MITRA - GitHub Setup Script"
echo "======================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Get repository URL from user
read -p "Enter your GitHub repository URL (e.g., https://github.com/username/pashu-mitra.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Repository URL is required"
    exit 1
fi

# Extract repository name from URL
REPO_NAME=$(basename "$REPO_URL" .git)

echo "📥 Cloning repository..."
git clone "$REPO_URL"

if [ $? -ne 0 ]; then
    echo "❌ Failed to clone repository"
    exit 1
fi

cd "$REPO_NAME"

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "🔧 Setting up environment..."
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "📝 Created .env file. Please add your Gemini API key."
fi

echo "🧪 Testing the application..."
echo "Run 'npm run dev' to start the development server"

echo ""
echo "✅ Setup complete!"
echo "📋 Next steps:"
echo "   1. Add your Gemini API key to the .env file"
echo "   2. Run 'npm run dev' to test the application"
echo "   3. Commit and push your changes:"
echo "      git add ."
echo "      git commit -m 'Initial commit: PASHU MITRA web application'"
echo "      git push origin main"
echo ""
echo "🌐 Your app will be available at: http://localhost:5173"