import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Our Experience',
  type: 'document',
  id: 'experience',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'titlePt',
      title: 'Section Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Section Title (EN)',
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
      name: 'carouselImages',
      title: 'Room Carousel Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'imageUrl', title: 'Image URL (Alternative)', type: 'url' },
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
          preview: {
            select: { title: 'alt', media: 'image' },
          },
        },
      ],
      options: { sortable: true },
    }),
    defineField({
      name: 'reservationInfoPt',
      title: 'Reservation Info Text (PT)',
      type: 'text',
      description: 'Optional: Short text about reservations (e.g., "Make a reservation to experience our atmosphere")',
    }),
    defineField({
      name: 'reservationInfoEn',
      title: 'Reservation Info Text (EN)',
      type: 'text',
      description: 'Optional: Short text about reservations in English',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Our Experience' }
    },
  },
})
