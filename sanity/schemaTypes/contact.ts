import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact & Reservations',
  type: 'document',
  id: 'contact',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'reservationsTitlePt',
      title: 'Reservations Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'reservationsTitleEn',
      title: 'Reservations Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'hoursTitlePt',
      title: 'Hours Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'hoursTitleEn',
      title: 'Hours Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'weekdaysHoursPt',
      title: 'Weekdays Hours (PT)',
      type: 'string',
    }),
    defineField({
      name: 'weekdaysHoursEn',
      title: 'Weekdays Hours (EN)',
      type: 'string',
    }),
    defineField({
      name: 'weekendHoursPt',
      title: 'Weekend Hours (PT)',
      type: 'string',
    }),
    defineField({
      name: 'weekendHoursEn',
      title: 'Weekend Hours (EN)',
      type: 'string',
    }),
    defineField({
      name: 'contactTitlePt',
      title: 'Contact Section Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'contactTitleEn',
      title: 'Contact Section Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'neighborhood', title: 'Neighborhood', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'googleMapsEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
    }),
    defineField({
      name: 'contactImage',
      title: 'Contact Section Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactImageUrl',
      title: 'Contact Image URL (Alternative)',
      type: 'url',
    }),
    defineField({
      name: 'howToReachPt',
      title: 'How to Reach Us Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'howToReachEn',
      title: 'How to Reach Us Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'talkToUsPt',
      title: 'Talk to Us Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'talkToUsEn',
      title: 'Talk to Us Title (EN)',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Contact & Reservations' }
    },
  },
})