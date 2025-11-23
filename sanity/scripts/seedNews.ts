import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function seedNews() {
  console.log('📰 Seeding News & Events...')

  const newsItems = [
    {
      _id: 'news-1',
      _type: 'news',
      titlePt: 'Inauguração da Nossa Osteria',
      titleEn: 'Opening of Our Osteria',
      contentPt: 'Estamos felizes em anunciar a inauguração da Osteria Bellosguardo! Venha celebrar connosco a autêntica cozinha italiana no coração de Lisboa.',
      contentEn: 'We are happy to announce the opening of Osteria Bellosguardo! Come celebrate with us authentic Italian cuisine in the heart of Lisbon.',
      type: 'news',
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczNNsaBV-z7RaLrfHlJOCFyqC4GfielSY9LJN-4D8AQ04hB_moBPktGeFuVP5jwvg-sV5qJmhZ9VLpO98b6auS1ElOVGQEkOgvHcUNLAfpPCoDipGIh2R3p46oQaf7zLcW2tC3EZ63NLJAzXhu_mHTwc=w1800-h1790-s-no-gm',
      published: true,
      publishedAt: new Date('2024-01-15').toISOString(),
    },
    {
      _id: 'news-2',
      _type: 'news',
      titlePt: 'Novo Menu de Verão',
      titleEn: 'New Summer Menu',
      contentPt: 'Descubra os nossos novos pratos de verão! Ingredientes frescos e receitas tradicionais italianas para os dias mais quentes.',
      contentEn: 'Discover our new summer dishes! Fresh ingredients and traditional Italian recipes for the warmer days.',
      type: 'announcement',
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMBdhsB_BXE17bWK7vKfPXrMWJkoFQYogFooTx0H9Y1JebcHazI3FYhb35SBmUtomAwaU2PjwUYIpeW1qgLEg70K28y2a1df9Sp1XF5Vjnm6qF2w91euUGx-iHVHgPahgNhrOOwF3Cgzkmyr4e1kLIc=w1239-h842-s-no-gm',
      published: true,
      publishedAt: new Date('2024-06-01').toISOString(),
    },
    {
      _id: 'news-3',
      _type: 'news',
      titlePt: 'Noite de Vinhos Italianos',
      titleEn: 'Italian Wines Night',
      contentPt: 'Junte-se a nós para uma noite especial de degustação de vinhos italianos. Vinhos selecionados das melhores regiões da Itália.',
      contentEn: 'Join us for a special Italian wine tasting evening. Selected wines from the best regions of Italy.',
      type: 'event',
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczN4xKdor5G2ZRP03JSI1_1Yv4jsAThKEcHI0hKqzcc_AzZ1OEcez07qXttnY214kHNjmvDLxh7GwhZngp9SPklYdL78rSRN72_wJLnXM9tlRgmUAzU3ncLpoC9LgDozkrSvCf3nyPsjTtDublRBD-M7=w615-h820-s-no-gm',
      eventDate: new Date('2024-12-15T19:00:00').toISOString(),
      published: true,
      publishedAt: new Date('2024-11-01').toISOString(),
    },
    {
      _id: 'news-4',
      _type: 'news',
      titlePt: 'Massas Frescas Artesanais',
      titleEn: 'Fresh Artisan Pasta',
      contentPt: 'Todas as nossas massas são feitas à mão diariamente. Experimente a diferença da verdadeira pasta italiana.',
      contentEn: 'All our pasta is handmade daily. Experience the difference of real Italian pasta.',
      type: 'announcement',
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPhN1jIHDQdKkfrZuoaijVHW3CNBqDZhfTAhG-Doa0nuVdo88FCMDByc7tvEnk6-XqagX8R-NWzwXWINMIlNBKYCPzYJfsFSMAkiIZ81HiQ__zky9OouyHnkgx_zExx92HzKvDLLvK8wiOwzqnNIZE2=w710-h947-s-no-gm',
      published: true,
      publishedAt: new Date('2024-03-10').toISOString(),
    },
    {
      _id: 'news-5',
      _type: 'news',
      titlePt: 'Certificado de Excelência TripAdvisor',
      titleEn: 'TripAdvisor Certificate of Excellence',
      contentPt: 'Orgulhosamente recebemos o Certificado de Excelência do TripAdvisor! Obrigado a todos os nossos clientes.',
      contentEn: 'Proudly received the TripAdvisor Certificate of Excellence! Thank you to all our customers.',
      type: 'news',
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczMPtdoHvHiIlgBDh388ZAyKvfXTYLqTmZ80tiXeBVp8M4CYcj2gjA2WRjOfXiVeiGHQ1WQAtB_U2eOrTEYf_nekbOQzVMgZ_dz8UjBNoZC0S2CscQNev3Wq4Strz33bJEPURHwwq6iGqOnNVDv-E7WW=w1706-h1704-s-no-gm',
      published: true,
      publishedAt: new Date('2024-09-20').toISOString(),
    },
    {
      _id: 'news-6',
      _type: 'news',
      titlePt: 'Menu Especial de Natal',
      titleEn: 'Special Christmas Menu',
      contentPt: 'Celebre o Natal connosco! Menu especial com pratos tradicionais italianos para as festas.',
      contentEn: 'Celebrate Christmas with us! Special menu with traditional Italian dishes for the holidays.',
      type: 'event',
      imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczPlhNURHnybagdq_SCNbeQLhiEJ91y6h6fswAQfJhqqYdqzwXIJkUf2uYJ7TQ4M03wO-xrOhE70piSLQRnoiW9MZDmLija0qn94hYM0tofXDL9aJ4X9XuqcZJ2HpRBw8Tn0Ya17sCchTOZ50kpWuYwY=w1982-h1970-s-no-gm',
      eventDate: new Date('2024-12-24T18:00:00').toISOString(),
      published: true,
      publishedAt: new Date('2024-11-15').toISOString(),
    },
  ]

  for (const item of newsItems) {
    await client.createOrReplace(item)
    console.log(`✅ Created: ${item.titleEn}`)
  }

  console.log('🎉 News seeded successfully!')
}

seedNews().catch(console.error)