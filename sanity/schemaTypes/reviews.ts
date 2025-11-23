import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Reviews Section',
  type: 'document',
  fields: [
    defineField({
      name: 'tripadvisor',
      title: 'TripAdvisor Review',
      type: 'object',
      fields: [
        { name: 'logo', title: 'Logo', type: 'image' },
        { name: 'logoUrl', title: 'Logo URL (Alternative)', type: 'url' },
        { name: 'link', title: 'TripAdvisor Link', type: 'url' },
        { name: 'labelPt', title: 'Label (PT)', type: 'string' },
        { name: 'labelEn', title: 'Label (EN)', type: 'string' },
        { name: 'textPt', title: 'Review Text (PT)', type: 'text' },
        { name: 'textEn', title: 'Review Text (EN)', type: 'text' },
      ],
    }),
    defineField({
      name: 'thefork',
      title: 'TheFork Review',
      type: 'object',
      fields: [
        { name: 'logo', title: 'Logo', type: 'image' },
        { name: 'logoUrl', title: 'Logo URL (Alternative)', type: 'url' },
        { name: 'link', title: 'TheFork Link', type: 'url' },
        { name: 'labelPt', title: 'Label (PT)', type: 'string' },
        { name: 'labelEn', title: 'Label (EN)', type: 'string' },
        { name: 'textPt', title: 'Review Text (PT)', type: 'text' },
        { name: 'textEn', title: 'Review Text (EN)', type: 'text' },
      ],
    }),
    defineField({
      name: 'additionalReviews',
      title: 'Additional Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform Name', type: 'string' },
            { name: 'logo', title: 'Logo', type: 'image' },
            { name: 'logoUrl', title: 'Logo URL (Alternative)', type: 'url' },
            { name: 'link', title: 'Link', type: 'url' },
            { name: 'labelPt', title: 'Label (PT)', type: 'string' },
            { name: 'labelEn', title: 'Label (EN)', type: 'string' },
            { name: 'textPt', title: 'Review Text (PT)', type: 'text' },
            { name: 'textEn', title: 'Review Text (EN)', type: 'text' },
          ],
          preview: {
            select: { title: 'platform' },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Reviews Section' }
    },
  },
})