import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'osteria-bellosguardo',

  projectId: 'jjup9d37',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Hero Section')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('Menu')
              .child(
                S.list()
                  .title('Menu')
                  .items([
                    S.listItem()
                      .title('Food Menu')
                      .child(
                        S.documentList()
                          .title('Food Categories')
                          .filter('_type == "menuCategory" && menuType == "food"')
                      ),
                    S.listItem()
                      .title('Drinks Menu')
                      .child(
                        S.documentList()
                          .title('Drinks Categories')
                          .filter('_type == "menuCategory" && menuType == "drinks"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('All Menu Items')
                      .child(S.documentList().title('All Items').filter('_type == "menuItem"')),
                  ])
              ),
            S.listItem()
              .title('Gallery')
              .child(S.document().schemaType('gallery').documentId('gallery')),
            S.listItem()
              .title('Reviews Section')
              .child(S.document().schemaType('reviews').documentId('reviews')),
            S.listItem()
              .title('Contact & Reservations')
              .child(S.document().schemaType('contact').documentId('contact')),
            S.listItem()
              .title('Footer')
              .child(S.document().schemaType('footer').documentId('footer')),
            S.divider(),
            S.listItem()
              .title('News & Events')
              .child(S.document().schemaType('newsAndEvents').documentId('newsAndEvents')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
