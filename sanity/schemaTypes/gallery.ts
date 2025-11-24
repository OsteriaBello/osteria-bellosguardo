import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  id: 'gallery',
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
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'imageUrl', title: 'Image URL (Alternative)', type: 'url' },
            { name: 'altPt', title: 'Alt Text (PT)', type: 'string' },
            { name: 'altEn', title: 'Alt Text (EN)', type: 'string' },
          ],
          preview: {
            select: { title: 'altEn', media: 'image' },
          },
        },
      ],
      options: { sortable: true },
      description: 'Drag to reorder images',
    }),
    defineField({
      name: 'carouselImages',
      title: 'Room Section Carousel Images',
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
      name: 'roomSectionTitlePt',
      title: 'Room Section Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'roomSectionTitleEn',
      title: 'Room Section Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'roomDescriptionPt',
      title: 'Room Description (PT)',
      type: 'text',
    }),
    defineField({
      name: 'roomDescriptionEn',
      title: 'Room Description (EN)',
      type: 'text',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Gallery & Room Section' }
    },
  },
})