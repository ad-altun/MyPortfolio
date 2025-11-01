import { Box, Container, Typography } from '@mui/material';
import { School } from '@mui/icons-material';
import ResumeCard from './ResumeCard.tsx';
import type { ResumeCardProps } from './ResumeCard.tsx';

export default function Education() {
    const educationData: ResumeCardProps[] = [
        {
            type: 'education',
            logo: '/resumeLogos/uni-siegen.png',
            institution: 'Universität Siegen',
            title: 'M. Sc. Mechatronik Ingenieurwesen',
            school: 'Faculty of Engineering',
            location: 'Siegen, Deutschland',
            period: 'Oct. 2017 - Nov. 2021',
            details: [
                'Entwurf, Simulation und Test eines nichtlinearen modellprädiktiven Reglers (NMPC) für ein inverses Pendel mittels numerischer Optimierung in MATLAB/Simulink.',
                'Erstellung von 3D-Umgebungskarten durch Anbindung von Time-of-Flight/RGB-D-Kameras an ROS mittels C++ unter Linux.',
                'Fokus auf Steuerungstechnik, Robotik und eingebettete Systeme',
                'Abschlussarbeit: Entwicklung von Regelungsalgorithmen für dynamische Systeme',
            ],
        },
        {
            type: 'education',
            logo: '/resumeLogos/cukurova-uni.png',
            institution: 'Cukurova University',
            title: 'B. Sc. Elektrotechnik',
            school: 'Faculty of Engineering',
            location: 'Adana, Türkei',
            period: 'Sep. 2009 - Nov. 2013',
            details: [
                'Entwicklung und Aufbau eines iButton-Lesegeräts mit LCD-Anzeige auf Basis des TI MSP430, inklusive Schaltungsentwurf und C-Programmierung in Code Composer Studio.',
                'Schwerpunkte: Eingebettete Systeme, Mikrocontroller-Programmierung und digitale Schaltungstechnik',
                'Praktische Erfahrung mit Hardware-Design und Low-Level-Programmierung',
                'Projektarbeit in den Bereichen Elektronik und Steuerungstechnik',
            ],
        },
    ];

    return (
        <Box id="education" sx={{ py: 5, px: 1,  }}>
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <School sx={{ fontSize: 28, color: 'primary.main' }} />
                    <Typography
                        variant="h3"
                        sx={{
                            typography: { xs: 'h6', md: 'h5' }, mb: 1,
                        }}
                        component="h2"
                        fontWeight="bold"
                    >
                        Education
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* Timeline dot styling */}
                    <Box sx={{ position: 'relative', pl: { xs: 0, md: 4 } }}>
                        {/* Vertical timeline line */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                position: 'absolute',
                                left: 11,
                                top: 30,
                                bottom: 30,
                                width: 2,
                                bgcolor: 'divider',
                            }}
                        />

                        {educationData.map((edu, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    position: 'relative',
                                    mb: idx < educationData.length - 1 ? 3 : 0,
                                }}
                            >
                                {/* Timeline dot */}
                                <Box
                                    sx={{
                                        display: { xs: 'none', md: 'block' },
                                        position: 'absolute',
                                        left: -32,
                                        top: 24,
                                        width: 12,
                                        height: 12,
                                        bgcolor: 'primary.main',
                                        borderRadius: '50%',
                                        border: '3px solid',
                                        borderColor: 'background.paper',
                                        zIndex: 1,
                                    }}
                                />
                                <ResumeCard {...edu} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}