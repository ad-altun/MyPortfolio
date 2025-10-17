import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Chip, Divider, Typography, Link } from "@mui/material";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { IoArrowDownOutline } from "react-icons/io5";
import Footer from "./Footer.tsx";

interface InfoData {
    icon: React.ReactNode;
    title: string;
    value: string;
    href?: string;
    target?: string;
}

export default function Sidebar() {
    const [ contactsOpen, setContactsOpen ] = useState<boolean>(false);

    const infoData: InfoData[] = [
        {
            icon: <IoLocationOutline/>,
            title: "LOCATION",
            value: "BW, Germany",
        },
        {
            icon: <MdOutlineEmail />,
            title: "EMAIL",
            value: "adaltun",
            href: "mailto:contact@denizaltun.de",
        },
        {
            icon: <FiGithub/>,
            title: "GITHUB",
            value: "@ad-altun",
            href: "https://github.com/ad-altun",
            target: "_blank",
        },
        {
            icon: <PiLinkedinLogo/>,
            title: "LINKEDIN",
            value: "in/deniz-altun/",
            href: "https://www.linkedin.com/in/abidin-deniz-altun-46906a71/",
            target: "_blank",
        },

    ];

    const handleContactsOpen = () => {
        setContactsOpen(!contactsOpen);
    };

    return (
        // complete sidebar, it moves top for mobile
        <Paper
            sx={ {
                // width: '10rem',
                minHeight: { xs: 'auto', lg: 'calc(100vh - 15rem)' },
                // overflow: 'auto',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1.25rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, height 0.3s ease',
                '&:hover': {
                    // transform: 'scale(1.05)',
                },
            } }
        >
            {/*box for the profile image, name, and chip*/ }
            <Box sx={ {
                display: 'flex', gap: '1rem',
                flexDirection: { xs: 'row', lg: 'column' },
                alignItems: { xs: 'flex-start', lg: 'center' },
                marginTop: { lg: '1rem' },
                position: 'relative',
            } }>
                <Box sx={ { display: { xs: 'flex', lg: 'none', }, } }>
                    <IoArrowDownOutline
                        onClick={ handleContactsOpen }
                        style={ {
                            position: 'absolute', top: '-0.85rem', right: '-0.85rem',
                            fontSize: '2rem', padding: '0.35rem',
                            cursor: 'pointer',
                            borderTopRightRadius: '.5rem', borderBottomLeftRadius: '.5rem',
                        } }/>
                </Box>
                <Box
                    component="img"
                    sx={ {
                        width: { xs: '5rem', md: '7rem', lg: '10rem' },
                        height: { xs: '5rem', md: '7rem', lg: '10rem' },
                        borderRadius: '20%',
                    } }
                    src="https://i.ibb.co/HDQ357MF/profile-image.jpg"
                    alt="profile-image"
                />

                <Box sx={ {
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'flex-start', gap: '0.5rem',
                } }>
                    <Typography sx={ { variant: { xs: 'h4', md: 'h6' }, } }
                                component="h2" gutterBottom
                                fontWeight="bold">
                        Deniz Altun
                    </Typography>

                    <Chip label="💻 Software Developer"
                          size="small"
                          sx={ { borderRadius: '.35rem', } }
                    />
                </Box>
                {/*<Divider sx={{ width: '100%',}} />*/ }
            </Box>
            <Divider sx={ {
                width: '75%',
                display: { xs: contactsOpen ? 'block' : 'none', lg: 'block' },
                margin: '0 auto',
                marginTop: '1.5rem',
            } }/>

            {/*Box for the location and contact information */ }
            <Box
                sx={ {
                    display: { xs: contactsOpen ? 'flex' : 'none', lg: 'flex', },
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginTop: '1rem',
                    maxHeight: { xs: contactsOpen ? '500px' : '0' },
                    transition: 'max-height 0.3s ease-in-out',
                    opacity: { xs: contactsOpen ? 1 : 0, md: 1 },
                } }
            >
                {
                    infoData.map(( info, index ) => (
                        <Box key={ index }
                             sx={ {
                                 display: 'flex',
                                 flexDirection: "row",
                                 alignItems: 'center',
                                 width: '15rem',
                                 gap: '1rem',
                                 justifyContent: 'flex-start',
                                 textAlign: 'left',
                                 marginTop: '1rem',
                                 marginLeft: '.25rem',
                                 marginRight: '4rem',
                             } }
                        >
                            <Paper elevation={ 2 } sx={ {
                                padding: '0.5rem',
                                borderRadius: '2rem', display: 'flex',
                            } }>
                                <Box sx={ {
                                    color: '#fff',
                                    // color: 'primary.contrastText',
                                    width: '2rem',
                                    height: '2rem',
                                    fontSize: '1.2rem',
                                    textAlign: 'center',
                                    pt: 0.5,
                                    mx: '.35rem',
                                } }
                                >{ info.icon }</Box>

                            </Paper>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                <Typography
                                    variant="caption" color="text.secondary" fontWeight="bold">
                                    { info.title }
                                </Typography>
                                <Link
                                    variant="caption"
                                    underline="hover"
                                    color="text.primary"
                                    component="a"
                                    target={ info.target }
                                    href={ info.href }
                                >
                                    { info.value }
                                </Link>
                            </Box>
                        </Box>
                    ))
                }
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    <Divider sx={ {
                        margin: '0 auto',
                        marginTop: '1.5rem',
                        width: '75%',
                        display: { xs: contactsOpen ? 'block' : 'none', lg: 'block' }
                    } }/>
                <Footer />
                </Box>
            </Box>
        </Paper>
    );
};
