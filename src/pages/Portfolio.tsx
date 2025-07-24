import React, { useState } from 'react';
import { Filter, ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Tümü');

  const filters = ['Tümü', 'Konut', 'Ticari', 'Restoran', 'Ofis'];

  const projects = [
    {
      id: 1,
      title: 'Modern Villa Tasarımı',
      category: 'Konut',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Minimalist çizgilerle modern yaşamın konforunu buluşturan villa projesi.',
      year: '2024',
      area: '350m²'
    },
    {
      id: 2,
      title: 'Lüks Ofis Merkezi',
      category: 'Ofis',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Şirket kültürünü yansıtan, çalışan verimliliğini artıran ofis tasarımı.',
      year: '2024',
      area: '1200m²'
    },
    {
      id: 3,
      title: 'Boutique Restaurant',
      category: 'Restoran',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Samimi atmosferde gastronomi deneyimini destekleyen restaurant konsepti.',
      year: '2023',
      area: '180m²'
    },
    {
      id: 4,
      title: 'Contemporary Apartment',
      category: 'Konut',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Şehir merkezinde modern yaşam tarzını yansıtan daire tasarımı.',
      year: '2024',
      area: '120m²'
    },
    {
      id: 5,
      title: 'Retail Store Design',
      category: 'Ticari',
      image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Marka kimliğini güçlendiren, müşteri deneyimini artıran mağaza tasarımı.',
      year: '2023',
      area: '200m²'
    },
    {
      id: 6,
      title: 'Creative Office Space',
      category: 'Ofis',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Yaratıcı endüstriler için tasarlanmış esnek çalışma alanları.',
      year: '2024',
      area: '800m²'
    },
    {
      id: 7,
      title: 'Fine Dining Restaurant',
      category: 'Restoran',
      image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Şık ve zarif atmosferde özel yemek deneyimi için tasarlanmış restoran.',
      year: '2023',
      area: '300m²'
    },
    {
      id: 8,
      title: 'Luxury Penthouse',
      category: 'Konut',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Panoramik şehir manzaralı lüks çatı katı tasarımı.',
      year: '2024',
      area: '250m²'
    },
    {
      id: 9,
      title: 'Concept Store',
      category: 'Ticari',
      image: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Lifestyle markaları için özgün konsept mağaza tasarımı.',
      year: '2024',
      area: '150m²'
    }
  ];

  const filteredProjects = activeFilter === 'Tümü' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Portfolyomuz</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tamamladığımız projelerle yaratıcılığımızı ve uzmanlığımızı keşfedin. 
            Her proje benzersiz bir hikaye anlatır.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b dark:border-slate-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filtrele:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {project.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-500 dark:text-slate-500">
                        Alan: {project.area}
                      </div>
                      <div className="flex items-center space-x-1 text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm font-medium">Detayları Gör</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-slate-400 dark:text-slate-500 text-lg">
                Bu kategoride henüz proje bulunmuyor.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Bir Sonraki Projede Sizinle Çalışalım</h2>
          <p className="text-xl mb-8 opacity-90">
            Portfolyomuzdan ilham aldınız mı? Hayalinizdeki projeyi birlikte gerçekleştirelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:text-teal-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Proje Başlatalım</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;