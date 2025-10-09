import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
} from '@mui/material';
import {
    School
} from '@mui/icons-material';

export default function Education() {

    const education = [
        {
            degree: 'M.Sc. Mechatronics Engineering',
            school: 'University of Siegen',
            period: 'Oct 2017 - Nov 2021',
            description: 'Specialized in nonlinear model predictive control (NMPC) and robotics with ROS'
        },
        {
            degree: 'B.Sc. Electrical Engineering',
            school: 'Cukurova University',
            period: 'Sept 2009 - Nov 2013',
            description: 'Focused on embedded systems and microcontroller programming'
        }
    ];

    return (
        <Box sx={ { py: 10 } }>
            <Container maxWidth="lg" >
                <Typography variant="h3" component="h2" gutterBottom fontWeight="bold" mb={ 6 } textAlign="center">
                    Education
                </Typography>
                <Grid container spacing={ 3 } sx={{ display: "flex", justifyContent: "center", alignItems: 'center'  }} >
                    { education.map(( edu, idx ) => (
                        <Grid sx={{ xs: 12, md: 6, minWidth: "35rem" }} key={ idx }>
                            <Card elevation={ 0 } sx={ { border: 1, borderColor: 'divider', height: '100%' } }>
                                <CardContent>
                                    <Box sx={ { display: 'flex', gap: 2 } }>
                                        <School color="primary"/>
                                        <Box>
                                            <Typography variant="h6" fontWeight="bold">{ edu.degree }</Typography>
                                            <Typography color="text.secondary">{ edu.school }</Typography>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                                { edu.period }
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={ { mt: 2 } }>
                                                { edu.description }
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )) }
                </Grid>
            </Container>
        </Box>
    );

};
