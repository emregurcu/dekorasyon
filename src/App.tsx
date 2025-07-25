import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { MessageCircle } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import { SiteSettingsProvider } from './contexts/SiteSettingsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

// WhatsApp Floating Button Component
const WhatsAppFloat: React.FC = () => {
  const whatsappNumber = '+905061717231';
  const whatsappMessage = 'Merhaba hizmetleriniz hakkında bilgi almak istiyorum.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SiteSettingsProvider>
          <Router>
            <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
              <Helmet>
                <title>Vatansever Dekorasyon - Fayans, Mozaik, Boya Tadilat Çorlu</title>
                <meta name="description" content="Fayans kalebodur, cam mozaik, boya tadilat, iç cephe, montalama ve duşakabin işlerinde uzman hizmet. Çorlu ve yakın ilçelerde kaliteli dekorasyon hizmetleri." />
                <meta name="keywords" content="fayans, kalebodur, cam mozaik, boya tadilat, iç cephe, montalama, duşakabin, dekorasyon, Çorlu, kenan vatansever" />
                <meta name="author" content="Kenan Vatansever" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#059669" />
                <meta property="og:title" content="Vatansever Dekorasyon - Fayans, Mozaik, Boya Tadilat" />
                <meta property="og:description" content="Fayans kalebodur, cam mozaik, boya tadilat, iç cephe, montalama ve duşakabin işlerinde uzman hizmet." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="tr_TR" />
                <link rel="canonical" href="https://vatanseverdekorasyon.com" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <script type="application/ld+json">
                  {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Vatansever Dekorasyon",
                    "description": "Fayans kalebodur, cam mozaik, boya tadilat, iç cephe, montalama ve duşakabin işlerinde uzman hizmet",
                    "telephone": "+90 506 171 72 31",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Çorlu",
                      "addressCountry": "TR"
                    },
                    "serviceArea": {
                      "@type": "GeoCircle",
                      "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": 41.1594,
                        "longitude": 27.8069
                      },
                      "geoRadius": 25000
                    },
                    "services": [
                      "Fayans Kalebodur",
                      "Cam Mozaik", 
                      "Boya Tadilat",
                      "İç Cephe",
                      "Montalama",
                      "Duşakabin"
                    ]
                  })}
                </script>
              </Helmet>
              
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppFloat />
            </div>
          </Router>
        </SiteSettingsProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;