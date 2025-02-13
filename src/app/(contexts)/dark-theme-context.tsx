'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface DarkThemeContextProps {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

const DarkThemeContext = createContext<DarkThemeContextProps>({
    isDarkTheme: false,
    toggleTheme: () => { }
});

export function useDarkTheme() {
    return useContext(DarkThemeContext);
}

export function DarkThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => setIsDarkTheme((prev) => !prev);

    return (
        <DarkThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </DarkThemeContext.Provider>
    );
}