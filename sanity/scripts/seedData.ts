// Run this script with: npx sanity exec scripts/seedData.ts --with-user-token
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

// Helper function to create documents
async function createOrReplace(doc: any) {
  return client.createOrReplace(doc)
}

async function seedData() {
  console.log('🌱 Starting data seed...')

  // 1. Site Settings
  console.log('📝 Creating Site Settings...')
  await createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    restaurantName: 'Osteria Bellosguardo',
    logoUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPYZhyzK5EO0teY43-eSI_nPBe2p4Jr457jUwTRPDIglZrJar4dKqSGPXVVlyk-upBTWgxbbCe5HDJG4aNcRXIsJdEmkHsthbq6xGpWhVypGy1iSNQwwQhjqZrN-F7MAf9EoAgv5s5McEEp26313Ung=w200-h220-s-no-gm',
    whatsappNumber: '351915316420',
    reservationLink: 'https://widget.thefork.com/fr/da7ca922-58dd-4ab3-94b6-1bb5548434d7',
    seo: {
      metaTitlePt: 'Osteria Bellosguardo - Restaurante Italiano em Lisboa',
      metaTitleEn: 'Osteria Bellosguardo - Italian Restaurant in Lisbon',
      metaDescriptionPt: 'Autêntica cozinha italiana no coração de Lisboa. Massas frescas, pizzas artesanais e vinhos selecionados.',
      metaDescriptionEn: 'Authentic Italian cuisine in the heart of Lisbon. Fresh pasta, artisan pizzas and selected wines.',
    },
  })

  // 2. Hero Section
  console.log('🦸 Creating Hero Section...')
  await createOrReplace({
    _id: 'hero',
    _type: 'hero',
    backgroundImages: [
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPb8Q9WYNM4FGojGbG1lSB9Ra1InD9ecowooSWlRQO5SRueLzQqHQV29lpRKdP1jr7_pxgnCoXhoXNYMmkTT_5ey94hClphqIzaCV2ciwnvQT8mOKw3Ki8cY3nknsE19VQk-DIOKQCS-I-ePxbvVgQ_=w2720-h2040-s-no-gm', alt: 'Restaurant interior', position: 'center' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMPvkIXtv5YXMZ0ant42ppOp-f0hHwt4jEUIJ6aiJK8BGgA6w_-zS-duS6MGAlEcL9tXX_QwKEeTdW5cEdeE5L0Wxv9zN9H4Kbl6_N0SXGcecyuoGU9RXTlGcqRrnaD-UMCsR4cHu-QtV-PctY00aJ3=w1574-h1178-s-no-gm', alt: 'Food preparation', position: '35% center' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMBdhsB_BXE17bWK7vKfPXrMWJkoFQYogFooTx0H9Y1JebcHazI3FYhb35SBmUtomAwaU2PjwUYIpeW1qgLEg70K28y2a1df9Sp1XF5Vjnm6qF2w91euUGx-iHVHgPahgNhrOOwF3Cgzkmyr4e1kLIc=w1239-h842-s-no-gm', alt: 'Dishes', position: 'center' },
    ],
    subtitlePt: 'A Verdadeira Cozinha Italiana',
    subtitleEn: 'True Italian Cuisine',
    descriptionPt: 'Uma experiência gastronómica autêntica no coração de Lisboa, onde cada prato conta uma história de tradição e paixão.',
    descriptionEn: 'An authentic gastronomic experience in the heart of Lisbon, where every dish tells a story of tradition and passion.',
    ctaTextPt: 'Reservar Mesa',
    ctaTextEn: 'Book a Table',
    tripAdvisorBadge: {
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPYZhyzK5EO0teY43-eSI_nPBe2p4Jr457jUwTRPDIglZrJar4dKqSGPXVVlyk-upBTWgxbbCe5HDJG4aNcRXIsJdEmkHsthbq6xGpWhVypGy1iSNQwwQhjqZrN-F7MAf9EoAgv5s5McEEp26313Ung=w200-h220-s-no-gm',
      link: 'https://www.tripadvisor.co.uk/Restaurant_Review-g189158-d25175771-Reviews-Osteria_Bellosguardo-Lisbon_Lisbon_District_Central_Portugal.html',
    },
  })

  // 3. Gallery
  console.log('🖼️ Creating Gallery...')
  await createOrReplace({
    _id: 'gallery',
    _type: 'gallery',
    titlePt: 'Galeria',
    titleEn: 'Gallery',
    images: [
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNmQkOwIGIYuPUK4Ruv5isaq2ir8HmbU1nDFlIYZZuPtnpDeGIzYG7eKPBKZCDnMxWJCFS1cAIgE9zAwhCgGFSN767yUeajr1O0GBDIUo0AyBZmdLh6DEbZl1X71rXY4zlS5G37xIk71dPyXBQmCWk9=w630-h840-s-no-gm', altPt: 'Cozinha Italiana', altEn: 'Italian Cuisine' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMWiXhmYdWpTcrS51EtelHyCQM6D0Cae_rVFXJ8auK-LPC1XKz7eC5VbI4trv6pujJOpcha5LFUm4fXGqycgq50CQVWuci6qsQeT2ZjYENMvaAFD2eE5Zb-0D11igUanZ-IAAnL2aV9LvFKfsNkLljI=w732-h977-s-no-gm', altPt: 'Interior do Restaurante', altEn: 'Restaurant Interior' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczP_3f2Hbum1jdPf3GFzTmWlzlJn0MZ0sKR8QhV09b4bSGr-SUjcmjlRK_IkSd2_hNVhwLO6IbQod6BZql1KYp__GgSZaUk4iJFU2pguQEb7bh0BBNWV1ONcD6iGgRIR15-pfiugnkkvcGVFLCrNTpuU=w731-h859-s-no-gm', altPt: 'Ambiente Acolhedor', altEn: 'Cozy Atmosphere' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczN4xKdor5G2ZRP03JSI1_1Yv4jsAThKEcHI0hKqzcc_AzZ1OEcez07qXttnY214kHNjmvDLxh7GwhZngp9SPklYdL78rSRN72_wJLnXM9tlRgmUAzU3ncLpoC9LgDozkrSvCf3nyPsjTtDublRBD-M7=w615-h820-s-no-gm', altPt: 'Seleção de Vinhos', altEn: 'Wine Selection' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNCSv0wafBos1hd-KbyEwUB_Sbg4-nf0ljiHQRyDstxV5h2ZbWvx7o5oXulL_WN4M4_hHAKGJFN-G4HLJosVDTM-hrkvdxZS8wt72WBs09p8i_KtJJOliOiF_2j3sU73Kwp9t7GFjUj_tQR09omI92C=w588-h784-s-no-gm', altPt: 'Terraço', altEn: 'Terrace' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPhN1jIHDQdKkfrZuoaijVHW3CNBqDZhfTAhG-Doa0nuVdo88FCMDByc7tvEnk6-XqagX8R-NWzwXWINMIlNBKYCPzYJfsFSMAkiIZ81HiQ__zky9OouyHnkgx_zExx92HzKvDLLvK8wiOwzqnNIZE2=w710-h947-s-no-gm', altPt: 'Massa Fresca', altEn: 'Fresh Pasta' },
    ],
    carouselImages: [
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNNsaBV-z7RaLrfHlJOCFyqC4GfielSY9LJN-4D8AQ04hB_moBPktGeFuVP5jwvg-sV5qJmhZ9VLpO98b6auS1ElOVGQEkOgvHcUNLAfpPCoDipGIh2R3p46oQaf7zLcW2tC3EZ63NLJAzXhu_mHTwc=w1800-h1790-s-no-gm', alt: 'Osteria Bellosguardo entrance' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMPtdoHvHiIlgBDh388ZAyKvfXTYLqTmZ80tiXeBVp8M4CYcj2gjA2WRjOfXiVeiGHQ1WQAtB_U2eOrTEYf_nekbOQzVMgZ_dz8UjBNoZC0S2CscQNev3Wq4Strz33bJEPURHwwq6iGqOnNVDv-E7WW=w1706-h1704-s-no-gm', alt: 'Interior view' },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPlhNURHnybagdq_SCNbeQLhiEJ91y6h6fswAQfJhqqYdqzwXIJkUf2uYJ7TQ4M03wO-xrOhE70piSLQRnoiW9MZDmLija0qn94hYM0tofXDL9aJ4X9XuqcZJ2HpRBw8Tn0Ya17sCchTOZ50kpWuYwY=w1982-h1970-s-no-gm', alt: 'Cozy atmosphere' },
    ],
    roomSectionTitlePt: 'O Nosso Espaço',
    roomSectionTitleEn: 'Our Space',
    roomDescriptionPt: 'Descubra um ambiente acolhedor onde a tradição italiana encontra o charme lisboeta. O nosso espaço foi pensado para proporcionar momentos inesquecíveis.',
    roomDescriptionEn: 'Discover a cozy atmosphere where Italian tradition meets Lisbon charm. Our space was designed to provide unforgettable moments.',
  })

  // 4. Reviews
  console.log('⭐ Creating Reviews...')
  await createOrReplace({
    _id: 'reviews',
    _type: 'reviews',
    tripadvisor: {
      logoUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPz_Q0XyuzhS8aAXS2pK6sQTM07EVwNzxNz3aU594o2aaJMS36PCNH8Xjdpyxk0eZSXuTA2o7Xnc7kUptZN005-v98DUGa3EBmSR4Q96YT0Hvwh4M6wWeYYNaoW3Alp3n9q930LC9hkYZXmPgPwSOxs=w500-h500-s-no-gm',
      link: 'https://www.tripadvisor.co.uk/Restaurant_Review-g189158-d25175771-Reviews-Osteria_Bellosguardo-Lisbon_Lisbon_District_Central_Portugal.html',
      labelPt: 'Avaliação TripAdvisor',
      labelEn: 'TripAdvisor Review',
      textPt: '"Excelente comida italiana autêntica! O ambiente é acolhedor e o serviço impecável."',
      textEn: '"Excellent authentic Italian food! The atmosphere is cozy and the service is impeccable."',
    },
    thefork: {
      logoUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNR7cCs7wuQB7awJrBkfQE9EBhkL1pK5w10rf9IYC0JtkHl7TD45Yk3koA5CtrEcE4kjyNEzq0WNmLhGryXn8ZesaqqONi2iFExBzOPMIvakbEjCfjp-Vk-V6lMpmbk8DUbFq7NljSLIMeZFlDhHnAI=w388-h452-s-no-gm',
      link: 'https://www.thefork.com/restaurant/osteria-bellosguardo-r750229',
      labelPt: 'Avaliação TheFork',
      labelEn: 'TheFork Review',
      textPt: '"Uma verdadeira joia escondida em Lisboa. A pasta fresca é de morrer!"',
      textEn: '"A true hidden gem in Lisbon. The fresh pasta is to die for!"',
    },
  })

  // 5. Contact
  console.log('📞 Creating Contact...')
  await createOrReplace({
    _id: 'contact',
    _type: 'contact',
    reservationsTitlePt: 'Reservas',
    reservationsTitleEn: 'Reservations',
    hoursTitlePt: 'Horário de Funcionamento',
    hoursTitleEn: 'Opening Hours',
    weekdaysHoursPt: 'Terça a Sexta: 12h00 - 15h00, 19h00 - 23h00',
    weekdaysHoursEn: 'Tuesday to Friday: 12:00 - 15:00, 19:00 - 23:00',
    weekendHoursPt: 'Sábado e Domingo: 12h00 - 23h00',
    weekendHoursEn: 'Saturday and Sunday: 12:00 - 23:00',
    contactTitlePt: 'Contacto',
    contactTitleEn: 'Contact',
    address: {
      street: 'R. de São Pedro de Alcântara 65',
      neighborhood: 'Bairro Alto',
      city: 'Lisboa',
      country: 'Portugal',
    },
    phone: '+351 915 316 420',
    email: 'osteria.bellosguardo@gmail.com',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5661010543584!2d-9.133752923848611!3d38.71147997176917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1934825d70e049%3A0x48b97da9a1bdb616!2sR.%20do%20Castelo%20Pica%C3%B5%2011%2013%2C%201100-125%20Lisboa%2C%20Portugal!5e0!3m2!1sen!2spt!4v1710845655447!5m2!1sen!2spt',
    contactImageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMLMwhCeA2gj1qWlim-NFHjZS4JfxvPormv8rDcCwNQaK3iU8sBbrNRrcvaeiyfAVDKQZTTQDFnBXu96n0sMH8WYwtUhh-LEQ4V8-2jx4T_VblWyDJ0S6jolT0mZX5KgXAhaKf35xc2jXmZ6z-LrzZA=w2132-h1402-s-no-gm',
    howToReachPt: 'Como Chegar',
    howToReachEn: 'How to Reach Us',
    talkToUsPt: 'Fale Connosco',
    talkToUsEn: 'Talk to Us',
  })

  // 6. Footer
  console.log('🦶 Creating Footer...')
  await createOrReplace({
    _id: 'footer',
    _type: 'footer',
    experiencePt: 'Uma experiência gastronómica italiana autêntica no coração de Lisboa.',
    experienceEn: 'An authentic Italian gastronomic experience in the heart of Lisbon.',
    quickLinksTitlePt: 'Links Rápidos',
    quickLinksTitleEn: 'Quick Links',
    contactTitlePt: 'Contacto',
    contactTitleEn: 'Contact',
    followUsTitlePt: 'Siga-nos',
    followUsTitleEn: 'Follow Us',
    socialLinks: [
      { platform: 'facebook', url: 'https://www.facebook.com/p/Osteria-Bellosguardo-100086469573106/', label: 'Facebook' },
      { platform: 'instagram', url: 'https://www.instagram.com/osteria.bellosguardo/', label: 'Instagram' },
      { platform: 'tripadvisor', url: 'https://www.tripadvisor.co.uk/Restaurant_Review-g189158-d25175771-Reviews-Osteria_Bellosguardo-Lisbon_Lisbon_District_Central_Portugal.html', iconUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPz_Q0XyuzhS8aAXS2pK6sQTM07EVwNzxNz3aU594o2aaJMS36PCNH8Xjdpyxk0eZSXuTA2o7Xnc7kUptZN005-v98DUGa3EBmSR4Q96YT0Hvwh4M6wWeYYNaoW3Alp3n9q930LC9hkYZXmPgPwSOxs=w500-h500-s-no-gm', label: 'TripAdvisor' },
      { platform: 'thefork', url: 'https://www.thefork.com/restaurant/osteria-bellosguardo-r750229', iconUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNR7cCs7wuQB7awJrBkfQE9EBhkL1pK5w10rf9IYC0JtkHl7TD45Yk3koA5CtrEcE4kjyNEzq0WNmLhGryXn8ZesaqqONi2iFExBzOPMIvakbEjCfjp-Vk-V6lMpmbk8DUbFq7NljSLIMeZFlDhHnAI=w388-h452-s-no-gm', label: 'TheFork' },
      { platform: 'restaurantguru', url: 'https://pt.restaurantguru.com/Osteria-Bellosguardo-Lisbon', label: 'Restaurant Guru' },
    ],
    complaintsLinkPt: 'Livro de Reclamações',
    complaintsLinkEn: 'Complaints Book',
    complaintsUrl: 'https://www.livroreclamacoes.pt/Utilizador/AutenticacaoOperador',
    rightsTextPt: 'Todos os direitos reservados.',
    rightsTextEn: 'All rights reserved.',
    createdBy: { text: 'Created with', url: 'https://www.vasseo.com/' },
  })

  console.log('✅ Base data seeded successfully!')
  console.log('📋 Now seeding menu data...')

  // Continue in next part for menu items...
}

seedData().catch(console.error)