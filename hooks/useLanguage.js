import { useState, useEffect } from 'react';

export const useLanguage = () => {
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('language') || 'fr';
        } else {
            return 'fr';
        }
    });

    useEffect(() => {
        // Set localStorage only in the browser
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', language);
        }
    }, [language]);

    const getLanguage = () => {
        return language;
    };

    const setLanguageValue = (lang) => {
        // ar or fr
        setLanguage(lang);
    };

    return { language, getLanguage, setLanguage, setLanguageValue };
};
