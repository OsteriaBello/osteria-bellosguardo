import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  apiVersion: '2024-01-01',
})

async function findDataset() {
  try {
    // Query the API to find all datasets
    const response = await fetch(
      `https://api.sanity.io/v2021-06-07/projects/jjup9d37/datasets`,
      {
        headers: {
          'Authorization': 'Bearer fake-token-for-reading-public-datasets'
        }
      }
    ).catch(() => ({ json: async () => [] }))
    
    console.log('📊 Datasets in project jjup9d37:')
    
    // Try common dataset names
    const datasetNames = ['production', 'staging', 'development', 'main', 'default']
    
    for (const dataset of datasetNames) {
      const testClient = createClient({
        projectId: 'jjup9d37',
        dataset,
        useCdn: false,
        apiVersion: '2024-01-01',
      })
      
      try {
        const count = await testClient.fetch(`count(*)`)
        console.log(`✅ ${dataset}: ${count} documents`)
      } catch (e: any) {
        if (e.statusCode === 404) {
          console.log(`❌ ${dataset}: Not found`)
        }
      }
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

findDataset()
