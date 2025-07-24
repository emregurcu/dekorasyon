import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Palette, Home as HomeIcon, Building2 } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: HomeIcon,
      title: 'Konut Tasarımı',
      description: 'Yaşam alanlarınızı kişisel tarzınızı yansıtan, fonksiyonel ve estetik mekanlar haline getiriyoruz.'
    },
    {
      icon: Building2,
      title: 'Ticari Mekan',
      description: 'Ofis, mağaza ve restoran gibi ticari alanları markanızın kimliğini yansıtan konseptlerle tasarlıyoruz.'
    },
    {
      icon: Palette,
      title: 'Dekorasyon',
      description: 'Renk seçiminden mobilya düzenine kadar her detayı özenle planlıyoruz.'
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Modern Villa Tasarımı',
      category: 'Konut',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Minimalist çizgilerle modern yaşamın konforunu buluşturan villa projesi.'
    },
    {
      id: 2,
      title: 'Lüks Ofis Merkezi',
      category: 'Ticari',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Şirket kültürünü yansıtan, çalışan verimliliğini artıran ofis tasarımı.'
    },
    {
      id: 3,
      title: 'Boutique Restaurant',
      category: 'Restoran',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Samimi atmosferde gastronomi deneyimini destekleyen restaurant konsepti.'
    }
  ];

  const testimonials = [
    {
      name: 'Ayşe Kaya',
      role: 'Ev Sahibi',
      content: 'Evimiz artık tam olarak hayal ettiğimiz gibi. Ekibin profesyonelliği ve yaratıcılığı mükemmeldi.',
      rating: 5
    },
    {
      name: 'Mehmet Demir',
      role: 'Şirket Sahibi',
      content: 'Ofisimizin yeni tasarımı çalışanlarımızın motivasyonunu büyük ölçüde artırdı. Teşekkürler!',
      rating: 5
    },
    {
      name: 'Zeynep Öz',
      role: 'Restaurant Sahibi',
      content: 'Müşterilerimiz restoranımızın ambiyansını çok beğeniyor. Satışlarımız %30 arttı.',
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Mutlu Müşteri' },
    { icon: Award, value: '200+', label: 'Tamamlanan Proje' },
    { icon: Star, value: '15+', label: 'Yıllık Deneyim' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hayalinizdeki
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Yaşam Alanı
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Modern tasarım anlayışıyla yaşam alanlarınızı dönüştürüyor, 
            hayallerinizi gerçeğe dönüştürüyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <span>Projelerimizi Keşfedin</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Hizmetlerimiz</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Her projeye özel çözümler sunarak yaşam alanlarınızı hayallerinizden de güzel hale getiriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Öne Çıkan Projeler</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Son dönemde tamamladığımız ve gurur duyduğumuz projelerden bir seçki.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Tüm Projeleri Görüntüle</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Müşteri Yorumları</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Projelerimizi tamamlayan müşterilerimizin deneyimleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Projenizi Birlikte Hayata Geçirelim</h2>
          <p className="text-xl mb-8 opacity-90">
            Uzman ekibimizle birlikte hayalinizdeki yaşam alanını oluşturmaya bugün başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:text-teal-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              Ücretsiz Danışmanlık
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Portfolyomuzu İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;