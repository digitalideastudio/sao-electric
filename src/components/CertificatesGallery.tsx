import { useState } from 'react';

export default function CertificatesGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder certificate data - replace with actual certificate images
  const certificates = [
    {
      id: 1,
      image: "/assets/certificate-1.jpg",
      title: "Електромонтажник",
      description: "Сертифікат кваліфікованого електромонтажника з 10+ роками досвіду"
    },
    {
      id: 2,
      image: "/assets/certificate-2.jpg", 
      title: "Інженер автоматизації",
      description: "Сертифікат інженера систем автоматизації та промислових електротехнічних систем"
    },
    {
      id: 3,
      image: "/assets/certificate-3.jpg",
      title: "Програміст",
      description: "Сертифікат програміста електротехнічних систем та автоматизації"
    },
    {
      id: 4,
      image: "/assets/certificate-4.jpg",
      title: "Безпека робіт",
      description: "Сертифікат з техніки безпеки при виконанні електротехнічних робіт"
    },
    {
      id: 5,
      image: "/assets/certificate-5.jpg",
      title: "ISO 9001",
      description: "Сертифікат системи управління якістю ISO 9001"
    },
    {
      id: 6,
      image: "/assets/certificate-6.jpg",
      title: "ISO 14001",
      description: "Сертифікат екологічного менеджменту ISO 14001"
    },
    {
      id: 7,
      image: "/assets/certificate-7.jpg",
      title: "Електробезпека",
      description: "Сертифікат з електробезпеки та захисту від ураження струмом"
    },
    {
      id: 8,
      image: "/assets/certificate-8.jpg",
      title: "Пожежна безпека",
      description: "Сертифікат з пожежної безпеки при електротехнічних роботах"
    },
    {
      id: 9,
      image: "/assets/certificate-9.jpg",
      title: "Охорона праці",
      description: "Сертифікат з охорони праці та промислової безпеки"
    },
    {
      id: 10,
      image: "/assets/certificate-10.jpg",
      title: "Енергоефективність",
      description: "Сертифікат з енергоефективних технологій та систем"
    },
    {
      id: 11,
      image: "/assets/certificate-11.jpg",
      title: "Розумний будинок",
      description: "Сертифікат з систем автоматизації розумного будинку"
    },
    {
      id: 12,
      image: "/assets/certificate-12.jpg",
      title: "Промислова автоматизація",
      description: "Сертифікат з промислових систем автоматизації та контролю"
    }
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="py-10 px-4 bg-white dark:bg-slate-900">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-heading-3 font-bold text-slate-dark dark:text-white mb-2">
              Сертифікати команди
            </h3>
            <p className="text-body text-slate-gray">
              Наші <span className="text-electric-blue">кваліфікації та сертифікати</span>
            </p>
          </div>

          {/* Compact Certificates Gallery */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="group cursor-pointer"
                onClick={() => openModal(certificate.image)}
              >
                <div className="relative overflow-hidden rounded-md shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-square bg-white flex items-center justify-center">
                    <div className="text-center p-1">
                      <div className="w-8 h-8 mx-auto mb-1 bg-electric-blue/10 rounded-md flex items-center justify-center">
                        <svg 
                          className="w-4 h-4 text-electric-blue" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                          />
                        </svg>
                      </div>
                      <h4 className="text-xs font-semibold text-slate-dark leading-tight">
                        {certificate.title}
                      </h4>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-electric-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg 
                      className="w-4 h-4 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for enlarged certificate view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-light-gray flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 text-electric-blue" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-heading-3 font-bold text-slate-dark mb-2">
                    Сертифікат кваліфікації
                  </h3>
                  <p className="text-body text-slate-gray">
                    Тут буде відображено повний сертифікат команди
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
