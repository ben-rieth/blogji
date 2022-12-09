import { useEffect, useState } from "react"

const useDarkMode = () => {
    let systemPreferenceIsDark = false;
    if (typeof window !== 'undefined') {
        systemPreferenceIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    let storagePreference : string | null = 'light';
    if (typeof window !== 'undefined') {
        storagePreference = localStorage.getItem('theme');
    }

    const initial = storagePreference === 'dark' || systemPreferenceIsDark;
    const [enabled, setEnabled] = useState<boolean>(initial);

    useEffect(() => {
        const element = window.document.documentElement;
        if (enabled) {
            element.classList.add('dark');
            if (typeof window !== undefined) localStorage.setItem('theme', 'dark');
        } else {
            element.classList.remove('dark');
            if (typeof window !== undefined) localStorage.setItem('theme', 'light');
        }

    }, [enabled]);
    
    return [enabled, setEnabled] as const;
}

export default useDarkMode;