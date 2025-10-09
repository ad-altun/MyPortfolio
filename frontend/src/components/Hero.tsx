import { Box, IconButton,  Container, Avatar, Typography, Chip } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export const Hero = ({ darkMode }: { darkMode: boolean }) => (
<Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', py: 8 }}>
    <Container maxWidth="md">
        <Avatar
            sx={{
                width: 140,
                height: 140,
                mx: 'auto',
                mb: 3,
                bgcolor: darkMode ? 'warning.main' : 'primary.main',
                fontSize: '3rem',
                fontWeight: 'bold'
            }}
        >
            DA
        </Avatar>
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            Abidin Deniz Altun
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
            Software Developer | Java Backend Developer | Full Stack Developer
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap', my: 3 }}>
            <Chip label="Java • Spring Boot" />
            <Chip label="React • TypeScript" />
            <Chip label="PostgreSQL • MongoDB" />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
            <IconButton href="https://github.com/ad-altun" target="_blank" color="primary" size="large">
                <GitHub />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/abidin-deniz-altun-46906a71/" target="_blank" color="primary" size="large">
                <LinkedIn />
            </IconButton>
            <IconButton href="mailto:ada.altun@gmail.com" color="primary" size="large">
                <Email />
            </IconButton>
        </Box>
    </Container>
</Box>
);