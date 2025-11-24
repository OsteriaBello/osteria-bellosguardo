import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function listAllDocs() {
  try {
    console.log('🔍 Listing ALL documents in production dataset:\n')
    
    const allDocs = await client.fetch(`*[] | { _id, _type, _createdAt }`)
    
    console.log(`Total documents: ${allDocs.length}\n`)
    
    if (allDocs.length === 0) {
      console.log('❌ Production dataset is EMPTY!')
      console.log('\nTrying with drafts perspective...')
      
      // Try querying with draft IDs
      const draftClient = createClient({
        projectId: 'jjup9d37',
        dataset: 'production',
        useCdn: false,
        apiVersion: '2024-01-01',
      })
      
      const draftDocs = await draftClient.fetch(`*[_id in path("drafts.**")] | { _id, _type }`)
      console.log(`Found ${draftDocs.length} draft documents`)
      
      if (draftDocs.length > 0) {
        draftDocs.forEach((doc: any) => {
          console.log(`  - ${doc._id} (${doc._type})`)
        })
      }
    } else {
      console.log('Documents:')
      allDocs.forEach((doc: any) => {
        console.log(`  _id: ${doc._id}`)
        console.log(`  _type: ${doc._type}`)
        console.log('  ---')
      })
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

listAllDocs()
