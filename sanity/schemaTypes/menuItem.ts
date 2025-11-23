import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'namePt',
      title: 'Name (PT)',
      type: 'string',
    }),
    defineField({
      name: 'nameEn',
      title: 'Name (EN)',
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
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Include currency symbol (e.g., € 5.00)',
    }),
    defineField({
      name: 'priceSecondary',
      title: 'Secondary Price (e.g., Pinsa price)',
      type: 'string',
      description: 'For items with two prices like Pizza/Pinsa',
    }),
    defineField({
      name: 'subcategorySlug',
      title: 'Subcategory',
      type: 'string',
      description: 'Slug of subcategory if applicable (e.g., draftBeers, bottledBeers)',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (Alternative)',
      type: 'url',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Vegetarian', value: 'vegetarian' },
          { title: 'Vegan', value: 'vegan' },
          { title: 'Gluten Free', value: 'glutenFree' },
          { title: 'Spicy', value: 'spicy' },
          { title: 'Popular', value: 'popular' },
          { title: 'New', value: 'new' },
        ],
      },
    }),
    defineField({
      name: 'isAvailable',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'nameEn',
      subtitle: 'price',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Unnamed Item',
        subtitle: subtitle || 'No price',
        media,
      }
    },
  },
})