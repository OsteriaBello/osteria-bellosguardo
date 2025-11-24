import { createClient } from '@sanity/client'

// Create the Sanity client
const sanityClient = createClient({
  projectId: 'jjup9d37',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_AUTH_TOKEN, // Set this env variable
})

async function createSingletons() {
  const singletons = [
    {
      _id: 'siteSettings',
      _type: 'siteSettings',
      restaurantNamePt: 'Osteria Bello Sguardo',
      restaurantNameEn: 'Osteria Bello Sguardo',
      descriptionPt: 'Uma experiência autêntica italiana',
      descriptionEn: 'An authentic Italian experience',
    },
    {
      _id: 'hero',
      _type: 'hero',
      subtitlePt: 'Bem-vindo',
      subtitleEn: 'Welcome',
      descriptionPt: 'Autêntica culinária italiana',
      descriptionEn: 'Authentic Italian cuisine',
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
      roomDescriptionPt: 'Ambientes aconchegantes',
      roomDescriptionEn: 'Cozy environments',
    },
    {
      _id: 'reviews',
      _type: 'reviews',
      titlePt: 'Avaliações',
      titleEn: 'Reviews',
      subtitlePt: 'O que nossos clientes dizem',
      subtitleEn: 'What our guests say',
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
      contactTitlePt: 'Contato',
      contactTitleEn: 'Contact',
      phone: '+55 11 1234-5678',
      email: 'info@osteria.com',
      address: {
        street: 'Rua Example',
        neighborhood: 'Bairro',
        city: 'São Paulo',
        country: 'Brazil',
      },
    },
    {
      _id: 'footer',
      _type: 'footer',
      experiencePt: 'Uma experiência única',
      experienceEn: 'A unique experience',
      quickLinksTitlePt: 'Links Rápidos',
      quickLinksTitleEn: 'Quick Links',
      contactTitlePt: 'Contato',
      contactTitleEn: 'Contact',
      followUsTitlePt: 'Nos Siga',
      followUsTitleEn: 'Follow Us',
      rightsTextPt: 'Todos os direitos reservados',
      rightsTextEn: 'All rights reserved',
    },
    {
      _id: 'translations',
      _type: 'translations',
      home: {
        pt: 'Home',
        en: 'Home',
      },
      menu: {
        pt: 'Menu',
        en: 'Menu',
      },
      gallery: {
        pt: 'Galeria',
        en: 'Gallery',
      },
      about: {
        pt: 'Sobre',
        en: 'About',
      },
      contact: {
        pt: 'Contato',
        en: 'Contact',
      },
    },
  ]

  try {
    console.log('🚀 Creating singleton documents...')

    for (const doc of singletons) {
      try {
        await sanityClient.createOrReplace(doc)
        console.log(`✅ Created: ${doc._id}`)
      } catch (error) {
        console.error(`❌ Error creating ${doc._id}:`, error)
      }
    }

    console.log('✨ All singletons created successfully!')
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

createSingletons()
