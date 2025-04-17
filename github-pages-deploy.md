# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages as a static site.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. The code from this Replit project downloaded to your local machine

## Step 1: Create a GitHub Repository

1. Log in to your GitHub account
2. Create a new repository by clicking the "+" icon in the top right corner
3. Name your repository: `alassiri.github.io` (or any name you prefer)
4. Choose "Public" visibility
5. Click "Create repository"

## Step 2: Build the Static Site

1. In your Replit project or local development environment, run:
   ```
   npm run build
   ```
2. This will generate a `dist` folder with the static files

## Step 3: Prepare the Files for GitHub Pages

1. Copy all files from the `dist/public` directory
2. Make sure to include the following files in the root of your deployment:
   - `.nojekyll` (already created in public folder)
   - `404.html` (already created in public folder)
   - `CNAME` (if you want to use your custom domain)
   - Your CV file at `/assets/alassiri_cv.pdf`

## Step 4: Push to GitHub

1. Initialize a Git repository in your build directory:
   ```
   cd dist/public
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Add your GitHub repository as remote and push:
   ```
   git remote add origin https://github.com/yourusername/alassiri.github.io.git
   git branch -M main
   git push -u origin main
   ```

## Step 5: Configure GitHub Pages

1. Go to your GitHub repository settings
2. Scroll down to the "GitHub Pages" section
3. Select the "main" branch as the source
4. Click "Save"
5. If you're using a custom domain:
   - Enter your domain (alassiri.nl) in the Custom Domain field
   - Save the changes
   - Update your domain's DNS settings to point to GitHub Pages

## Step 6: Verify Deployment

1. After a few minutes, your site should be live at:
   - `https://yourusername.github.io/` (if using username.github.io repository)
   - `https://yourusername.github.io/repository-name/` (if using a different repository name)
   - `https://alassiri.nl` (if using a custom domain)

## Additional Tips

- Remember to copy any assets you need from the `public` folder
- The CV file should be placed in the assets directory
- If you make changes to your portfolio, rebuild and redeploy following the same steps