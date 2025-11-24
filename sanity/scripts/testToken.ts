import { createClient } from '@sanity/client'

const token = process.env.SANITY_AUTH_TOKEN

console.log('🔑 Token status:', token ? '✅ Token found' : '❌ No token')
if (token) {
  console.log('Token length:', token.length)
  console.log('Token preview:', token.substring(0, 10) + '...')
}

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
})

async function testToken() {
  try {
    console.log('\n🧪 Testing token...\n')
    
    // Try to get current user
    const testDoc = {
      _id: 'test-doc-' + Date.now(),
      _type: 'siteSettings',
      restaurantName: 'Test',
    }
    
    const result = await client.create(testDoc)
    console.log('✅ Token works! Document created:', result._id)
    
    // Delete test doc
    await client.delete(result._id)
    console.log('✅ Cleanup: Test document deleted')
    
  } catch (error: any) {
    console.error('❌ Error:', error.message)
    if (error.statusCode) {
      console.error('Status:', error.statusCode)
    }
  }
}

testToken()
