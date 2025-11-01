import { Box, Container, Typography, Divider } from '@mui/material';
import TechStack from "./TechStack.tsx";

export const About = () => (
    <Box id="about" sx={ { py: 3, px: 1, } }>
        <Container maxWidth="lg">
            <Typography
                variant="h3"
                sx={ {
                    typography: { xs: 'h5', md: 'h4' },
                } }
                component="h2" gutterBottom fontWeight="bold" mb={ 1 }>
                About Me
            </Typography>
            <Divider sx={ { mb: 3, width: '10%', height: '3px', bgcolor: 'primary.main' } }/>
            <Box sx={ {
                mb: 4, display: 'flex', flexDirection: 'column',
                gap: 3, textAlign: 'justify',
            } }>
                <Typography component="p" color="text.secondary" sx={ { lineHeight: 1.8 } }>
                    I'm a software developer transitioning from embedded systems to modern web development,
                    focusing on Java backend and React frontend technologies.
                </Typography>
                <Typography component="p" color="text.secondary" sx={ { lineHeight: 1.8 } }>
                    I build efficient, reliable applications
                    using Spring Boot, TypeScript, and Docker, and enjoy combining structured thinking from my embedded background
                    with modern development practices.
                </Typography>
                <Typography component="p" color="text.secondary" sx={ { lineHeight: 1.8 } }>
                    Feel free to explore my projects and live applications. You can also visit my GitHub for more
                    technical details or connect with me on LinkedIn. I’m always open to new opportunities and collaborations.
                </Typography>


            </Box>
            <TechStack/>
        </Container>
    </Box>
);