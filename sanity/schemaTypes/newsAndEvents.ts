import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'newsAndEvents',
  title: 'News & Events Section',
  type: 'document',
  id: 'newsAndEvents',
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
      name: 'items',
      title: 'News & Events Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'news' }],
          options: {
            disableNew: false, // Allow creating new items directly
          },
        },
      ],
      options: {
        sortable: true, // Enable drag-and-drop reordering
      },
      description: 'Drag to reorder items. Only published news items will appear on the frontend.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'News & Events Section' }
    },
  },
})
