import { useState, useEffect } from 'react'
import React from 'react'
const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}
const themes1 = {
    dark: {
        backgroundColor: 'red',
        color: 'white'
    },
    light: {
        backgroundColor: '#61dafb',
        color: 'black'
    }
}
const themes2 = {
    dark: {
        backgroundColor: 'white',
        color: 'black'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}
const themes3 = {
    dark: {
        backgroundColor: '#FFFAFA',
        color: 'black'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}
const initialState = {
    dark: false,
    theme: themes.light,
    theme1: themes1.light,
    theme2: themes2.light,
    theme3: themes3.light,
    toggle: () => { }
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false)
    // On mount, read the preferred theme from the persistence
    useEffect(() => {
        const isDark = localStorage.getItem('dark') === 'true'
        //store the state mode to the local storage
        setDark(isDark)
    }, [dark])
    // To toggle between dark and light modes
    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }
    const theme = dark ? themes.dark : themes.light
    const theme1 =dark ? themes1.dark : themes1.light
    const theme2 =dark ? themes2.dark : themes2.light
    const theme3 =dark ? themes3.dark : themes3.light
    return (
        <ThemeContext.Provider value={{ theme, dark, toggle, theme1,theme2,theme3 }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext }