import { Box, Typography, Divider, Grid, Paper } from '@mui/material';
import {
    Code,
    Storage,
    DataObject,
    CloudQueue,
    // Build,
    // BugReport,
} from '@mui/icons-material';

const techStackData = {
    frontend: {
        title: 'Frontend',
        icon: Code,
        color: '#61DAFB',
        technologies: [
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            {
                name: 'TypeScript',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
            },
            {
                name: 'JavaScript',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
            },
            {
                name: 'Material-UI',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
            },
            {
                name: 'Tailwind CSS',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
            },
            { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        ],
    },
    backend: {
        title: 'Backend',
        icon: Storage,
        color: '#007396',
        technologies: [
            { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            {
                name: 'Spring Boot',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
            },
            {
                name: 'Spring Security',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
            },
            {
                name: 'Spring Security',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
            },
            { name: 'JUnit 5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg' },
            {
                name: 'Mockito',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mockito/mockito-original.svg'
            },
            // { name: 'Mockito', logo: 'https://github.com/devicons/devicon/tree/v2.17.0/icons/mockito/mockito-original.svg' },
        ],
    },
    database: {
        title: 'Database',
        icon: DataObject,
        color: '#336791',
        technologies: [
            {
                name: 'PostgreSQL',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
            },
            {
                name: 'MongoDB',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
            },
            {
                name: 'Hibernate',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg'
            },
        ],
    },
    devops: {
        title: 'DevOps & Cloud',
        icon: CloudQueue,
        color: '#2496ED',
        technologies: [
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            {
                name: 'GitHub Actions',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg'
            },
            {
                name: 'SonarQube',
                logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg'
            },
            // { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
            // { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
        ],
    },
    // tools: {
    //     title: 'Tools & IDEs',
    //     icon: Build,
    //     color: '#FF6B6B',
    //     technologies: [
    //         { name: 'IntelliJ IDEA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
    //         { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    //         { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    //         { name: 'Maven', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
    //         { name: 'npm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
    //     ],
    // },
    // other: {
    //     title: 'Other',
    //     icon: BugReport,
    //     color: '#9B59B6',
    //     technologies: [
    //         { name: 'MATLAB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
    //     ],
    // },
};

export default function TechStack() {
    return (
        <Box sx={ {
            mt: 6,
        } }>
            <Typography
                variant="h4"
                component="h3"
                fontWeight="bold"
                mb={ 1 }
                sx={ { typography: { xs: 'h5', md: 'h4' } } }
            >
                Tech Stack
            </Typography>
            <Divider sx={ { mb: 4, width: '10%', height: '3px', bgcolor: 'primary.main' } }/>

            <Grid container spacing={ 3 }>
                { Object.entries(techStackData).map(( [ key, category ] ) => {
                    const IconComponent = category.icon;
                    return (
                        <Grid key={ key }
                              sx={ {
                                  xs: 12,
                                  sm: 6,
                                  md: 4,
                                  display: 'flex',
                                  justifyContent: 'space-around',
                              } }>
                            <Paper
                                elevation={ 1 }
                                sx={ {
                                    p: 1,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 2,
                                    display: 'flex',
                                    maxWidth: '19rem',
                                    maxHeight: '10rem',
                                    width:'100%',
                                    justifyContent: 'space-between',
                                    flexDirection: { xs: 'column', },
                                    gap: { xs: .25,  },
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        transform: 'translateY(-4px)',
                                        boxShadow: 4,
                                    },
                                } }
                            >
                                {/* Header */ }
                                <Box sx={ { display: 'flex', flexDirection: 'column' } }>
                                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                        <IconComponent sx={ { fontSize: 20, color: category.color, mr: 1 } }/>
                                        <Typography variant="subtitle1" fontWeight="">
                                            { category.title }
                                        </Typography>
                                    </Box>
                                    <Divider sx={ {
                                        mb: .5, width: '10%', ml: 3.5,
                                        height: '1px', bgcolor: 'primary.main' } }/>
                                </Box>

                                {/* Logos */ }
                                <Box
                                    sx={ {
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: .5,
                                        mt: .5,
                                    } }
                                >
                                    { category.technologies.map(( tech, index ) => (
                                        <Box
                                            key={ index }
                                            sx={ {
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5,
                                                bgcolor: 'background.paper',
                                                p: 0.3,
                                                px: 1,
                                                borderRadius: 1,
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                transition: '0.2s',
                                                '&:hover': {
                                                    bgcolor: 'action.hover',
                                                },
                                            } }
                                        >
                                            <Box
                                                component="img"
                                                src={ tech.logo }
                                                alt={ tech.name }
                                                sx={ {
                                                    width: 12,
                                                    height: 12,
                                                    objectFit: 'contain',
                                                } }
                                            />
                                            <Typography variant="body2" color="text.secondary">
                                                { tech.name }
                                            </Typography>
                                        </Box>
                                    )) }
                                </Box>
                            </Paper>
                        </Grid>
                    );
                }) }
            </Grid>
        </Box>
    );
}
