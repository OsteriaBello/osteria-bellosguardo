import { createClient } from '@sanity/client'

// This script creates all singleton documents with sample data
// Set SANITY_AUTH_TOKEN environment variable first

const token = process.env.SANITY_AUTH_TOKEN

if (!token) {
  console.error('❌ SANITY_AUTH_TOKEN not set')
  console.log('\nTo get your token:')
  console.log('1. Go to: https://manage.sanity.io/projects/jjup9d37/settings/api')
  console.log('2. Create a new token with Editor permissions')
  console.log('3. Set: $env:SANITY_AUTH_TOKEN="your_token_here"')
  console.log('4. Then run this script again')
  process.exit(1)
}

const client = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
})

async function createDocuments() {
  console.log('🚀 Creating singleton documents...\n')

  const documents = [
    {
      _id: 'siteSettings',
      _type: 'siteSettings',
      restaurantName: 'Osteria Bellosguardo',
      seo: {
        metaTitlePt: 'Osteria Bellosguardo - Autêntica Culinária Italiana',
        metaTitleEn: 'Osteria Bellosguardo - Authentic Italian Cuisine',
        metaDescriptionPt: 'Uma experiência autêntica italiana em Lisboa',
        metaDescriptionEn: 'An authentic Italian experience in Lisbon',
      },
    },
    {
      _id: 'hero',
      _type: 'hero',
      subtitlePt: 'Bem-vindo à Osteria Bellosguardo',
      subtitleEn: 'Welcome to Osteria Bellosguardo',
      descriptionPt: 'Uma experiência autêntica italiana',
      descriptionEn: 'An authentic Italian experience',
      ctaTextPt: 'Reservar',
      ctaTextEn: 'Book Now',
    },
    {
      _id: 'gallery',
      _type: 'gallery',
      titlePt: 'Galeria',
      titleEn: 'Gallery',
      roomSectionTitlePt: 'Nossos Espaços',
      roomSectionTitleEn: 'Our Spaces',
    },
    {
      _id: 'reviews',
      _type: 'reviews',
      tripadvisor: {
        labelPt: 'Muito Bom',
        labelEn: 'Excellent',
      },
    },
    {
      _id: 'contact',
      _type: 'contact',
      reservationsTitlePt: 'Reservas',
      reservationsTitleEn: 'Reservations',
      hoursTitlePt: 'Horários',
      hoursTitleEn: 'Hours',
      weekdaysHoursPt: 'Seg-Sex: 11:00 - 22:00',
      weekdaysHoursEn: 'Mon-Fri: 11:00 AM - 10:00 PM',
      weekendHoursPt: 'Sab-Dom: 12:00 - 23:00',
      weekendHoursEn: 'Sat-Sun: 12:00 PM - 11:00 PM',
      phone: '+351 21 123 4567',
      email: 'info@osteriabellosguardo.pt',
    },
    {
      _id: 'footer',
      _type: 'footer',
      experiencePt: 'Uma experiência única',
      experienceEn: 'A unique experience',
      quickLinksTitlePt: 'Links Rápidos',
      quickLinksTitleEn: 'Quick Links',
    },
    {
      _id: 'translations',
      _type: 'translations',
      nav: {
        menuPt: 'Menu',
        menuEn: 'Menu',
        newsPt: 'Notícias',
        newsEn: 'News',
        galleryPt: 'Galeria',
        galleryEn: 'Gallery',
        reservationsPt: 'Reservas',
        reservationsEn: 'Reservations',
      },
    },
  ]

  try {
    for (const doc of documents) {
      await client.createOrReplace(doc)
      console.log(`✅ Created: ${doc._id}`)
    }
    console.log('\n✨ All documents created successfully!')
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

createDocuments()
