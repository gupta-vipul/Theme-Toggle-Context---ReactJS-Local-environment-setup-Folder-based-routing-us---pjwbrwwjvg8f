'use client'
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const {isDarkTheme} = useContext(ThemeContext);

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        <p 
            id='local-theme-text-container' 
            className={`${isDarkTheme ? "txt-dark" : "txt-light"}`}
        >
            Lorem ipsum dolor sit amet.
        </p>
        <button 
            id="local-theme-toggler" 
            className={`btn ${isDarkTheme ? 'btn-dark txt-dark' : 'btn-light txt-light'}`}
        >
            Toggle local theme to {`${isDarkTheme ? 'light' : 'dark'}`}
        </button>
    </div>
)
}

export { LocalThemedBox }