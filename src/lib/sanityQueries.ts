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
    
    return transformed
  } catch (error) {
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
    return null
  }
}

// News - fetch from newsAndEvents section with EXACT ordering preserved
export const fetchNews = async (limit = 6): Promise<SanityNews[]> => {
  try {
    // Fetch from the newsAndEvents section preserving the exact order
    const result = await sanityClient.fetch(`
      *[_id == "newsAndEvents"][0] {
        items[0..100]-> {
          _id,
          titlePt,
          titleEn,
          contentPt,
          contentEn,
          type,
          image,
          imageUrl,
          eventDate,
          published,
          publishedAt,
          _createdAt
        }
      }
    `)
    
    if (result?.items && Array.isArray(result.items)) {
      // Filter only published items, maintain order, then limit
      const filtered = result.items
        .filter((item: any) => item && item.published === true)
        .slice(0, limit)
      
      return filtered || []
    }
    
    return []
  } catch (error) {
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
    return null
  }
}

// Test function to check what documents exist
export const debugDocuments = async () => {
  const singletons = ['siteSettings', 'hero', 'gallery', 'reviews', 'contact', 'footer', 'translations']
  
  for (const singleton of singletons) {
    // Check published version
    let docs = await sanityClient.fetch(`*[_id == $id]`, { id: singleton })
    if (docs.length === 0) {
      // Check draft version
      docs = await sanityClient.fetch(`*[_id == $id]`, { id: `drafts.${singleton}` })
    }
  }
  
  // Also check by type
  const types = ['siteSettings', 'hero', 'gallery', 'reviews', 'contact', 'footer', 'translations']
  for (const type of types) {
    await sanityClient.fetch(`*[_type == $type]`, { type })
  }
}

// Fetch all data at once - COMPLETELY REWRITTEN
export const fetchAllSiteData = async () => {
  try {
    // Fetch independent documents in parallel
    const [siteSettings, hero, gallery, reviews, contact, footer, translations, foodMenuCategories, drinksMenuCategories] = await Promise.all([
      sanityClient.fetch(`*[_type == "siteSettings"][0]`),
      sanityClient.fetch(`*[_type == "hero"][0]`),
      sanityClient.fetch(`*[_type == "gallery"][0]`),
      sanityClient.fetch(`*[_type == "reviews"][0]`),
      sanityClient.fetch(`*[_type == "contact"][0]`),
      sanityClient.fetch(`*[_type == "footer"][0]`),
      sanityClient.fetch(`*[_type == "translations"][0]`),
      sanityClient.fetch(`*[_type == "menuCategory" && menuType == "food"] | order(_createdAt asc)`),
      sanityClient.fetch(`*[_type == "menuCategory" && menuType == "drinks"] | order(_createdAt asc)`),
    ])

    // Helper function to preserve order when fetching items
    const fetchItemsPreservingOrder = async (itemRefs: any[]) => {
      if (!itemRefs || itemRefs.length === 0) {
        return []
      }
      const itemIds = itemRefs.map((item: any) => item._ref)
      const items = await sanityClient.fetch(
        `*[_type == "menuItem" && _id in $ids]`,
        { ids: itemIds }
      )
      
      // Reorder items to match the original order from the category
      return itemIds.map((id: string) => items.find((item: any) => item._id === id)).filter(Boolean)
    }

    // Fetch news separately and in parallel with menu items
    const [news, foodMenu, drinksMenu] = await Promise.all([
      fetchNews(6),
      Promise.all(
        (foodMenuCategories || []).map(async (cat: any) => {
          const items = await fetchItemsPreservingOrder(cat.items)
          return { ...cat, items }
        })
      ),
      Promise.all(
        (drinksMenuCategories || []).map(async (cat: any) => {
          const items = await fetchItemsPreservingOrder(cat.items)
          return { ...cat, items }
        })
      ),
    ])

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

    return result
  } catch (error) {
    throw error
  }
}