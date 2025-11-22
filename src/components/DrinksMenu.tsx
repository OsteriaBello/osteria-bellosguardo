import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { menuData } from '../data/menuData';

interface DrinksMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DrinksMenu({ isOpen, onClose }: DrinksMenuProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('softDrinks');

  if (!isOpen) return null;

  const currentMenu = menuData[language];

  const tabs = [
    {
      id: 'softDrinks',
      label: language === 'en' ? 'SOFT DRINKS' : 'BEBIDAS SEM ÁLCOOL'
    },
    {
      id: 'caffeteria',
      label: language === 'en' ? 'CAFFETERIA' : 'CAFETARIA'
    },
    {
      id: 'beers',
      label: 'A completar'
    },
    {
      id: 'wines',
      label: 'A completar'
    },
    {
      id: 'cocktails',
      label: 'A completar'
    },
    {
      id: 'spirits',
      label: 'A completar'
    },
  ];

  const renderSection = () => {
    if (activeTab === 'beers') {
      const draftBeers = currentMenu.draftBeers;
      const bottledBeers = currentMenu.bottledBeers;

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

    if (activeTab === 'wines') {
      const bottledWineRed = currentMenu.bottledWineRed;
      const bottledWineWhite = currentMenu.bottledWineWhite;
      const bottledWineBubbles = currentMenu.bottledWineBubbles;
      const houseWineSparkling = currentMenu.houseWineSparkling;
      const houseWineRed = currentMenu.houseWineRed;
      const houseWineWhite = currentMenu.houseWineWhite;

      return (
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-[#6b7b5a]">
            A completar
          </h3>

          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {bottledWineRed.title}
          </h4>
          <div className="grid gap-4 mb-8">
            {bottledWineRed.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {bottledWineWhite.title}
          </h4>
          <div className="grid gap-4 mb-8">
            {bottledWineWhite.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {bottledWineBubbles.title}
          </h4>
          <div className="grid gap-4 mb-12">
            {bottledWineBubbles.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-[#6b7b5a]">
            A completar
          </h3>

          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {houseWineSparkling.title}
          </h4>
          <div className="grid gap-4 mb-8">
            {houseWineSparkling.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-gray-600 text-sm">{item.pricePinsa}</span>
                  <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {houseWineRed.title}
          </h4>
          <div className="grid gap-4 mb-8">
            {houseWineRed.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-gray-600 text-sm">{item.pricePinsa}</span>
                  <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {houseWineWhite.title}
          </h4>
          <div className="grid gap-4">
            {houseWineWhite.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-base sm:text-lg font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-gray-600 text-sm">{item.pricePinsa}</span>
                  <span className="text-[#d4896b] font-semibold text-base sm:text-lg whitespace-nowrap">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    const section = currentMenu[activeTab as keyof typeof currentMenu];

    return (
      <div>
        <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
          {section.title}
        </h4>
        <div className={`grid gap-4 ${activeTab === 'spirits' ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
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
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
}
