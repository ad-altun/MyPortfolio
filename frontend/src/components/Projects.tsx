import {
    Box,
    Container,
    Typography,
    Grid,
    Divider,
} from '@mui/material';

import type { ProjectCardProps } from "./ProjectCard.tsx";
import ProjectCard from "./ProjectCard.tsx";


export const Projects = () => {

    const projects: ProjectCardProps[] = [
        {
            id: 'pertitrack',
            title: 'PerTiTrack',
            period: 'Sepetember 2025 - Present',
            type: 'Fullstack',
            // image: '/public/project-images/pertitrack.png',
            image: 'https://raw.githubusercontent.com/ad-altun/PerTiTrack/refs/heads/main/docs/screenshots/landing.png',
            technologies: [ 'Java 21', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker' ],
            // features: [
            //     'Quick clock in/out with automatic timestamp recording',
            //     'Vacation and absence request management',
            //     'Real-time analytics and work pattern analysis',
            //     'CI/CD pipeline with GitHub Actions and Docker'
            // ],
            demoUrl: 'https://www.pertitrack.denizaltun.de/',
            githubUrl: 'https://github.com/ad-altun/PerTiTrack',
            description: 'Enterprise-grade personnel time tracking system with JWT authentication, ' +
                'role-based access control, and comprehensive absence management.',
        },
        {
            id: 'upcoming',
            title: 'Upcoming Project',
            period: 'October 2025 - Present',
            type: 'Frontend',
            image: '/public/project-images/upcoming-project.jpg',
            technologies: [ 'Java 21', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker' ],
            // features: [
            //     'Quick clock in/out with automatic timestamp recording',
            //     'Vacation and absence request management',
            //     'Real-time analytics and work pattern analysis',
            //     'CI/CD pipeline with GitHub Actions and Docker'
            // ],
            demoUrl: 'https://www.denizaltun.de/',
            githubUrl: 'https://github.com/ad-altun',
            description: 'Coming soon...',
        },
    ];


    return (
        <Box sx={{ py: 3, px: 1, }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{
                    gap: 2, mb: 2
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            typography: { xs: 'h5', md: 'h4' },
                        }}
                        component="h2"
                        fontWeight="bold"
                    >
                        Projects
                    </Typography>
                </Box>
                <Divider sx={{ mb: 4, width: '10%', height: '3px', bgcolor: 'primary.main' }} />

                {/* Projects Grid */}
                <Grid container spacing={3}
                      sx={{
                          display: 'flex', justifyContent: 'center',
                          alignItems: 'center', gap: '2rem',
                }}
                >
                    {projects.map((project) => (
                        <Grid sx={{ xs: 12, sm:6, lg: 3 }} key={project.id}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>

                {/* Empty State */}
                {projects.length === 0 && (
                    <Box
                        sx={{
                            textAlign: 'center',
                            py: 8,
                            color: 'text.secondary',
                        }}
                    >
                        <Typography variant="h6">No projects found in this category</Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

