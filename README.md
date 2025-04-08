# Md. Tareq Ahamed Jony's Cybersecurity Portfolio

A professional, modern portfolio website showcasing expertise in cybersecurity, including skills, experience, certifications, CVEs, and workshop activities.

## Features

- Responsive design for all devices
- Interactive UI with animations
- Card-based layout for clear information presentation
- Sections for all key professional aspects:
  - About Me
  - Skills & Expertise
  - Work Experience
  - Projects
  - CVE Publications
  - Professional Certifications
  - Workshop Gallery
  - Contact Information

## Running Locally

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

This will start the development server at http://localhost:5000.

## Building for Production (Static Site)

Generate a production-ready static build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build locally with:

```bash
npx serve -s dist
```

## Deploying to GitHub Pages

1. Build the site for production:

```bash
npm run build
```

2. Create a GitHub repository for your site

3. Push the contents of the `dist` folder to the `gh-pages` branch of your GitHub repository

4. Configure GitHub Pages in your repository settings to use the `gh-pages` branch

## Customization

- Edit the data files in `client/src/data/` to update your personal information
- Modify the theme colors in `theme.json`
- Adjust the styling in component files to match your preferences

## Technologies Used

- React
- TypeScript
- TailwindCSS
- Framer Motion (for animations)
- Shadcn UI (for component styling)
- FontAwesome (for icons)

## License

[MIT](LICENSE)