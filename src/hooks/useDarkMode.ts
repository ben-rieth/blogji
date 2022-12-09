import { useEffect, useState } from "react"

const useDarkMode = () => {

    const systemPreferenceIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const  storagePreference = localStorage.getItem('theme');

    const initial = storagePreference === 'dark' || systemPreferenceIsDark;

    const [enabled, setEnabled] = useState<boolean>(initial);

    useEffect(() => {

        const element = window.document.documentElement;

        if (enabled) {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

    }, [enabled])

    return [enabled, setEnabled] as const;
}

export default useDarkMode;