import { sanityClient } from './sanityClient'
import type {
  SanityHero,
  SanityGallery,
  SanityContact,
  SanityFooter,
  SanityReviews,
  SanityMenuCategory,
  SanityNews,
  SanitySiteSettings,
  SanityTranslations,
} from '../types/sanity'

// Site Settings - try published, then draft, then by type
export const fetchSiteSettings = async (): Promise<SanitySiteSettings | null> => {
  try {
    // Try published ID
    let result = await sanityClient.fetch(`*[_id == "siteSettings"][0]`)
    if (result) return result
    
    // Try draft ID
    result = await sanityClient.fetch(`*[_id == "drafts.siteSettings"][0]`)
    if (result) return result
    
    // Fallback to first document of type
    result = await sanityClient.fetch(`*[_type == "siteSettings"][0]`)
    return result || null
  } catch (error) {
    console.error('Error fetching siteSettings:', error)
    return null
  }
}

// Hero Section - try published, then draft, then by type
export const fetchHero = async (): Promise<SanityHero | null> => {
  try {
    // Try published ID
    let result = await sanityClient.fetch(`*[_id == "hero"][0]`)
    if (result) return result
    
    // Try draft ID
    result = await sanityClient.fetch(`*[_id == "drafts.hero"][0]`)
    if (result) return result
    
    // Fallback to first document of type
    result = await sanityClient.fetch(`*[_type == "hero"][0]`)
    return result || null
  } catch (error) {
    console.error('Error fetching hero:', error)
    return null
  }
}

// Menu Categories with Items - FIXED VERSION
export const fetchMenuCategories = async (menuType: 'food' | 'drinks'): Promise<SanityMenuCategory[]> => {
  const query = `*[_type == "menuCategory" && menuType == $menuType] | order(_createdAt asc) {
    _id,
    menuType,
    slug,
    titlePt,
    titleEn,
    tabLabelPt,
    tabLabelEn,
    notePt,
    noteEn,
    displayType,
    images,
    subcategories,
    items[]{
      "_ref": @._ref,
      "item": @->{
        _id,
        namePt,
        nameEn,
        descriptionPt,
        descriptionEn,
        price,
        priceSecondary,
        subcategorySlug,
        image,
        imageUrl,
        tags,
        isAvailable
      }
    }
  }`
  
  try {
    const result = await sanityClient.fetch(query, { menuType })
    
    // Transform the result to flatten the items
    const transformed = result.map((cat: any) => ({
      ...cat,
      items: cat.items?.map((i: any) => i.item).filter(Boolean) || []
    }))
    
    console.log(`📋 Fetched ${transformed?.length || 0} ${menuType} categories`)
    return transformed
  } catch (error) {
    console.error(`Error fetching ${menuType} menu:`, error)
    return []
  }
}

// Gallery
export const fetchGallery = async (): Promise<SanityGallery | null> => {
  try {
    let result = await sanityClient.fetch(`*[_id == "gallery"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_id == "drafts.gallery"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_type == "gallery"][0]`)
    return result || null
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return null
  }
}

