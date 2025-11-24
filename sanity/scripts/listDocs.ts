import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function listDocuments() {
  const types = ['siteSettings', 'hero', 'gallery', 'reviews', 'contact', 'footer', 'translations']
  
  console.log('📋 Checking document IDs in Sanity:\n')
  
  for (const type of types) {
    const docs = await client.fetch(`*[_type == $type] { _id, _type, _createdAt }`, { type })
    if (docs.length > 0) {
      console.log(`${type}:`)
      docs.forEach(d => {
        console.log(`  - _id: ${d._id}`)
      })
    } else {
      console.log(`${type}: (NOT FOUND)`)
    }
  }
}

listDocuments().catch(console.error)
