import React, { useEffect, useRef } from 'react';
import ImageCarousel from './ImageCarousel';
import { useSanityData } from '../contexts/SanityDataContext';
import { useLanguage } from '../contexts/LanguageContext';
import { getImageUrl } from '../lib/sanityClient';

interface GalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images: fallbackImages }) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { data } = useSanityData();
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('active');
              }, index * 150);
            });
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Use Sanity data if available, otherwise fallback
  const galleryImages = data?.gallery?.images && data.gallery.images.length > 0
    ? data.gallery.images.map((img) => ({
        url: getImageUrl(img.image, img.imageUrl),
        alt: language === 'pt' ? img.altPt || '' : img.altEn || '',
      }))
    : fallbackImages;

  return (
    <>
      {/* Mobile: Carousel */}
      <div className="md:hidden">
        <ImageCarousel images={galleryImages} />
      </div>

      {/* Desktop: Grid */}
      <div ref={galleryRef} className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div
            key={image.url + index}
            className="gallery-item aspect-[4/5] group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;