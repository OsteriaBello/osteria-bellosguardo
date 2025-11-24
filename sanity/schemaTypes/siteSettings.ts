import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  id: 'siteSettings',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'restaurantName',
      title: 'Restaurant Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL (Alternative)',
      type: 'url',
      description: 'Use external URL for logo if not uploading',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        { name: 'metaTitlePt', title: 'Meta Title (PT)', type: 'string' },
        { name: 'metaTitleEn', title: 'Meta Title (EN)', type: 'string' },
        { name: 'metaDescriptionPt', title: 'Meta Description (PT)', type: 'text' },
        { name: 'metaDescriptionEn', title: 'Meta Description (EN)', type: 'text' },
        { name: 'ogImage', title: 'OG Image', type: 'image' },
        { name: 'ogImageUrl', title: 'OG Image URL (Alternative)', type: 'url' },
      ],
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Include country code (e.g., 351915316420)',
    }),
    defineField({
      name: 'reservationLink',
      title: 'Reservation Link (TheFork)',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'restaurantName' },
  },
})