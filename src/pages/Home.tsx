import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Briefcase, Calendar, TrendingUp, Zap, Target, Home as HomeIcon, Building2, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSiteSettings } from '../contexts/SiteSettingsContext';

const Home: React.FC = () => {
  const { settings } = useSiteSettings();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    { id: 1, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19 (1).jpeg' },
    { id: 2, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19 (2).jpeg' },
    { id: 3, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19 (3).jpeg' },
    { id: 4, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.04.jpeg' },
    { id: 5, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.05.jpeg' },
    { id: 6, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.06.jpeg' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      icon: HomeIcon,
      title: 'Fayans Kalebodur',
      description: 'Banyo ve mutfak için profesyonel fayans döşeme'
    },
    {
      icon: Building2,
      title: 'Cam Mozaik',
      description: 'Dekoratif cam mozaik uygulamaları'
    },
    {
      icon: Palette,
      title: 'Boya Tadilat',
      description: 'İç ve dış mekan boya işleri'
    },
    {
      icon: Building2,
      title: 'İç Cephe',
      description: 'İç cephe kaplama ve dekoratif uygulamalar'
    },
    {
      icon: Target,
      title: 'Montalama',
      description: 'Mobilya ve aksesuar montaj hizmetleri'
    },
    {
      icon: CheckCircle,
      title: 'Duşakabin',
      description: 'Duşakabin montaj ve cam fitingleri'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Mutlu Müşteri' },
    { icon: Briefcase, value: '15', label: 'Yıl Deneyim' },
    { icon: Calendar, value: '1000+', label: 'Tamamlanan Proje' },
    { icon: TrendingUp, value: '%100', label: 'Müşteri Memnuniyeti' }
  ];

  return (
    <>
      <Helmet>
        <title>Vatansever Dekorasyon - Fayans Kalebodur, Cam Mozaik, Boya Tadilat Çorlu</title>
        <meta name="description" content="Çorlu'da fayans kalebodur döşeme, cam mozaik uygulama, boya tadilat, iç cephe kaplama, montalama ve duşakabin montaj hizmetleri. 15 yıllık deneyim, kaliteli işçilik." />
        <meta name="keywords" content="fayans döşeme çorlu, kalebodur çorlu, cam mozaik çorlu, boya tadilat çorlu, iç cephe çorlu, duşakabin montaj çorlu, dekorasyon çorlu, kenan vatansever" />
        <meta name="author" content="Kenan Vatansever" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="Turkish" />
        <meta name="geo.region" content="TR-59" />
        <meta name="geo.placename" content="Çorlu, Tekirdağ" />
        <meta name="geo.position" content="41.1594;27.8069" />
        <meta name="ICBM" content="41.1594, 27.8069" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Vatansever Dekorasyon - Fayans Kalebodur, Cam Mozaik, Boya Tadilat" />
        <meta property="og:description" content="Çorlu'da fayans kalebodur döşeme, cam mozaik uygulama, boya tadilat hizmetleri. 15 yıllık deneyim, kaliteli işçilik." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vatanseverdekorasyon.com" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Vatansever Dekorasyon" />
        <meta property="og:image" content="https://vatanseverdekorasyon.com/gallery/WhatsApp%20Image%202025-07-10%20at%2021.19.19%20(1).jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Vatansever Dekorasyon - Fayans ve Mozaik İşleri" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vatansever Dekorasyon - Fayans Kalebodur, Cam Mozaik" />
        <meta name="twitter:description" content="Çorlu'da fayans kalebodur döşeme, cam mozaik uygulama, boya tadilat hizmetleri. 15 yıllık deneyim." />
        <meta name="twitter:image" content="https://vatanseverdekorasyon.com/gallery/WhatsApp%20Image%202025-07-10%20at%2021.19.19%20(1).jpeg" />

        {/* Business/Local SEO */}
        <meta name="business:contact_data:street_address" content="Çorlu" />
        <meta name="business:contact_data:locality" content="Çorlu" />
        <meta name="business:contact_data:region" content="Tekirdağ" />
        <meta name="business:contact_data:postal_code" content="59850" />
        <meta name="business:contact_data:country_name" content="Turkey" />
        <meta name="business:contact_data:phone_number" content="+905061717231" />

        <link rel="canonical" href="https://vatanseverdekorasyon.com" />
        <link rel="alternate" hrefLang="tr" href="https://vatanseverdekorasyon.com" />

        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://vatanseverdekorasyon.com/#organization",
            "name": "Vatansever Dekorasyon",
            "description": "Fayans kalebodur, cam mozaik, boya tadilat, iç cephe, montalama ve duşakabin işlerinde uzman hizmet",
            "url": "https://vatanseverdekorasyon.com",
            "telephone": "+90 506 171 72 31",
            "priceRange": "₺₺",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Çorlu",
              "addressRegion": "Tekirdağ",
              "postalCode": "59850",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 41.1594,
              "longitude": 27.8069
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
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Dekorasyon Hizmetleri",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fayans Kalebodur Döşeme",
                    "description": "Banyo, mutfak ve tüm yaşam alanları için kaliteli fayans döşeme"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cam Mozaik Uygulama",
                    "description": "Dekoratif cam mozaik tasarım ve uygulama"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Boya Tadilat",
                    "description": "İç ve dış mekan profesyonel boya işleri"
                  }
                }
              ]
            },
            "founder": {
              "@type": "Person",
              "name": "Kenan Vatansever"
            },
            "foundingDate": "2010",
            "image": "https://vatanseverdekorasyon.com/gallery/WhatsApp%20Image%202025-07-10%20at%2021.19.19%20(1).jpeg",
            "logo": "https://via.placeholder.com/200x60/059669/FFFFFF?text=Vatansever",
            "sameAs": []
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-16 lg:pt-20 pb-16 lg:pb-24 bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0 bg-repeat opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Hero Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full text-teal-800 dark:text-teal-200 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  {settings.siteName} - Profesyonel Tasarım
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                    {settings.tagline}
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {settings.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Portfolyomuz
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Ücretsiz Fiyat Teklifi Al
                  </Link>
                </div>
              </div>

              {/* Hero Image/Visual */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Vatansever Dekorasyon"
                    className="w-full h-[500px] lg:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">500+</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Mutlu Müşteri</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Hizmetlerimiz
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Yaşam alanlarınızı dönüştürmek için kapsamlı tasarım hizmetleri sunuyoruz
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-100 dark:bg-teal-900/30 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-teal-600 transition-colors">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-teal-600 dark:text-teal-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 lg:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Slider */}
        <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Öne Çıkan Projeler
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Gerçekleştirdiğimiz kaliteli işlerden örnekler
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative">
              {/* Main Slider */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {featuredProjects.map((project) => (
                    <div key={project.id} className="w-full flex-shrink-0">
                      <div className="relative bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                        {/* Project Image */}
                        <div className="relative">
                          <img
                            src={project.image}
                            alt="Vatansever Dekorasyon Projesi"
                            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                          />

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 group"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-300 group-hover:text-teal-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 group"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-300 group-hover:text-teal-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-teal-600 w-6 sm:w-8'
                        : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg sm:rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Tüm Projeleri Gör
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-teal-600 dark:bg-teal-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-teal-100">Tamamlanan Proje</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-teal-100">Yıllık Deneyim</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-teal-100">Müşteri Memnuniyeti</div>
              </div>
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-teal-100">Ödül ve Sertifika</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Hayalinizdeki Mekanı Birlikte Tasarlayalım
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Ücretsiz fiyat teklifi için bizimle iletişime geçin. Projelerinizi profesyonel ekibimizle hayata geçirelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ücretsiz Fiyat Teklifi Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Portfolyomuzu İnceleyin
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;