import { Box, Container, Typography } from '@mui/material';
import {  LocationOn} from '@mui/icons-material';

export const About = () => (
    <Box id="about" sx={{ py: 10 }}>
        <Container maxWidth="md">
            <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" mb={4}>
                About Me
            </Typography>
            <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'justify' }}>
                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    I'm a passionate Software Developer with a strong foundation in Java backend development and modern web technologies.
                    I recently completed an intensive Java Development Bootcamp at Neue Fische, where I gained hands-on experience with
                    Spring Boot, React, and cloud deployment technologies.
                </Typography>
                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    With 2.5 years of experience as a Software Developer, I specialized in C-based development
                    for commercial vehicle functions. My expertise includes creating robust software solutions, debugging complex systems,
                    and maintaining comprehensive technical documentation. I've led weekly team meetings and provided technical support
                    to both customers and internal departments.
                </Typography>
                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    My background in Mechatronics Engineering (M.Sc. from University of Siegen) gives me a unique perspective on
                    software development, combining theoretical knowledge with practical problem-solving skills. I've worked with
                    MATLAB/Simulink for model predictive control systems and C++ with ROS for robotics applications.
                </Typography>
                <Typography component="p" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    I thrive in collaborative environments and am committed to writing clean, maintainable code. I'm always eager to
                    learn new technologies and best practices, and I enjoy contributing to projects that make a real impact.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
                <LocationOn color="action" />
                <Typography color="text.secondary">Baden-Württemberg, Germany</Typography>
            </Box>
        </Container>
    </Box>
);