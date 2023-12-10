'use client'
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () => {
    const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
    // console.log("ThemeToggleBtn" , isDarkTheme, setIsDarkTheme);
    return (
       <>
        <button 
            id="global-theme-toggler" 
            className={`btn ${isDarkTheme ? "btn-dark txt-dark" : "btn-light txt-light"}`}
            onClick={()=>setIsDarkTheme(!isDarkTheme)}
        >
            Switch to {`${isDarkTheme ? "light" : "dark"}`} theme
        </button>
       </>
    )

}
export {ThemeToggleButton}