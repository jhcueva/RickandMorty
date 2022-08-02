import React from "react";

function useDarkMode () {
    const [darkMode, setDarkMode] = React.useState(localStorage.darkMode)
    const colorTheme = darkMode === 'dark' ? 'light' : 'dark'

    React.useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme)
        root.classList.add(darkMode)
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode, colorTheme])

    return [colorTheme, setDarkMode]
}

export { useDarkMode }