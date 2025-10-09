import {
    Box,
    Button,
    Container,
    Typography,
    Card,
    CardContent,
} from '@mui/material';
import {
    LinkedIn,
    Email,
    GitHub,
} from '@mui/icons-material';

export const Contact = () => (
    <Box id="contact" sx={ { py: 10, bgcolor: 'background.default' } }>
        <Container maxWidth="sm">
            <Card elevation={ 0 } sx={ { border: 1, borderColor: 'divider', textAlign: 'center' } }>
                <CardContent sx={ { p: 4 } }>
                    <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
                        Get In Touch
                    </Typography>
                    <Typography color="text.secondary" component="p" sx={{ mb: 4 }} >
                        I'm currently open to new opportunities and collaborations. Feel free to reach out!
                    </Typography>
                    <Box sx={ { display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' } }>
                        <Button
                            variant="text"
                            startIcon={ <Email/> }
                            href="mailto:ada.altun@gmail.com"
                        >
                            Send Email
                        </Button>
                        <Button
                            variant="text"
                            startIcon={ <LinkedIn/> }
                            href="https://www.linkedin.com/in/abidin-deniz-altun-46906a71/"
                            target="_blank"
                        >
                            LinkedIn
                        </Button>
                        <Button
                            variant="text"
                            startIcon={ <GitHub /> }
                            href="https://github.com/ad-altun/"
                            target="_blank"
                        >
                            GitHub
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    </Box>
);

