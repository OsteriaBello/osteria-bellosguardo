import { createClient } from '@sanity/client'

const publicClient = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
})

const token = process.env.SANITY_AUTH_TOKEN

const authClient = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
})

async function compareQueries() {
  console.log('🔍 Comparing public vs authenticated queries:\n')
  
  console.log('📊 PUBLIC CLIENT (no token):')
  let docs = await publicClient.fetch(`*[] | { _id, _type }`)
  console.log(`  Found: ${docs.length} documents`)
  
  console.log('\n🔐 AUTHENTICATED CLIENT (with token):')
  docs = await authClient.fetch(`*[] | { _id, _type }`)
  console.log(`  Found: ${docs.length} documents`)
  
  console.log('\n🎯 Checking specific document:')
  
  console.log('\nPublic - looking for siteSettings:')
  let doc = await publicClient.fetch(`*[_id == "siteSettings"]`)
  console.log(`  Found: ${doc.length}`)
  
  console.log('\nAuth - looking for siteSettings:')
  doc = await authClient.fetch(`*[_id == "siteSettings"]`)
  console.log(`  Found: ${doc.length}`)
  if (doc.length > 0) {
    console.log(`  Content: ${JSON.stringify(doc[0], null, 2).substring(0, 100)}...`)
  }
}

compareQueries()
