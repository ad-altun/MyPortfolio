import {
    Box,
    Container,
    Typography,
    Grid,
    Divider, Chip, Stack,
} from '@mui/material';

import ProjectCard from "./ProjectCard.tsx";
import { getAllProjects } from "../data/projects/projectIndex.ts";
import { useState } from "react";
import type { ProjectType } from "../data/projectTypes.ts";


export const Projects = () => {
    const [ selectedType, setSelectedType ] = useState<ProjectType | 'All'>('All');
    const allProjects = getAllProjects();

    // filter projects based on selected type
    const projects = selectedType === 'All' ?
        allProjects :
        allProjects.filter(project => project.type === selectedType);

    // Get unique project types from existing projects
    const projectTypes: Array<ProjectType | 'All'> = ['All', 'Fullstack', 'Backend', 'Frontend'];

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

                {/* Filter Chips */}
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        mb: 4,
                        flexWrap: 'wrap',
                        gap: 1,
                    }}
                >
                    {projectTypes.map((type) => (
                        <Chip
                            key={type}
                            label={type}
                            onClick={() => setSelectedType(type)}
                            color={selectedType === type ? 'primary' : 'default'}
                            variant={selectedType === type ? 'filled' : 'outlined'}
                            sx={{
                                fontWeight: selectedType === type ? 'bold' : 'normal',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: 2,
                                },
                            }}
                        />
                    ))}
                </Stack>

                {/* Projects Grid */}
                <Grid container spacing={3}
                      sx={{
                          pt: { xs: 2, lg: 3}
                }}
                >
                    {projects.map((project) => (
                        <Grid key={project.id}
                              sx={{ xs:12, sm:6, lg:3, display: 'flex' }}>
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

