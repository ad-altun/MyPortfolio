import { type ProjectData } from '../projectTypes.ts';


export const pertitrackProjectData: ProjectData = {
    // Unique identifier for the project (used in URLs)
    id: 'pertitrack',

    // Project title
    title: 'PerTiTrack',

    // Time period of the project
    period: 'October 2025',

    // Type of project: 'Fullstack' | 'Frontend' | 'Backend'
    type: 'Fullstack',

    // URL to project screenshot/image
    image: '/screenshots/landing.png',

    // Array of technologies used
    technologies: [
        'Java 21',
        'Spring Boot',
        'Spring Security',
        'React',
        'TypeScript',
        'PostgreSQL',
        'Docker',
        'GitHub Actions',
    ],

    // Live demo URL
    demoUrl: 'https://pertitrack.denizaltun.de/',

    // GitHub repository URL
    githubUrl: 'https://github.com/ad-altun/PerTiTrack',

    // Short description for the project card
    description: 'Enterprise-grade time tracking application with ' +
        'comprehensive features for managing personnel, work hours, and absences.\n',

    // Full README content in markdown format
    // This appears on the project detail page
    readme: `
# PerTiTrack - Personnel Time Tracking System

Enterprise-grade time tracking application with comprehensive features for managing personnel, work hours, and absences.

## Features

### Core Functionality
- **Quick Clock In/Out**: Automatic timestamp recording with one-click interface
- **Absence Tracking**: Comprehensive absence tracking in year view

### Technical Features
- **JWT Authentication**: Secure token-based authentication system
- **RESTful API**: Clean, documented API architecture
- **Responsive Design**: Mobile-first approach with responsive layouts

## Tech Stack

### Backend
- **Java 21**: Latest LTS version with modern language features
- **Spring Boot 3.5**: Rapid application development
- **Spring Security**: Authentication and authorization
- **Spring Data JPA**: Database abstraction layer
- **PostgreSQL**: Robust relational database
- **Hibernate**: ORM for database operations

### Frontend
- **React 18**: Modern UI library with hooks
- **TypeScript**: Type-safe development
- **Material-UI**: Professional component library
- **React Router**: Client-side routing

### DevOps
- **Docker**: Containerization for consistent deployments
- **Docker Compose**: Multi-container orchestration
- **GitHub Actions**: CI/CD pipeline automation
- **Coolify**: Self-hosted PaaS for deployment management
- **Hetzner VPS**: Private cloud server hosting
- **Caddy**: Reverse proxy and automatic HTTPS
- **Cloudflare**: DNS management and CDN

## Architecture

The application follows a clean architecture pattern with clear separation of concerns:

\`\`\`
Backend (Spring Boot)
├── Controllers (REST endpoints)
├── Services (Business logic)
├── Repositories (Data access)
└── Security (JWT)

Frontend (React)
├── Components (UI elements)
├── Pages (Route views)
├── Services (API calls)
├── Redux Toolkit (State management)
└── RTK-Query (API data fetching & caching)

\`\`\`

## Security Features

- JWT token-based authentication
- Password encryption with BCrypt
- Role-based access control
- CORS configuration
- CSRF protection
- SQL injection prevention through JPA

## Performance

- Optimized database queries with JPA
- Lazy loading for related entities
- Frontend code splitting
- Docker multi-stage builds for smaller images
- Caching strategies for frequent queries

## Testing

- Unit tests with JUnit 5
- Integration tests with Spring Boot Test
- Mockito for mocking dependencies
- Test-Driven Development (TDD) approach

## Deployment

The application is deployed on a self-hosted infrastructure:
- **Server**: Hetzner VPS (private cloud hosting)
- **Deployment Platform**: Coolify (self-hosted PaaS)
- **Containerization**: Docker & Docker Compose
- **Reverse Proxy**: Caddy (automatic HTTPS)
- **DNS & CDN**: Cloudflare
- **CI/CD**: GitHub Actions for automated deployments

## Key Learnings

- Implementing secure authentication with JWT
- Building RESTful APIs with Spring Boot
- State management in React applications
- Docker containerization
- CI/CD pipeline configuration
- Full-stack deployment strategies
- Self-hosted deployment on VPS
- Infrastructure management with Coolify
- Reverse proxy configuration with Caddy

## Future Enhancements

- Email notifications for important events
- Advanced reporting and analytics dashboard
- Export functionality (PDF, Excel)
- Integration with HR systems
- Multi-tenant architecture
`,
};
