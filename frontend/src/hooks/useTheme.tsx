import { createContext, useContext } from "react";
import type { ThemeMode } from "../context/ThemeContext.tsx"

interface ThemeContextTypes {
    themeMode: ThemeMode;
    toggleTheme: () => void;
    setMode: (mode: ThemeMode) => void;
    actualTheme: 'light' | 'dark';
}

export const ThemeContext = createContext<ThemeContextTypes | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if ( context === undefined ) {
        throw new Error('useTheme must be used within a CustomThemeProvider');
    }
    return context;
};