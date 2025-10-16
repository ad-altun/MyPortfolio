import { Box, Container, Typography, Divider } from '@mui/material';

export const About = () => (
    <Box id="about" sx={{ py: 3, px: 1, }}>
        <Container maxWidth="lg">
            <Typography
                variant="h3"
                sx={{
                    typography: { xs: 'h5', md: 'h4' },
                }}
                component="h2" gutterBottom fontWeight="bold" mb={1}>
                About Me
            </Typography>
            <Divider sx={{ mb: 3, width: '10%', height: '3px', bgcolor: 'primary.main' }} />
            <Box sx={{
                mb: 4, display: 'flex', flexDirection: 'column',
                gap: 3, textAlign: 'justify',
            }}>
                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    I'm a software developer focused on Java backend and React frontend development,
                    building reliable and efficient web applications.
                </Typography>
                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Over the past 2.5 years, I’ve worked on C-based systems for commercial vehicles,
                    gaining experience in software design, debugging, and technical documentation.
                </Typography>
                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    My background has strengthened my analytical and problem-solving skills.
                    I’ve worked with MATLAB/Simulink for model predictive control and
                    C++ with ROS for robotics applications.
                </Typography>
                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    I value clean, maintainable code and enjoy working in collaborative teams.
                    I’m always eager to learn new tools and contribute to meaningful projects.
                </Typography>
            </Box>
            {/*<Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>*/}
            {/*    <LocationOn color="action" />*/}
            {/*    <Typography color="text.secondary">Baden-Württemberg, Germany</Typography>*/}
            {/*</Box>*/}
        </Container>
    </Box>
);