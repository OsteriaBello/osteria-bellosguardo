import React from 'react';
import { Facebook, Instagram, Phone, MapPin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSanityData } from '../contexts/SanityDataContext';
import { getImageUrl } from '../lib/sanityClient';

const Footer = () => {
  const { t, language } = useLanguage();
  const { data } = useSanityData();

  const footer = data?.footer;
  const contact = data?.contact;
  const siteSettings = data?.siteSettings;

  // Fallback values
  const restaurantName = siteSettings?.restaurantName || 'Osteria Bellosguardo';
  const experience = footer
    ? (language === 'pt' ? footer.experiencePt : footer.experienceEn)
    : t('footer.experience');
  const quickLinksTitle = footer
    ? (language === 'pt' ? footer.quickLinksTitlePt : footer.quickLinksTitleEn)
    : t('footer.quickLinks');
  const contactTitle = footer
    ? (language === 'pt' ? footer.contactTitlePt : footer.contactTitleEn)
    : t('footer.contact');
  const followUsTitle = footer
    ? (language === 'pt' ? footer.followUsTitlePt : footer.followUsTitleEn)
    : t('footer.followUs');
  const complaintsText = footer
    ? (language === 'pt' ? footer.complaintsLinkPt : footer.complaintsLinkEn)
    : t('footer.complaints');
  const rightsText = footer
    ? (language === 'pt' ? footer.rightsTextPt : footer.rightsTextEn)
    : t('footer.rights');

  const address = footer?.address || contact?.address || {
    street: 'R. do Castelo Picão 11 13',
    neighborhood: '',
    city: '1100-125 Lisboa',
    country: '',
  };
  const phone = contact?.phone || '+351 915 316 420';
  const email = contact?.email || 'osteria.bellosguardo@gmail.com';

  // Social links with fallbacks
  const defaultSocialLinks = [
    { platform: 'facebook', url: 'https://www.facebook.com/p/Osteria-Bellosguardo-100086469573106/', label: 'Facebook' },
    { platform: 'instagram', url: 'https://www.instagram.com/osteria.bellosguardo/', label: 'Instagram' },
    { platform: 'tripadvisor', url: 'https://www.tripadvisor.co.uk/Restaurant_Review-g189158-d25175771-Reviews-Osteria_Bellosguardo-Lisbon_Lisbon_District_Central_Portugal.html', label: 'TripAdvisor', iconUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPz_Q0XyuzhS8aAXS2pK6sQTM07EVwNzxNz3aU594o2aaJMS36PCNH8Xjdpyxk0eZSXuTA2o7Xnc7kUptZN005-v98DUGa3EBmSR4Q96YT0Hvwh4M6wWeYYNaoW3Alp3n9q930LC9hkYZXmPgPwSOxs=w500-h500-s-no-gm?authuser=0' },
    { platform: 'thefork', url: 'https://www.thefork.com/restaurant/osteria-bellosguardo-r750229', label: 'TheFork', iconUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNR7cCs7wuQB7awJrBkfQE9EBhkL1pK5w10rf9IYC0JtkHl7TD45Yk3koA5CtrEcE4kjyNEzq0WNmLhGryXn8ZesaqqONi2iFExBzOPMIvakbEjCfjp-Vk-V6lMpmbk8DUbFq7NljSLIMeZFlDhHnAI=w388-h452-s-no-gm?authuser=0' },
    { platform: 'restaurantguru', url: 'https://pt.restaurantguru.com/Osteria-Bellosguardo-Lisbon', label: 'Restaurant Guru' },
  ];

  const socialLinks = footer?.socialLinks && footer.socialLinks.length > 0 ? footer.socialLinks : defaultSocialLinks;

  const renderSocialIcon = (link: typeof socialLinks[0]) => {
    const iconUrl = 'icon' in link && link.icon ? getImageUrl(link.icon as any, (link as any).iconUrl) : (link as any).iconUrl;

    if (iconUrl) {
      return (
        <img
          src={iconUrl}
          alt={link.label || link.platform}
          width="24"
          height="24"
          className="brightness-0 invert"
        />
      );
    }

    switch (link.platform) {
      case 'facebook':
        return <Facebook size={24} />;
      case 'instagram':
        return <Instagram size={24} />;
      case 'restaurantguru':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#a4b39d] text-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif italic mb-3 sm:mb-4">{restaurantName}</h3>
            <p className="text-sm">{experience}</p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{quickLinksTitle}</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#menu" className="hover:text-[#d4896b] transition-colors">{t('nav.menu')}</a></li>
              <li><a href="#novidades" className="hover:text-[#d4896b] transition-colors">{t('nav.news')}</a></li>
              <li><a href="#galeria" className="hover:text-[#d4896b] transition-colors">{t('nav.gallery')}</a></li>
              <li><a href="#reservas" className="hover:text-[#d4896b] transition-colors">{t('nav.reservations')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{contactTitle}</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>
                  {address.street}
                  {address.city && `, ${address.city}`}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#d4896b] transition-colors break-all">{phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <a href={`mailto:${email}`} className="hover:text-[#d4896b] transition-colors break-all">{email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{followUsTitle}</h4>
            <div className="flex gap-4 items-center">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4896b] hover:opacity-80 transition-all inline-flex items-center justify-center"
                  aria-label={link.label || link.platform}
                >
                  {renderSocialIcon(link)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col items-center gap-3">
            <a
              href={footer?.complaintsUrl || 'https://www.livroreclamacoes.pt/Utilizador/AutenticacaoOperador'}
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
              {complaintsText}
            </a>
            <p className="text-center text-sm">
              © {new Date().getFullYear()} {restaurantName}. {rightsText}
            </p>
            <a
              href={footer?.createdBy?.url || 'https://www.vasseo.com/'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/80 flex items-center gap-1 hover:text-[#d4896b] transition-colors"
            >
              {footer?.createdBy?.text || 'Created with'} <Heart size={16} className="text-[#d4896b] fill-[#d4896b] inline-block" style={{ strokeWidth: 2 }} /> by Vasseo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;