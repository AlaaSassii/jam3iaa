import { useState, useEffect } from 'react';

export const useLanguage = () => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'fr';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
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
