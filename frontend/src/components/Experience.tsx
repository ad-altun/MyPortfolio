import { Box, Container, Typography } from '@mui/material';
import { Work } from '@mui/icons-material';
import ResumeCard from './ResumeCard';
import type { ResumeCardProps } from './ResumeCard';

export default function Experience() {
    const experienceData: ResumeCardProps[] = [
        {
            type: 'experience',
            logo: '/resumeLogos/neue-fische.png',
            institution: 'neue fische GmbH',
            title: 'Java Backend-Entwicklung Bootcamp',
            location: 'Remote',
            period: 'Jun. 2025 - Sep. 2025',
            details: [
                'Core Java and Object-Oriented Programming: Fundamentals of Java and principles of object-oriented programming.',
                'Frameworks: Powerful Java frameworks, especially Spring Framework, Spring Boot, and Spring Security for application development.',
                'Databases: NoSQL, MongoDB.',
                'DevOps: CI/CD with GitHub Actions, Maven, Docker, Docker Hub, and SonarCloud.',
                'Testing: Test-Driven Development (TDD), Integration and Unit-Tests, Mockito.',
                'APIs: RESTful APIs, external APIs – integration of OpenAI into web applications.',
            ],
        },
        {
            type: 'experience',
            logo: '/resumeLogos/ziegler-logo.png',
            institution: 'Albert Ziegler GmbH',
            title: 'Softwareentwickler',
            location: 'Giengen an der Brenz, Deutschland',
            period: 'Sep. 2022 - Mär. 2025',
            details: [
                'C-basierte Softwareentwicklung für Nutzfahrzeugfunktionen, umfassend die Neuentwicklung, Fehlerbehebung, Codeverbesserung, die Erstellung von Testsimulationen sowie die technische Dokumentation.',
                'Erstellung von Best-Practice-Dokumentation und Leitung wöchentlicher Besprechungen',
                'Unterstützung anderer Abteilungen, des Kundendienstes und der Endkunden vor Ort',
                'Implementierung von Software-Tests und Qualitätssicherung',
                'Zusammenarbeit in agilen Teams mit Scrum-Methodik',
            ],
        },
        {
            type: 'experience',
            logo: '/resumeLogos/temsa-logo.png',
            institution: 'Temsa Global - Bus & Coach',
            title: 'Internationaler Kundendienstkoordinator',
            location: 'Adana, Türkei',
            period: 'Dez. 2015 - Jul. 2017',
            details: [
                'Bereitstellung von elektrischem, mechanischem oder softwarebezogenem Support durch Zusammenarbeit mit Werksabteilungen, OEM und Kunden.',
                'Steigerung der Fahrzeugdiagnosekapazität um 50 % durch Zusammenarbeit mit dem Hersteller in Italien.',
                'Vorbereitung von Service Bulletins zur Veröffentlichung und Unterstützung der Teams vor Ort für eine optimale Umsetzung.',
                'Koordination internationaler Supportanfragen und technischer Problemlösungen',
                'Schulung von Servicetechnikern in neuen Diagnosemethoden',
            ],
        },
    ];

    return (
        <Box id="experience" sx={{  }}>
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                    <Work sx={{ fontSize: 28, color: 'primary.main' }} />
                    <Typography
                        variant="h3"
                        sx={{
                            typography: { xs: 'h6', md: 'h5' }, mb: 1,
                        }}
                        component="h2"
                        fontWeight="bold"
                    >
                        Experience
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* Timeline styling */}
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

                        {experienceData.map((exp, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    position: 'relative',
                                    mb: idx < experienceData.length - 1 ? 3 : 0,
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
                                <ResumeCard {...exp} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}