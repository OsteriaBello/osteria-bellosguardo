import { createClient } from '@sanity/client'

const token = process.env.SANITY_AUTH_TOKEN

if (!token) {
  console.error('❌ SANITY_AUTH_TOKEN not set')
  process.exit(1)
}

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
})

async function createNewsAndEventsSection() {
  try {
    console.log('📰 Creating News & Events Section...\n')
    
    const doc = {
      _id: 'newsAndEvents',
      _type: 'newsAndEvents',
      titlePt: 'Notícias e Eventos',
      titleEn: 'News & Events',
      items: [], // Empty initially, will be populated from existing news items
    }
    
    await client.createOrReplace(doc)
    console.log('✅ News & Events Section created!')
    console.log('\n📝 Next steps:')
    console.log('1. Go to Sanity Studio')
    console.log('2. Click "News & Events Section"')
    console.log('3. Add existing News items to the items array')
    console.log('4. Drag to reorder them')
    console.log('5. Publish')
    
  } catch (error) {
    console.error('❌ Error:', error)
  }
}

createNewsAndEventsSection()
