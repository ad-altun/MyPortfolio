import { type ProjectData } from '../projectTypes.ts';

export const warehouseProjectData: ProjectData = {
    // Unique identifier for the project (used in URLs)
    id: 'warehouse',

    // Project title
    title: 'Warehouse Management System',

    // Time period of the project
    period: 'August 2025',

    // Type of project: 'Fullstack' | 'Frontend' | 'Backend'
    type: 'Fullstack',

    // URL to project screenshot/image
    image: '/screenshots/warehouse.png',

    // Array of technologies used
    technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Spring Boot',
        'MongoDB',
        'Docker',
        'GitHub Actions',
        'SonarQube',
        'Self-hosting',
    ],

    // Optional: Live demo URL
    demoUrl: 'https://warehouse.denizaltun.de/',

    // GitHub repository URL
    githubUrl: 'https://github.com/ad-altun/inventory-control-crud-app',

    // Short description for the project card (2-3 sentences)
    description: 'A comprehensive warehouse management application designed to ' +
        'organize inventory and maintain stock overview. ' +
        'Features full CRUD operations with a responsive UI, enabling users to ' +
        'effortlessly record, manage, and organize all goods ' +
        'in a structured warehouse environment.',

    // Full README content in markdown format
    // This appears on the project detail page
    readme: `
# Inventory Control CRUD App - Warehouse Management System

A comprehensive warehouse management application for organizing inventory and 
maintaining stock overview. Developed to strengthen full-stack skills using 
Spring Boot, React, Docker, and CI/CD pipelines.

## Team Members

- **Daniel Töpel**
- **Deniz Altun**
- **Emrullah Arac**

## Features

### Core Functionality
- **Product List View**: Browse all products with real-time search functionality
- **Add New Products**: Intuitive form interface for creating new inventory items
- **Edit Products**: Update existing products with prefilled forms for easy modifications
- **Product Details**: View comprehensive product information including timestamps
- **Delete Products**: Remove items with confirmation dialog to prevent accidental deletion
- **Search & Filter**: Real-time search to quickly find products in inventory

### Technical Features
- **RESTful API**: Clean, documented API architecture
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Error Handling**: Global error handling for consistent user feedback

## Tech Stack

### Backend
- **Spring Boot**: Robust Java framework for building enterprise applications
- **MongoDB**: NoSQL database for flexible product data storage
- **Spring Data MongoDB**: Repository abstraction for MongoDB operations
- **REST API**: RESTful endpoints for client-server communication
- **Exception Handling**: Global error handling middleware

### Frontend
- **React**: Modern UI library with component-based architecture
- **TypeScript**: Type-safe development with enhanced IDE support
- **Vite**: Lightning-fast build tool and development server
- **Responsive Design**: CSS frameworks for cross-device compatibility

### DevOps & CI/CD
- **Docker**: Containerization for consistent deployments
- **GitHub Actions**: CI/CD pipeline automation
- **SonarQube**: Code quality checks and technical debt monitoring
- **Hetzner VPS**: Private cloud server hosting
- **MongoDB Atlas**: Cloud-hosted MongoDB database

## Architecture

The application follows a clean three-tier architecture with clear separation of concerns:

\`\`\`
Backend(Spring Boot)
├── Controllers(REST endpoints at /api/products)
├── Services(Business logic layer)
├── Repositories(MongoDB data access)
├── Models(Domain objects & DTOs)
└── Exceptions(Global error handling)

Frontend(React + Vite)
├── Components(Reusable UI elements)
├── Pages(Route views)
├── Services(API client integration)
└── Types(TypeScript interfaces)
\`\`\`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | \`/api/products\` | Retrieve all products |
| GET | \`/api/products/{id}\` | Get specific product by ID |
| POST | \`/api/products/add\` | Create new product |
| PUT | \`/api/products/{id}\` | Update existing product |
| DELETE | \`/api/products/{id}\` | Delete product |

## Performance

- Clean REST API architecture
- MongoDB for flexible and scalable data storage
- React component optimization with Vite's HMR
- Docker multi-stage builds for smaller images
- Environment-based configuration management

## Testing

- **Unit Tests**: Comprehensive test coverage for business logic
- **Integration Tests**: API endpoint testing with Spring Boot Test
- **Code Quality**: SonarQube analysis for maintainability and security
- **Manual Testing**: End-to-end user flow validation

## Deployment

The application is deployed on a self-hosted infrastructure:
- **Server**: Hetzner VPS (private cloud hosting)
- **Database**: MongoDB Atlas (cloud-hosted database)
- **Containerization**: Docker (image hosted on Docker Hub)
- **CI/CD**: GitHub Actions for automated builds and deployments
- **Code Quality**: SonarQube integration in pipeline

### CI/CD Pipeline

Our deployment workflow ensures code quality and reliable releases:

1. **Developer** opens a Pull Request
2. **GitHub Actions** automatically run:
   - Unit tests for both frontend and backend
   - SonarQube code quality checks
3. **Code Review** - At least 1 reviewer approval required
4. **Merge to Main** - Triggers automated deployment:
   - Docker image build and push
   - Deployment to VPS

## Key Learnings

- Building full-stack CRUD applications with Spring Boot and React
- MongoDB integration with Spring Data MongoDB
- TypeScript for type-safe React development
- NoSQL database design and modeling
- Docker containerization for microservices
- Setting up automated CI/CD pipelines with GitHub Actions
- Code quality management with SonarQube
- Team collaboration and code review practices
- Self-hosted deployment on VPS infrastructure
- Cloud database management with MongoDB Atlas
`,
};