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

// Menu Categories with Items
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
    "items": items[]->{
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
  }`
  return sanityClient.fetch(query, { menuType })
}

// Gallery
export const fetchGallery = async (): Promise<SanityGallery | null> => {
  const query = `*[_type == "gallery"][0]`
  return sanityClient.fetch(query)
}

// News
export const fetchNews = async (limit = 6): Promise<SanityNews[]> => {
  const query = `*[_type == "news" && published == true] | order(publishedAt desc)[0...$limit]`
  return sanityClient.fetch(query, { limit: limit - 1 })
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

// Fetch all data at once
export const fetchAllSiteData = async () => {
  const query = `{
    "siteSettings": *[_type == "siteSettings"][0],
    "hero": *[_type == "hero"][0],
    "foodMenu": *[_type == "menuCategory" && menuType == "food"] | order(_createdAt asc) {
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
      "items": items[]->{
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
    },
    "drinksMenu": *[_type == "menuCategory" && menuType == "drinks"] | order(_createdAt asc) {
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
      "items": items[]->{
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
    },
    "gallery": *[_type == "gallery"][0],
    "news": *[_type == "news" && published == true] | order(publishedAt desc)[0...6],
    "reviews": *[_type == "reviews"][0],
    "contact": *[_type == "contact"][0],
    "footer": *[_type == "footer"][0],
    "translations": *[_type == "translations"][0]
  }`
  return sanityClient.fetch(query)
}