import { useEffect, useState } from "react"

export const useTheme = () => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme) {
            setTheme(theme)
            theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
        }
    }, [])

    const changeTheme = (theme) => {
        localStorage.setItem('theme', theme)
        setTheme(theme)
        theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }

    return {
        changeTheme,theme
    }

}