import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'backgroundImages',
      title: 'Background Images (Carousel)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'imageUrl', title: 'Image URL (Alternative)', type: 'url' },
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { 
              name: 'position', 
              title: 'Background Position', 
              type: 'string',
              options: {
                list: [
                  { title: 'Center', value: 'center' },
                  { title: 'Top', value: 'top' },
                  { title: 'Bottom', value: 'bottom' },
                  { title: '35% Center', value: '35% center' },
                ],
              },
            },
          ],
          preview: {
            select: { title: 'alt', media: 'image' },
          },
        },
      ],
      options: { sortable: true },
    }),
    defineField({
      name: 'subtitlePt',
      title: 'Subtitle (PT)',
      type: 'string',
    }),
    defineField({
      name: 'subtitleEn',
      title: 'Subtitle (EN)',
      type: 'string',
    }),
    defineField({
      name: 'descriptionPt',
      title: 'Description (PT)',
      type: 'text',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (EN)',
      type: 'text',
    }),
    defineField({
      name: 'ctaTextPt',
      title: 'CTA Button Text (PT)',
      type: 'string',
    }),
    defineField({
      name: 'ctaTextEn',
      title: 'CTA Button Text (EN)',
      type: 'string',
    }),
    defineField({
      name: 'tripAdvisorBadge',
      title: 'TripAdvisor Badge',
      type: 'object',
      fields: [
        { name: 'image', title: 'Badge Image', type: 'image' },
        { name: 'imageUrl', title: 'Badge Image URL (Alternative)', type: 'url' },
        { name: 'link', title: 'TripAdvisor Link', type: 'url' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero Section' }
    },
  },
})