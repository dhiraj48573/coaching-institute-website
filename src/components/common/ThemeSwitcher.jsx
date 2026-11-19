import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { instituteConfig } from '../../config/institute.config';
import { Palette, Check, X } from 'lucide-react';

export const ThemeSwitcher = () => {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // If disabled in config, do not render
  if (!instituteConfig.showDemoThemeSwitcher) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 w-72 mb-2 animate-in fade-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-brand-primary" />
              <span className="font-heading font-semibold text-sm text-slate-800">
                Live Theme Switcher
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Close theme switcher"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-500 my-2">
            Showcase how this template adapts instantly to different client brand palettes:
          </p>

          <div className="space-y-2 mt-3">
            {Object.values(themes).map((theme) => {
              const isActive = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all ${
                    isActive
                      ? 'border-brand-primary bg-slate-50 ring-2 ring-brand-primary/20 font-medium'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <span
                        className="w-4 h-4 rounded-full border border-white shadow-sm inline-block"
                        style={{ backgroundColor: theme.primary }}
                      />
                      <span
                        className="w-4 h-4 rounded-full border border-white shadow-sm inline-block"
                        style={{ backgroundColor: theme.accent }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">{theme.name}</div>
                    </div>
                  </div>
                  {isActive && <Check className="w-4 h-4 text-brand-primary" />}
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-400 text-center">
            Set default in <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-600">institute.config.js</code>
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/95 hover:bg-white text-slate-800 px-3.5 py-2.5 rounded-full shadow-lg border border-slate-200/80 hover:shadow-xl transition-all duration-200 text-xs font-semibold group backdrop-blur-sm"
        title="Toggle Theme Switcher"
      >
        <Palette className="w-4 h-4 text-brand-primary group-hover:rotate-45 transition-transform duration-300" />
        <span className="hidden sm:inline">Brand Themes</span>
        <span className="flex space-x-1 pl-1">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-primary" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-accent" />
        </span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
