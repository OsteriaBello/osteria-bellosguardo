import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'jjup9d37'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

// Use a read-only token if available (optional, for private projects)
// Get token from: https://manage.sanity.io/projects/jjup9d37/settings/api
const token = import.meta.env.VITE_SANITY_TOKEN

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: false, // Use live API for real-time data
  apiVersion: '2024-01-01',
  token, // Include token for private projects (read-only is fine)
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