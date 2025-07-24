import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      details: ['Maslak Mahallesi, Ahi Evran Cd.', 'No: 4/A 34485 Sarıyer/İstanbul'],
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+90 212 345 67 89', '+90 532 123 45 67'],
      link: 'tel:+902123456789'
    },
    {
      icon: Mail,
      title: 'E-posta',
      details: ['info@designstudio.com', 'projeler@designstudio.com'],
      link: 'mailto:info@designstudio.com'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 10:00 - 16:00'],
      link: null
    }
  ];

  const services = [
    'Konut İç Mimari',
    'Ticari Mekan Tasarımı',
    'Dekorasyon & Styling',
    'Tasarım Danışmanlığı',
    'Diğer'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">İletişim</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Hayalinizdeki projeyi birlikte gerçekleştirelim. Size en uygun çözümleri sunmak için buradayız.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">İletişim Bilgileri</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <div key={idx} className="text-slate-600 dark:text-slate-400 mb-1">
                          {info.link && idx === 0 ? (
                            <a href={info.link} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors duration-200">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors duration-200">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors duration-200">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Bizimle İletişime Geçin</h2>
                
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-green-800 dark:text-green-200">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Adınızı ve soyadınızı yazın"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                        placeholder="E-posta adresinizi yazın"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Telefon numaranızı yazın"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Hizmet Türü
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Hizmet seçin</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Projeniz hakkında detayları paylaşın..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Mesaj Gönder</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Ofisimizi Ziyaret Edin</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Maslak merkezindeki ofisimizde projelerinizi görüşmek için randevu alabilirsiniz.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.7969387062254!2d29.013686315488294!3d41.11106857929477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab759c98c8c5d%3A0x4c76cf3dcc8b9b9f!2sMaslak%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1634567890123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
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
                question: 'Proje süresi ne kadar sürer?',
                answer: 'Proje büyüklüğüne göre değişir. Küçük dekorasyon projeleri 2-4 hafta, büyük iç mimari projeler 2-6 ay sürebilir.'
              },
              {
                question: 'Ücretsiz keşif yapıyor musunuz?',
                answer: 'Evet, İstanbul içinde ücretsiz keşif ve ilk danışmanlık hizmeti sunuyoruz.'
              },
              {
                question: 'Hangi bölgelerde hizmet veriyorsunuz?',
                answer: 'Başlıca İstanbul, Ankara ve İzmir\'de hizmet veriyoruz. Diğer şehirler için lütfen bizimle iletişime geçin.'
              },
              {
                question: 'Ödeme nasıl yapılır?',
                answer: 'Projeler genellikle %30 kapora, %40 ara ödeme ve %30 teslimde olmak üzere 3 taksitte ödenebilir.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;