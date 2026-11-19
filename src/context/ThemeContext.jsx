import React, { createContext, useContext, useState, useEffect } from 'react';
import { instituteConfig } from '../config/institute.config';

const ThemeContext = createContext();

export const themes = {
  'theme-a': {
    id: 'theme-a',
    name: 'Theme A: Navy + Orange',
    description: 'Classic Professional Navy with Vibrant Orange Accents',
    primary: '#0F2744',
    secondary: '#1E3A8A',
    accent: '#F97316',
    previewBadge: 'bg-[#0F2744] text-[#F97316]',
  },
  'theme-b': {
    id: 'theme-b',
    name: 'Theme B: Royal Blue + Gold',
    description: 'Prestigious Academic Royal Blue with Gold Accents',
    primary: '#1E3A8A',
    secondary: '#2563EB',
    accent: '#D97706',
    previewBadge: 'bg-[#1E3A8A] text-[#EAB308]',
  },
  'theme-c': {
    id: 'theme-c',
    name: 'Theme C: Purple + Cyan',
    description: 'Modern Imperial Purple with Vibrant Cyan Accents',
    primary: '#4C1D95',
    secondary: '#7C3AED',
    accent: '#0284C7',
    previewBadge: 'bg-[#4C1D95] text-[#38BDF8]',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Check localStorage or fallback to config default
    const saved = localStorage.getItem('coaching_template_theme');
    if (saved && themes[saved]) return saved;
    return instituteConfig.activeTheme || 'theme-a';
  });

  useEffect(() => {
    // Apply data-theme attribute to html root
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('coaching_template_theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes, currentThemeData: themes[currentTheme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
