import { useParams, useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Chip,
    Divider,
    Paper,
} from '@mui/material';
import { ArrowBack, GitHub, Launch } from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';

// Project data - move this to a separate file or context in production
const projectsData = {
    pertitrack: {
        id: 'pertitrack',
        title: 'PerTiTrack',
        period: 'January 2024 - Present',
        type: 'Fullstack' as const,
        image: 'https://raw.githubusercontent.com/ad-altun/PerTiTrack/refs/heads/main/docs/screenshots/dashboard.png',
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
        readme: `
# PerTiTrack - Personnel Time Tracking System

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
- Multi-tenant architecture
`,
    },
};

export default function ProjectDetailPage() {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();

    const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

    if (!project) {
        return (
            <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                    Project not found
                </Typography>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate('/projects')}
                    variant="outlined"
                >
                    Back to Projects
                </Button>
            </Container>
        );
    }

    return (
        <Box sx={{ py: 5, px: 1, minHeight: '100vh' }}>
            <Container maxWidth="md">
                {/* Back Button */}
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate('/projects')}
                    sx={{ mb: 3 }}
                >
                    Back to Projects
                </Button>

                {/* Project Header */}
                <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold" gutterBottom>
                                {project.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {project.period}
                            </Typography>
                        </Box>
                        <Chip
                            label={project.type}
                            sx={{
                                bgcolor: 'background.default',
                                fontWeight: 'bold',
                            }}
                        />
                    </Box>

                    {/* Technologies */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.technologies.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                sx={{
                                    bgcolor: 'transparent',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                        ))}
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                        {project.demoUrl && (
                            <Button
                                variant="contained"
                                startIcon={<Launch />}
                                href={project.demoUrl}
                                target="_blank"
                            >
                                Live Demo
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button
                                variant="outlined"
                                startIcon={<GitHub />}
                                href={project.githubUrl}
                                target="_blank"
                            >
                                View Code
                            </Button>
                        )}
                    </Box>

                    <Divider />
                </Box>

                {/* Project Image */}
                <Paper
                    elevation={0}
                    sx={{
                        mb: 4,
                        overflow: 'hidden',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                        }}
                    />
                </Paper>

                {/* README Content */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                    }}
                >
                    <Box
                        sx={{
                            '& h1': {
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                mb: 2,
                                mt: 3,
                            },
                            '& h2': {
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                mb: 2,
                                mt: 3,
                            },
                            '& h3': {
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                mb: 1.5,
                                mt: 2,
                            },
                            '& p': {
                                mb: 2,
                                lineHeight: 1.7,
                            },
                            '& ul': {
                                mb: 2,
                                pl: 4,
                            },
                            '& li': {
                                mb: 0.5,
                            },
                            '& code': {
                                bgcolor: 'action.hover',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                fontFamily: 'monospace',
                                fontSize: '0.9em',
                            },
                            '& pre': {
                                bgcolor: 'action.hover',
                                p: 2,
                                borderRadius: 1,
                                overflow: 'auto',
                                mb: 2,
                            },
                            '& pre code': {
                                bgcolor: 'transparent',
                                p: 0,
                            },
                        }}
                    >
                        <ReactMarkdown>{project.readme}</ReactMarkdown>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}