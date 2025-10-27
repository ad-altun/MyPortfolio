import Experience from "./Experience.tsx";
import Education from "./Education.tsx";
import { Box, Container, Divider, Typography } from "@mui/material";

export default function Resume() {
    return (
        <Box sx={{
            py: 3, px: 1,
        }}>
            <Container maxWidth="lg" >
                {/* Header */}
                <Box sx={{
                    gap: 2, mb: 2
                }}>
                    <Typography
                        variant="h3"
                        sx={{
                            typography: { xs: 'h5', md: 'h4' },
                        }}
                        component="h2"
                        fontWeight="bold"
                    >
                        Resume
                    </Typography>
                </Box>
                <Divider sx={{ mb: 4, width: '10%', height: '3px', bgcolor: 'primary.main' }} />
                <Box sx={ {
                    py: 1, px: 1,
                }} >
                    <Experience/>
                </Box>
                <Box>
                    <Education/>
                </Box>
            </Container>

        </Box>
    );
};
