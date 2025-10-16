import { Box, Container, Stack, Typography } from '@mui/material';

export default function Footer() {
 return (
     <Box
         component="footer"
         sx={{
             my: 2,
             borderBottomLeftRadius: '1.25rem',
             borderBottomRightRadius: '1.25rem',
         }}
     >
         <Container maxWidth="lg">
             <Stack spacing={2} alignItems="center">
                 {/* Copyright */}
                 <Typography
                     variant="body2"
                     color="text.secondary"
                     textAlign="center"
                 >
                     © {new Date().getFullYear()} Abidin Deniz Altun.
                     <br/>
                     Built with React, TypeScript & Material-UI
                 </Typography>

                 {/* Credit Attribution */}
                 <Typography
                     variant="body2"
                     color="text.secondary"
                     textAlign="center"
                     sx={{ fontSize: '0.875rem' }}
                 >
                     Design inspired by{' '}
                     <Box
                         component="a"
                         href="https://github.com/1chooo/portfolio"
                         target="_blank"
                         rel="noopener noreferrer"
                         sx={{
                             color: 'primary.main',
                             textDecoration: 'none',
                             '&:hover': {
                                 textDecoration: 'underline',
                             },
                         }}
                     >
                         Hugo Lin
                     </Box>
                     {' '}under{' '}
                     <Box
                         component="a"
                         href="https://creativecommons.org/licenses/by/4.0/"
                         target="_blank"
                         rel="noopener noreferrer"
                         sx={{
                             color: 'primary.main',
                             textDecoration: 'none',
                             '&:hover': {
                                 textDecoration: 'underline',
                             },
                         }}
                     >
                         CC BY 4.0
                     </Box>
                 </Typography>
             </Stack>
         </Container>
     </Box>
 );
};
