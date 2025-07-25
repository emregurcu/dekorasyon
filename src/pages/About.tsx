import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Users, Award, Target, CheckCircle, Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  role?: string;
  bio: string;
  image?: string;
  avatar_url?: string;
  expertise: string[];
  social_links?: any;
  email?: string;
  phone?: string;
  sort_order?: number;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  role?: string;
  company?: string;
  content?: string;
  message?: string;
  rating: number;
  image?: string;
  avatar_url?: string;
}

const About: React.FC = () => {
  // Statik ekip üyesi
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Kenan Vatansever',
      position: 'Kurucu & Usta',
      role: 'Kurucu & Usta',
      bio: '15 yıllık deneyimi ile fayans kalebodur, cam mozaik, boya tadilat, iç cephe, montalama ve duşakabin işlerinde uzman. Müşteri memnuniyetini ön planda tutarak kaliteli işçilik sunar.',
      image: 'https://via.placeholder.com/400x400/059669/FFFFFF?text=K.V',
      expertise: [
        'Fayans Kalebodur',
        'Cam Mozaik',
        'Boya Tadilat',
        'İç Cephe',
        'Montalama',
        'Duşakabin'
      ],
      phone: '+905061717231',
      email: 'info@vatanseverdekorasyon.com',
      sort_order: 1
    }
  ];

  // Statik müşteri yorumları
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ahmet Yılmaz',
      position: 'Ev Sahibi',
      content: 'Kenan Usta ile çalışmak gerçekten harika bir deneyimdi. Banyomuzun fayans işini mükemmel bir şekilde tamamladı. Kaliteli işçilik ve güler yüzlü hizmet.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Fatma Demir',
      position: 'Ev Sahibi',
      content: 'Mutfağımızın cam mozaik işini Vatansever Dekorasyon yaptı. Sonuçtan çok memnun kaldık. Temiz, düzenli ve zamanında teslim. Herkese tavsiye ederim.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Mehmet Kaya',
      position: 'Ev Sahibi',
      content: 'Evin tamamında boya işi yaptırdık. Çok profesyonel yaklaşım, kaliteli malzeme kullanımı ve uygun fiyat. Kesinlikle tekrar çalışmak isteriz.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Mutlu Müşteri' },
    { icon: Award, value: '200+', label: 'Tamamlanan Proje' },
    { icon: Star, value: '15+', label: 'Yıllık Deneyim' },
    { icon: Target, value: '98%', label: 'Müşteri Memnuniyeti' }
  ];

  const values = [
    {
      title: 'Kalite',
      description: 'Her projede en yüksek kalite standartlarını uyguluyoruz.',
      icon: Star
    },
    {
      title: 'Yaratıcılık',
      description: 'Benzersiz ve yenilikçi tasarım çözümleri üretiyoruz.',
      icon: Target
    },
    {
      title: 'Güvenilirlik',
      description: 'Zamanında teslimat ve sözleşmelere bağlılık önceliğimiz.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Helmet>
        <title>Hakkımızda - Kenan Vatansever | 15 Yıllık Dekorasyon Uzmanı Çorlu</title>
        <meta name="description" content="Kenan Vatansever, 15 yıllık deneyimi ile Çorlu'da fayans kalebodur, cam mozaik, boya tadilat hizmetleri sunuyor. 500+ mutlu müşteri, %100 memnuniyet garantisi." />
        <meta name="keywords" content="kenan vatansever, dekorasyon uzmanı çorlu, fayans ustası çorlu, cam mozaik ustası, boya tadilat uzmanı, vatansever dekorasyon, 15 yıl deneyim" />
        <meta name="author" content="Kenan Vatansever" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hakkımızda - Kenan Vatansever | 15 Yıllık Dekorasyon Uzmanı" />
        <meta property="og:description" content="15 yıllık deneyimi ile Çorlu'da fayans kalebodur, cam mozaik, boya tadilat hizmetleri sunuyor." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vatanseverdekorasyon.com/about" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Vatansever Dekorasyon" />
        <meta property="og:image" content="https://via.placeholder.com/400x400/059669/FFFFFF?text=K.V" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda - Kenan Vatansever | Dekorasyon Uzmanı" />
        <meta name="twitter:description" content="15 yıllık deneyimi ile Çorlu'da fayans kalebodur, cam mozaik, boya tadilat hizmetleri." />
        <meta name="twitter:image" content="https://via.placeholder.com/400x400/059669/FFFFFF?text=K.V" />

        <link rel="canonical" href="https://vatanseverdekorasyon.com/about" />
        
        {/* Person/Professional Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kenan Vatansever",
            "jobTitle": "Dekorasyon Uzmanı",
            "description": "15 yıllık deneyimi ile fayans kalebodur, cam mozaik, boya tadilat işlerinde uzman",
            "telephone": "+90 506 171 72 31",
            "email": "info@vatanseverdekorasyon.com",
            "worksFor": {
              "@type": "LocalBusiness",
              "name": "Vatansever Dekorasyon",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Çorlu",
                "addressRegion": "Tekirdağ",
                "addressCountry": "TR"
              }
            },
            "knowsAbout": [
              "Fayans Döşeme",
              "Kalebodur Döşeme", 
              "Cam Mozaik",
              "Boya Tadilat",
              "İç Cephe",
              "Duşakabin Montaj"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Dekorasyon Uzmanı",
              "description": "Fayans, cam mozaik, boya tadilat işlerinde uzman"
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Hakkımızda</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            15 yıllık deneyimimizle hayallerinizdeki mekanları yaratıyoruz
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Hikayemiz
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                2009 yılında kurulan firmamız, iç mimari ve dekorasyon alanında uzmanlaşmış 
                deneyimli bir ekiple hizmet vermektedir. Müşteri memnuniyetini ön planda tutarak, 
                her projede benzersiz ve fonksiyonel çözümler üretiyoruz.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Konut, ofis, mağaza ve restoran projelerinde edindiğimiz deneyimle, 
                her mekanın kendine özgü karakterini ortaya çıkarıyor, yaşam kalitesini 
                artıran tasarımlar yaratıyoruz.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {teamMembers.slice(0, 3).map((member, index) => (
                    <img
                      key={member.id}
                      src={member.image || member.avatar_url || `https://via.placeholder.com/400x400/059669/FFFFFF?text=USER`}
                      alt={member.name}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>{teamMembers.length}</strong> uzman ekip üyesi
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ekibimiz"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Çalışma prensiplerimizie rehberlik eden temel değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Ekibimiz</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Deneyimli ve yaratıcı ekibimizle projelerinizi hayata geçiriyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image || member.avatar_url || `https://via.placeholder.com/400x400/059669/FFFFFF?text=USER`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-600 dark:text-teal-400 font-medium mb-4">
                  {member.position || member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                {member.expertise && member.expertise.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-center space-x-4">
                  {member.phone && (
                    <a href={`tel:${member.phone}`} className="text-gray-400 hover:text-teal-600 transition-colors">
                      <Phone className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-teal-600 transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Müşteri Yorumları
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Projelerimizi tamamlayan müşterilerimizin deneyimleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content || testimonial.message}"
                </p>
                <div className="flex items-center">
                  {(testimonial.image || testimonial.avatar_url) && (
                    <img
                      src={testimonial.image || testimonial.avatar_url}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.position || testimonial.role}
                      {testimonial.company && `, ${testimonial.company}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;