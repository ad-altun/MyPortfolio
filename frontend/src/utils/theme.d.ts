import "@mui/material/styles"

declare module '@mui/material/styles' {
    // background colors
    interface TypeBackground {
        cardContent: string;
    }

    interface PaletteBackground {
        cardContent: string;
    }
}