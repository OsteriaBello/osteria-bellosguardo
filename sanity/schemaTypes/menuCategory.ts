import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'menuCategory',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'menuType',
      title: 'Menu Type',
      type: 'string',
      options: {
        list: [
          { title: 'Food Menu', value: 'food' },
          { title: 'Drinks Menu', value: 'drinks' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug (Identifier)',
      type: 'slug',
      description: 'Unique identifier (e.g., snacks, bruschette, softDrinks)',
      options: { source: 'titleEn', maxLength: 50 },
    }),
    defineField({
      name: 'titlePt',
      title: 'Category Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Category Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'tabLabelPt',
      title: 'Tab Label (PT)',
      type: 'string',
      description: 'Label shown in menu tabs',
    }),
    defineField({
      name: 'tabLabelEn',
      title: 'Tab Label (EN)',
      type: 'string',
    }),
    defineField({
      name: 'notePt',
      title: 'Note (PT)',
      type: 'text',
      description: 'Optional note displayed below items (e.g., sauce combinations)',
    }),
    defineField({
      name: 'noteEn',
      title: 'Note (EN)',
      type: 'text',
    }),
    defineField({
      name: 'displayType',
      title: 'Display Type',
      type: 'string',
      options: {
        list: [
          { title: 'Standard List', value: 'standard' },
          { title: 'Two Column Grid', value: 'twoColumn' },
          { title: 'Table with Prices (Taglio/Pinsa)', value: 'table' },
          { title: 'Grouped Sections', value: 'grouped' },
        ],
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'images',
      title: 'Category Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'imageUrl', title: 'Image URL (Alternative)', type: 'url' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titlePt', title: 'Subcategory Title (PT)', type: 'string' },
            { name: 'titleEn', title: 'Subcategory Title (EN)', type: 'string' },
            { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titleEn' } },
          ],
          preview: {
            select: { title: 'titleEn' },
          },
        },
      ],
      options: { sortable: true },
      description: 'For grouped categories like Beers (Draft/Bottled) or Wines',
    }),
    defineField({
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
      options: { sortable: true },
      description: 'Drag to reorder items',
    }),
  ],
  orderings: [
    {
      title: 'Menu Type',
      name: 'menuTypeAsc',
      by: [{ field: 'menuType', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'menuType',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Untitled Category',
        subtitle: subtitle === 'food' ? '🍕 Food Menu' : '🍷 Drinks Menu',
      }
    },
  },
})