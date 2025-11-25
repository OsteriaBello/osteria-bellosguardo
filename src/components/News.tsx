import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Newspaper, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSanityData } from '../contexts/SanityDataContext';
import { getImageUrl } from '../lib/sanityClient';
import { supabase } from '../lib/supabase';

interface SupabaseNewsItem {
  id: string;
  title_pt: string;
  title_en: string;
  content_pt: string;
  content_en: string;
  type: 'news' | 'event' | 'announcement';
  image_url?: string;
  published: boolean;
  event_date?: string;
  created_at: string;
}

const News: React.FC = () => {
  const { t, language } = useLanguage();
  const { data: sanityData, loading: sanityLoading } = useSanityData();
  const [supabaseNews, setSupabaseNews] = useState<SupabaseNewsItem[]>([]);
  const [supabaseLoading, setSupabaseLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;

  useEffect(() => {
    fetchSupabaseNews();
  }, []);

  const fetchSupabaseNews = async () => {
    try {
      setSupabaseLoading(true);
      if (!supabase) {
        setSupabaseLoading(false);
        return;
      }
      const { data, error: fetchError } = await supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(6);
      if (fetchError) {
        setError(fetchError.message);
      } else if (data) {
        setSupabaseNews(data);
      }
    } catch (err) {
      console.error('Supabase fetch error:', err);
    } finally {
      setSupabaseLoading(false);
    }
  };

  // Use Sanity news if available, otherwise fallback to Supabase
  const sanityNews = sanityData?.news || [];
  const newsItems = sanityNews.length > 0 ? sanityNews : supabaseNews;
  // Only show loading if we have no items AND Sanity is still loading
  const loading = sanityNews.length === 0 && sanityLoading;

  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(language === 'pt' ? 'pt-PT' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const formatDateBadge = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleDateString(language === 'pt' ? 'pt-PT' : 'en-US', { month: 'short' });
      return { day, month };
    } catch {
      return { day: '', month: '' };
    }
  };

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return newsItems.slice(startIndex, startIndex + itemsPerPage);
  };

  if (loading) {
    return (
      <section id="novidades" className="py-20 bg-[#f8f6f2] texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-[#d4896b] border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Carregando novidades...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error && newsItems.length === 0) {
    return (
      <section id="novidades" className="py-20 bg-[#f8f6f2] texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-red-600 font-semibold mb-2">Erro ao carregar notícias</p>
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (newsItems.length === 0) {
    return (
      <section id="novidades" className="py-20 bg-[#f8f6f2] texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-center mb-4 text-[#6b7b5a] tracking-wide">
              {t('news.title')}
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              {t('news.no.news')}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="novidades" className="py-20 bg-[#f8f6f2] texture-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif italic text-center mb-4 text-[#6b7b5a] tracking-wide">
            {t('news.title')}
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('news.subtitle')}
          </p>
        </div>
        <div className="relative">
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 bg-white hover:bg-[#d4896b] text-[#6b7b5a] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
                aria-label="Previous"
              >
                <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextPage}
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 bg-white hover:bg-[#d4896b] text-[#6b7b5a] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
                aria-label="Next"
              >
                <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
              </button>
            </>
          )}
          <div className="overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
              {getCurrentPageItems().map((item) => {
                const isSanity = 'titlePt' in item;
                const title = isSanity
                  ? (language === 'pt' ? item.titlePt : item.titleEn)
                  : (language === 'pt' ? (item as SupabaseNewsItem).title_pt : (item as SupabaseNewsItem).title_en);
                const content = isSanity
                  ? (language === 'pt' ? item.contentPt : item.contentEn)
                  : (language === 'pt' ? (item as SupabaseNewsItem).content_pt : (item as SupabaseNewsItem).content_en);
                const imageUrl = isSanity
                  ? getImageUrl(item.image, item.imageUrl)
                  : (item as SupabaseNewsItem).image_url;
                const eventDate = isSanity ? item.eventDate : (item as SupabaseNewsItem).event_date;
                const key = isSanity ? item._id : (item as SupabaseNewsItem).id;

                return (
                  <article
                    key={key}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group border border-[#6b7b5a]/10 hover:-translate-y-1"
                  >
                    {imageUrl ? (
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        <img
                          src={imageUrl}
                          alt={title || ''}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        {eventDate && (
                          <div className="absolute top-4 right-4 bg-[#d4896b] text-white rounded-lg shadow-lg px-3 py-2">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold leading-none">{formatDateBadge(eventDate).day}</span>
                              <span className="text-xs uppercase font-medium">{formatDateBadge(eventDate).month}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#6b7b5a] to-[#1a472a] flex items-center justify-center">
                        <Newspaper size={64} className="text-white/20" />
                        {eventDate && (
                          <div className="absolute top-4 right-4 bg-[#d4896b] text-white rounded-lg shadow-lg px-3 py-2">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold leading-none">{formatDateBadge(eventDate).day}</span>
                              <span className="text-xs uppercase font-medium">{formatDateBadge(eventDate).month}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-serif italic mb-3 text-[#6b7b5a] line-clamp-2 group-hover:text-[#d4896b] transition-colors">
                        {title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{content}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage ? 'bg-[#d4896b] w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;