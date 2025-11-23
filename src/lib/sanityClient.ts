import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'jjup9d37',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // Use CDN for production
  apiVersion: '2024-01-01',
  perspective: 'published', // Only fetch published documents
  stega: {
    enabled: false,
    studioUrl: '/studio'
  }
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: SanityImageSource) => builder.image(source)

// Helper to get image URL (handles both uploaded images and URL strings)
export const getImageUrl = (
  imageField?: { asset?: { _ref: string } },
  imageUrlField?: string,
  fallback?: string
): string => {
  if (imageField?.asset) {
    return urlFor(imageField).url()
  }
  if (imageUrlField) {
    return imageUrlField
  }
  return fallback || ''
}