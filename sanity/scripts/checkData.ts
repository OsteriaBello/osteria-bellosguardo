import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function checkData() {
  try {
    console.log('🔍 Checking production dataset:\n')
    
    // Get all documents
    const allDocs = await client.fetch(`*[]`)
    console.log(`Total documents: ${allDocs.length}\n`)
    
    if (allDocs.length > 0) {
      console.log('First 10 documents:')
      allDocs.slice(0, 10).forEach((doc: any) => {
        console.log(`- ${doc._id} (${doc._type})`)
      })
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

checkData()
