import React, { useState, useEffect } from 'react';
import { supabase, NewsItem } from '../../lib/supabase';
import { X, Save } from 'lucide-react';

interface NewsFormProps {
  item: NewsItem | null;
  onClose: () => void;
}

const NewsForm = ({ item, onClose }: NewsFormProps) => {
  const [formData, setFormData] = useState({
    title_pt: '',
    title_en: '',
    content_pt: '',
    content_en: '',
    type: 'news' as 'news' | 'event' | 'announcement',
    image_url: '',
    event_date: '',
    published: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (item) {
      setFormData({
        title_pt: item.title_pt,
        title_en: item.title_en,
        content_pt: item.content_pt,
        content_en: item.content_en,
        type: item.type,
        image_url: item.image_url || '',
        event_date: item.event_date || '',
        published: item.published,
      });
    }
  }, [item]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;

    setIsLoading(true);
    setError('');

    try {
      const dataToSave = {
        ...formData,
        image_url: formData.image_url || null,
        event_date: formData.event_date || null,
      };

      if (item) {
        const { error } = await supabase
          .from('news')
          .update(dataToSave)
          .eq('id', item.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('news')
          .insert([dataToSave]);

        if (error) throw error;
      }

      onClose();
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full my-8">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-2xl font-semibold text-gray-900">
            {item ? 'Edit News Item' : 'Add News Item'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title_pt" className="block text-sm font-medium text-gray-700 mb-2">
                Title (Portuguese) *
              </label>
              <input
                type="text"
                id="title_pt"
                name="title_pt"
                value={formData.title_pt}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e3a048] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="title_en" className="block text-sm font-medium text-gray-700 mb-2">
                Title (English) *
              </label>
              <input
                type="text"
                id="title_en"
                name="title_en"
                value={formData.title_en}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e3a048] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="content_pt" className="block text-sm font-medium text-gray-700 mb-2">
                Content (Portuguese) *
              </label>
              <textarea
                id="content_pt"
                name="content_pt"
                value={formData.content_pt}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e3a048] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="content_en" className="block text-sm font-medium text-gray-700 mb-2">
                Content (English) *
              </label>
              <textarea
                id="content_en"
                name="content_en"
                value={formData.content_en}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e3a048] focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Type *
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e3a048] focus:border-transparent"
              >
                <option value="news">News</option>
                <option value="event">Event</option>
                <option value="announcement">Announcement</option>
              </select>
            </div>

            <div>
              <label htmlFor="event_date" className="block text-sm font-medium text-gray-700 mb-2">
                Event Date (optional)
              </label>
              <input
                type="date"
                id="event_date"
                name="event_date"
                value={formData.event_date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e3a048] focus:border-transparent"
              />
            </div>

            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#e3a048] border-gray-300 rounded focus:ring-[#e3a048]"
                />
                <span className="text-sm font-medium text-gray-700">Published</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="image_url" className="block text-sm font-medium text-gray-700 mb-2">
              Image URL (optional)
            </label>
            <input
              type="url"
              id="image_url"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#e3a048] focus:border-transparent"
            />
            <p className="mt-1 text-sm text-gray-500">
              Paste a direct link to an image from Google Photos, Unsplash, or any other source
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 bg-[#e3a048] text-white px-6 py-2 rounded-md hover:bg-[#cc8f3f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={20} />
              <span>{isLoading ? 'Saving...' : 'Save'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsForm;
