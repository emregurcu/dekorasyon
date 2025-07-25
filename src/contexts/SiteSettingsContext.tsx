import React, { createContext, useContext, useState, useEffect } from 'react';

export interface SiteSettings {
  siteName: string;
  tagline: string;
  description: string;
  logo: string;
  favicon: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
}

interface SiteSettingsContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  updateNestedSettings: (path: string, value: string) => void;
}

// Default site settings
const defaultSettings: SiteSettings = {
  siteName: 'Vatansever Dekorasyon',
  tagline: 'Hayallerinizdeki mekanı yaratıyoruz',
  description: 'Fayans kalebodur, cam mozaik, boya tadilat, iç cephe, montalama ve duşakabin işlerinde uzman. Çorlu ve yakın ilçelerde kaliteli hizmet.',
  logo: 'https://via.placeholder.com/200x60/059669/FFFFFF?text=Vatansever',
  favicon: 'https://via.placeholder.com/32x32/059669/FFFFFF?text=V',
  contactEmail: 'info@vatanseverdekorasyon.com',
  contactPhone: '+905061717231',
  address: 'Çorlu, Tekirdağ',
  socialMedia: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: ''
  },
  seo: {
    metaTitle: 'Vatansever Dekorasyon - Fayans Kalebodur, Cam Mozaik, Boya Tadilat',
    metaDescription: 'Fayans kalebodur döşeme, cam mozaik uygulaması, boya tadilat, iç cephe kaplama, montalama ve duşakabin montaj hizmetleri. Çorlu ve yakın ilçelerde profesyonel dekorasyon.',
    keywords: 'fayans döşeme, cam mozaik, boya tadilat, iç cephe, montalama, duşakabin, çorlu dekorasyon, kenan vatansever'
  },
  theme: {
    primaryColor: '#059669',
    secondaryColor: '#0f766e'
  }
};

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined);

export const useSiteSettings = () => {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error('useSiteSettings must be used within SiteSettingsProvider');
  }
  return context;
};

export const SiteSettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('site_settings');
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsedSettings });
      } catch (parseError) {
        console.error('Error parsing site settings:', parseError);
        setSettings(defaultSettings);
      }
    } else {
      setSettings(defaultSettings);
    }
  }, []);

  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem('site_settings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const updateNestedSettings = (path: string, value: string) => {
    const keys = path.split('.');
    const newSettings = { ...settings };
    let current: any = newSettings;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (current[keys[i]] && typeof current[keys[i]] === 'object') {
        current[keys[i]] = { ...current[keys[i]] };
      }
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setSettings(newSettings);
  };

  return (
    <SiteSettingsContext.Provider value={{ settings, updateSettings, updateNestedSettings }}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

export default SiteSettingsProvider;