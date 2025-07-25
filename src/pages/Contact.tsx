import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle } from 'lucide-react';
import { useSiteSettings } from '../contexts/SiteSettingsContext';

const Contact: React.FC = () => {
  const { settings } = useSiteSettings();

  const whatsappNumber = '+905061717231';
  const whatsappMessage = 'Merhaba hizmetleriniz hakkında bilgi almak istiyorum.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Helmet>
        <title>İletişim - Kenan Vatansever | Ücretsiz Fiyat Teklifi | +90 506 171 72 31</title>
        <meta name="description" content="Çorlu'da fayans döşeme, cam mozaik, boya tadilat işleri için ücretsiz fiyat teklifi alın. Kenan Vatansever: +90 506 171 72 31. WhatsApp ile hızlı iletişim." />
        <meta name="keywords" content="kenan vatansever iletişim, vatansever dekorasyon telefon, fayans ustası çorlu telefon, ücretsiz fiyat teklifi, dekorasyon işi fiyat" />
        <meta name="author" content="Kenan Vatansever" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="İletişim - Kenan Vatansever | Ücretsiz Fiyat Teklifi" />
        <meta property="og:description" content="Çorlu'da fayans döşeme, cam mozaik, boya tadilat işleri için ücretsiz fiyat teklifi alın. Tel: +90 506 171 72 31" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vatanseverdekorasyon.com/contact" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Vatansever Dekorasyon" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="İletişim - Kenan Vatansever" />
        <meta name="twitter:description" content="Çorlu'da dekorasyon işleri için ücretsiz fiyat teklifi alın. Tel: +90 506 171 72 31" />

        <link rel="canonical" href="https://vatanseverdekorasyon.com/contact" />
        
        {/* Contact Page Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "İletişim - Vatansever Dekorasyon",
            "description": "Dekorasyon hizmetleri için iletişim bilgileri",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Vatansever Dekorasyon",
              "telephone": "+90 506 171 72 31",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90 506 171 72 31",
                "contactType": "customer service",
                "availableLanguage": "Turkish",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Çorlu",
                "addressRegion": "Tekirdağ",
                "addressCountry": "TR"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">İletişim</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hayalinizdeki projeyi birlikte gerçekleştirelim. Bizi arayın veya WhatsApp'tan mesaj atın.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">
              Kenan Vatansever
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Phone Contact */}
              <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Telefon
                </h3>
                <a 
                  href={`tel:+905061717231`}
                  className="text-2xl font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-200"
                >
                  +90 506 171 72 31
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Hemen arayın
                </p>
              </div>

              {/* WhatsApp Contact */}
              <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  WhatsApp
                </h3>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Mesaj Gönder
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Hızlı yanıt
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Sık Sorulan Sorular</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Müşterilerimizin en çok merak ettiği sorular ve cevapları.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Hangi bölgelerde hizmet veriyorsunuz?',
                  answer: 'Çorlu ve yakın ilçelerde hizmet veriyoruz.'
                },
                {
                  question: 'Fayans döşeme fiyatları nasıl hesaplanır?',
                  answer: 'Fayans döşeme fiyatları metrekare bazında hesaplanır. Keşif sonrası size net fiyat verilir.'
                },
                {
                  question: 'Cam mozaik işleri ne kadar sürer?',
                  answer: 'Alanın büyüklüğüne göre değişir. Genellikle küçük alanlarda 1-2 gün, büyük alanlarda 1 hafta sürebilir.'
                },
                {
                  question: 'Malzemeyi siz mi temin ediyorsunuz?',
                  answer: 'Hem sizin temin ettiğiniz malzemelerle hem de bizim temin ettiğimiz kaliteli malzemelerle çalışabiliriz.'
                },
                {
                  question: 'İş garantisi veriyor musunuz?',
                  answer: 'Evet, tüm işlerimizde 2 yıl işçilik garantisi veriyoruz. Su sızdırmazlık garantisi ayrıca verilir.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;