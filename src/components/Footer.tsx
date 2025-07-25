import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Home, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useSiteSettings } from '../contexts/SiteSettingsContext';

const Footer: React.FC = () => {
  const { settings } = useSiteSettings();

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Hizmetler', href: '/services' },
    { name: 'Portfolyo', href: '/portfolio' },
    { name: 'İletişim', href: '/contact' },
  ];

  const whatsappNumber = '+905061717231';
  const whatsappMessage = 'Merhaba hizmetleriniz hakkında bilgi almak istiyorum.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">{settings.siteName}</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              {settings.description}
            </p>
            <div className="flex space-x-4">
              <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <div>
                  <p className="text-slate-300 text-sm">Kenan Vatansever</p>
                  <a 
                    href={`tel:${settings.contactPhone}`}
                    className="text-white hover:text-teal-400 transition-colors font-medium"
                  >
                    {settings.contactPhone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-slate-300 text-sm">WhatsApp</p>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors font-medium"
                  >
                    Mesaj Gönder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Vatansever Dekorasyon. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;