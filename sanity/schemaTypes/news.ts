import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News & Events',
  type: 'document',
  fields: [
    defineField({
      name: 'titlePt',
      title: 'Title (PT)',
      type: 'string',
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (EN)',
      type: 'string',
    }),
    defineField({
      name: 'contentPt',
      title: 'Content (PT)',
      type: 'text',
    }),
    defineField({
      name: 'contentEn',
      title: 'Content (EN)',
      type: 'text',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'News', value: 'news' },
          { title: 'Event', value: 'event' },
          { title: 'Announcement', value: 'announcement' },
        ],
      },
      initialValue: 'news',
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
      name: 'eventDate',
      title: 'Event Date',
      type: 'datetime',
      description: 'For events only',
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Published Date',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'type',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      const typeEmoji = subtitle === 'event' ? '📅' : subtitle === 'announcement' ? '📢' : '📰'
      return {
        title: title || 'Untitled',
        subtitle: `${typeEmoji} ${subtitle || 'news'}`,
        media,
      }
    },
  },
})