// News
export const fetchNews = async (limit = 6): Promise<SanityNews[]> => {
  const query = `*[_type == "news" && published == true] | order(publishedAt desc)[0...${limit}]`
  
  try {
    const result = await sanityClient.fetch(query)
    console.log(`📰 Fetched ${result?.length || 0} news items`)
    return result || []
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

// Reviews
export const fetchReviews = async (): Promise<SanityReviews | null> => {
  try {
    let result = await sanityClient.fetch(`*[_id == "reviews"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_id == "drafts.reviews"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_type == "reviews"][0]`)
    return result || null
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return null
  }
}

// Contact
export const fetchContact = async (): Promise<SanityContact | null> => {
  try {
    let result = await sanityClient.fetch(`*[_id == "contact"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_id == "drafts.contact"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_type == "contact"][0]`)
    return result || null
  } catch (error) {
    console.error('Error fetching contact:', error)
    return null
  }
}

// Footer
export const fetchFooter = async (): Promise<SanityFooter | null> => {
  try {
    let result = await sanityClient.fetch(`*[_id == "footer"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_id == "drafts.footer"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_type == "footer"][0]`)
    return result || null
  } catch (error) {
    console.error('Error fetching footer:', error)
    return null
  }
}

// Translations
export const fetchTranslations = async (): Promise<SanityTranslations | null> => {
  try {
    let result = await sanityClient.fetch(`*[_id == "translations"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_id == "drafts.translations"][0]`)
    if (result) return result
    result = await sanityClient.fetch(`*[_type == "translations"][0]`)
    return result || null
  } catch (error) {
    console.error('Error fetching translations:', error)
    return null
  }
}

// Test function to check what documents exist
export const debugDocuments = async () => {
  const singletons = ['siteSettings', 'hero', 'gallery', 'reviews', 'contact', 'footer', 'translations']
  console.log('🔍 Checking for singleton documents...')
  
  for (const singleton of singletons) {
    // Check published version
    let docs = await sanityClient.fetch(`*[_id == $id]`, { id: singleton })
    if (docs.length === 0) {
      // Check draft version
      docs = await sanityClient.fetch(`*[_id == $id]`, { id: `drafts.${singleton}` })
    }
    console.log(`  ${singleton}: ${docs.length > 0 ? '✅' : '❌'}`, docs.length > 0 ? docs[0]._id : 'not found')
  }
  
  // Also check by type
  console.log('\n📋 Checking by type:')
  const types = ['siteSettings', 'hero', 'gallery', 'reviews', 'contact', 'footer', 'translations']
  for (const type of types) {
    const docs = await sanityClient.fetch(`*[_type == $type]`, { type })
    console.log(`  _type == "${type}": ${docs.length} documents`)
    if (docs.length > 0) {
      console.log(`    First ID: ${docs[0]._id}`)
    }
  }
}

// Fetch all data at once - COMPLETELY REWRITTEN
export const fetchAllSiteData = async () => {
  try {
    console.log('🔍 Fetching all data from Sanity...')
    
    // Fetch documents one by one
    const siteSettings = await sanityClient.fetch(`*[_type == "siteSettings"][0]`)
    console.log('siteSettings:', siteSettings)
    
    const hero = await sanityClient.fetch(`*[_type == "hero"][0]`)
    console.log('hero:', hero)
    
    const gallery = await sanityClient.fetch(`*[_type == "gallery"][0]`)
    console.log('gallery:', gallery)
    
    const news = await sanityClient.fetch(`*[_type == "news" && published == true] | order(publishedAt desc)[0...6]`)
    console.log('news:', news)
    
    const reviews = await sanityClient.fetch(`*[_type == "reviews"][0]`)
    console.log('reviews:', reviews)
    
    const contact = await sanityClient.fetch(`*[_type == "contact"][0]`)
    console.log('contact:', contact)
    
    const footer = await sanityClient.fetch(`*[_type == "footer"][0]`)
    console.log('footer:', footer)
    
    const translations = await sanityClient.fetch(`*[_type == "translations"][0]`)
    console.log('translations:', translations)

    // Fetch menu categories
    const foodMenuCategories = await sanityClient.fetch(`*[_type == "menuCategory" && menuType == "food"] | order(_createdAt asc)`)
    console.log('foodMenuCategories:', foodMenuCategories)
    
    const drinksMenuCategories = await sanityClient.fetch(`*[_type == "menuCategory" && menuType == "drinks"] | order(_createdAt asc)`)
    console.log('drinksMenuCategories:', drinksMenuCategories)

    // Fetch items for each category
    const foodMenu = await Promise.all(
      (foodMenuCategories || []).map(async (cat: any) => {
        if (!cat.items || cat.items.length === 0) {
          return { ...cat, items: [] }
        }
        const itemIds = cat.items.map((item: any) => item._ref)
        const items = await sanityClient.fetch(
          `*[_type == "menuItem" && _id in $ids]`,
          { ids: itemIds }
        )
        return { ...cat, items }
      })
    )

    const drinksMenu = await Promise.all(
      (drinksMenuCategories || []).map(async (cat: any) => {
        if (!cat.items || cat.items.length === 0) {
          return { ...cat, items: [] }
        }
        const itemIds = cat.items.map((item: any) => item._ref)
        const items = await sanityClient.fetch(
          `*[_type == "menuItem" && _id in $ids]`,
          { ids: itemIds }
        )
        return { ...cat, items }
      })
    )

    const result = {
      siteSettings,
      hero,
      foodMenu,
      drinksMenu,
      gallery,
      news,
      reviews,
      contact,
      footer,
      translations
    }

    console.log('✅ Data fetched successfully:', {
      siteSettings: !!siteSettings,
      hero: !!hero,
      foodMenu: foodMenu?.length || 0,
      drinksMenu: drinksMenu?.length || 0,
      gallery: !!gallery,
      news: news?.length || 0,
      reviews: !!reviews,
      contact: !!contact,
      footer: !!footer,
    })

    return result
  } catch (error) {
    console.error('❌ Error fetching all site data:', error)
    throw error
  }
}