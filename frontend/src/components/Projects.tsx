import {
    Box,
    Button,
    Container,
    Typography,
    Chip,
    Grid,
    Card,
    CardContent,
    Divider,
} from '@mui/material';
import {
    GitHub,
    Launch,
} from '@mui/icons-material';


export const Projects = () => {
    const featuredProject = {
        title: 'PerTiTrack',
        description: 'Enterprise-grade personnel time tracking system with JWT authentication, role-based access control, and comprehensive absence management.',
        technologies: [ 'Java 21', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker' ],
        // features: [
        //     'Quick clock in/out with automatic timestamp recording',
        //     'Vacation and absence request management',
        //     'Real-time analytics and work pattern analysis',
        //     'CI/CD pipeline with GitHub Actions and Docker'
        // ],
        demoUrl: 'https://www.pertitrack.denizaltun.de/',
        githubUrl: 'https://github.com/ad-altun/PerTiTrack'
    };

    const upcomingProjects = [
        {
            title: 'Project Coming Soon',
            description: 'A new exciting project is in development. Stay tuned for updates!',
            // technologies: [ 'TBD' ]
        },
        // {
        //     title: 'Another Project',
        //     description: 'More innovative solutions are on the way.',
        //     technologies: [ 'TBD' ]
        // }
    ];

    return (
        <Box id="projects" sx={ { py: 10, bgcolor: 'background.default' } }>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" mb={ 6 } textAlign="center">
                    Projects
                </Typography>

                {/* Featured Project */ }
                <Card elevation={ 0 } sx={ { border: 1, borderColor: 'divider', mb: 6 } }>
                    <CardContent sx={ { p: 4 } }>
                        <Grid container spacing={ 4 }>
                            <Grid sx={{ xs: 12, md: 7 }} >
                                <Typography variant="h4" fontWeight="bold" gutterBottom>
                                    { featuredProject.title }
                                </Typography>
                                <Typography color="text.secondary" paragraph>
                                    { featuredProject.description }
                                </Typography>
                                <Divider sx={ { my: 3 } } />
                                <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap',
                                    justifyContent: 'space-between', alignItems: 'flex-start',
                                } } >
                                    <Box sx={ { display: 'flex', gap: 2, flexWrap: 'wrap' } }>
                                        <Button
                                            variant="contained"
                                            startIcon={ <Launch/> }
                                            href={ featuredProject.demoUrl }
                                            target="_blank"
                                        >
                                            Live Demo
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            startIcon={ <GitHub/> }
                                            href={ featuredProject.githubUrl }
                                            target="_blank"
                                        >
                                            View Code
                                        </Button>
                                    </Box>
                                    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 } }>
                                        { featuredProject.technologies.map(tech => (
                                            <Chip key={ tech } label={ tech } size="medium"/>
                                        )) }
                                    </Box>
                                </Box>
                                {/*<Box component="ul" sx={ { pl: 2, mb: 3 } }>*/}
                                {/*    { featuredProject.features.map(( feature, i ) => (*/}
                                {/*        <Typography variant="body2" color="text.secondary" key={ i }*/}
                                {/*                    sx={ { mb: 1 } }>*/}
                                {/*            { feature }*/}
                                {/*        </Typography>*/}
                                {/*    )) }*/}
                                {/*</Box>*/}

                            </Grid>
                            {/*<Grid  sx={{ xs: 12, md: 5 }} >*/}
                            {/*    <Box sx={ {*/}
                            {/*        bgcolor: 'action.hover',*/}
                            {/*        borderRadius: 2,*/}
                            {/*        height: '100%',*/}
                            {/*        display: 'flex',*/}
                            {/*        alignItems: 'center',*/}
                            {/*        justifyContent: 'center',*/}
                            {/*        minHeight: 300,*/}
                            {/*        p: 4*/}
                            {/*    } }>*/}
                            {/*        <Box sx={ { textAlign: 'center' } }>*/}
                            {/*            <Code sx={ { fontSize: 80, color: 'text.secondary', mb: 2 } }/>*/}
                            {/*            <Typography color="text.secondary">*/}
                            {/*                Full-Stack Time Tracking Application*/}
                            {/*            </Typography>*/}
                            {/*        </Box>*/}
                            {/*    </Box>*/}
                            {/*</Grid>*/}
                        </Grid>
                    </CardContent>
                </Card>

                {/* Upcoming Projects */ }
                <Typography variant="h5" fontWeight="bold" mb={ 3 }>
                    Upcoming Projects
                </Typography>
                <Grid container spacing={ 3 } sx={{ display: "flex", justifyContent: "center", alignItems: 'center'  }} >
                    { upcomingProjects.map(( project, idx ) => (
                        <Grid sx={{ xs: 12, md:6 }} key={ idx }>
                            <Card elevation={ 0 }
                                  sx={ { border: 1, borderColor: 'divider', height: '100%', opacity: 0.7
                            } }>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                                        { project.title }
                                    </Typography>
                                    <Typography color="text.secondary" paragraph>
                                        { project.description }
                                    </Typography>
                                    {/*<Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1 } }>*/}
                                    {/*    { project.technologies.map(tech => (*/}
                                    {/*        <Chip key={ tech } label={ tech } size="small" variant="outlined"/>*/}
                                    {/*    )) }*/}
                                    {/*</Box>*/}
                                </CardContent>
                            </Card>
                        </Grid>
                    )) }
                </Grid>
            </Container>
        </Box>
    );
};

