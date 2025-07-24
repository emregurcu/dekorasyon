import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">DesignStudio</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Yaşam alanlarınızı hayalinizdeki gibi tasarlıyor, modern ve fonksiyonel çözümlerle yaşam kalitenizi artırıyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Linkler</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm">
                Ana Sayfa
              </Link>
              <Link to="/portfolio" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm">
                Portfolyo
              </Link>
              <Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm">
                Hizmetler
              </Link>
              <Link to="/about" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm">
                Hakkımızda
              </Link>
              <Link to="/contact" className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm">
                İletişim
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hizmetlerimiz</h3>
            <div className="flex flex-col space-y-2">
              <span className="text-slate-400 text-sm">İç Mimari Tasarım</span>
              <span className="text-slate-400 text-sm">Konut Dekorasyonu</span>
              <span className="text-slate-400 text-sm">Ofis Tasarımı</span>
              <span className="text-slate-400 text-sm">Restoran Konsepti</span>
              <span className="text-slate-400 text-sm">Danışmanlık</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">Maslak Mahallesi, İstanbul</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">+90 212 345 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">info@designstudio.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 DesignStudio. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;