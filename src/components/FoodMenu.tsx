import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { menuData } from '../data/menuData';

interface FoodMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FoodMenu({ isOpen, onClose }: FoodMenuProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('snacks');

  if (!isOpen) return null;

  const currentMenu = menuData[language];

  const tabs = [
    { id: 'snacks', label: language === 'en' ? 'SNACKS AND BREAD' : 'APERITIVOS E PÃO' },
    { id: 'bruschette', label: 'BRUSCHETTE' },
    { id: 'boards', label: language === 'en' ? 'BOARDS' : 'TÁBUAS' },
    { id: 'specialties', label: language === 'en' ? 'SPECIALTIES' : 'ESPECIALIDADES' },
    { id: 'pizzaTaglio', label: 'PIZZA AL TAGLIO' },
    { id: 'salads', label: language === 'en' ? 'SALADS' : 'SALADAS' },
    { id: 'desserts', label: language === 'en' ? 'DESSERTS' : 'SOBREMESAS' },
  ];

  const renderSection = () => {
    const section = currentMenu[activeTab as keyof typeof currentMenu];

    if (activeTab === 'pizzaTaglio') {
      return (
        <div>
          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {section.title}
          </h4>

          <div className="mb-8">
            <h5 className="text-xl font-semibold mb-4 text-[#6b7b5a]">La Pizza</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h6 className="text-lg font-semibold mb-3 text-[#d4896b]">PIZZA AL TAGLIO</h6>
                <div className="bg-gray-100 rounded-lg overflow-hidden h-48 mb-3">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczN6gvApG840L_SXMzFZEctG6oFCUdBcxAbDyg4qJJ9rXP3dF0n7Bin-4TSRjxolW6488yQstI6FXiPZ_IJflDJ3lQ0o0qNCDu2wCao7rdrU1HlvPABsjOWvIefR90tGdOl6BpXsYlUB1NT0OzN-XCFu=w1800-h528-s-no-gm?authuser=0"
                    alt="Pizza al Taglio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h6 className="text-lg font-semibold mb-3 text-[#d4896b]">PINSA ROMANA</h6>
                <div className="bg-gray-100 rounded-lg overflow-hidden h-48 mb-3">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AP1GczP1c10ynnCVxeUPuqdeGEIX6ycuOEc0M8epmjk9MtWlfosDZbKca-KL_sakEEsHjUAdEq-gGziBunGvK1MmFrc6Y4QPmxUmGzOnxOsU8nHY5tHn3RkPRROgifzUbom2YSTkP_tt7m8ABLBDWonBVv9g=w1800-h532-s-no-gm?authuser=0"
                    alt="Pinsa Romana"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#6b7b5a]/30">
                  <th className="text-left py-3 px-2 text-[#6b7b5a]"></th>
                  <th className="text-center py-3 px-2 text-[#d4896b] font-semibold">Taglio</th>
                  <th className="text-center py-3 px-2 text-[#d4896b] font-semibold">Romana</th>
                </tr>
              </thead>
              <tbody>
                {section.items.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-2">
                      <div className="font-medium text-[#6b7b5a]">{item.name}</div>
                      {item.description && (
                        <div className="text-sm text-gray-600">{item.description}</div>
                      )}
                    </td>
                    <td className="py-3 px-2 text-center text-[#d4896b] font-semibold">
                      {item.price}
                    </td>
                    <td className="py-3 px-2 text-center text-[#d4896b] font-semibold">
                      {item.pricePinsa}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activeTab === 'specialties') {
      const specialties = currentMenu.specialties;
      const specialPasta = currentMenu.specialPasta;

      return (
        <div>
          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
            {specialties.title}
          </h4>

          <div className="grid gap-6 mb-8">
            {specialties.items.map((item, index) => (
              <div key={index} className="flex justify-between items-baseline gap-2">
                <div className="flex-1">
                  <h5 className="text-lg sm:text-xl font-medium text-[#6b7b5a]">{item.name}</h5>
                </div>
                <span className="text-[#d4896b] font-semibold text-lg sm:text-xl">{item.price}</span>
              </div>
            ))}
          </div>

          {specialties.note && (
            <div className="bg-[#f8f6f2] p-4 rounded-lg mb-8">
              <p className="text-sm whitespace-pre-line text-gray-700">{specialties.note}</p>
            </div>
          )}

          <div className="border-t border-[#6b7b5a]/20 pt-6">
            <div className="grid gap-6">
              {specialPasta.items.map((item, index) => (
                <div key={index} className="flex justify-between items-baseline gap-2">
                  <div className="flex-1">
                    <h5 className="text-lg sm:text-xl font-medium text-[#6b7b5a]">{item.name}</h5>
                  </div>
                  <span className="text-[#d4896b] font-semibold text-lg sm:text-xl">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#6b7b5a] border-b border-[#6b7b5a]/20 pb-2">
          {section.title}
        </h4>
        <div className="grid gap-6">
          {section.items.map((item, index) => (
            <div key={index} className="flex justify-between items-baseline gap-2">
              <div className="flex-1">
                <h5 className="text-lg sm:text-xl font-medium text-[#6b7b5a]">{item.name}</h5>
                {item.description && (
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                )}
              </div>
              <span className="text-[#d4896b] font-semibold text-lg sm:text-xl whitespace-nowrap">{item.price}</span>
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
            {language === 'en' ? 'FOOD MENU' : 'MENU COMIDA'}
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
