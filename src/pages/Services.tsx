import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight, Star, Briefcase, Home, Building2, Settings, Palette } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  short_description?: string;
  icon: string;
  features: string[];
  price?: string;
  price_info?: string;
  duration?: string;
  sort_order?: number;
}

const Services: React.FC = () => {
  // Statik hizmetler
  const services: Service[] = [
    {
      id: 1,
      title: 'Fayans Kalebodur',
      description: 'Banyo, mutfak ve tüm yaşam alanlarınız için kaliteli fayans ve kalebodur döşeme hizmetleri sunuyoruz. Profesyonel ekibimizle mükemmel sonuçlar.',
      short_description: 'Profesyonel fayans döşeme hizmeti',
      icon: 'Home',
      features: [
        'Banyo ve mutfak fayans döşeme',
        'Kaliteli malzeme kullanımı',
        'Su yalıtım garantisi',
        'Derz dolgu ve temizlik',
        'Ölçü alma ve tasarım',
        '2 yıl garanti'
      ],
      price_info: 'M² başına uygun fiyat',
      duration: '1-3 gün'
    },
    {
      id: 2,
      title: 'Cam Mozaik',
      description: 'Özel tasarım cam mozaik uygulamaları ile mekanlarınıza estetik ve şık görünüm kazandırıyoruz. Modern ve klasik desenler.',
      short_description: 'Dekoratif cam mozaik uygulaması',
      icon: 'Building2',
      features: [
        'Mutfak tezgah arası mozaik',
        'Banyo duvar uygulaması',
        'Özel desen ve renk seçenekleri',
        'Su geçirmez uygulama',
        'Profesyonel montaj',
        'Uzun ömür garantisi'
      ],
      price_info: 'M² başına özel fiyat',
      duration: '1-2 gün'
    },
    {
      id: 3,
      title: 'Boya Tadilat',
      description: 'İç ve dış cephe boya işleri, duvar hazırlığından son kata kadar komple tadilat hizmetleri. Kaliteli boyalar ve uzman ekip.',
      short_description: 'İç ve dış cephe boya hizmeti',
      icon: 'Palette',
      features: [
        'İç cephe boya işleri',
        'Dış cephe boyama',
        'Duvar hazırlığı ve macun',
        'Kaliteli boya malzemeleri',
        'Renk danışmanlığı',
        'Temizlik dahil hizmet'
      ],
      price_info: 'M² başına hesaplanır',
      duration: '2-5 gün'
    },
    {
      id: 4,
      title: 'İç Cephe',
      description: 'İç cephe düzenleme, duvar kaplamaları ve dekoratif uygulamalar ile yaşam alanlarınızı yeniliyoruz. Modern tasarım çözümleri.',
      short_description: 'İç cephe kaplama ve düzenleme',
      icon: 'Building2',
      features: [
        'Duvar kaplama sistemleri',
        'Dekoratif panel uygulaması',
        'Alçı ve kartonpiyer işleri',
        'Led aydınlatma entegrasyonu',
        'Ses yalıtım çözümleri',
        'Özel tasarım uygulaması'
      ],
      price_info: 'Projeye özel fiyat',
      duration: '3-7 gün'
    },
    {
      id: 5,
      title: 'Montalama',
      description: 'Mobilya, dolap, raf ve tüm ev aksesuarlarının profesyonel montaj hizmetleri. Güvenli ve hızlı kurulum.',
      short_description: 'Mobilya ve aksesuar montaj hizmeti',
      icon: 'Settings',
      features: [
        'Mutfak dolabı montajı',
        'Yatak odası takımları',
        'TV ünite ve raf sistemleri',
        'Gardırop kurulumu',
        'Ofis mobilya montajı',
        'Elektrikli cihaz kurulumu'
      ],
      price_info: 'Parça başına fiyat',
      duration: '1 gün'
    },
    {
      id: 6,
      title: 'Duşakabin',
      description: 'Banyo duşakabin montajı, cam fitingleri ve su sızdırmazlık garantisi ile hizmet veriyoruz. Kaliteli malzeme ve işçilik.',
      short_description: 'Duşakabin montaj ve kurulum',
      icon: 'Home',
      features: [
        'Cam duşakabin montajı',
        'Su sızdırmazlık garantisi',
        'Kaliteli fittings',
        'Ölçüye özel üretim',
        'Temperli cam kullanımı',
        '5 yıl garanti'
      ],
      price_info: 'Boyut ve modele göre',
      duration: '1 gün'
    }
  ];

  // Icon mapping
  const iconMap: { [key: string]: React.ElementType } = {
    Home: Home,
    Building2: Building2,
    Settings: Settings,
    Palette: Palette,
    Briefcase: Briefcase,
  };

  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Fayans Kalebodur, Cam Mozaik, Boya Tadilat | Vatansever Dekorasyon</title>
        <meta name="description" content="Çorlu'da fayans kalebodur döşeme, cam mozaik uygulama, boya tadilat, iç cephe kaplama, montalama ve duşakabin montaj hizmetleri. Kaliteli malzeme, uygun fiyat, 2 yıl garanti." />
        <meta name="keywords" content="fayans döşeme çorlu, kalebodur döşeme, cam mozaik çorlu, boya tadilat çorlu, iç cephe kaplama, duşakabin montaj çorlu, dekorasyon hizmetleri, kenan vatansever" />
        <meta name="author" content="Kenan Vatansever" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hizmetlerimiz - Fayans Kalebodur, Cam Mozaik, Boya Tadilat" />
        <meta property="og:description" content="Çorlu'da fayans kalebodur döşeme, cam mozaik uygulama, boya tadilat hizmetleri. Kaliteli malzeme, uygun fiyat, 2 yıl garanti." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vatanseverdekorasyon.com/services" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Vatansever Dekorasyon" />
        <meta property="og:image" content="https://vatanseverdekorasyon.com/gallery/WhatsApp%20Image%202025-07-22%20at%2014.26.04.jpeg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hizmetlerimiz - Fayans Kalebodur, Cam Mozaik" />
        <meta name="twitter:description" content="Çorlu'da fayans kalebodur döşeme, cam mozaik uygulama, boya tadilat hizmetleri." />
        <meta name="twitter:image" content="https://vatanseverdekorasyon.com/gallery/WhatsApp%20Image%202025-07-22%20at%2014.26.04.jpeg" />

        <link rel="canonical" href="https://vatanseverdekorasyon.com/services" />
        
        {/* Service Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dekorasyon Hizmetleri",
            "description": "Fayans kalebodur, cam mozaik, boya tadilat, iç cephe, montalama ve duşakabin hizmetleri",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Vatansever Dekorasyon",
              "telephone": "+90 506 171 72 31",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Çorlu",
                "addressRegion": "Tekirdağ",
                "addressCountry": "TR"
              }
            },
            "serviceType": "Dekorasyon",
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": "+90 506 171 72 31"
            }
          })}
        </script>
      </Helmet>
      
      <div className="pt-16 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Hizmetlerimiz</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Profesyonel ekibimizle hayalinizdeki mekanları yaratıyoruz
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Briefcase;
              
              return (
                <div
                  key={service.id}
                  className="group bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {service.title}
                      </h3>
                      
                      {service.short_description && (
                        <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                          {service.short_description}
                        </p>
                      )}
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      {service.features && service.features.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Özellikler:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Price Info */}
                      {(service.price || service.price_info) && (
                        <div className="mb-6">
                          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4">
                            <div className="flex items-center">
                              <Star className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                              <span className="text-teal-800 dark:text-teal-200 font-medium">
                                {service.price || service.price_info}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Duration */}
                      {service.duration && (
                        <div className="mb-6">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            <strong>Süre:</strong> {service.duration}
                          </p>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <a
                          href="tel:+905061717231"
                          className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 group"
                        >
                          Teklif Al
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Hangi Hizmete İhtiyacınız Var?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Size en uygun çözümü bulmak için bizimle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+905061717231"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              Ücretsiz Fiyat Teklifi Al
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/portfolio"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Projelerimizi İncele
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;