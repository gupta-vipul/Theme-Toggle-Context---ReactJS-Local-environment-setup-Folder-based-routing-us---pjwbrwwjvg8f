'use client'
import React, { useContext } from 'react';
import { LocalThemedBox } from './components/LocalThemedBox';
import { ThemeContext } from './components/ThemeProvider';

const Main = () => {
    const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);
    // console.log(ContextData);
    return(
        <div className={`container ${isDarkTheme ? "bg-dark" : "bg-light"}`} id="themed-page">
            <p id="themed-text-container" className={`${isDarkTheme ? "txt-dark" : "txt-light"}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn ${isDarkTheme ? "btn-dark txt-dark" : "btn-light txt-light"}`} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Main }