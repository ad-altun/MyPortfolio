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
                // Lg: '46.25rem' keeps the outlet at the same level when there is not enough content
                minHeight: { xs: 'auto', lg: '46.25rem' },
            } }
        >
            {/* Sidebar Container */}
            <Box
                sx={ {
                    width: { xs: '100%', lg: '20rem' },
                    minWidth: '20rem',
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

            {/* Main Content Area */}
            <Paper
                sx={ {
                    flex: 1,
                    margin: '1rem',
                    marginTop: { lg: '3rem' },
                    borderRadius: '1.25rem',
                    marginBottom: { xs: '5rem', lg: '1rem' },
                    paddingBottom: { xs: '1rem', lg: 0 },
                    position: 'relative',
                    minWidth: { lg: '50rem' },
                    maxWidth: { lg: '70rem' },
                } }
            >
                {/* Navbar Container */}
                <Box sx={{
                    position: { xs: 'fixed', lg: 'absolute' },
                    top: { xs: 'auto', lg: 0 },
                    bottom: { xs: 0, lg: 'auto' },
                    left: { xs: '0.5rem', lg: 'auto' },
                    right: { xs: '0.5rem', lg: 0 },
                    maxWidth: { xs: '100%', lg: '30rem' },
                    zIndex: 9999,
                    opacity: { xs: 0.85, md: 1 },
                    transition: 'all 1s ease',
                    borderRadius: '1.25rem',
                }}>
                    <Navbar/>
                </Box>

                {/* Page Content Outlet */}
                <Box sx={ {
                    marginTop: { lg: '2.25rem' },
                    marginBottom: { xs: '3rem', lg: '1rem' },
                } }>
                    <Outlet/>
                </Box>
            </Paper>
        </Box>
    );
};
