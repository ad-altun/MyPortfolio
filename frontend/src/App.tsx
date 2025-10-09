import { createTheme } from "@mui/material/styles";
import './App.css';
import {
    ThemeProvider,
    CssBaseline,
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Container,
    Typography,
} from '@mui/material';
import {
    LightMode,
    DarkMode,
} from '@mui/icons-material';
import { useState } from "react";
import { About } from "./components/About.tsx";
import { Hero } from "./components/Hero.tsx";
import { Experience } from "./components/Experience.tsx";
import Education from "./components/Education.tsx";
import { Projects } from "./components/Projects.tsx";
import { Skills } from "./components/Skills.tsx";
import { Contact } from "./components/Contact.tsx";

function App() {
    // Main App Component
    const [darkMode, setDarkMode] = useState(true);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#fbbf24' : '#4f46e5',
            },
            background: {
                default: darkMode ? '#0f172a' : '#f8fafc',
                paper: darkMode ? '#1e293b' : '#ffffff',
            },
        },
        typography: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
    });

            return (
            <ThemeProvider theme={ theme }>
                <CssBaseline/>
                <Box sx={ { display: 'flex', flexDirection: 'column', minHeight: '100vh',
                            maxWidth: '80vw',
                            } }>
                    {/* Header */ }
                    <AppBar position="fixed" elevation={ 0 } sx={ {
                        backdropFilter: 'blur(10px)',
                        bgcolor: 'background.paper',
                        borderBottom: 1,
                        borderColor: 'divider'
                    } }>
                        <Toolbar>
                            <Typography variant="h6"
                                        sx={ { flexGrow: 0, fontWeight: 'bold', color: 'primary.main', mr: 4 } }>
                                DA
                            </Typography>
                            <Box sx={ { flexGrow: 1, display: 'flex', gap: 3, color: 'text.primary' } }>
                                <Button color="inherit" href="#about">About</Button>
                                <Button color="inherit" href="#projects">Projects</Button>
                                <Button color="inherit" href="#experience">Experience</Button>
                                <Button color="inherit" href="#contact">Contact</Button>
                            </Box>
                            <IconButton onClick={ () => setDarkMode(!darkMode) } color="primary">
                                { darkMode ? <LightMode/> : <DarkMode/> }
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    {/* Content */ }
                    <Box sx={ { mt: 8 } }>
                        <Hero darkMode={ darkMode }/>
                        <About/>
                        <Projects/>
                        <Experience/>
                        <Education/>
                        <Skills/>
                        <Contact/>
                    </Box>

                    {/* Footer */ }
                    <Box sx={ { borderTop: 1, borderColor: 'divider', py: 3, bgcolor: 'background.paper' } }>
                        <Container>
                            <Typography variant="body2" color="text.secondary" textAlign="center">
                                © 2025 Abidin Deniz Altun. Built with React, TypeScript & Material-UI
                            </Typography>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
            );
}

export default App;
