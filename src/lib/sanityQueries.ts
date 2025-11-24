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

// Site Settings
export const fetchSiteSettings = async (): Promise<SanitySiteSettings | null> => {
  const query = `*[_type == "siteSettings"][0]`
  return sanityClient.fetch(query)
}

// Hero Section
export const fetchHero = async (): Promise<SanityHero | null> => {
  const query = `*[_type == "hero"][0]`
  return sanityClient.fetch(query)
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
  const query = `*[_type == "gallery"][0]`
  return sanityClient.fetch(query)
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
  const query = `*[_type == "reviews"][0]`
  return sanityClient.fetch(query)
}

// Contact
export const fetchContact = async (): Promise<SanityContact | null> => {
  const query = `*[_type == "contact"][0]`
  return sanityClient.fetch(query)
}

// Footer
export const fetchFooter = async (): Promise<SanityFooter | null> => {
  const query = `*[_type == "footer"][0]`
  return sanityClient.fetch(query)
}

// Translations
export const fetchTranslations = async (): Promise<SanityTranslations | null> => {
  const query = `*[_type == "translations"][0]`
  return sanityClient.fetch(query)
}

// Fetch all data at once - COMPLETELY REWRITTEN
export const fetchAllSiteData = async () => {
  try {
    console.log('🔍 Fetching all data from Sanity...')
    
    // Fetch everything separately to avoid complex GROQ
    const [
      siteSettings,
      hero,
      foodMenuRaw,
      drinksMenuRaw,
      gallery,
      news,
      reviews,
      contact,
      footer,
      translations
    ] = await Promise.all([
      sanityClient.fetch(`*[_type == "siteSettings"][0]`),
      sanityClient.fetch(`*[_type == "hero"][0]`),
      sanityClient.fetch(`*[_type == "menuCategory" && menuType == "food"] | order(_createdAt asc)`),
      sanityClient.fetch(`*[_type == "menuCategory" && menuType == "drinks"] | order(_createdAt asc)`),
      sanityClient.fetch(`*[_type == "gallery"][0]`),
      sanityClient.fetch(`*[_type == "news" && published == true] | order(publishedAt desc)[0...6]`),
      sanityClient.fetch(`*[_type == "reviews"][0]`),
      sanityClient.fetch(`*[_type == "contact"][0]`),
      sanityClient.fetch(`*[_type == "footer"][0]`),
      sanityClient.fetch(`*[_type == "translations"][0]`)
    ])

    // Now fetch items for each menu category
    const fetchItemsForCategories = async (categories: any[]) => {
      const categoriesWithItems = await Promise.all(
        categories.map(async (cat) => {
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
      return categoriesWithItems
    }

    const foodMenu = await fetchItemsForCategories(foodMenuRaw || [])
    const drinksMenu = await fetchItemsForCategories(drinksMenuRaw || [])

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
      foodMenu: foodMenu?.length || 0,
      drinksMenu: drinksMenu?.length || 0,
      news: news?.length || 0,
      hasHero: !!hero,
      hasGallery: !!gallery,
    })

    return result
  } catch (error) {
    console.error('❌ Error fetching all site data:', error)
    throw error
  }
}