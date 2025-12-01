# Master School of Dance Academy Website

A modern, responsive website for Master School of Dance Academy built with React and Vite.

## Features

- 🎨 Beautiful, modern UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Vite
- 🎭 Multiple sections: Hero, About, Classes, Schedule, Instructors, Contact
- 🎯 Smooth scrolling navigation
- 📝 Contact form
- ✨ Interactive animations and hover effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Classes.jsx
│   │   ├── Schedule.jsx
│   │   ├── Instructors.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

You can easily customize the website by:

1. **Updating content**: Edit the component files in `src/components/` to change text, images, and information
2. **Changing colors**: Modify the CSS variables in `src/index.css` under `:root`
3. **Adding sections**: Create new components and add them to `App.jsx`
4. **Modifying styles**: Update the CSS files for each component

## Technologies Used

- React 18
- Vite
- CSS3 (with CSS Variables)
- Google Fonts (Poppins & Dancing Script)

## License

This project is created for Master School of Dance Academy.

