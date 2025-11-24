import { createClient } from '@sanity/client'

const token = process.env.SANITY_AUTH_TOKEN

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
})

async function publishDocuments() {
  try {
    console.log('📤 Publishing all documents...\n')
    
    const singletons = ['siteSettings', 'hero', 'gallery', 'reviews', 'contact', 'footer', 'translations']
    
    for (const id of singletons) {
      // Get the document
      const doc = await client.fetch(`*[_id == $id][0]`, { id })
      
      if (doc) {
        // Publish by creating a version without the drafts. prefix
        await client.createOrReplace({
          ...doc,
          _id: id // Ensure ID doesn't have drafts. prefix
        })
        console.log(`✅ Published: ${id}`)
      } else {
        console.log(`⚠️  Not found: ${id}`)
      }
    }
    
    console.log('\n✨ All documents published!')
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

publishDocuments()
