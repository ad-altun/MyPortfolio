import {
    Paper,
    Box,
    // IconButton,
    Toolbar,
    useScrollTrigger,
    useTheme as useMuiTheme
} from "@mui/material";
{/*disabled for the moment */}
// import { LightMode, DarkMode } from "@mui/icons-material";
// import { useTheme } from "../hooks/useTheme.tsx";
import {  NavLink } from "react-router-dom";

export default function Navbar() {
    // const navigate = useNavigate();

    const muiTheme = useMuiTheme();
    {/*disabled for the moment */}
    // const { themeMode, setMode, actualTheme } = useTheme();

    {/*disabled for the moment */}
    // const handleThemeChange = () => {
    //     if ( actualTheme === 'dark' ) {
    //         setMode('light');
    //     } else {
    //         setMode('dark');
    //     }
    // };

    // Add elevation on scroll
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const navItems = [
        { label: 'About', to: '/' },
        { label: 'Projects', to: '/projects' },
        { label: 'Resume', to: '/resume' },
    ];

    return (
        <Paper
            id="navbar"
            elevation={ trigger ? 4 : 0 }
            sx={ {
                backdropFilter: 'blur(10px)',
                backgroundColor: { xs: 'background.default', lg:'background.paper' },
                marginInline: { xs: .5, md: 2, lg: 0 },
                borderTopLeftRadius: {xs: '1rem', lg: 0},
                borderTopRightRadius: {xs: '1rem', lg: '1rem'},
                borderBottomLeftRadius: {xs: 0, lg: '1rem'},
            } }
        >
            <Toolbar sx={ { justifyContent: 'center' } }>
                <Box
                    sx={ {
                        display: 'flex',
                        alignItems: 'center',
                    } }
                >
                    { navItems.map(( item ) => (
                        <Box
                            key={ item.label }
                            sx={ {
                                textTransform: 'none',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                px: 2,
                                '&:hover': {
                                    // bgcolor: darkMode ? 'rgba(251, 191, 36, 0.1)' : 'rgba(79, 70, 229, 0.1)',
                                    // color: 'primary.main',
                                },
                                transition: 'all 0.2s ease',
                            } }
                        >
                            <NavLink
                                to={ item.to }
                                style={ { "color": `${muiTheme.palette.primary.main}` }}
                            >
                                { item.label }
                            </NavLink>
                        </Box>
                    )) }

                    {/*disabled for the moment */}
                    {/* Theme Toggle */ }
                    {/*<IconButton*/}
                    {/*    onClick={ handleThemeChange }*/}
                    {/*    color="primary"*/}
                    {/*    sx={ {*/}
                    {/*        ml: 1,*/}
                    {/*        '&:hover': {*/}
                    {/*            transform: 'rotate(180deg)',*/}
                    {/*            transition: 'transform 0.3s ease',*/}
                    {/*        },*/}
                    {/*    } }*/}
                    {/*>*/}
                    {/*    { themeMode === 'dark' ? <LightMode/> : <DarkMode/> }*/}
                    {/*</IconButton>*/}
                </Box>
            </Toolbar>

        </Paper>
    );
}