import { useNavigate } from "react-router-dom";
import {
    Card,
    CardMedia,
    CardContent,
    Box,
    Typography,
    Chip,
    Button,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

export interface ProjectCardProps {
    id: string;
    title: string;
    period: string;
    type: "All" | "Frontend" | "Backend" | "Fullstack";
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    description?: string;
}

export default function ProjectCard( {
    id, title, period, type, image, technologies,
    demoUrl, githubUrl
}: ProjectCardProps ) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/projects/${ id }`);
    };

    const handleButtonClick = ( e: React.MouseEvent, url: string ) => {
        e.stopPropagation();
        window.open(url, '_blank');
    };

    return (
        <Card
            onClick={ handleCardClick }
            sx={ {
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                minHeight: '23rem',
                height: '100%',
                // padding: 2,
                maxWidth: { sm: 500, lg: 350 },
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 4,
                    borderColor: 'primary.main',
                },
            } }
        >
            {/* Project Image */ }
            <CardMedia
                component="img"
                image={ image }
                // height="200px"
                alt={ title }
                sx={ {
                    objectFit: 'cover',
                    maxHeight: "180px",
                    bgcolor: 'action.hover',
                } }
            />

            {/* Card Content */ }
            <CardContent sx={ { flexGrow: 1, display: 'flex', flexDirection: 'column' } }>
                {/* Header with period and type */ }
                <Box sx={ { display: 'flex', justifyContent: 'space-between', mb: 2, } }>
                    <Typography variant="caption" color="text.secondary">
                        { period }
                    </Typography>
                    <Chip
                        label={ type }
                        size="small"
                        sx={ {
                            bgcolor: 'background.default',
                            color: 'text.secondary',
                            fontWeight: 'bold',
                            fontSize: '0.7rem',
                        } }
                    />
                </Box>

                {/* Title */ }
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    { title }
                </Typography>

                {/* Technologies */ }
                <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2, flexGrow: 1, } }>
                    { technologies.map(( tech ) => (
                        <Chip
                            key={ tech }
                            label={ tech }
                            size="small"
                            sx={ {
                                bgcolor: 'transparent',
                                border: '1px solid',
                                borderColor: 'divider',
                                fontSize: '0.75rem',
                            } }
                        />
                    )) }
                </Box>

                {/* Action Buttons */ }
                <Box sx={ { display: 'flex', gap: 1, mt: 'auto' } }>
                    { demoUrl && (
                        <Button
                            variant="contained"
                            startIcon={ <Launch/> }
                            size="small"
                            onClick={ ( e ) => handleButtonClick(e, demoUrl) }
                            sx={ { flex: 1 } }
                        >
                            Live Demo
                        </Button>
                    ) }
                    { githubUrl && (
                        <Button
                            variant="outlined"
                            startIcon={ <GitHub/> }
                            size="small"
                            onClick={ ( e ) => handleButtonClick(e, githubUrl) }
                            sx={ { flex: 1 } }
                        >
                            View Code
                        </Button>
                    ) }
                </Box>
            </CardContent>
        </Card>
    );
};
