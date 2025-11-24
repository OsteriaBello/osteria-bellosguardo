import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function checkDocuments() {
  try {
    console.log('🔍 Checking if documents were created:\n')
    
    const allDocs = await client.fetch(`*[] | { _id, _type }`)
    
    console.log(`Total documents in dataset: ${allDocs.length}\n`)
    
    if (allDocs.length > 0) {
      console.log('Documents found:')
      allDocs.forEach((doc: any) => {
        console.log(`  - ${doc._id} (${doc._type})`)
      })
    } else {
      console.log('❌ DATASET IS STILL EMPTY!')
      console.log('\nChecking specific IDs:')
      
      const singletonIds = ['siteSettings', 'hero', 'gallery', 'reviews', 'contact', 'footer', 'translations']
      for (const id of singletonIds) {
        const doc = await client.fetch(`*[_id == $id]`, { id })
        console.log(`  ${id}: ${doc.length > 0 ? '✅ Found' : '❌ Not found'}`)
      }
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

checkDocuments()
