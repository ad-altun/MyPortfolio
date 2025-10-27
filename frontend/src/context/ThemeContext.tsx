import { useCallback, useEffect, useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeContext } from "../hooks/useTheme.tsx";

export type ThemeMode = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
    children: React.ReactNode;
};
export const CustomThemeProvider = ( { children }: ThemeProviderProps ) => {
    const [ themeMode, setThemeMode ] = useState<ThemeMode>(() => {
        const savedTheme = localStorage.getItem('theme');
        // changed from 'system' to 'dark' to prevent light mode activation
        return savedTheme ? ( savedTheme as ThemeMode ) : 'dark';
    });

    const getSystemTheme = (): 'light' | 'dark' => {
        if ( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
            return 'dark';
        }
        return 'light';
    };

    const resolveActualMode = useCallback((): 'light' | 'dark' => {
        if ( themeMode === 'system' ) {
            return getSystemTheme();
        }
        return themeMode;
    }, [ themeMode ]);

    const [ actualTheme, setActualTheme ] = useState<'light' | 'dark'>(resolveActualMode());

    useEffect(() => {
        localStorage.setItem('theme', themeMode);
        setActualTheme(resolveActualMode());
    }, [ themeMode, resolveActualMode ]);

    useEffect(() => {
        if ( themeMode === 'system' ) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = () => setThemeMode(getSystemTheme());
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }
    }, [ themeMode ]);

    const toggleTheme = () => {
        setThemeMode(prevTheme => ( prevTheme === 'light' ? 'dark' : 'light' ));
    };

    const setMode = ( newMode: ThemeMode ) => {
        setThemeMode(newMode);
    };

    // website is forced to use only dark mode
    // this might be temporary, therefore code didn't removed
    const theme = createTheme({
        palette: {
            mode: "dark",
            // mode: actualTheme,
            // ...( actualTheme === 'light' ? {
            //     primary: {
            //         main: '#fbbf24',
            //         // light mode disabled for the moment
            //         // main: '#4f46e5',
            //     },
            //     background: {
            //         default: '#0f172a',
            //         paper: '#1e293b',
            //         // light mode disabled for the moment
            //         // default: '#f8fafc',
            //         // paper: '#ffffff',
            //     },
            // } : {
                primary: {
                    main: '#fbbf24',
                },
                background: {
                    default: '#0f172a',
                    paper: '#1e293b',
                },
            // } )
        },
        typography: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
    });

    return (
        <ThemeContext.Provider value={ { themeMode, toggleTheme, setMode, actualTheme } }>
            <MuiThemeProvider theme={ theme }>
                <CssBaseline/>
                { children }
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};