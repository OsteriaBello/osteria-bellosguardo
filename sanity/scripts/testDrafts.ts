import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  perspective: 'previewDrafts', // Include drafts
})

async function testWithDrafts() {
  try {
    console.log('🔍 Testing with previewDrafts perspective:\n')
    
    const allDocs = await client.fetch(`*[]`)
    console.log(`Total documents (including drafts): ${allDocs.length}\n`)
    
    if (allDocs.length > 0) {
      console.log('Documents found:')
      allDocs.forEach((doc: any) => {
        console.log(`- ${doc._id} (${doc._type})`)
      })
    } else {
      console.log('Still no documents found. Your Sanity Studio might not have documents yet.')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

testWithDrafts()
