#!/bin/bash

# create .gitignore if it doesn't exist
if [ ! -f .gitignore ]; then
    echo "node_modules" > .gitignore
    echo "dist" >> .gitignore
    echo ".env" >> .gitignore
    echo ".DS_Store" >> .gitignore
    echo "Created .gitignore"
fi

echo "Initializing Git..."
git init

echo "Adding files..."
git add .

echo "Committing..."
git commit -m "Initial commit from Figma Make"

echo "Renaming branch to main..."
git branch -M main

echo "Adding remote origin..."
# Try to add, if fails (already exists), set-url
git remote add origin https://github.com/jaimin43/janvi_portfolio.git || git remote set-url origin https://github.com/jaimin43/janvi_portfolio.git

echo "Pushing to GitHub..."
git push -u origin main

echo "Success! View your repository at https://github.com/jaimin43/janvi_portfolio"
