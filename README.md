# Jaadu Services Frontend

A modern React application for Jaadu Services, a business consultancy and registration services company.

## Features

- Modern UI built with React and TypeScript
- Responsive design with Tailwind CSS
- Theme-based styling for easy customization
- Component-based architecture
- React Router for navigation

## Project Structure

```
src/
├── components/
│   ├── layout/      # Layout components like Header, Footer
│   ├── sections/    # Page sections like Hero, Services
│   └── ui/          # Reusable UI components like Button, Card
├── pages/           # Page components
├── theme/           # Theme configuration (colors, typography, etc.)
├── App.tsx          # Main App component
└── main.tsx         # Entry point
```

## Theme Customization

The theme is defined in the `src/theme` directory and can be easily customized:

- `colors.ts`: Define color palette
- `typography.ts`: Define typography settings
- `index.ts`: Export theme configuration

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

## License

MIT
