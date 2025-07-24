import React from 'react';
import { Home, Building2, Palette, Users, CheckCircle, ArrowRight, Clock, Award, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Home,
      title: 'Konut İç Mimari',
      description: 'Evlerinizi kişisel tarzınızı yansıtan, fonksiyonel ve estetik yaşam alanlarına dönüştürüyoruz.',
      features: ['Konsept Geliştirme', 'Alan Planlaması', 'Malzeme Seçimi', 'Mobilya Tasarımı'],
      price: 'Proje bazında fiyatlandırma'
    },
    {
      icon: Building2,
      title: 'Ticari Mekan Tasarımı',
      description: 'Ofis, mağaza ve iş yerlerini markanızın kimliğini güçlendiren profesyonel alanlara çeviriyoruz.',
      features: ['Marka Kimliği Entegrasyonu', 'Ergonomik Çözümler', 'Akustik Planlama', 'Aydınlatma Tasarımı'],
      price: 'Metrekare başına fiyatlandırma'
    },
    {
      icon: Palette,
      title: 'Dekorasyon & Styling',
      description: 'Renk paleti, doku seçimi ve aksesuar düzenlemesiyle mekanlarınıza karakter katıyoruz.',
      features: ['Renk Konsepti', 'Doku Seçimi', 'Aksesuar Seçimi', 'Sanat Eseri Yerleştirme'],
      price: 'Paket fiyatlandırma mevcuttur'
    },
    {
      icon: Users,
      title: 'Tasarım Danışmanlığı',
      description: 'Mimar ve tasarımcılarımızdan profesyonel danışmanlık hizmeti alarak doğru kararlar verin.',
      features: ['Konsept Danışmanlığı', 'Malzeme Önerileri', 'Bütçe Planlaması', 'Proje Yönetimi'],
      price: 'Saat bazında danışmanlık'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'İlk Görüşme',
      description: 'İhtiyaçlarınızı dinliyor, beklentilerinizi anlıyor ve mekanınızı inceliyoruz.',
      icon: Users,
      duration: '1-2 gün'
    },
    {
      step: 2,
      title: 'Konsept Geliştirme',
      description: 'Tarzınıza uygun konsept önerileri hazırlıyor ve size sunuyoruz.',
      icon: Lightbulb,
      duration: '3-5 gün'
    },
    {
      step: 3,
      title: 'Tasarım & Planlama',
      description: 'Detaylı çizimler, 3D görseller ve malzeme seçimleri yapıyoruz.',
      icon: Palette,
      duration: '1-2 hafta'
    },
    {
      step: 4,
      title: 'Uygulama',
      description: 'Uzman ekibimizle tasarımı hayata geçiriyor ve sürekli takip ediyoruz.',
      icon: Award,
      duration: 'Proje büyüklüğüne göre'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: '15+ Yıl Deneyim',
      description: 'Sektördeki uzun soluklu deneyimimizle kaliteli hizmet sunuyoruz.'
    },
    {
      icon: Award,
      title: 'Ödüllü Tasarımlar',
      description: 'Ulusal ve uluslararası tasarım yarışmalarında ödül alan projelerimiz.'
    },
    {
      icon: Clock,
      title: 'Zamanında Teslimat',
      description: 'Belirlenen sürelerde projelerinizi tamamlıyor ve teslim ediyoruz.'
    },
    {
      icon: Users,
      title: 'Uzman Ekip',
      description: 'Mimar, iç mimar ve tasarımcılardan oluşan profesyonel ekibimiz.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Hizmetlerimiz</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Yaşam alanlarınızı dönüştürmek için kapsamlı tasarım hizmetleri sunuyoruz. 
            Her projeye özel çözümlerle hayallerinizi gerçeğe dönüştürüyoruz.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-sm text-teal-600 dark:text-teal-400 font-medium mb-4">
                      {service.price}
                    </div>
                    
                    <button className="text-teal-600 dark:text-teal-400 font-medium flex items-center space-x-1 hover:space-x-2 transition-all duration-300">
                      <span>Detaylı Bilgi Al</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Çalışma Süreci</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Her projeyi sistematik bir yaklaşımla ele alıyor, baştan sona profesyonel bir süreç yönetiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">{step.description}</p>
                <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">{step.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Neden Bizi Tercih Edin?</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Kaliteli hizmet, yaratıcı çözümler ve müşteri memnuniyeti odaklı yaklaşımımızla fark yaratıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Projenizi Başlatmaya Hazır mısınız?</h2>
          <p className="text-xl mb-8 opacity-90">
            Uzman ekibimizle birlikte hayalinizdeki yaşam alanını oluşturmaya bugün başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:text-teal-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Ücretsiz Danışmanlık</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Önceki Projelerimizi İnceleyin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;