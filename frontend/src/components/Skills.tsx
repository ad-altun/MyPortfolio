import {
    Box,
    Container,
    Typography,
    Chip,
    Grid,
    Card,
    CardContent,
} from '@mui/material';


export const Skills = () => {
    const skillCategories = [
        {
            title: 'Backend',
            skills: [ 'Java 21', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'JUnit5', 'Mockito' ]
        },
        {
            title: 'Frontend',
            skills: [ 'React 19', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Zod', 'REST APIs' ]
        },
        {
            title: 'DevOps & Tools',
            skills: [ 'Docker', 'GitHub Actions', 'PostgreSQL', 'MongoDB', 'Git', 'IntelliJ', 'Maven' ]
        }
    ];

    return (
        <Box sx={ { py: 1 } }>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" mb={ 6 } textAlign="center">
                    Technical Skills
                </Typography>
                <Grid container spacing={ 3 } sx={{ display: "flex", justifyContent: "center", alignItems: 'center'  }} >
                    { skillCategories.map(( category, idx ) => (
                        <Grid sx={{ xs: 12, md: 4 }} key={ idx }>
                            <Card elevation={ 0 } sx={ { border: 1, borderColor: 'divider', height: '100%' } }>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                                        { category.title }
                                    </Typography>
                                    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1,
                                        maxWidth: "20rem", minHeight: "9rem" } }>
                                        { category.skills.map(skill => (
                                            <Chip key={ skill } label={ skill } size="medium"/>
                                        )) }
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
