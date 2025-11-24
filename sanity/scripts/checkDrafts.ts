import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function checkDrafts() {
  try {
    console.log('🔍 Checking for DRAFT documents:\n')
    
    // Drafts start with "drafts."
    const draftDocs = await client.fetch(`*[_id in path("drafts.**")]`)
    console.log(`Total draft documents: ${draftDocs.length}\n`)
    
    if (draftDocs.length > 0) {
      console.log('Draft documents found:')
      draftDocs.forEach((doc: any) => {
        // Remove "drafts." prefix for display
        const publishedId = doc._id.replace(/^drafts\./, '')
        console.log(`- ${publishedId} (${doc._type})`)
      })
      
      console.log('\n✅ Your documents exist as DRAFTS!')
      console.log('👉 You need to PUBLISH them to make them accessible to the frontend')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

checkDrafts()
