import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        // setTheme(theme === 'light' ? 'dark' : 'light');
        if(theme === 'light'){
            setTheme('dark');
        }else if(theme === 'dark'){
            setTheme('light');
        }
    }

    return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}