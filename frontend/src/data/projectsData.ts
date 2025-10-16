export interface ProjectsData {
    id: string;
    title: string;
    period: string;
    type: 'Frontend' | 'Backend' | 'Fullstack';
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    readme: string;
}

export const projectsData: Record<string, ProjectsData> = {
    pertitrack: {
        id: 'pertitrack',
        title: 'PerTiTrack',
        period: 'January 2024 - Present',
        type: 'Fullstack',
        image: '/public/project-images/pertitrack.png',
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
        demoUrl: 'https://www.pertitrack.denizaltun.de/',
        githubUrl: 'https://github.com/ad-altun/PerTiTrack',
        readme: `# PerTiTrack - Personnel Time Tracking System

Enterprise-grade time tracking application with comprehensive features for managing personnel, work hours, and absences.

## 🚀 Features

### Core Functionality
- **Quick Clock In/Out**: Automatic timestamp recording with one-click interface
- **Vacation Management**: Submit and track vacation requests with approval workflow
- **Absence Tracking**: Comprehensive absence management system
- **Work Analytics**: Real-time analysis of work patterns and overtime

### Technical Features
- **JWT Authentication**: Secure token-based authentication system
- **Role-Based Access Control (RBAC)**: Different permission levels for users, managers, and admins
- **RESTful API**: Clean, documented API architecture
- **Responsive Design**: Mobile-first approach with responsive layouts

## 🛠️ Tech Stack

### Backend
- **Java 21**: Latest LTS version with modern language features
- **Spring Boot 3.x**: Rapid application development
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
- **Render.com**: Cloud hosting platform

## 📊 Architecture

The application follows a clean architecture pattern with clear separation of concerns:

\`\`\`
Backend (Spring Boot)
├── Controllers (REST endpoints)
├── Services (Business logic)
├── Repositories (Data access)
└── Security (JWT, RBAC)

Frontend (React)
├── Components (UI elements)
├── Pages (Route views)
├── Services (API calls)
└── Context (State management)
\`\`\`

## 🔒 Security Features

- JWT token-based authentication
- Password encryption with BCrypt
- Role-based access control
- CORS configuration
- CSRF protection
- SQL injection prevention through JPA

## 📈 Performance

- Optimized database queries with JPA
- Lazy loading for related entities
- Frontend code splitting
- Docker multi-stage builds for smaller images
- Caching strategies for frequent queries

## 🧪 Testing

- Unit tests with JUnit 5
- Integration tests with Spring Boot Test
- Mockito for mocking dependencies
- Test-Driven Development (TDD) approach

## 📦 Deployment

The application is deployed using:
- **Frontend**: Render.com static site hosting
- **Backend**: Render.com web service
- **Database**: Render.com PostgreSQL
- **CI/CD**: GitHub Actions for automated deployments

## 🌟 Key Learnings

- Implementing secure authentication with JWT
- Building RESTful APIs with Spring Boot
- State management in React applications
- Docker containerization and orchestration
- CI/CD pipeline configuration
- Full-stack deployment strategies

## 🔮 Future Enhancements

- Email notifications for important events
- Advanced reporting and analytics dashboard
- Export functionality (PDF, Excel)
- Mobile native applications
- Integration with HR systems
- Multi-tenant architecture`,
    },
    newProject: {
        id: 'newProject',
        title: 'Upcoming Project',
        period: 'October 2025 - Present',
        type: 'Frontend',
        image: '/public/project-images/upcoming-project.png',
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
        // demoUrl: 'https://www.pertitrack.denizaltun.de/',
        // githubUrl: 'https://github.com/ad-altun/PerTiTrack',
        readme: `# PerTiTrack - Personnel Time Tracking System

Enterprise-grade time tracking application with comprehensive features for managing personnel, work hours, and absences.

## 🚀 Features

### Core Functionality
- **Quick Clock In/Out**: Automatic timestamp recording with one-click interface
- **Vacation Management**: Submit and track vacation requests with approval workflow
- **Absence Tracking**: Comprehensive absence management system
- **Work Analytics**: Real-time analysis of work patterns and overtime

### Technical Features
- **JWT Authentication**: Secure token-based authentication system
- **Role-Based Access Control (RBAC)**: Different permission levels for users, managers, and admins
- **RESTful API**: Clean, documented API architecture
- **Responsive Design**: Mobile-first approach with responsive layouts

## 🛠️ Tech Stack

### Backend
- **Java 21**: Latest LTS version with modern language features
- **Spring Boot 3.x**: Rapid application development
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
- **Render.com**: Cloud hosting platform

## 📊 Architecture

The application follows a clean architecture pattern with clear separation of concerns:

\`\`\`
Backend (Spring Boot)
├── Controllers (REST endpoints)
├── Services (Business logic)
├── Repositories (Data access)
└── Security (JWT, RBAC)

Frontend (React)
├── Components (UI elements)
├── Pages (Route views)
├── Services (API calls)
└── Context (State management)
\`\`\`

## 🔒 Security Features

- JWT token-based authentication
- Password encryption with BCrypt
- Role-based access control
- CORS configuration
- CSRF protection
- SQL injection prevention through JPA

## 📈 Performance

- Optimized database queries with JPA
- Lazy loading for related entities
- Frontend code splitting
- Docker multi-stage builds for smaller images
- Caching strategies for frequent queries

## 🧪 Testing

- Unit tests with JUnit 5
- Integration tests with Spring Boot Test
- Mockito for mocking dependencies
- Test-Driven Development (TDD) approach

## 📦 Deployment

The application is deployed using:
- **Frontend**: Render.com static site hosting
- **Backend**: Render.com web service
- **Database**: Render.com PostgreSQL
- **CI/CD**: GitHub Actions for automated deployments

## 🌟 Key Learnings

- Implementing secure authentication with JWT
- Building RESTful APIs with Spring Boot
- State management in React applications
- Docker containerization and orchestration
- CI/CD pipeline configuration
- Full-stack deployment strategies

## 🔮 Future Enhancements

- Email notifications for important events
- Advanced reporting and analytics dashboard
- Export functionality (PDF, Excel)
- Mobile native applications
- Integration with HR systems
- Multi-tenant architecture`,
    },
};