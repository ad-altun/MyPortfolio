import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Paper, Box } from "@mui/material";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
    return (
        <Box
            sx={ {
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                margin: '0 auto',
                backgroundColor: 'background.default',
                maxWidth: { xs: '50rem', lg: '80rem' },
                minWidth: { xs: '20rem' },
            } }
        >
            <Box
                sx={ {
                    width: { xs: '100%', lg: '20rem' },
                    minWidth: { xs: '20rem', md: '30rem', lg: '20rem' },
                    marginTop: '2rem',
                    padding: '1rem',
                    position: { xs: 'static', lg: 'sticky' },
                    top: { lg: '2rem' },
                    alignSelf: { lg: 'flex-start' },
                    maxHeight: { lg: 'calc(100vh - 4rem)' },
                    overflowY: { lg: 'auto' },
                } }
            >
                <Sidebar/>
            </Box>
            <Paper
                sx={ {
                    margin: '1rem',
                    marginTop: { lg: '3rem' },
                    borderRadius: '1.25rem',
                    marginBottom: { xs: '5rem', lg: '1rem' },
                    paddingBottom: { xs: '1rem', lg: 0 },
                    height: { xs: '100%',  },
                    position: {xs: 'relative', md: 'relative', lg: 'relative' },
                    minWidth: { lg: '60rem' },
                } }
            >
                <Box sx={ {
                    position: { xs: 'fixed', md: 'fixed', lg: 'absolute' },
                    top: { xs: 'auto', md: 'auto', lg: 0 },
                    bottom: { xs: 0, md: 0, lg: 'auto' },
                    left: { xs: 0, md: 0, lg: 'auto' },
                    right: { xs: 0, md: 0, lg: 0 },
                    marginInline: { xs: 'auto', md: 'auto', lg: 0 },
                    maxWidth: { xs: '60rem', md: '60rem', lg: '30rem' },
                    width: { xs: 'calc(100% - 1rem)', md: 'auto', lg: 'auto' },
                    zIndex: 9999,
                    opacity: { xs: 0.85, md: 1 },
                    transition: 'all 0.3s ease',
                    borderRadius: '1.25rem',
                } }>
                    <Navbar/>
                </Box>
                <Box sx={ {
                    marginBottom: { xs: '3rem', lg: '1rem' },
                    minHeight: { xs: 'auto', md:'100vh', lg: '100vh ' },
                    // height: { xs: 'auto', md: 'calc(100vh - 25rem)', lg: '100%' },
                } }>
                    <Outlet/>
                </Box>
            </Paper>
        </Box>
    );
};
