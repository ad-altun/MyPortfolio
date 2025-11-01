import { type ProjectData } from '../projectTypes.ts';

export const restCountriesProjectData: ProjectData = {
    // Unique identifier for the project (used in URLs)
    id: 'restCountries',

    // Project title
    title: 'REST Countries API',

    // Time period of the project
    period: 'October 2025',

    // Type of project: 'Fullstack' | 'Frontend' | 'Backend'
    type: 'Frontend',

    // URL to project screenshot/image
    image: '/screenshots/home-page-dark.png',

    // Array of technologies used
    technologies: [
        'React 19',
        'TypeScript',
        'Vite',
        'React Router',
        'REST API',
        'CSS3',
        'React Icons',
    ],

    // Live demo URL
    demoUrl: 'https://rest-countries.denizaltun.de/',

    // GitHub repository URL
    githubUrl: 'https://github.com/ad-altun/rest-countries-api/',

    // Short description for the project card
    description: 'Interactive country information explorer using the REST Countries API ' +
        'with search, filtering, and dark mode capabilities.\n',

    // Full README content in markdown format
    // This appears on the project detail page
    readme: `
# REST Countries API - Frontend Mentor Challenge

Interactive country information explorer that consumes data from the REST Countries API to display country information in an organized and visually appealing way.

## Features

### Core Functionality
- **Country Listing**: View all countries from the REST Countries API on the homepage
- **Search**: Search for countries by their common name using an input field
- **Filter by Region**: Filter countries by their region (Asia, Europe, Americas, Africa, Oceania)
- **Detailed Information**: Click on a country card to view comprehensive details on a dedicated page
- **Border Navigation**: Navigate to border countries via interactive links from detail pages
- **Dark Mode**: Toggle between light and dark color schemes for better user experience

### Technical Features
- **Responsive Design**: Mobile-first workflow with fully responsive layouts
- **Type Safety**: TypeScript implementation for robust code
- **Modern Routing**: Client-side routing with React Router v7
- **Performance**: Optimized data fetching and state management
- **API Integration**: Real-time data from REST Countries API v3.1

## Tech Stack

### Frontend
- **React 19**: Latest version with modern hooks and features
- **TypeScript**: Type-safe development with full type coverage
- **Vite**: Lightning-fast build tool and development server
- **React Router 7**: Modern routing solution for SPAs
- **React Icons**: Icon library for UI elements

### Styling
- **CSS3**: Custom properties and modern CSS features
- **Flexbox**: Flexible box layout for responsive design
- **Mobile-first**: Responsive design approach starting from mobile

### API
- **REST Countries API v3.1**: Comprehensive country data source
- **Fetch API**: Native browser API for data fetching

## Architecture

The application follows a clean component-based architecture:

\`\`\`
Frontend (React + TypeScript)
├── Pages
│   ├── Home (Country listing with search/filter)
│   ├── Detail (Individual country details)
│   └── FetchFailed (Error handling)
├── Components
│   ├── Header (Navigation bar)
│   ├── Card (Country card display)
│   ├── Search (Search input)
│   ├── Filter (Region filter)
│   └── Loading (Loading state)
├── Services
│   └── api.ts (API integration)
└── Types
    └── countries.ts (TypeScript definitions)
\`\`\`

## Key Features Implementation

### Search Functionality
- Real-time search by country name
- Case-insensitive matching
- Instant results without page reload

### Region Filtering
- Filter by 5 major regions
- Combine with search functionality
- Preserve user selections

### Detail Page
- Comprehensive country information
- Native name display
- Currency and language information
- Border countries with clickable navigation
- Top-level domain information

### Theme Switcher
- Light and dark mode toggle
- Persistent theme selection
- Smooth transitions between themes

## Performance Optimizations

- Optimized API calls with specific field selection
- React hooks for efficient state management (useMemo, useEffect)
- Lazy loading for improved initial load time
- Efficient re-rendering with React best practices

## Deployment

The application is deployed using:
- **Hosting**: Hostinger
- **Build Tool**: Vite for optimized production builds
- **Domain**: Custom domain configuration

## Development

\`\`\`bash
# Clone the repository
git clone https://github.com/ad-altun/frontend-mentor-challenges.git

# Navigate to project folder
cd rest-countries-app

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## Key Learnings

- Implementing REST API integration with TypeScript
- Building responsive layouts with mobile-first approach
- State management in React applications
- Client-side routing with React Router
- Theme implementation and persistence
- Error handling and loading states
- Type safety with TypeScript interfaces
- Performance optimization techniques
- Modern React patterns and hooks

## Future Enhancements

- Add sorting options (alphabetical, population)
- Implement favorites/bookmarking feature
- Add comparison functionality between countries
- Offline support with service workers
- Advanced filtering (by population, area, etc.)
- Data visualization with charts
- Export functionality for country data
`,
};