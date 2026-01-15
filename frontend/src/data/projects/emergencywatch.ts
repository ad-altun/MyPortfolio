import { type ProjectData } from '../projectTypes.ts';

export const emergencywatchProjectData: ProjectData = {
    // Unique identifier for the project (used in URLs)
    id: 'emergencywatch',

    // Project title
    title: 'EmergencyWatch',

    // Time period of the project
    period: 'Januar 2026',

    // Type of project: 'Fullstack' | 'Frontend' | 'Backend'
    type: 'Fullstack',

    // URL to project screenshot/image
    image: '/screenshots/emergencywatch-dashboard.png',

    // Array of technologies used
    technologies: [
        'Java 21',
        'Spring Boot',
        'React',
        'TypeScript',
        'PostgreSQL',
        'Azure',
        'Apache Kafka',
        'Docker',
        'Jenkins',
    ],

    // Optional: Live demo URL
    demoUrl: {
        url: 'https://emergencywatch.denizaltun.de',
        disabled: true
    },

    // GitHub repository URL
    githubUrl: 'https://github.com/ad-altun/EmergencyWatch',

    // Short description for the project card (2-3 sentences)
    description: 'A production-ready microservices-based emergency vehicle ' +
        'fleet observability platform demonstrating event-driven architecture, ' +
        'distributed systems patterns, and cloud-native deployment practices.',

    // Full README content in markdown format
    // This appears on the project detail page
    readme: `
# EmergencyWatch

A production-ready **microservices-based emergency vehicle fleet observability platform** 
demonstrating event-driven architecture, distributed systems patterns, and cloud-native deployment practices.

**Built with:** Java 21 • Spring Boot 3 • React 19 • Apache Kafka • PostgreSQL

**Deployed on:** Azure Container Apps • Azure API Management
## Overview

EmergencyWatch monitors emergency vehicle fleets in real-time, ingesting and processing telemetry data 
(fuel levels, engine temperature, battery voltage, emergency status) through a modern, 
scalable microservices architecture. The system detects critical operational conditions and 
provides live visibility through an interactive web dashboard.

This project demonstrates enterprise-grade patterns including event-driven communication, 
secure data persistence, distributed tracing, comprehensive testing, and cloud-native 
deployment-designed to showcase architectural decision-making and 
production-readiness beyond typical bootcamp projects.

### Key Highlights

✅ **Microservices Architecture** - Event-driven services communicating through Kafka  
✅ **Polyglot Persistence** - PostgreSQL for transactional data, MongoDB for analytics   
✅ **Real-time Data Processing** - Sub-second alert detection on telemetry streams  
✅ **Cloud-native Design** - Azure Container Apps, Container Registry, API Management  
✅ **Comprehensive Testing** - 76+ unit tests with >80% code coverage  
✅ **Production Observability** - SonarQube integration, OpenAPI documentation, structured logging  
✅ **Domain-driven Design** - Leverages 2.5 years of embedded systems experience with vehicle telemetry  
✅ **CI/CD integration** with self-hosted Jenkins environment

---

## Tech Stack

### Backend Services
| Category | Choice | Rationale |
|----------|--------|-----------|
| **Language** | Java 21 | Modern LTS release with pattern matching and virtual threads |
| **Framework** | Spring Boot 3.5.7 | Industry-standard with comprehensive ecosystem (Cloud, Data, Web) |
| **Event Streaming** | Apache Kafka (KRaft mode) | Decoupled communication, event replay capability, horizontal scaling |
| **Relational DB** | PostgreSQL 17 | ACID compliance for operational alerts and telemetry |
| **Document DB** | MongoDB 7.0 | Schema flexibility for evolving analytics requirements |
| **Build Tool** | Maven 3.8+ | Standardized dependency management and plugin ecosystem |
| **Testing** | JUnit 5 + Mockito | Component and unit testing with industry-standard tools |
| **API Docs** | Springdoc-OpenAPI 2.x | Automated OpenAPI 3.0 spec generation with Swagger UI |

### Frontend
| Category | Choice | Rationale |
|----------|--------|-----------|
| **Language** | TypeScript 5.9 | Type safety, improved IDE support, maintainability at scale |
| **Framework** | React 19 | Component-based architecture, strong ecosystem |
| **Build Tool** | Vite 7 | Lightning-fast dev server and optimized production builds |
| **Styling** | Tailwind CSS 3.4 | Utility-first CSS, consistent design system, rapid iteration |
| **Data Fetching** | React Query (TanStack) | Server state management, caching, automatic retries, background sync |
| **HTTP Client** | Axios | Interceptor support, request/response transformation |
| **Visualization** | Chart.js 4 + react-chartjs-2 | Lightweight charting library, responsive visualizations |
| **Components** | Radix UI | Accessible, unstyled primitive components |

### Infrastructure & DevOps
| Category | Choice | Rationale |
|----------|--------|-----------|
| **Containerization** | Docker + Compose | Reproducible local development and consistent staging environment |
| **CI/CD** | Jenkins | Automated testing, code quality gates, and deployment pipelines |
| **Code Quality** | SonarQube Cloud | Automated code analysis, security scanning, quality gates |
| **Container Registry** | Azure Container Registry | Private image storage, integrated with Azure deployments |

### Cloud Deployment (Azure)
| Category | Service | Purpose |
|----------|---------|---------|
| **Compute** | Container Apps | Serverless containers with automatic scaling, managed Kubernetes abstraction |
| **API Gateway** | API Management | Rate limiting, API versioning, developer portal, centralized monitoring |
| **Frontend Hosting** | Static Web Apps | CDN-backed hosting with automatic GitHub integration |
| **Databases** | Azure Database for PostgreSQL (Flexible Server) | Managed relational DB with automatic backups, high availability for all operational and analytics data |
| **Event Broker** | Azure Event Hubs (Kafka API) | Managed Kafka-compatible event streaming with built-in compliance |

---

### Access Points
| Component | URL | Purpose |
|-----------|-----|---------|
| **Frontend Dashboard** | http://localhost:5173 | Real-time fleet monitoring | 
| **Analytics API** | http://localhost:8082 | Fleet metrics & historical data |
| **Notifications API** | http://localhost:8083 | Alert management |

---

## API Documentation

### OpenAPI Specification

Full OpenAPI 3.0 specifications are auto-generated and available in the \`/docs\` directory:
\`\`\`
docs/api-documentation/swagger/
├── openapi-analytics.yaml
└── openapi-notification.yaml
\`\`\`

### Live Documentation

**During Development (Localhost):**
- Analytics Service: http://localhost:8082/swagger-ui.html
- Notification Service: http://localhost:8083/swagger-ui.html

**Online Documentation:**
[View on GitHub Pages](https://ad-altun.github.io/EmergencyWatch/api-documentation/swagger/)

---

## Project Statistics

![GitHub repo size](https://img.shields.io/github/repo-size/ad-altun/EmergencyWatch?style=flat)
![GitHub last commit](https://img.shields.io/github/last-commit/ad-altun/EmergencyWatch?style=flat)
![GitHub language count](https://img.shields.io/github/languages/count/ad-altun/EmergencyWatch?style=flat)
![GitHub top language](https://img.shields.io/github/languages/top/ad-altun/EmergencyWatch?style=flat)
[![SonarCloud Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ad-altun_EmergencyWatch&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ad-altun_EmergencyWatch)

---
`,
};