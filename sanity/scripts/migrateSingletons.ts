// Run: npx tsx scripts/migrateSingletons.ts
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
})

const typeToId: Record<string, string> = {
  'siteSettings': 'siteSettings',
  'hero': 'hero',
  'gallery': 'gallery',
  'reviews': 'reviews',
  'contact': 'contact',
  'footer': 'footer',
  'translations': 'translations',
}

async function migrateSingletons() {
  console.log('🚀 Starting singleton migration...\n')

  for (const [type, newId] of Object.entries(typeToId)) {
    try {
      // Check if document with new ID already exists
      const existing = await client.fetch(`*[_id == $id]`, { id: newId })
      if (existing.length > 0) {
        console.log(`✅ ${type}: Already has correct ID (${newId})`)
        continue
      }

      // Find documents of this type
      const docs = await client.fetch(`*[_type == $type] | order(_createdAt desc)`, { type })
      
      if (docs.length === 0) {
        console.log(`⚠️  ${type}: No documents found of this type`)
        continue
      }

      // Take the first (most recent) document
      const oldDoc = docs[0]
      console.log(`📋 ${type}: Found document with ID ${oldDoc._id}`)

      // Create new document with correct ID
      const newDoc = {
        ...oldDoc,
        _id: newId,
      }

      // Delete old document and create new one with correct ID
      await client.transaction()
        .delete(oldDoc._id)
        .create(newDoc)
        .commit()

      console.log(`✅ ${type}: Migrated to ID ${newId}\n`)
    } catch (error) {
      console.error(`❌ ${type}: Migration failed:`, error)
    }
  }

  console.log('✨ Migration complete!')
}

migrateSingletons().catch(console.error)
