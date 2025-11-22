import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#a4b39d] text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif italic mb-3 sm:mb-4">Osteria Bellosguardo</h3>
            <p className="text-sm">{t('footer.experience')}</p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#menu" className="hover:text-[#d4896b] transition-colors">{t('nav.menu')}</a></li>
              <li><a href="#novidades" className="hover:text-[#d4896b] transition-colors">{t('nav.news')}</a></li>
              <li><a href="#galeria" className="hover:text-[#d4896b] transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#reservas" className="hover:text-[#d4896b] transition-colors">{t('nav.reservations')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>R. do Castelo Picão 11 13, 1100-125 Lisboa</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <a href="tel:+351915316420" className="hover:text-[#d4896b] transition-colors break-all">+351 915 316 420</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <a href="mailto:osteria.bellosguardo@gmail.com" className="hover:text-[#d4896b] transition-colors break-all">osteria.bellosguardo@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('footer.followUs')}</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a 
                href="https://www.facebook.com/p/Osteria-Bellosguardo-100086469573106/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#d4896b] transition-colors" 
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/osteria.bellosguardo/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#d4896b] transition-colors" 
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tripadvisor.co.uk/Restaurant_Review-g189158-d25175771-Reviews-Osteria_Bellosguardo-Lisbon_Lisbon_District_Central_Portugal.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="TripAdvisor"
              >
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczPz_Q0XyuzhS8aAXS2pK6sQTM07EVwNzxNz3aU594o2aaJMS36PCNH8Xjdpyxk0eZSXuTA2o7Xnc7kUptZN005-v98DUGa3EBmSR4Q96YT0Hvwh4M6wWeYYNaoW3Alp3n9q930LC9hkYZXmPgPwSOxs=w500-h500-s-no-gm?authuser=0"
                  alt="TripAdvisor"
                  width="24"
                  height="24"
                  className="brightness-0 invert"
                />
              </a>
              <a
                href="https://www.thefork.com/restaurant/osteria-bellosguardo-r750229"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="TheFork"
              >
                <img
                  src="https://lh3.googleusercontent.com/pw/AP1GczNR7cCs7wuQB7awJrBkfQE9EBhkL1pK5w10rf9IYC0JtkHl7TD45Yk3koA5CtrEcE4kjyNEzq0WNmLhGryXn8ZesaqqONi2iFExBzOPMIvakbEjCfjp-Vk-V6lMpmbk8DUbFq7NljSLIMeZFlDhHnAI=w388-h452-s-no-gm?authuser=0"
                  alt="TheFork"
                  width="20"
                  height="20"
                  className="brightness-0 invert"
                />
              </a>
              <a 
                href="https://pt.restaurantguru.com/Osteria-Bellosguardo-Lisbon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#d4896b] transition-colors" 
                aria-label="Restaurant Guru"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://www.livroreclamacoes.pt/Utilizador/AutenticacaoOperador"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm font-medium"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              {t('footer.complaints')}
            </a>
            <p className="text-center text-sm">
              © {new Date().getFullYear()} Osteria Bellosguardo. {t('footer.rights')}
            </p>
            <a href="https://www.vasseo.com/" target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 flex items-center gap-1 hover:text-[#d4896b] transition-colors">
              Created with <Heart size={16} className="text-[#d4896b] fill-[#d4896b] inline-block" style={{ strokeWidth: 2 }} /> by Vasseo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;