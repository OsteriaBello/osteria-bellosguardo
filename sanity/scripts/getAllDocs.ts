import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

async function getAllDocs() {
  console.log('📋 All documents in dataset:\n')
  
  const docs = await client.fetch(`*[] { _id, _type, _createdAt } | order(_createdAt desc)`)
  
  if (docs.length === 0) {
    console.log('No documents found!')
    return
  }
  
  console.log(`Total documents: ${docs.length}\n`)
  docs.forEach(d => {
    console.log(`_id: ${d._id}`)
    console.log(`_type: ${d._type}`)
    console.log(`_createdAt: ${d._createdAt}`)
    console.log('---')
  })
}

getAllDocs().catch(console.error)
