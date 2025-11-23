// Run this script with: npx sanity exec scripts/seedMenu.ts --with-user-token
import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const createDoc = (doc: any) => client.createOrReplace(doc)
const createItem = (doc: any) => client.create(doc)

// Helper to generate unique IDs
const genId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

async function seedMenu() {
  console.log('🍕 Seeding Food Menu...')

  // FOOD MENU ITEMS
  const snackItems = [
    { nameEn: 'Parma ham slices', namePt: 'Fatias de presunto Parma', price: '€ 5.00' },
    { nameEn: 'Grana Padano DOP', namePt: 'Grana Padano DOP', price: '€ 3.00' },
    { nameEn: 'Pecorino Romano DOP', namePt: 'Pecorino Romano DOP', price: '€ 4.00' },
    { nameEn: 'Parmigiano Reggiano DOP', namePt: 'Parmigiano Reggiano DOP', price: '€ 4.00' },
    { nameEn: 'Artichokes in oil', namePt: 'Alcachofras em azeite', price: '€ 4.00' },
    { nameEn: 'Pistachios', namePt: 'Pistácios', price: '€ 2.00' },
    { nameEn: 'Sun-dried tomatoes', namePt: 'Tomates secos', price: '€ 3.00' },
    { nameEn: 'Olives', namePt: 'Azeitonas', price: '€ 2.00' },
    { nameEn: 'Toasted walnuts', namePt: 'Nozes torradas', price: '€ 2.00' },
    { nameEn: 'Chopped feta cheese', namePt: 'Queijo feta picado', price: '€ 3.00' },
    { nameEn: 'Spicy zucchini in oil', namePt: 'Courgette picante em azeite', price: '€ 3.00' },
    { nameEn: 'Bread', namePt: 'Pão', price: '€ 2.00' },
    { nameEn: 'Tarallini', namePt: 'Tarallini', price: '€ 2.00' },
    { nameEn: 'White focaccia', namePt: 'Focaccia branca', price: '€ 7.00' },
    { nameEn: 'Extra Virgin Olive Oil', namePt: 'Azeite Virgem Extra', price: '€ 2.00' },
    { nameEn: 'Spicy eggplants in oil', namePt: 'Beringelas picantes em azeite', price: '€ 3.00' },
  ]

  const bruschetteItems = [
    { nameEn: '1. Nduja and smoked provola', namePt: '1. Nduja e provola fumada', price: '€ 4.00' },
    { nameEn: '2. Cherry tomatoes and smoked provola', namePt: '2. Tomates cereja e provola fumada', price: '€ 4.00' },
    { nameEn: '3. Feta cheese and caramelized onions', namePt: '3. Queijo feta e cebolas caramelizadas', price: '€ 4.00' },
    { nameEn: '4. Stracciatella burrata and cherry tomatoes', namePt: '4. Burrata stracciatella e tomates cereja', price: '€ 4.00' },
    { nameEn: '5. Gorgonzola and caramelized onions', namePt: '5. Gorgonzola e cebolas caramelizadas', price: '€ 4.00' },
  ]

  const boardsItems = [
    { nameEn: 'Tagliere misto (Cold cuts and cheese)', namePt: 'Tagliere misto (Enchidos e queijos)', price: '€ 16.00' },
    { nameEn: 'Tagliere salumi (Cold cuts)', namePt: 'Tagliere salumi (Enchidos)', price: '€ 15.00' },
    { nameEn: 'Tagliere formaggi (Cheese)', namePt: 'Tagliere formaggi (Queijos)', price: '€ 18.00' },
  ]

  const specialtiesItems = [
    { nameEn: 'Fresh Homemade Pasta', namePt: 'Massa Fresca Caseira', price: '€ 13.50' },
    { nameEn: 'Gnocchi', namePt: 'Gnocchi', price: '€ 14.50' },
    { nameEn: 'Ravioli di Carne (Meat Ravioli)', namePt: 'Ravioli di Carne (Ravioli de Carne)', price: '€ 14.50' },
    { nameEn: 'Tortelloni Ricotta and Spinaches', namePt: 'Tortelloni Ricotta e Espinafres', price: '€ 14.50' },
    { nameEn: 'Lasagna Bolognese', namePt: 'Lasanha à Bolonhesa', price: '€ 15.50' },
    { nameEn: 'Gnocchi alla Sorrentina', namePt: 'Gnocchi alla Sorrentina', price: '€ 14.50' },
    { nameEn: 'Pumpkin Ravioli with Gorgonzola And Walnuts', namePt: 'Ravioli de Abóbora com Gorgonzola e Nozes', price: '€ 14.50' },
  ]

  const pizzaItems = [
    { nameEn: 'Margherita', namePt: 'Margherita', descEn: 'Tomato sauce, mozzarella.', descPt: 'Molho de tomate, mozzarella.', price: '€ 8.50', priceSecondary: '€ 15.00' },
    { nameEn: 'Nduja e mozzarella', namePt: 'Nduja e mozzarella', descEn: 'Tomato sauce, mozzarella, nduja.', descPt: 'Molho de tomate, mozzarella, nduja.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: 'Rucola e pomodorini', namePt: 'Rucola e pomodorini', descEn: 'Rocket salad, cherry tomatoes, mozzarella, grana padano.', descPt: 'Rúcula, tomates cereja, mozzarella, grana padano.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: 'Prosciutto e funghi', namePt: 'Prosciutto e funghi', descEn: 'Parma ham, mushrooms, tomato sauce.', descPt: 'Presunto Parma, cogumelos, molho de tomate.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: '4 formaggi', namePt: '4 formaggi', descEn: 'Gorgonzola, mozzarella, taleggio, grana padano.', descPt: 'Gorgonzola, mozzarella, taleggio, grana padano.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: 'Diavola', namePt: 'Diavola', descEn: 'Hot salami, mozzarella, tomato sauce.', descPt: 'Salame picante, mozzarella, molho de tomate.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: 'Siciliana', namePt: 'Siciliana', descEn: 'Tomato sauce, eggplants, mozzarella, grana padano.', descPt: 'Molho de tomate, beringelas, mozzarella, grana padano.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: 'Modena', namePt: 'Modena', descEn: 'Mozzarella, grana padano, coppa stagionata.', descPt: 'Mozzarella, grana padano, coppa stagionata.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: 'Capricciosa', namePt: 'Capricciosa', descEn: 'Tomato sauce, mozzarella, artichokes, olives, mushrooms, ricotta salata.', descPt: 'Molho de tomate, mozzarella, alcachofras, azeitonas, cogumelos, ricotta salata.', price: '€ 10.50', priceSecondary: '€ 17.50' },
    { nameEn: 'Salame Napoli', namePt: 'Salame Napoli', descEn: 'Tomato sauce, mozzarella, salame Napoli.', descPt: 'Molho de tomate, mozzarella, salame Napoli.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: 'Salsiccia e funghi', namePt: 'Salsiccia e funghi', descEn: 'Mozzarella, sausage, mushrooms.', descPt: 'Mozzarella, salsicha, cogumelos.', price: '€ 9.50', priceSecondary: '€ 16.50' },
    { nameEn: 'Bologna', namePt: 'Bologna', descEn: 'Mozzarella, mortadella, stracciatella di burrata, pistachios.', descPt: 'Mozzarella, mortadela, stracciatella di burrata, pistácios.', price: '€ 10.50', priceSecondary: '€ 17.50' },
  ]

  const saladItems = [
    { nameEn: 'Coppola', namePt: 'Coppola', descEn: 'Lettuce, rocket salad', descPt: 'Alface, rúcula', price: '€ 5.50' },
    { nameEn: 'De Sica', namePt: 'De Sica', descEn: 'Lettuce, rocket salad, cherry tomatoes, mozzarella di bufala Campana', descPt: 'Alface, rúcula, tomates cereja, mozzarella di bufala Campana', price: '€ 9.50' },
    { nameEn: 'Bertolucci', namePt: 'Bertolucci', descEn: 'Lettuce, rocket salad, cherry tomatoes, Burrata', descPt: 'Alface, rúcula, tomates cereja, Burrata', price: '€ 9.50' },
    { nameEn: 'Leone', namePt: 'Leone', descEn: 'Lettuce, rocket salad, cherry tomatoes', descPt: 'Alface, rúcula, tomates cereja', price: '€ 7.50' },
    { nameEn: 'Scorsese', namePt: 'Scorsese', descEn: 'Lettuce, rocket salad, cherry tomatoes, feta, onion', descPt: 'Alface, rúcula, tomates cereja, feta, cebola', price: '€ 9.50' },
    { nameEn: 'Monicelli', namePt: 'Monicelli', descEn: 'Parma ham, mozzarella', descPt: 'Presunto Parma, mozzarella', price: '€ 12.50' },
  ]

  const dessertItems = [
    { nameEn: 'Tiramisù', namePt: 'Tiramisù', price: '€ 5.00' },
    { nameEn: 'Chocolate soufflé with chocolate filling', namePt: 'Soufflé de chocolate com recheio de chocolate', price: '€ 5.00' },
    { nameEn: 'Chocolate soufflé with caramel filling', namePt: 'Soufflé de chocolate com recheio de caramelo', price: '€ 5.00' },
    { nameEn: 'Babà', namePt: 'Babà', price: '€ 5.00' },
  ]

  // Create menu items and collect their IDs
  const createMenuItems = async (items: any[], prefix: string) => {
    const ids: string[] = []
    for (const item of items) {
      const id = genId(prefix)
      await createDoc({
        _id: id,
        _type: 'menuItem',
        nameEn: item.nameEn,
        namePt: item.namePt,
        descriptionEn: item.descEn || null,
        descriptionPt: item.descPt || null,
        price: item.price,
        priceSecondary: item.priceSecondary || null,
        subcategorySlug: item.subcategorySlug || null,
        isAvailable: true,
      })
      ids.push(id)
    }
    return ids
  }

  // Create all food items
  const snackIds = await createMenuItems(snackItems, 'snack')
  const bruschetteIds = await createMenuItems(bruschetteItems, 'bruschetta')
  const boardsIds = await createMenuItems(boardsItems, 'board')
  const specialtiesIds = await createMenuItems(specialtiesItems, 'specialty')
  const pizzaIds = await createMenuItems(pizzaItems, 'pizza')
  const saladIds = await createMenuItems(saladItems, 'salad')
  const dessertIds = await createMenuItems(dessertItems, 'dessert')

  // Create Food Categories
  console.log('📂 Creating Food Categories...')

  await createDoc({
    _id: 'food-snacks',
    _type: 'menuCategory',
    menuType: 'food',
    slug: { _type: 'slug', current: 'snacks' },
    titlePt: 'APERITIVOS E PÃO',
    titleEn: 'SNACKS AND BREAD',
    tabLabelPt: 'APERITIVOS E PÃO',
    tabLabelEn: 'SNACKS AND BREAD',
    displayType: 'standard',
    items: snackIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  await createDoc({
    _id: 'food-bruschette',
    _type: 'menuCategory',
    menuType: 'food',
    slug: { _type: 'slug', current: 'bruschette' },
    titlePt: 'BRUSCHETTE',
    titleEn: 'BRUSCHETTE',
    tabLabelPt: 'BRUSCHETTE',
    tabLabelEn: 'BRUSCHETTE',
    displayType: 'standard',
    items: bruschetteIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  await createDoc({
    _id: 'food-boards',
    _type: 'menuCategory',
    menuType: 'food',
    slug: { _type: 'slug', current: 'boards' },
    titlePt: 'TÁBUAS',
    titleEn: 'BOARDS',
    tabLabelPt: 'TÁBUAS',
    tabLabelEn: 'BOARDS',
    displayType: 'standard',
    items: boardsIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  await createDoc({
    _id: 'food-specialties',
    _type: 'menuCategory',
    menuType: 'food',
    slug: { _type: 'slug', current: 'specialties' },
    titlePt: 'ESPECIALIDADES',
    titleEn: 'SPECIALTIES',
    tabLabelPt: 'ESPECIALIDADES',
    tabLabelEn: 'SPECIALTIES',
    displayType: 'standard',
    notePt: 'Em combinação com os nossos molhos:\n• Bolognese\n• Boscaiola\n• Ragù Branco\n• Norma\n• Calabrese (Picante)\n• Pomodoro\n• Genovese\n• Tomates Cereja e Stracciatella di Burrata',
    noteEn: 'In combination with our sauces:\n• Bolognese\n• Boscaiola\n• White Ragù\n• Norma\n• Calabrese (Spicy)\n• Pomodoro\n• Genovese\n• Cherry Tomatoes and Stracciatella di Burrata',
    items: specialtiesIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  await createDoc({
    _id: 'food-pizza',
    _type: 'menuCategory',
    menuType: 'food',
    slug: { _type: 'slug', current: 'pizzaTaglio' },
    titlePt: 'PIZZA AL TAGLIO',
    titleEn: 'PIZZA AL TAGLIO',
    tabLabelPt: 'PIZZA AL TAGLIO',
    tabLabelEn: 'PIZZA AL TAGLIO',
    displayType: 'table',
    images: [
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczN6gvApG840L_SXMzFZEctG6oFCUdBcxAbDyg4qJJ9rXP3dF0n7Bin-4TSRjxolW6488yQstI6FXiPZ_IJflDJ3lQ0o0qNCDu2wCao7rdrU1HlvPABsjOWvIefR90tGdOl6BpXsYlUB1NT0OzN-XCFu=w1800-h528-s-no-gm', caption: 'PIZZA AL TAGLIO', _key: genId('img') },
      { imageUrl: 'https://lh3.googleusercontent.com/pw/AP1GczP1c10ynnCVxeUPuqdeGEIX6ycuOEc0M8epmjk9MtWlfosDZbKca-KL_sakEEsHjUAdEq-gGziBunGvK1MmFrc6Y4QPmxUmGzOnxOsU8nHY5tHn3RkPRROgifzUbom2YSTkP_tt7m8ABLBDWonBVv9g=w1800-h532-s-no-gm', caption: 'PINSA ROMANA', _key: genId('img') },
    ],
    items: pizzaIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  await createDoc({
    _id: 'food-salads',
    _type: 'menuCategory',
    menuType: 'food',
    slug: { _type: 'slug', current: 'salads' },
    titlePt: 'SALADAS',
    titleEn: 'SALADS',
    tabLabelPt: 'SALADAS',
    tabLabelEn: 'SALADS',
    displayType: 'standard',
    items: saladIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  await createDoc({
    _id: 'food-desserts',
    _type: 'menuCategory',
    menuType: 'food',
    slug: { _type: 'slug', current: 'desserts' },
    titlePt: 'SOBREMESAS',
    titleEn: 'DESSERTS',
    tabLabelPt: 'SOBREMESAS',
    tabLabelEn: 'DESSERTS',
    displayType: 'standard',
    items: dessertIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  console.log('✅ Food menu seeded!')
  console.log('🍷 Seeding Drinks Menu...')

  // DRINKS - Soft Drinks
  const softDrinksItems = [
    { nameEn: 'Acqua Luso 50 cl', namePt: 'Acqua Luso 50 cl', price: '€ 1.50' },
    { nameEn: 'Sparkling water Pedras/Castello 25 cl', namePt: 'Água com gás Pedras/Castello 25 cl', price: '€ 2.50' },
    { nameEn: 'Sparkling water San Pellegrino 50 cl', namePt: 'Água com gás San Pellegrino 50 cl', price: '€ 4.00' },
    { nameEn: 'Nestea (peach / lemon)', namePt: 'Nestea (pêssego / limão)', price: '€ 2.50' },
    { nameEn: 'Lemonade San Pellegrino', namePt: 'Limonada San Pellegrino', price: '€ 3.00' },
    { nameEn: 'Selza (4.5% Alc, gluten free)', namePt: 'Selza (4.5% Álc, sem glúten)', price: '€ 3.50' },
    { nameEn: 'Fruit juices', namePt: 'Sumos de fruta', price: '€ 2.50' },
    { nameEn: 'Fanta orange', namePt: 'Fanta laranja', price: '€ 3.00' },
    { nameEn: 'Tonic water', namePt: 'Água tónica', price: '€ 2.50' },
    { nameEn: 'Coca Cola', namePt: 'Coca Cola', price: '€ 2.50' },
    { nameEn: 'Coca zero', namePt: 'Coca zero', price: '€ 2.50' },
  ]

  const caffeteriaItems = [
    { nameEn: 'Caffè espresso', namePt: 'Café expresso', price: '€ 1.00' },
    { nameEn: 'Caffè lungo - Abatanado', namePt: 'Café longo - Abatanado', price: '€ 1.50' },
    { nameEn: 'Caffè corretto (with liquor)', namePt: 'Café corretto (com licor)', price: '€ 2.50' },
    { nameEn: 'Cappuccino - Latte', namePt: 'Cappuccino - Latte', price: '€ 4.00' },
    { nameEn: 'Tea - Chamomile', namePt: 'Chá - Camomila', price: '€ 2.50' },
    { nameEn: 'Caffè with milk', namePt: 'Café com leite', price: '€ 2.00' },
  ]

  const softDrinksIds = await createMenuItems(softDrinksItems, 'softdrink')
  const caffeteriaIds = await createMenuItems(caffeteriaItems, 'coffee')

  // Create Drinks Categories
  await createDoc({
    _id: 'drinks-soft',
    _type: 'menuCategory',
    menuType: 'drinks',
    slug: { _type: 'slug', current: 'softDrinks' },
    titlePt: 'BEBIDAS SEM ÁLCOOL',
    titleEn: 'SOFT DRINKS',
    tabLabelPt: 'BEBIDAS SEM ÁLCOOL',
    tabLabelEn: 'SOFT DRINKS',
    displayType: 'standard',
    items: softDrinksIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  await createDoc({
    _id: 'drinks-caffeteria',
    _type: 'menuCategory',
    menuType: 'drinks',
    slug: { _type: 'slug', current: 'caffeteria' },
    titlePt: 'CAFETARIA',
    titleEn: 'CAFFETERIA',
    tabLabelPt: 'CAFETARIA',
    tabLabelEn: 'CAFFETERIA',
    displayType: 'standard',
    items: caffeteriaIds.map(id => ({ _type: 'reference', _ref: id, _key: genId('ref') })),
  })

  // Placeholder categories for incomplete sections
  await createDoc({
    _id: 'drinks-beers',
    _type: 'menuCategory',
    menuType: 'drinks',
    slug: { _type: 'slug', current: 'beers' },
    titlePt: 'A completar',
    titleEn: 'A completar',
    tabLabelPt: 'A completar',
    tabLabelEn: 'A completar',
    displayType: 'grouped',
    subcategories: [
      { titlePt: 'A completar', titleEn: 'A completar', slug: { _type: 'slug', current: 'draftBeers' }, _key: genId('sub') },
      { titlePt: 'A completar', titleEn: 'A completar', slug: { _type: 'slug', current: 'bottledBeers' }, _key: genId('sub') },
    ],
    items: [],
  })

  await createDoc({
    _id: 'drinks-wines',
    _type: 'menuCategory',
    menuType: 'drinks',
    slug: { _type: 'slug', current: 'wines' },
    titlePt: 'A completar',
    titleEn: 'A completar',
    tabLabelPt: 'A completar',
    tabLabelEn: 'A completar',
    displayType: 'grouped',
    items: [],
  })

  await createDoc({
    _id: 'drinks-cocktails',
    _type: 'menuCategory',
    menuType: 'drinks',
    slug: { _type: 'slug', current: 'cocktails' },
    titlePt: 'A completar',
    titleEn: 'A completar',
    tabLabelPt: 'A completar',
    tabLabelEn: 'A completar',
    displayType: 'standard',
    items: [],
  })

  await createDoc({
    _id: 'drinks-spirits',
    _type: 'menuCategory',
    menuType: 'drinks',
    slug: { _type: 'slug', current: 'spirits' },
    titlePt: 'A completar',
    titleEn: 'A completar',
    tabLabelPt: 'A completar',
    tabLabelEn: 'A completar',
    displayType: 'twoColumn',
    items: [],
  })

  console.log('✅ Drinks menu seeded!')
  console.log('🎉 All data seeded successfully!')
}

seedMenu().catch(console.error)