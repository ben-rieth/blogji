import { useEffect, useState } from "react"

const useDarkMode = () => {

    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').media;
    const  storagePreference = localStorage.getItem('theme');

    const initial = storagePreference === 'dark' || systemPreference === 'dark';

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

    return [enabled, setEnabled];
}

export default useDarkMode;