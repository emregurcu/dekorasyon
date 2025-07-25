import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface Project {
  id: number;
  image: string;
}

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 20;

  // Gallery klasöründeki TÜM resimler
  const allProjects: Project[] = [
    { id: 1, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19 (1).jpeg' },
    { id: 2, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19 (2).jpeg' },
    { id: 3, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19 (3).jpeg' },
    { id: 4, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19 (4).jpeg' },
    { id: 5, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19 (5).jpeg' },
    { id: 6, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.19.jpeg' },
    { id: 7, image: '/gallery/WhatsApp Image 2025-07-10 at 21.19.20.jpeg' },
    { id: 8, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.04.jpeg' },
    { id: 9, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.05.jpeg' },
    { id: 10, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.06.jpeg' },
    { id: 11, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.07.jpeg' },
    { id: 12, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.08.jpeg' },
    { id: 13, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.34.jpeg' },
    { id: 14, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.35 (1).jpeg' },
    { id: 15, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.35 (2).jpeg' },
    { id: 16, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.35 (3).jpeg' },
    { id: 17, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.35 (4).jpeg' },
    { id: 18, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.35 (5).jpeg' },
    { id: 19, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.35.jpeg' },
    { id: 20, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.36 (1).jpeg' },
    { id: 21, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.36 (2).jpeg' },
    { id: 22, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.36 (3).jpeg' },
    { id: 23, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.36 (4).jpeg' },
    { id: 24, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.36.jpeg' },
    { id: 25, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.37 (1).jpeg' },
    { id: 26, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.37 (2).jpeg' },
    { id: 27, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.37 (3).jpeg' },
    { id: 28, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.37.jpeg' },
    { id: 29, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.38 (1).jpeg' },
    { id: 30, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.38 (2).jpeg' },
    { id: 31, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.38 (3).jpeg' },
    { id: 32, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.38 (4).jpeg' },
    { id: 33, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.38.jpeg' },
    { id: 34, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.39 (1).jpeg' },
    { id: 35, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.39 (2).jpeg' },
    { id: 36, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.39 (3).jpeg' },
    { id: 37, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.39 (4).jpeg' },
    { id: 38, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.39 (5).jpeg' },
    { id: 39, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.39.jpeg' },
    { id: 40, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.40 (1).jpeg' },
    { id: 41, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.40 (2).jpeg' },
    { id: 42, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.40 (3).jpeg' },
    { id: 43, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.40 (4).jpeg' },
    { id: 44, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.40 (5).jpeg' },
    { id: 45, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.40.jpeg' },
    { id: 46, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.41 (1).jpeg' },
    { id: 47, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.41 (2).jpeg' },
    { id: 48, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.41 (3).jpeg' },
    { id: 49, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.41 (4).jpeg' },
    { id: 50, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.41 (5).jpeg' },
    { id: 51, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.41.jpeg' },
    { id: 52, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.42 (1).jpeg' },
    { id: 53, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.42 (2).jpeg' },
    { id: 54, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.42 (3).jpeg' },
    { id: 55, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.42 (4).jpeg' },
    { id: 56, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.42 (5).jpeg' },
    { id: 57, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.42.jpeg' },
    { id: 58, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.43 (1).jpeg' },
    { id: 59, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.43 (2).jpeg' },
    { id: 60, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.43 (3).jpeg' },
    { id: 61, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.43 (4).jpeg' },
    { id: 62, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.43.jpeg' },
    { id: 63, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.44 (1).jpeg' },
    { id: 64, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.44 (2).jpeg' },
    { id: 65, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.44 (3).jpeg' },
    { id: 66, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.44 (4).jpeg' },
    { id: 67, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.44 (5).jpeg' },
    { id: 68, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.44 (6).jpeg' },
    { id: 69, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.44.jpeg' },
    { id: 70, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.45 (1).jpeg' },
    { id: 71, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.45 (2).jpeg' },
    { id: 72, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.45 (3).jpeg' },
    { id: 73, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.45 (4).jpeg' },
    { id: 74, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.45 (5).jpeg' },
    { id: 75, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.45 (6).jpeg' },
    { id: 76, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.45.jpeg' },
    { id: 77, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.46 (1).jpeg' },
    { id: 78, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.46 (2).jpeg' },
    { id: 79, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.46 (3).jpeg' },
    { id: 80, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.46 (4).jpeg' },
    { id: 81, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.46 (5).jpeg' },
    { id: 82, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.46 (6).jpeg' },
    { id: 83, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.46.jpeg' },
    { id: 84, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.47 (1).jpeg' },
    { id: 85, image: '/gallery/WhatsApp Image 2025-07-22 at 14.26.47.jpeg' },
    { id: 86, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.52 (1).jpeg' },
    { id: 87, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.52 (2).jpeg' },
    { id: 88, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.52 (3).jpeg' },
    { id: 89, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.52.jpeg' },
    { id: 90, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.53 (1).jpeg' },
    { id: 91, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.53 (2).jpeg' },
    { id: 92, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.53 (3).jpeg' },
    { id: 93, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.53 (4).jpeg' },
    { id: 94, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.53 (5).jpeg' },
    { id: 95, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.53.jpeg' },
    { id: 96, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.54 (1).jpeg' },
    { id: 97, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.54 (2).jpeg' },
    { id: 98, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.54 (3).jpeg' },
    { id: 99, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.54 (4).jpeg' },
    { id: 100, image: '/gallery/WhatsApp Image 2025-07-22 at 14.27.54 (5).jpeg' }
  ];

  // Sayfalama hesaplamaları
  const totalPages = Math.ceil(allProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = allProjects.slice(startIndex, endIndex);

  const openLightbox = (projectId: number) => {
    const index = currentProjects.findIndex(p => p.id === projectId);
    setCurrentImageIndex(startIndex + index);
    setSelectedImage(projectId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % allProjects.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(allProjects[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + allProjects.length) % allProjects.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(allProjects[prevIndex].id);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProject = allProjects.find(p => p.id === selectedImage);

  return (
    <>
      <Helmet>
        <title>Portfolyomuz - 100+ Başarılı Proje | Vatansever Dekorasyon Çorlu</title>
        <meta name="description" content="Çorlu'da gerçekleştirdiğimiz 100+ fayans döşeme, cam mozaik, boya tadilat ve duşakabin montaj projelerini inceleyin. Kaliteli işçilik örnekleri, müşteri memnuniyeti." />
        <meta name="keywords" content="fayans döşeme örnekleri çorlu, cam mozaik projeleri, boya tadilat işleri, duşakabin montaj örnekleri, dekorasyon projeleri çorlu, kenan vatansever işleri" />
        <meta name="author" content="Kenan Vatansever" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Portfolyomuz - 100+ Başarılı Proje | Vatansever Dekorasyon" />
        <meta property="og:description" content="Çorlu'da gerçekleştirdiğimiz 100+ fayans döşeme, cam mozaik, boya tadilat projelerini inceleyin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vatanseverdekorasyon.com/portfolio" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Vatansever Dekorasyon" />
        <meta property="og:image" content="https://vatanseverdekorasyon.com/gallery/WhatsApp%20Image%202025-07-10%20at%2021.19.19%20(1).jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolyomuz - 100+ Başarılı Proje" />
        <meta name="twitter:description" content="Çorlu'da gerçekleştirdiğimiz fayans döşeme, cam mozaik, boya tadilat projelerini inceleyin." />
        <meta name="twitter:image" content="https://vatanseverdekorasyon.com/gallery/WhatsApp%20Image%202025-07-10%20at%2021.19.19%20(1).jpeg" />

        <link rel="canonical" href="https://vatanseverdekorasyon.com/portfolio" />
        
        {/* Portfolio Collection Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "headline": "Vatansever Dekorasyon Portfolio",
            "description": "Çorlu'da gerçekleştirdiğimiz fayans döşeme, cam mozaik, boya tadilat projelerinin galeris",
            "author": {
              "@type": "Organization",
              "name": "Vatansever Dekorasyon"
            },
            "publisher": {
              "@type": "LocalBusiness",
              "name": "Vatansever Dekorasyon",
              "telephone": "+90 506 171 72 31"
            },
            "mainEntity": {
              "@type": "ImageGallery",
              "name": "Dekorasyon Projeleri",
              "numberOfItems": 100
            }
          })}
        </script>
      </Helmet>
      
      <div className="pt-16 min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-blue-600 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">Portfolyomuz</h1>
            <p className="text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto mb-4">
              Gerçekleştirdiğimiz kaliteli işlerden örnekler
            </p>
            <div className="text-teal-100 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Toplam {allProjects.length} Proje | Sayfa {currentPage} / {totalPages}
              </span>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openLightbox(project.id)}
                  className="group relative bg-white dark:bg-slate-800 rounded-lg sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.image}
                      alt="Vatansever Dekorasyon Projesi"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-12 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-md hover:shadow-lg'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Show first page, last page, current page, and 2 pages around current
                const showPage = 
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 2 && page <= currentPage + 2);
                
                const showDots = 
                  (page === 2 && currentPage > 4) || 
                  (page === totalPages - 1 && currentPage < totalPages - 3);

                if (!showPage && !showDots) return null;

                if (showDots) {
                  return (
                    <span key={`dots-${page}`} className="px-2 text-gray-400">
                      ...
                    </span>
                  );
                }

                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-teal-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 shadow-md hover:shadow-lg'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Page Info */}
            <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
              {startIndex + 1} - {Math.min(endIndex, allProjects.length)} arası gösteriliyor, toplam {allProjects.length} proje
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              {allProjects.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </>
              )}

              {/* Image Container */}
              <div className="flex flex-col items-center justify-center max-h-full w-full">
                <div className="max-w-full max-h-[80vh] sm:max-h-[85vh]">
                  <img
                    src={selectedProject.image}
                    alt="Vatansever Dekorasyon Projesi"
                    className="w-full h-auto max-h-full object-contain rounded-lg"
                  />
                </div>
                
                {/* Image Counter */}
                <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <p className="text-sm sm:text-base text-white text-center font-medium">
                    {currentImageIndex + 1} / {allProjects.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-20 bg-white dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Benzer Kaliteli İş İstiyor musunuz?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
              Profesyonel ekibimizle projenizi hayata geçirelim
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a
                href="tel:+905061717231"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Hemen Arayın
              </a>
              <a
                href="https://wa.me/905061717231?text=Merhaba%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;