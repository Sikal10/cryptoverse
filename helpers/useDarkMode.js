import {useEffect, useState} from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState("dark");
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [colorTheme, theme])

    return [colorTheme, setTheme];
    
};

export default useDarkMode;