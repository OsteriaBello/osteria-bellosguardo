// Run: npx sanity exec scripts/debugQueries.ts --with-user-token
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function debugQueries() {
  console.log('🔍 Debugging Sanity queries...\n')

  try {
    // Test 1: Check all menu categories
    console.log('1️⃣ All Menu Categories:')
    const allCategories = await client.fetch(`*[_type == "menuCategory"]`)
    console.log(`Found ${allCategories.length} categories`)
    console.log(JSON.stringify(allCategories, null, 2))
    console.log('\n')

    // Test 2: Food menu categories
    console.log('2️⃣ Food Menu Categories:')
    const foodCategories = await client.fetch(`*[_type == "menuCategory" && menuType == "food"]`)
    console.log(`Found ${foodCategories.length} food categories`)
    console.log(JSON.stringify(foodCategories, null, 2))
    console.log('\n')

    // Test 3: News items
    console.log('3️⃣ News Items:')
    const news = await client.fetch(`*[_type == "news"]`)
    console.log(`Found ${news.length} news items`)
    console.log(JSON.stringify(news, null, 2))
    console.log('\n')

    // Test 4: Published news only
    console.log('4️⃣ Published News:')
    const publishedNews = await client.fetch(`*[_type == "news" && published == true]`)
    console.log(`Found ${publishedNews.length} published news items`)
    console.log('\n')

    // Test 5: Menu items
    console.log('5️⃣ Menu Items:')
    const menuItems = await client.fetch(`*[_type == "menuItem"] | order(_createdAt desc) [0...5]`)
    console.log(`Found ${menuItems.length} menu items (showing first 5)`)
    console.log(JSON.stringify(menuItems, null, 2))
    console.log('\n')

    // Test 6: Food categories with resolved items
    console.log('6️⃣ Food Categories with Items:')
    const foodWithItems = await client.fetch(`
      *[_type == "menuCategory" && menuType == "food"] {
        _id,
        titleEn,
        slug,
        "itemCount": count(items),
        "items": items[]->{ _id, nameEn, namePt, price }
      }
    `)
    console.log(JSON.stringify(foodWithItems, null, 2))

  } catch (error) {
    console.error('❌ Error:', error)
  }
}

debugQueries().catch(console.error)