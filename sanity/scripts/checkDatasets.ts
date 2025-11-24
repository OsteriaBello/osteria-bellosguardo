import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  apiVersion: '2024-01-01',
})

async function checkDatasets() {
  try {
    // Try different datasets
    const datasets = ['production', 'development', 'staging', 'main', 'default', 'test', 'draft']
    
    console.log('🔍 Checking available datasets:\n')
    
    for (const dataset of datasets) {
      const testClient = createClient({
        projectId: 'jjup9d37',
        dataset,
        useCdn: false,
        apiVersion: '2024-01-01',
      })
      
      try {
        const docs = await testClient.fetch(`*[] { _id, _type } | [0...1]`)
        console.log(`✅ ${dataset}: Found ${docs.length > 0 ? 'documents' : 'empty (accessible)'}`)
      } catch (e: any) {
        if (e.statusCode === 404) {
          console.log(`❌ ${dataset}: Dataset not found`)
        } else {
          console.log(`⚠️  ${dataset}: ${e.message}`)
        }
      }
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

checkDatasets()
