import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: t('nav.menu'), href: '#menu' },
    { label: t('nav.news'), href: '#novidades' },
    { label: t('nav.gallery'), href: '#galeria' },
    { label: t('nav.reservations'), href: '#reservas' }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setIsMobileMenuOpen(false);
        element.focus({ preventScroll: true });
      }
    }
  };

  return (
    <header role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:text-[#a4b39d] focus:z-50">
        Skip to main content
      </a>

      <div 
        className={`fixed w-full h-24 z-40 transition-all duration-300 ${
          hasScrolled ? 'opacity-95 bg-[#a4b39d]' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      <nav className="fixed w-full z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-24">
            {/* Restaurant Name with Italian Flag Border */}
            <div className="relative flex-1 lg:w-1/4">
              <div className="inline-block relative">
                <a
                  href="#inicio"
                  onClick={handleClick}
                  className="text-white font-serif italic text-lg sm:text-xl lg:text-2xl hover:text-[#d4896b] transition-colors"
                >
                  Osteria Bellosguardo
                </a>
                <div className="absolute -bottom-2 left-0 w-full h-[3px] flex">
                  <div className="w-1/3 bg-[#008C45]"></div>
                  <div className="w-1/3 bg-white"></div>
                  <div className="w-1/3 bg-[#CD212A]"></div>
                </div>
              </div>
            </div>

            {/* Navigation Links - Centered - Desktop Only */}
            <div className="flex-1 hidden lg:flex justify-center">
              <div className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleClick}
                    className="text-white hover:text-[#d4896b] transition-colors text-sm uppercase tracking-wider font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side items */}
            <div className="flex items-center justify-end gap-2 sm:gap-4">
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>

              <a
                href="https://widget.thefork.com/fr/da7ca922-58dd-4ab3-94b6-1bb5548434d7"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block bg-[#d4896b] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg hover:bg-[#c07959] transition-all duration-300 font-medium whitespace-nowrap text-sm lg:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5"
                aria-label={t('hero.cta')}
              >
                {t('hero.cta')}
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden p-2 text-white hover:text-[#d4896b] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden fixed inset-0 top-24 bg-[#a4b39d] transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="px-4 pt-8 pb-6 space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleClick}
                  className="block text-white hover:text-[#d4896b] transition-colors text-lg font-medium py-2"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-6 border-t border-white/20">
                <div className="mb-4">
                  <LanguageSwitcher />
                </div>
                <a
                  href="https://widget.thefork.com/fr/da7ca922-58dd-4ab3-94b6-1bb5548434d7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#d4896b] text-white px-6 py-3 rounded-lg hover:bg-[#c07959] transition-all duration-300 font-medium text-center shadow-md hover:shadow-lg"
                >
                  {t('hero.cta')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;