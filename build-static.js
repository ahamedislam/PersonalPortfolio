/**
 * Script for building the static portfolio site
 * Run with: node build-static.js
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

console.log('Building static portfolio site...');

// Run Vite build
console.log('Running Vite build...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Static site successfully built in the dist directory.');
console.log('\nTo deploy on GitHub Pages:');
console.log('1. Create a GitHub repository');
console.log('2. Push the contents of the dist folder to your repository');
console.log('3. Enable GitHub Pages in your repository settings');
console.log('\nFor platforms like Netlify or Vercel:');
console.log('1. Connect your GitHub repository');
console.log('2. Set the build directory to "dist"');
console.log('3. Configure any environment variables if needed');
console.log('\nTo test locally:');
console.log('npx serve -s dist');