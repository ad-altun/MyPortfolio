import {
    Box,
    Container,
    Typography,
    Grid,
    Divider,
} from '@mui/material';

import ProjectCard from "./ProjectCard.tsx";
import { getAllProjects } from "../data/projects/projectIndex.ts";


export const Projects = () => {

    const projects = getAllProjects();

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
                          // mt: '3.5rem',
                          pt: { xs: 2, lg: 3}
                }}
                >
                    {projects.map((project) => (
                        <Grid sx={{ xs: 12, sm:6, lg: 3, }}
                              key={project.id}>
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

