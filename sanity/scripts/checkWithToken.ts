import { createClient } from '@sanity/client'

const token = process.env.SANITY_AUTH_TOKEN

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
})

async function checkWithToken() {
  try {
    console.log('🔍 Checking documents WITH token:\n')
    
    const allDocs = await client.fetch(`*[] | { _id, _type }`)
    
    console.log(`Total documents: ${allDocs.length}\n`)
    
    if (allDocs.length > 0) {
      console.log('Documents found:')
      allDocs.forEach((doc: any) => {
        console.log(`  - ${doc._id} (${doc._type})`)
      })
    } else {
      console.log('❌ Still no documents')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

checkWithToken()
