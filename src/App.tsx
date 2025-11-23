import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import Gallery from './components/Gallery';
import News from './components/News';
import FoodMenu from './components/FoodMenu';
import DrinksMenu from './components/DrinksMenu';
import { MapPin, Phone, Clock, Star, ChefHat, ChevronDown } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { useSanityData } from './contexts/SanityDataContext';
import { getImageUrl } from './lib/sanityClient';

function App() {
  const [isFoodMenuOpen, setIsFoodMenuOpen] = useState(false);
  const [isDrinksMenuOpen, setIsDrinksMenuOpen] = useState(false);
  const { t, language } = useLanguage();
  const { data } = useSanityData();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFoodMenuOpen(false);
        setIsDrinksMenuOpen(false);
      }
    };
    if (isFoodMenuOpen || isDrinksMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isFoodMenuOpen, isDrinksMenuOpen]);

  // Hero data with fallbacks
  const hero = data?.hero;
  const siteSettings = data?.siteSettings;
  const gallery = data?.gallery;
  const reviews = data?.reviews;
  const contact = data?.contact;

  const heroSubtitle = hero ? (language === 'pt' ? hero.subtitlePt : hero.subtitleEn) : t('hero.subtitle');
  const heroDescription = hero ? (language === 'pt' ? hero.descriptionPt : hero.descriptionEn) : t('hero.description');
  const ctaText = hero ? (language === 'pt' ? hero.ctaTextPt : hero.ctaTextEn) : t('hero.cta');
  const reservationLink = siteSettings?.reservationLink || 'https://widget.thefork.com/fr/da7ca922-58dd-4ab3-94b6-1bb5548434d7';
  const whatsappNumber = siteSettings?.whatsappNumber || '351915316420';

  // Hero background images
  const defaultHeroBgImages = [
    { url: "https://lh3.googleusercontent.com/pw/AP1GczPb8Q9WYNM4FGojGbG1lSB9Ra1InD9ecowooSWlRQO5SRueLzQqHQV29lpRKdP1jr7_pxgnCoXhoXNYMmkTT_5ey94hClphqIzaCV2ciwnvQT8mOKw3Ki8cY3nknsE19VQk-DIOKQCS-I-ePxbvVgQ_=w2720-h2040-s-no-gm?authuser=0", position: 'center' },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczMPvkIXtv5YXMZ0ant42ppOp-f0hHwt4jEUIJ6aiJK8BGgA6w_-zS-duS6MGAlEcL9tXX_QwKEeTdW5cEdeE5L0Wxv9zN9H4Kbl6_N0SXGcecyuoGU9RXTlGcqRrnaD-UMCsR4cHu-QtV-PctY00aJ3=w1574-h1178-s-no-gm?authuser=0", position: '35% center' },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczMBdhsB_BXE17bWK7vKfPXrMWJkoFQYogFooTx0H9Y1JebcHazI3FYhb35SBmUtomAwaU2PjwUYIpeW1qgLEg70K28y2a1df9Sp1XF5Vjnm6qF2w91euUGx-iHVHgPahgNhrOOwF3Cgzkmyr4e1kLIc=w1239-h842-s-no-gm?authuser=0", position: 'center' }
  ];

  const heroBgImages = hero?.backgroundImages && hero.backgroundImages.length > 0
    ? hero.backgroundImages.map(img => ({
        url: getImageUrl(img.image, img.imageUrl),
        position: img.position || 'center'
      }))
    : defaultHeroBgImages;

  // TripAdvisor badge
  const tripAdvisorBadgeUrl = hero?.tripAdvisorBadge
    ? getImageUrl(hero.tripAdvisorBadge.image, hero.tripAdvisorBadge.imageUrl, "https://lh3.googleusercontent.com/pw/AP1GczPYZhyzK5EO0teY43-eSI_nPBe2p4Jr457jUwTRPDIglZrJar4dKqSGPXVVlyk-upBTWgxbbCe5HDJG4aNcRXIsJdEmkHsthbq6xGpWhVypGy1iSNQwwQhjqZrN-F7MAf9EoAgv5s5McEEp26313Ung=w200-h220-s-no-gm?authuser=0")
    : "https://lh3.googleusercontent.com/pw/AP1GczPYZhyzK5EO0teY43-eSI_nPBe2p4Jr457jUwTRPDIglZrJar4dKqSGPXVVlyk-upBTWgxbbCe5HDJG4aNcRXIsJdEmkHsthbq6xGpWhVypGy1iSNQwwQhjqZrN-F7MAf9EoAgv5s5McEEp26313Ung=w200-h220-s-no-gm?authuser=0";
  const tripAdvisorLink = hero?.tripAdvisorBadge?.link || "https://www.tripadvisor.co.uk/Restaurant_Review-g189158-d25175771-Reviews-Osteria_Bellosguardo-Lisbon_Lisbon_District_Central_Portugal.html";

  // Carousel images
  const defaultCarouselImages = [
    { url: "https://lh3.googleusercontent.com/pw/AP1GczNNsaBV-z7RaLrfHlJOCFyqC4GfielSY9LJN-4D8AQ04hB_moBPktGeFuVP5jwvg-sV5qJmhZ9VLpO98b6auS1ElOVGQEkOgvHcUNLAfpPCoDipGIh2R3p46oQaf7zLcW2tC3EZ63NLJAzXhu_mHTwc=w1800-h1790-s-no-gm?authuser=0", alt: "Osteria Bellosguardo entrance" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczMPtdoHvHiIlgBDh388ZAyKvfXTYLqTmZ80tiXeBVp8M4CYcj2gjA2WRjOfXiVeiGHQ1WQAtB_U2eOrTEYf_nekbOQzVMgZ_dz8UjBNoZC0S2CscQNev3Wq4Strz33bJEPURHwwq6iGqOnNVDv-E7WW=w1706-h1704-s-no-gm?authuser=0", alt: "Interior view of Osteria Bellosguardo restaurant" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczPlhNURHnybagdq_SCNbeQLhiEJ91y6h6fswAQfJhqqYdqzwXIJkUf2uYJ7TQ4M03wO-xrOhE70piSLQRnoiW9MZDmLija0qn94hYM0tofXDL9aJ4X9XuqcZJ2HpRBw8Tn0Ya17sCchTOZ50kpWuYwY=w1982-h1970-s-no-gm?authuser=0", alt: "Cozy atmosphere at Osteria Bellosguardo" }
  ];

  const carouselImages = gallery?.carouselImages && gallery.carouselImages.length > 0
    ? gallery.carouselImages.map(img => ({
        url: getImageUrl(img.image, img.imageUrl),
        alt: img.alt || ''
      }))
    : defaultCarouselImages;

  // Gallery images
  const defaultGalleryImages = [
    { url: "https://lh3.googleusercontent.com/pw/AP1GczNmQkOwIGIYuPUK4Ruv5isaq2ir8HmbU1nDFlIYZZuPtnpDeGIzYG7eKPBKZCDnMxWJCFS1cAIgE9zAwhCgGFSN767yUeajr1O0GBDIUo0AyBZmdLh6DEbZl1X71rXY4zlS5G37xIk71dPyXBQmCWk9=w630-h840-s-no-gm?authuser=0", alt: "Cozinha Italiana" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczMWiXhmYdWpTcrS51EtelHyCQM6D0Cae_rVFXJ8auK-LPC1XKz7eC5VbI4trv6pujJOpcha5LFUm4fXGqycgq50CQVWuci6qsQeT2ZjYENMvaAFD2eE5Zb-0D11igUanZ-IAAnL2aV9LvFKfsNkLljI=w732-h977-s-no-gm?authuser=0", alt: "Interior do Restaurante" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczP_3f2Hbum1jdPf3GFzTmWlzlJn0MZ0sKR8QhV09b4bSGr-SUjcmjlRK_IkSd2_hNVhwLO6IbQod6BZql1KYp__GgSZaUk4iJFU2pguQEb7bh0BBNWV1ONcD6iGgRIR15-pfiugnkkvcGVFLCrNTpuU=w731-h859-s-no-gm?authuser=0", alt: "Ambiente Acolhedor" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczN4xKdor5G2ZRP03JSI1_1Yv4jsAThKEcHI0hKqzcc_AzZ1OEcez07qXttnY214kHNjmvDLxh7GwhZngp9SPklYdL78rSRN72_wJLnXM9tlRgmUAzU3ncLpoC9LgDozkrSvCf3nyPsjTtDublRBD-M7=w615-h820-s-no-gm?authuser=0", alt: "Seleção de Vinhos" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczNCSv0wafBos1hd-KbyEwUB_Sbg4-nf0ljiHQRyDstxV5h2ZbWvx7o5oXulL_WN4M4_hHAKGJFN-G4HLJosVDTM-hrkvdxZS8wt72WBs09p8i_KtJJOliOiF_2j3sU73Kwp9t7GFjUj_tQR09omI92C=w588-h784-s-no-gm?authuser=0", alt: "Terraço" },
    { url: "https://lh3.googleusercontent.com/pw/AP1GczPhN1jIHDQdKkfrZuoaijVHW3CNBqDZhfTAhG-Doa0nuVdo88FCMDByc7tvEnk6-XqagX8R-NWzwXWINMIlNBKYCPzYJfsFSMAkiIZ81HiQ__zky9OouyHnkgx_zExx92HzKvDLLvK8wiOwzqnNIZE2=w710-h947-s-no-gm?authuser=0", alt: "Massa Fresca" }
  ];

  // Reviews data
  const tripadvisorReview = reviews?.tripadvisor;
  const theforkReview = reviews?.thefork;

  // Contact data
  const contactAddress = contact?.address || { street: 'R. de São Pedro de Alcântara 65', neighborhood: 'Bairro Alto', city: 'Lisboa', country: 'Portugal' };
  const contactPhone = contact?.phone || '+351 915 316 420';
  const googleMapsEmbed = contact?.googleMapsEmbed || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5661010543584!2d-9.133752923848611!3d38.71147997176917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934825d70e049%3A0x48b97da9a1bdb616!2sR.%20do%20Castelo%20Pica%C3%B5%2011%2013%2C%201100-125%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2spt!4v1710845655447!5m2!1sen!2spt';
  const contactImageUrl = contact ? getImageUrl(contact.contactImage, contact.contactImageUrl, "https://lh3.googleusercontent.com/pw/AP1GczMLMwhCeA2gj1qWlim-NFHjZS4JfxvPormv8rDcCwNQaK3iU8sBbrNRrcvaeiyfAVDKQZTTQDFnBXu96n0sMH8WYwtUhh-LEQ4V8-2jx4T_VblWyDJ0S6jolT0mZX5KgXAhaKf35xc2jXmZ6z-LrzZA=w2132-h1402-s-no-gm?authuser=0") : "https://lh3.googleusercontent.com/pw/AP1GczMLMwhCeA2gj1qWlim-NFHjZS4JfxvPormv8rDcCwNQaK3iU8sBbrNRrcvaeiyfAVDKQZTTQDFnBXu96n0sMH8WYwtUhh-LEQ4V8-2jx4T_VblWyDJ0S6jolT0mZX5KgXAhaKf35xc2jXmZ6z-LrzZA=w2132-h1402-s-no-gm?authuser=0";

  const handleScrollToMenu = () => {
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      const navbarHeight = 96;
      const elementPosition = menuSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans">
      <Navbar />
      <main id="main-content">
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              {heroBgImages.map((img, index) => (
                <div
                  key={index}
                  className="absolute inset-0 bg-cover transition-opacity duration-1000"
                  style={{
                    backgroundImage: `url('${img.url}')`,
                    backgroundPosition: img.position,
                    animation: `heroCarousel 15s infinite`,
                    animationDelay: `${index * 5}s`,
                    opacity: index === 0 ? 1 : 0
                  }}
                />
              ))}
            </div>
          </div>
          <div className="min-h-screen bg-gradient-to-b from-black/20 via-black/10 to-black/15 backdrop-brightness-95 backdrop-sepia-[0.05] flex items-center justify-center text-white relative z-10">
            <div className="max-w-3xl text-center px-4 sm:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif italic mb-6 sm:mb-8 tracking-tight leading-tight animate-fade-in">Osteria Bellosguardo</h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic mb-4 sm:mb-6 tracking-wide opacity-95">{heroSubtitle}</p>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">{heroDescription}</p>
              <a href={reservationLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#d4896b] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-[#c07959] transition-all duration-300 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-1">
                {ctaText}
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-12 sm:mb-16 z-20">
            <a href={tripAdvisorLink} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity cursor-pointer">
              <img src={tripAdvisorBadgeUrl} alt="TripAdvisor Osteria Bellosguardo" className="w-32 sm:w-40 md:w-48 h-auto brightness-0 invert pointer-events-auto" />
            </a>
          </div>
          <div onClick={handleScrollToMenu} className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer">
            <div className="relative">
              <ChevronDown size={28} className="sm:hidden text-[#d4896b] animate-bounce-delayed-1" />
              <ChevronDown size={28} className="sm:hidden text-[#d4896b] absolute top-[-8px] animate-bounce-delayed-2" />
              <ChevronDown size={32} className="hidden sm:block text-[#d4896b] animate-bounce-delayed-1" />
              <ChevronDown size={32} className="hidden sm:block text-[#d4896b] absolute top-[-8px] animate-bounce-delayed-2" />
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-12 sm:py-16 md:py-20 bg-white relative texture-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-center mb-6 sm:mb-8 text-[#6b7b5a] reveal tracking-wide">{t('menu.title')}</h2>
            <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 reveal leading-relaxed">{t('menu.description')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
                <button onClick={() => setIsFoodMenuOpen(true)} className="inline-flex items-center justify-center gap-2 bg-[#d4896b] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-[#c07959] transition-all duration-300 text-sm sm:text-base font-medium shadow-md hover:shadow-lg hover:-translate-y-1">
                  <ChefHat size={20} />
                  {language === 'en' ? 'Food Menu' : 'Menu Comida'}
                </button>
                <button onClick={() => setIsDrinksMenuOpen(true)} className="inline-flex items-center justify-center gap-2 bg-[#6b7b5a] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-[#5a6a4a] transition-all duration-300 text-sm sm:text-base font-medium shadow-md hover:shadow-lg hover:-translate-y-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/></svg>
                  {language === 'en' ? 'Drinks Menu' : 'Menu Bebidas'}
                </button>
              </div>
            </div>
          </div>
          <FoodMenu isOpen={isFoodMenuOpen} onClose={() => setIsFoodMenuOpen(false)} />
          <DrinksMenu isOpen={isDrinksMenuOpen} onClose={() => setIsDrinksMenuOpen(false)} />
        </section>

        <News />

        {/* Gallery Section */}
        <section id="galeria" className="py-12 sm:py-16 md:py-20 bg-white texture-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-center mb-8 sm:mb-12 md:mb-16 text-[#6b7b5a] reveal tracking-wide">
              {gallery ? (language === 'pt' ? gallery.titlePt : gallery.titleEn) : t('gallery.title')}
            </h2>
            <Gallery images={defaultGalleryImages} />
          </div>
        </section>

        {/* Room Section */}
        <section id="sala" className="py-12 sm:py-16 md:py-20 bg-[#f8f6f2] texture-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-center mb-8 sm:mb-12 md:mb-16 text-[#6b7b5a] reveal tracking-wide">
              {gallery ? (language === 'pt' ? gallery.roomSectionTitlePt : gallery.roomSectionTitleEn) : t('room.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="reveal">
                <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  {gallery ? (language === 'pt' ? gallery.roomDescriptionPt : gallery.roomDescriptionEn) : t('room.description')}
                </p>
                <div className="flex flex-col gap-4 sm:gap-6">
                  <a href={tripadvisorReview?.link || tripAdvisorLink} target="_blank" rel="noopener noreferrer" className="bg-white/80 p-4 sm:p-6 rounded-xl hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-[#6b7b5a]/10">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <img src={tripadvisorReview ? getImageUrl(tripadvisorReview.logo, tripadvisorReview.logoUrl, "https://lh3.googleusercontent.com/pw/AP1GczPz_Q0XyuzhS8aAXS2pK6sQTM07EVwNzxNz3aU594o2aaJMS36PCNH8Xjdpyxk0eZSXuTA2o7Xnc7kUptZN005-v98DUGa3EBmSR4Q96YT0Hvwh4M6wWeYYNaoW3Alp3n9q930LC9hkYZXmPgPwSOxs=w500-h500-s-no-gm?authuser=0") : "https://lh3.googleusercontent.com/pw/AP1GczPz_Q0XyuzhS8aAXS2pK6sQTM07EVwNzxNz3aU594o2aaJMS36PCNH8Xjdpyxk0eZSXuTA2o7Xnc7kUptZN005-v98DUGa3EBmSR4Q96YT0Hvwh4M6wWeYYNaoW3Alp3n9q930LC9hkYZXmPgPwSOxs=w500-h500-s-no-gm?authuser=0"} alt="TripAdvisor" width="24" height="24" className="flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">{tripadvisorReview ? (language === 'pt' ? tripadvisorReview.labelPt : tripadvisorReview.labelEn) : t('reviews.tripadvisor')}</span>
                    </div>
                    <p className="italic text-sm sm:text-base">{tripadvisorReview ? (language === 'pt' ? tripadvisorReview.textPt : tripadvisorReview.textEn) : t('reviews.tripadvisor.text')}</p>
                  </a>
                  <a href={theforkReview?.link || 'https://www.thefork.com/restaurant/osteria-bellosguardo-r750229'} target="_blank" rel="noopener noreferrer" className="bg-white/80 p-4 sm:p-6 rounded-xl hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-[#6b7b5a]/10">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <img src={theforkReview ? getImageUrl(theforkReview.logo, theforkReview.logoUrl, "https://lh3.googleusercontent.com/pw/AP1GczNR7cCs7wuQB7awJrBkfQE9EBhkL1pK5w10rf9IYC0JtkHl7TD45Yk3koA5CtrEcE4kjyNEzq0WNmLhGryXn8ZesaqqONi2iFExBzOPMIvakbEjCfjp-Vk-V6lMpmbk8DUbFq7NljSLIMeZFlDhHnAI=w388-h452-s-no-gm?authuser=0") : "https://lh3.googleusercontent.com/pw/AP1GczNR7cCs7wuQB7awJrBkfQE9EBhkL1pK5w10rf9IYC0JtkHl7TD45Yk3koA5CtrEcE4kjyNEzq0WNmLhGryXn8ZesaqqONi2iFExBzOPMIvakbEjCfjp-Vk-V6lMpmbk8DUbFq7NljSLIMeZFlDhHnAI=w388-h452-s-no-gm?authuser=0"} alt="TheFork" width="24" height="24" className="flex-shrink-0" />
                      <span className="font-semibold text-sm sm:text-base">{theforkReview ? (language === 'pt' ? theforkReview.labelPt : theforkReview.labelEn) : t('reviews.thefork')}</span>
                    </div>
                    <p className="italic text-sm sm:text-base">{theforkReview ? (language === 'pt' ? theforkReview.textPt : theforkReview.textEn) : t('reviews.thefork.text')}</p>
                  </a>
                </div>
              </div>
              <div className="reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                <ImageCarousel images={carouselImages} />
              </div>
            </div>
          </div>
        </section>

        {/* Reservations Section */}
        <section id="reservas" className="py-12 sm:py-16 md:py-20 bg-white texture-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-center mb-6 sm:mb-8 text-[#6b7b5a] reveal tracking-wide">
              {contact ? (language === 'pt' ? contact.reservationsTitlePt : contact.reservationsTitleEn) : t('reservations.title')}
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl reveal border border-[#6b7b5a]/10">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-serif italic mb-4 text-[#6b7b5a]">
                    {contact ? (language === 'pt' ? contact.hoursTitlePt : contact.hoursTitleEn) : t('reservations.hours.title')}
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <div className="flex items-start gap-2">
                      <Clock className="text-[#d4896b] flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm sm:text-base">
                        {contact ? (language === 'pt' ? contact.weekdaysHoursPt : contact.weekdaysHoursEn) : t('reservations.hours.weekdays')}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="text-[#d4896b] flex-shrink-0 mt-1" size={20} />
                      <span className="text-sm sm:text-base">
                        {contact ? (language === 'pt' ? contact.weekendHoursPt : contact.weekendHoursEn) : t('reservations.hours.weekend')}
                      </span>
                    </div>
                  </div>
                </div>
                <a href={reservationLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-[#d4896b] text-white text-center py-3 sm:py-4 px-4 rounded-lg hover:bg-[#c07959] transition-all duration-300 text-sm sm:text-base font-medium shadow-md hover:shadow-lg">
                  {ctaText}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-12 sm:py-16 md:py-20 bg-[#f8f6f2] texture-overlay">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-center mb-8 sm:mb-12 md:mb-16 text-[#6b7b5a] reveal tracking-wide">
              {contact ? (language === 'pt' ? contact.contactTitlePt : contact.contactTitleEn) : t('contact.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-xl reveal border border-[#6b7b5a]/10">
                <img src={contactImageUrl} alt="Interior acolhedor do restaurante italiano Osteria Bellosguardo em Lisboa" loading="lazy" width="2132" height="1402" className="w-full h-full object-cover" />
              </div>
              <div className="reveal" style={{ '--delay': '200ms' } as React.CSSProperties}>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif italic mb-3 sm:mb-4 text-[#6b7b5a]">
                      {contact ? (language === 'pt' ? contact.howToReachPt : contact.howToReachEn) : t('contact.how.to.reach')}
                    </h3>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="text-[#d4896b] flex-shrink-0 mt-1" size={20} />
                      <div className="text-sm sm:text-base">
                        <p className="font-semibold">Osteria Bellosguardo</p>
                        <p>{contactAddress.street}</p>
                        {contactAddress.neighborhood && <p>{contactAddress.neighborhood}, {contactAddress.city}</p>}
                        {contactAddress.country && <p>{contactAddress.country}</p>}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif italic mb-3 sm:mb-4 text-[#6b7b5a]">
                      {contact ? (language === 'pt' ? contact.talkToUsPt : contact.talkToUsEn) : t('contact.talk.to.us')}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Phone className="text-[#d4896b] flex-shrink-0 mt-1" size={20} />
                        <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="hover:text-[#d4896b] transition-colors text-sm sm:text-base">{contactPhone}</a>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <Clock className="text-[#d4896b] flex-shrink-0 mt-1" size={20} />
                        <div className="text-sm sm:text-base">
                          <p>{contact ? (language === 'pt' ? contact.weekdaysHoursPt : contact.weekdaysHoursEn) : t('reservations.hours.weekdays')}</p>
                          <p>{contact ? (language === 'pt' ? contact.weekendHoursPt : contact.weekendHoursEn) : t('reservations.hours.weekend')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-16 reveal">
              <div className="h-[300px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-xl border border-[#6b7b5a]/10">
                <iframe src={googleMapsEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Restaurant location map" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#25D366] hover:bg-[#128C7E] w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 hover:-translate-y-1 hover:shadow-xl" aria-label="Contact us on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" className="sm:w-[32px] sm:h-[32px]">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;