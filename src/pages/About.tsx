import React from 'react';
import { Award, Users, Target, Heart, Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Ayşe Kaya',
      role: 'Kurucu & Baş Mimar',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'İTÜ Mimarlık mezunu. 15 yıllık deneyimi ile birçok prestijli projede imza atmıştır.',
      expertise: ['Konsept Tasarım', 'Sürdürülebilir Mimari', 'Proje Yönetimi']
    },
    {
      name: 'Mehmet Demir',
      role: 'İç Mimar',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mimar Sinan Üniversitesi İç Mimarlık mezunu. Modern ve minimalist tasarım uzmanı.',
      expertise: ['İç Mekan Tasarımı', 'Mobilya Tasarımı', 'Renk Konsepti']
    },
    {
      name: 'Zeynep Öz',
      role: 'Tasarım Direktörü',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Uluslararası tasarım yarışmalarında ödül sahibi. Yaratıcı çözümler üretiyor.',
      expertise: ['Konsept Geliştirme', 'Ürün Tasarımı', 'Marka Kimliği']
    },
    {
      name: 'Can Yılmaz',
      role: 'Proje Koordinatörü',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Endüstri mühendisliği geçmişi ile projelerimizi sistematik olarak yönetiyor.',
      expertise: ['Proje Planlama', 'Kalite Kontrol', 'Müşteri İlişkileri']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Vizyonumuz',
      description: 'Yaşam alanlarını sanat eserine dönüştürerek, insanların hayat kalitesini artırmak ve ilham veren mekanlar yaratmak.'
    },
    {
      icon: Heart,
      title: 'Misyonumuz',
      description: 'Her müşterimizin benzersiz hikayesini mekanlarına yansıtarak, fonksiyonel ve estetik çözümler sunmak.'
    },
    {
      icon: Award,
      title: 'Değerlerimiz',
      description: 'Yaratıcılık, kalite, sürdürülebilirlik ve müşteri memnuniyeti temel değerlerimizdir.'
    }
  ];

  const milestones = [
    {
      year: '2009',
      title: 'Şirket Kuruluşu',
      description: 'İstanbul\'da küçük bir ekiple tasarım yolculuğumuza başladık.'
    },
    {
      year: '2012',
      title: 'İlk Büyük Proje',
      description: 'İlk ticari projemizi tamamlayarak sektörde tanınmaya başladık.'
    },
    {
      year: '2015',
      title: 'Ekip Genişlemesi',
      description: 'Uzman mimar ve tasarımcılarla ekibimizi güçlendirdik.'
    },
    {
      year: '2018',
      title: 'Uluslararası Ödül',
      description: 'Tasarım projemiz ile uluslararası mimarlık ödülü kazandık.'
    },
    {
      year: '2021',
      title: 'Sürdürülebilir Tasarım',
      description: 'Çevre dostu ve sürdürülebilir tasarım anlayışını benimsedin.'
    },
    {
      year: '2024',
      title: 'Bugün',
      description: '500+ mutlu müşteriye hizmet vererek yolumuza devam ediyoruz.'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Mutlu Müşteri' },
    { icon: Award, value: '200+', label: 'Tamamlanan Proje' },
    { icon: Calendar, value: '15+', label: 'Yıl Deneyim' },
    { icon: MapPin, value: '3', label: 'Şehir' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            2009 yılından bu yana yaşam alanlarını dönüştürüyor, hayalleri gerçeğe dönüştürüyoruz. 
            Her projede yaratıcılık ve kaliteyi bir araya getiriyoruz.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Değerlerimiz</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Çalışma prensiplerimiiz ve değerlerimizle kaliteli hizmet sunmaya devam ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Yolculuğumuz</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              15 yıllık serüvenimizde attığımız önemli adımlar ve başarılarımız.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-teal-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl shadow-lg ml-12 md:ml-0">
                      <div className="text-teal-600 dark:text-teal-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-teal-600 rounded-full border-4 border-white dark:border-slate-900 z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Ekibimiz</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Uzman mimar ve tasarımcılardan oluşan ekibimizle her projeye özel çözümler üretiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <div className="text-teal-600 dark:text-teal-400 font-medium mb-3">{member.role}</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded-full inline-block mr-1">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Bize Katılın</h2>
          <p className="text-xl mb-8 opacity-90">
            Ekibimizle tanışmak ve projeleriniz hakkında konuşmak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:text-teal-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              İletişime Geçin
            </a>
            <a
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Çalışmalarımızı İnceleyin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;