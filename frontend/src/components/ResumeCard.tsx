import { useState } from 'react';
import {
    Card,
    CardContent,
    Box,
    Typography,
    Chip,
    Modal,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import {
    School,
    Work,
    LocationOn,
    CalendarToday,
    Close,
} from '@mui/icons-material';

export interface ResumeCardProps {
    type: 'education' | 'experience';
    logo?: string; // URL to institution/company logo
    institution: string;
    title: string;
    location: string;
    period: string;
    school?: string; // For education (e.g., "Viterbi School of Engineering")
    details?: string[]; // List of bullet points for the modal
}

export default function ResumeCard({
    type,
    logo,
    institution,
    title,
    location,
    period,
    school,
    details = [],
}: ResumeCardProps) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Icon = type === 'education' ? School : Work;

    return (
        <>
            {/* Card */}
            <Card
                onClick={handleOpen}
                sx={{
                    // bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                        borderColor: 'primary.main',
                    },
                }}
            >
                <CardContent>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {/* Logo/Icon */}
                        <Box
                            sx={{
                                width: '2.5rem',
                                height: '2.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: logo ? 'transparent' : 'primary.main',
                                borderRadius: 1,
                                flexShrink: 0,
                            }}
                        >
                            {logo ? (
                                <img
                                    src={logo}
                                    alt={institution}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        borderRadius: '4px',
                                    }}
                                />
                            ) : (
                                <Icon sx={{ fontSize: '1.5rem', color: 'primary.contrastText' }} />
                            )}
                        </Box>

                        {/* Content */}
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {institution}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" gutterBottom>
                                {title}
                            </Typography>

                            {/* School chip (for education) */}
                            {school && (
                                <Chip
                                    icon={<School sx={{ fontSize: 16 }} />}
                                    label={school}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        mb: 1,
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                    }}
                                />
                            )}

                            {/* Location */}
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                                <LocationOn sx={{ fontSize: 16, color: 'primary.main' }} />
                                <Typography variant="body2" color="text.secondary">
                                    {location}
                                </Typography>
                            </Box>

                            {/* Period */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <CalendarToday sx={{ fontSize: 16, color: 'primary.main' }} />
                                <Typography variant="body2" color="text.secondary">
                                    {period}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        left: { lg: '10%', } ,
                        width: { xs: '90%', sm: '80%', md: '60%', lg: '40%' },
                        maxWidth: 800,
                        maxHeight: '90vh',
                        bgcolor: 'background.paper',
                        borderRadius: '2.5rem',
                        boxShadow: 24,
                        overflow: 'auto',
                        p: {xs: '2rem', lg: '3rem'},
                    }}
                >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: 8,
                            color: 'text.secondary',
                        }}
                    >
                        <Close />
                    </IconButton>

                    {/* Modal Header */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: logo ? 'transparent' : 'primary.main',
                                borderRadius: 1,
                                flexShrink: 0,
                            }}
                        >
                            {logo ? (
                                <img
                                    src={logo}
                                    alt={institution}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        borderRadius: '4px',
                                    }}
                                />
                            ) : (
                                <Icon sx={{ fontSize: 40, color: 'primary.contrastText' }} />
                            )}
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography id="modal-title" variant="h5" fontWeight="bold" gutterBottom>
                                {institution}
                            </Typography>
                            <Typography variant="h6" color="text.secondary" gutterBottom>
                                {title}
                            </Typography>

                            {school && (
                                <Chip
                                    icon={<School sx={{ fontSize: 16 }} />}
                                    label={school}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        mb: 1,
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                    }}
                                />
                            )}

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <LocationOn sx={{ fontSize: 18, color: 'primary.main' }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {location}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <CalendarToday sx={{ fontSize: 18, color: 'primary.main' }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {period}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Details List */}
                    {details && details.length > 0 && (
                        <List sx={{ pl: 2 }}>
                            {details.map((detail, index) => (
                                <ListItem
                                    key={index}
                                    sx={{
                                        display: 'list-item',
                                        listStyleType: 'disc',
                                        pl: 0,
                                        py: 0.5,
                                    }}
                                >
                                    <ListItemText
                                        primary={detail}
                                        primaryTypographyProps={{
                                            variant: 'body2',
                                            color: 'text.secondary',
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Box>
            </Modal>
        </>
    );
}