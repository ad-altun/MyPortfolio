import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import {
    Work,
} from '@mui/icons-material';

export const Experience = () => {
    const experiences = [
        {
            title: 'Java Backend Development Bootcamp',
            company: 'Neue Fische GmbH',
            period: 'June 2025 - Sept 2025',
            location: 'Remote',
            highlights: [
                'Mastered Spring Framework, Spring Boot, and Spring Security for enterprise applications',
                'Implemented CI/CD pipelines with GitHub Actions, Docker, and SonarCloud',
                'Built RESTful APIs and integrated external services including OpenAI',
                'Practiced Test-Driven Development with JUnit5, Mockito, and integration tests'
            ]
        },
        {
            title: 'Software Developer',
            company: 'Albert Ziegler GmbH',
            period: 'Sept 2017 - March 2025',
            location: 'Giengen an der Brenz, Germany',
            highlights: [
                'Developed C-based software for commercial vehicle functions including new features and bug fixes',
                'Created test simulations and maintained comprehensive technical documentation',
                'Led weekly team meetings and established best-practice documentation',
                'Provided on-site support to customer service teams and end customers'
            ]
        },
        {
            title: 'International Customer Service Coordinator',
            company: 'Temsa Global',
            period: 'Dec 2015 - July 2017',
            location: 'Adana, Turkey',
            highlights: [
                'Provided electrical, mechanical, and software support through cross-functional collaboration',
                'Increased vehicle diagnostic capacity by 50% through manufacturer partnerships',
                'Prepared service bulletins and supported field teams for optimal implementation'
            ]
        }
    ];

    return (
        <Box id="experience" sx={ {
            py: 5, bgcolor: 'background.default',
            width: '100%',
        } }>
            <Container sx={ {} }>
                <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" mb={ 6 } textAlign="center">
                    Experience
                </Typography>
                <Grid container spacing={ 3 }>
                    { experiences.map(( exp, idx ) => (
                        <Grid
                            key={ idx }
                            sx={ { xs: 12, width: '100%', minWidth: '45rem' } }>
                            <Card elevation={ 0 } sx={ { border: 1, borderColor: 'divider' } }>
                                <CardContent>
                                    <Box sx={ { display: 'flex', gap: 2, mb: 2 } }>
                                        <Work color="primary"/>
                                        <Box sx={ { flex: 1 } }>
                                            <Typography variant="h6" fontWeight="bold">{ exp.title }</Typography>
                                            <Typography color="text.secondary" gutterBottom>
                                                { exp.company } • { exp.period }
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                                { exp.location }
                                            </Typography>
                                            <Box  sx={ { mt: 2, pl: 2 } }>
                                                { exp.highlights.map(( highlight, i ) => (
                                                    <Typography  variant="body2" color="text.secondary"
                                                                key={ i } sx={ { mb: 0.5 } }>
                                                        { highlight }
                                                    </Typography>
                                                )) }
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )) }
                </Grid>
            </Container>
        </Box>
    );
};

