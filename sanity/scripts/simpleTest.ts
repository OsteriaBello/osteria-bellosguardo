// Run: npx sanity exec scripts/simpleTest.ts --with-user-token
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function simpleTest() {
  console.log('🔍 Simple connectivity test...\n')

  try {
    // Test 1: Count documents
    console.log('Test 1: Counting all documents...')
    const allDocs = await client.fetch(`count(*)`)
    console.log(`✅ Total documents: ${allDocs}\n`)

    // Test 2: List document types
    console.log('Test 2: Document types in database...')
    const types = await client.fetch(`array::unique(*[]._type)`)
    console.log('Document types:', types)
    console.log('')

    // Test 3: Count menu categories
    console.log('Test 3: Menu categories...')
    const menuCatCount = await client.fetch(`count(*[_type == "menuCategory"])`)
    console.log(`Menu categories: ${menuCatCount}`)

    // Test 4: Sample menu category
    console.log('\nTest 4: First menu category...')
    const firstCat = await client.fetch(`*[_type == "menuCategory"][0]`)
    console.log('First category:', JSON.stringify(firstCat, null, 2))

    // Test 5: Count news
    console.log('\nTest 5: News count...')
    const newsCount = await client.fetch(`count(*[_type == "news"])`)
    console.log(`News items: ${newsCount}`)

    // Test 6: Sample news
    console.log('\nTest 6: First news item...')
    const firstNews = await client.fetch(`*[_type == "news"][0]`)
    console.log('First news:', JSON.stringify(firstNews, null, 2))

    console.log('\n✅ All tests completed!')

  } catch (error) {
    console.error('❌ Error:', error.message)
    console.error('Full error:', error)
  }
}

simpleTest().catch(console.error)