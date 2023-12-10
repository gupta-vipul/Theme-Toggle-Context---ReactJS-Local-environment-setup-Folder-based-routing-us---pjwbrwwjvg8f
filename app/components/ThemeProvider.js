'use client'
import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    return (
        <React.Fragment>
            <ThemeContext.Provider value ={{isDarkTheme, setIsDarkTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}