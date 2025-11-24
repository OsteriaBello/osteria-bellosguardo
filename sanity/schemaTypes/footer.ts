import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  id: 'footer',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    defineField({
      name: 'experiencePt',
      title: 'Experience Text (PT)',
      type: 'string',
    }),
    defineField({
      name: 'experienceEn',
      title: 'Experience Text (EN)',
      type: 'string',
    }),
    defineField({
      name: 'quickLinksTitlePt',
      title: 'Quick Links Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'quickLinksTitleEn',
      title: 'Quick Links Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'contactTitlePt',
      title: 'Contact Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'contactTitleEn',
      title: 'Contact Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'followUsTitlePt',
      title: 'Follow Us Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'followUsTitleEn',
      title: 'Follow Us Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'TripAdvisor', value: 'tripadvisor' },
                  { title: 'TheFork', value: 'thefork' },
                  { title: 'Restaurant Guru', value: 'restaurantguru' },
                  { title: 'Other', value: 'other' },
                ],
              },
            },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'icon', title: 'Custom Icon', type: 'image' },
            { name: 'iconUrl', title: 'Icon URL (Alternative)', type: 'url' },
            { name: 'label', title: 'Aria Label', type: 'string' },
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        },
      ],
      options: { sortable: true },
    }),
    defineField({
      name: 'complaintsLinkPt',
      title: 'Complaints Book Text (PT)',
      type: 'string',
    }),
    defineField({
      name: 'complaintsLinkEn',
      title: 'Complaints Book Text (EN)',
      type: 'string',
    }),
    defineField({
      name: 'complaintsUrl',
      title: 'Complaints Book URL',
      type: 'url',
    }),
    defineField({
      name: 'rightsTextPt',
      title: 'Rights Text (PT)',
      type: 'string',
    }),
    defineField({
      name: 'rightsTextEn',
      title: 'Rights Text (EN)',
      type: 'string',
    }),
    defineField({
      name: 'createdBy',
      title: 'Created By',
      type: 'object',
      fields: [
        { name: 'text', title: 'Text', type: 'string' },
        { name: 'url', title: 'URL', type: 'url' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Footer' }
    },
  },
})