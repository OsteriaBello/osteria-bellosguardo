import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN,
})

async function testNewsOrder() {
  try {
    console.log('🔍 Testing News & Events ordering:\n')
    
    const result = await client.fetch(`
      *[_id == "newsAndEvents"][0] {
        items[]-> {
          _id,
          titleEn,
          published
        }
      }
    `)
    
    if (result?.items) {
      console.log(`✅ Found ${result.items.length} items:\n`)
      result.items.forEach((item: any, index: number) => {
        console.log(`${index + 1}. ${item.titleEn} (published: ${item.published})`)
      })
    } else {
      console.log('❌ No items found')
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

testNewsOrder()
