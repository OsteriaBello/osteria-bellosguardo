import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSanityData } from '../contexts/SanityDataContext';
import { menuData } from '../data/menuData';

interface DrinksMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DrinksMenu({ isOpen, onClose }: DrinksMenuProps) {
  const { language } = useLanguage();
  const { data } = useSanityData();
  const [activeTab, setActiveTab] = useState(0);

  if (!isOpen) return null;

  const fallbackMenu = menuData[language];
  const categories = data?.drinksMenu && data.drinksMenu.length > 0 ? data.drinksMenu : null;

  const tabs = categories
    ? categories.map((cat, idx) => ({
        id: idx,
        slug: cat.slug?.current || `cat-${idx}`,
        label: language === 'pt' ? cat.tabLabelPt || cat.titlePt : cat.tabLabelEn || cat.titleEn,
      }))
    : [
        { id: 0, slug: 'softDrinks', label: language === 'en' ? 'SOFT DRINKS' : 'BEBIDAS SEM ÁLCOOL' },
        { id: 1, slug: 'caffeteria', label: language === 'en' ? 'CAFFETERIA' : 'CAFETARIA' },
        { id: 2, slug: 'beers', label: 'A completar' },
        { id: 3, slug: 'wines', label: 'A completar' },
        { id: 4, slug: 'cocktails', label: 'A completar' },
        { id: 5, slug: 'spirits', label: 'A completar' },
      ];

  const renderSanitySection = () => {
    if (!categories) return null;
    const category = categories[activeTab];
    if (!category) return null;

    const title = language === 'pt' ? category.titlePt : category.titleEn;
    const items = category.items || [];

    // Grouped display for categories with subcategories
    if (category.displayType === 'grouped' && category.subcategories && category.subcategories.length > 0) {
      return (
        <div>
          {category.subcategories.map((sub, subIdx) => {
            const subItems = items.filter(item => item.subcategorySlug === sub.slug?.current);
            const subTitle = language === 'pt' ? sub.titlePt : sub.titleEn;
            return (
              <div key={subIdx} className="mb-8">
                <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
                  {subTitle}
                </h4>
                <div className="grid gap-4">
                  {subItems.map((item, index) => (
                    <div key={item._id || index} className="flex justify-between items-baseline gap-2">
                      <div className="flex-1">
                        <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">
                          {language === 'pt' ? item.namePt : item.nameEn}
                        </h5>
                      </div>
                      <div className="flex items-baseline gap-3">
                        {item.priceSecondary && (
                          <span className="text-gray-600 text-sm">{item.priceSecondary}</span>
                        )}
                        <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Two column display
    if (category.displayType === 'twoColumn') {
      return (
        <div>
          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {title}
          </h4>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <div key={item._id || index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">
                    {language === 'pt' ? item.namePt : item.nameEn}
                  </h5>
                </div>
                <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Standard list
    return (
      <div>
        <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
          {title}
        </h4>
        <div className="grid gap-4">
          {items.map((item, index) => (
            <div key={item._id || index} className="flex justify-between items-baseline gap-2">
              <div className="flex-1">
                <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">
                  {language === 'pt' ? item.namePt : item.nameEn}
                </h5>
              </div>
              <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderFallbackSection = () => {
    const tabSlug = tabs[activeTab]?.slug || 'softDrinks';

    if (tabSlug === 'beers') {
      const draftBeers = fallbackMenu.draftBeers;
      const bottledBeers = fallbackMenu.bottledBeers;
      return (
        <div>
          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {draftBeers.title}
          </h4>
          <div className="grid gap-4 mb-8">
            {draftBeers.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {bottledBeers.title}
          </h4>
          <div className="grid gap-4">
            {bottledBeers.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (tabSlug === 'wines') {
      const sections = [
        { data: fallbackMenu.bottledWineRed, title: fallbackMenu.bottledWineRed.title },
        { data: fallbackMenu.bottledWineWhite, title: fallbackMenu.bottledWineWhite.title },
        { data: fallbackMenu.bottledWineBubbles, title: fallbackMenu.bottledWineBubbles.title },
        { data: fallbackMenu.houseWineSparkling, title: fallbackMenu.houseWineSparkling.title },
        { data: fallbackMenu.houseWineRed, title: fallbackMenu.houseWineRed.title },
        { data: fallbackMenu.houseWineWhite, title: fallbackMenu.houseWineWhite.title },
      ];
      return (
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-[#6b7b5a]">A completar</h3>
          {sections.slice(0, 3).map((section, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
                {section.title}
              </h4>
              <div className="grid gap-4">
                {section.data.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-baseline gap-2">
                    <div className="flex-1">
                      <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                    </div>
                    <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-[#6b7b5a]">A completar</h3>
          {sections.slice(3).map((section, idx) => (
            <div key={idx} className="mb-8">
              <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
                {section.title}
              </h4>
              <div className="grid gap-4">
                {section.data.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-baseline gap-2">
                    <div className="flex-1">
                      <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                    </div>
                    <div className="flex items-baseline gap-3">
                      {item.pricePinsa && <span className="text-gray-600 text-sm">{item.pricePinsa}</span>}
                      <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    const section = fallbackMenu[tabSlug as keyof typeof fallbackMenu];
    const isTwoColumn = tabSlug === 'spirits';

    return (
      <div>
        <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
          {section.title}
        </h4>
        <div className={`grid gap-4 ${isTwoColumn ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
          {section.items.map((item, index) => (
            <div key={index} className="flex justify-between items-baseline gap-2">
              <div className="flex-1">
                <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
              </div>
              <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-between items-center bg-white border-b border-gray-200 flex-shrink-0">
          <h3 className="text-2xl sm:text-3xl font-serif italic text-[#6b7b5a]">
            {language === 'en' ? 'DRINKS MENU' : 'MENU BEBIDAS'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-[#d4896b] p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="flex overflow-x-auto border-b border-gray-200 bg-white sticky top-0 z-10 scrollbar-thin scrollbar-thumb-[#6b7b5a]/30">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-[#d4896b] border-b-2 border-[#d4896b]'
                    : 'text-gray-600 hover:text-[#6b7b5a]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="p-6 sm:p-8">
            {categories ? renderSanitySection() : renderFallbackSection()}
          </div>
        </div>
      </div>
    </div>
  );
}