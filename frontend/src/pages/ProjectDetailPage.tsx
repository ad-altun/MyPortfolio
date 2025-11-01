import { useParams, useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Chip,
    Divider,
    Paper,
} from '@mui/material';
import { ArrowBack, GitHub, Launch } from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import { getProjectById } from '../data/projects/projectIndex.ts';


export default function ProjectDetailPage() {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();

    const project = projectId ? getProjectById(projectId) : null;
    console.log(project)

    if ( !project ) {
        return (
            <Container maxWidth="md" sx={ { py: 8, textAlign: 'center' } }>
                <Typography variant="h4" gutterBottom>
                    Project not found
                </Typography>
                <Button
                    startIcon={ <ArrowBack/> }
                    onClick={ () => navigate('/projects') }
                    variant="outlined"
                >
                    Back to Projects
                </Button>
            </Container>
        );
    }

    return (
        <Box sx={ { py: 5, px: 1, minHeight: '100vh' } }>
            <Container maxWidth="md">
                {/* Back Button */ }
                <Button
                    startIcon={ <ArrowBack/> }
                    onClick={ () => navigate('/projects') }
                    sx={ { mb: 3 } }
                >
                    Back to Projects
                </Button>

                {/* Project Header */ }
                <Box sx={ { mb: 4 } }>
                    <Box sx={ { display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 } }>
                        <Box>
                            <Typography variant="h4" fontWeight="bold" gutterBottom>
                                { project.title }
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                { project.period }
                            </Typography>
                        </Box>
                        <Chip
                            label={ project.type }
                            sx={ {
                                bgcolor: 'background.default',
                                fontWeight: 'bold',
                            } }
                        />
                    </Box>

                    {/* Technologies */ }
                    <Box sx={ { display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 } }>
                        { project.technologies.map(( tech ) => (
                            <Chip
                                key={ tech }
                                label={ tech }
                                size="small"
                                sx={ {
                                    bgcolor: 'transparent',
                                    border: '1px solid',
                                    borderColor: 'divider',
                                } }
                            />
                        )) }
                    </Box>

                    {/* Action Buttons */ }
                    <Box sx={ { display: 'flex', gap: 3, mb: 3 } }>
                        { project.demoUrl && (
                            <Button
                                variant="contained"
                                startIcon={ <Launch/> }
                                href={ project.demoUrl }
                                target="_blank"
                                size="small"
                            >
                                Live Demo
                            </Button>
                        ) }
                        { project.githubUrl && (
                            <Button
                                variant="outlined"
                                startIcon={ <GitHub/> }
                                href={ project.githubUrl }
                                target="_blank"
                                size="small"
                            >
                                View Code
                            </Button>
                        ) }
                    </Box>

                    <Divider/>
                </Box>

                {/* Project Image */ }
                <Paper
                    elevation={ 0 }
                    sx={ {
                        mb: 4,
                        overflow: 'hidden',
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'divider',
                    } }
                >
                    <img
                        src={ project.image }
                        alt={ project.title }
                        style={ {
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                        } }
                    />
                </Paper>

                {/* README Content */ }
                <Paper
                    elevation={ 0 }
                    sx={ {
                        px: 4, pb: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                    } }
                >
                    <Box
                        sx={ {
                            '& h1': {
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                mb: 2,
                                mt: 3,
                            },
                            '& h2': {
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                mb: 2,
                                mt: 3,
                            },
                            '& h3': {
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                mb: 1.5,
                                mt: 2,
                            },
                            '& p': {
                                mb: 2,
                                lineHeight: 1.7,
                            },
                            '& ul': {
                                mb: 2,
                                pl: 4,
                            },
                            '& li': {
                                mb: 0.5,
                            },
                            '& code': {
                                bgcolor: 'action.hover',
                                px: 1,
                                py: 0.5,
                                borderRadius: 1,
                                fontFamily: 'monospace',
                                fontSize: '0.9em',
                            },
                            '& pre': {
                                bgcolor: 'action.hover',
                                p: 2,
                                borderRadius: 1,
                                overflow: 'auto',
                                mb: 2,
                            },
                            '& pre code': {
                                bgcolor: 'transparent',
                                p: 0,
                            },
                        } }
                    >
                        <ReactMarkdown>{ project.readme }</ReactMarkdown>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}