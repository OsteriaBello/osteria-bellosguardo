export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  pricePinsa?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  note?: string;
  image?: string;
}

export const menuData = {
  en: {
    snacks: {
      title: 'SNACKS AND BREAD',
      items: [
        { name: 'Parma ham slices', price: '€ 5.00' },
        { name: 'Grana Padano DOP', price: '€ 3.00' },
        { name: 'Pecorino Romano DOP', price: '€ 4.00' },
        { name: 'Parmigiano Reggiano DOP', price: '€ 4.00' },
        { name: 'Artichokes in oil', price: '€ 4.00' },
        { name: 'Pistachios', price: '€ 2.00' },
        { name: 'Sun-dried tomatoes', price: '€ 3.00' },
        { name: 'Olives', price: '€ 2.00' },
        { name: 'Toasted walnuts', price: '€ 2.00' },
        { name: 'Chopped feta cheese', price: '€ 3.00' },
        { name: 'Spicy zucchini in oil', price: '€ 3.00' },
        { name: 'Bread', price: '€ 2.00' },
        { name: 'Tarallini', price: '€ 2.00' },
        { name: 'White focaccia', price: '€ 7.00' },
        { name: 'Extra Virgin Olive Oil', price: '€ 2.00' },
        { name: 'Spicy eggplants in oil', price: '€ 3.00' },
      ]
    },
    bruschette: {
      title: 'BRUSCHETTE',
      items: [
        { name: '1. Nduja and smoked provola', price: '€ 4.00' },
        { name: '2. Cherry tomatoes and smoked provola', price: '€ 4.00' },
        { name: '3. Feta cheese and caramelized onions', price: '€ 4.00' },
        { name: '4. Stracciatella burrata and cherry tomatoes', price: '€ 4.00' },
        { name: '5. Gorgonzola and caramelized onions', price: '€ 4.00' },
      ]
    },
    boards: {
      title: 'BOARDS',
      items: [
        { name: 'Tagliere misto (Cold cuts and cheese)', price: '€ 16.00' },
        { name: 'Tagliere salumi (Cold cuts)', price: '€ 15.00' },
        { name: 'Tagliere formaggi (Cheese)', price: '€ 18.00' },
      ]
    },
    specialties: {
      title: 'SPECIALTIES',
      items: [
        { name: 'Fresh Homemade Pasta', price: '€ 13.50' },
        { name: 'Gnocchi', price: '€ 14.50' },
        { name: 'Ravioli di Carne (Meat Ravioli)', price: '€ 14.50' },
        { name: 'Tortelloni Ricotta and Spinaches', price: '€ 14.50' },
      ],
      note: 'In combination with our sauces:\n• Bolognese (Veal, Pork, S. Marzano Tomato Sauce)\n• Boscaiola (Mushrooms, Sausages, Cream)\n• White Ragù (Veal, Pork, Sausage, Guanciale)\n• Norma (Tomato sauce, Eggplants, Ricotta salata)\n• Calabrese (Nduja, Cream, Sausage) - Spicy\n• Pomodoro (San Marzano Tomato sauce)\n• Genovese (Veal, Onions, Carrots, Celery)\n• Cherry Tomatoes and Stracciatella di Burrata'
    },
    specialPasta: {
      title: '',
      items: [
        { name: 'Lasagna Bolognese', price: '€ 15.50' },
        { name: 'Gnocchi alla Sorrentina (Tomato Sauce, Provola, Grana)', price: '€ 14.50' },
        { name: 'Pumpkin Ravioli with Gorgonzola And Walnuts', price: '€ 14.50' },
      ]
    },
    pizzaTaglio: {
      title: 'PIZZA AL TAGLIO',
      items: [
        { name: 'Margherita', description: 'Tomato sauce, mozzarella.', price: '€ 8.50', pricePinsa: '€ 15.00' },
        { name: 'Nduja e mozzarella', description: 'Tomato sauce, mozzarella, nduja.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Rucola e pomodorini', description: 'Rocket salad, cherry tomatoes, mozzarella, grana padano.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Prosciutto e funghi', description: 'Parma ham, mushrooms, tomato sauce.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: '4 formaggi', description: 'Gorgonzola, mozzarella, taleggio, grana padano.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Diavola', description: 'Hot salami, mozzarella, tomato sauce.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Siciliana', description: 'Tomato sauce, eggplants, mozzarella, grana padano.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Modena', description: 'Mozzarella, grana padano, coppa stagionata.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Capricciosa', description: 'Tomato sauce, mozzarella, artichokes, olives, mushrooms, ricotta salata.', price: '€ 10.50', pricePinsa: '€ 17.50' },
        { name: 'Salame Napoli', description: 'Tomato sauce, mozzarella, salame Napoli.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Salsiccia e funghi', description: 'Mozzarella, sausage, mushrooms.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Bologna', description: 'Mozzarella, mortadella, stracciatella di burrata, pistachios.', price: '€ 10.50', pricePinsa: '€ 17.50' },
      ],
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
    },
    salads: {
      title: 'SALADS',
      items: [
        { name: 'Coppola', description: 'Lettuce, rocket salad', price: '€ 5.50' },
        { name: 'De Sica', description: 'Lettuce, rocket salad, cherry tomatoes, mozzarella di bufala Campana', price: '€ 9.50' },
        { name: 'Bertolucci', description: 'Lettuce, rocket salad, cherry tomatoes, Burrata', price: '€ 9.50' },
        { name: 'Leone', description: 'Lettuce, rocket salad, cherry tomatoes', price: '€ 7.50' },
        { name: 'Scorsese', description: 'Lettuce, rocket salad, cherry tomatoes, feta, onion', price: '€ 9.50' },
        { name: 'Monicelli', description: 'Parma ham, mozzarella', price: '€ 12.50' },
      ]
    },
    desserts: {
      title: 'DESSERTS',
      items: [
        { name: 'Tiramisù', price: '€ 5.00' },
        { name: 'Chocolate soufflé with chocolate filling', price: '€ 5.00' },
        { name: 'Chocolate soufflé with caramel filling', price: '€ 5.00' },
        { name: 'Babà', price: '€ 5.00' },
      ]
    },
    softDrinks: {
      title: 'SOFT DRINKS',
      items: [
        { name: 'Acqua Luso 50 cl', price: '€ 1.50' },
        { name: 'Agua com gas Pedras/Castello 25 cl', price: '€ 2.50' },
        { name: 'Agua com gas San Pellegrino 50 cl', price: '€ 4.00' },
        { name: 'Nestea (peach / lemon)', price: '€ 2.50' },
        { name: 'Lemonade San Pellegrino', price: '€ 3.00' },
        { name: 'Selza (4.5% Alc, gluten free)', price: '€ 3.50' },
        { name: 'Fruit juices', price: '€ 2.50' },
        { name: 'Fanta orange', price: '€ 3.00' },
        { name: 'Tonic water', price: '€ 2.50' },
        { name: 'Coca Cola', price: '€ 2.50' },
        { name: 'Coca zero', price: '€ 2.50' },
      ]
    },
    caffeteria: {
      title: 'CAFFETERIA',
      items: [
        { name: 'Caffè espresso', price: '€ 1.00' },
        { name: 'Caffè lungo - Abatanado', price: '€ 1.50' },
        { name: 'Caffè corretto (with liquor)', price: '€ 2.50' },
        { name: 'Cappuccino - Latte', price: '€ 4.00' },
        { name: 'The - Chamomile', price: '€ 2.50' },
        { name: 'Caffè with milk', price: '€ 2.00' },
      ]
    },
    draftBeers: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 2.00' },
        { name: 'A completar', price: '€ 3.50' },
      ]
    },
    bottledBeers: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 2.50' },
      ]
    },
    cocktails: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 10.00' },
      ]
    },
    spirits: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 3.00' },
        { name: 'A completar', price: '€ 4.50' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 5.00' },
      ]
    },
    bottledWineRed: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 18.00' },
        { name: 'A completar', price: '€ 20.00' },
        { name: 'A completar', price: '€ 18.00' },
        { name: 'A completar', price: '€ 22.00' },
        { name: 'A completar', price: '€ 22.00' },
        { name: 'A completar', price: '€ 24.00' },
        { name: 'A completar', price: '€ 38.00' },
        { name: 'A completar', price: '€ 24.00' },
        { name: 'A completar', price: '€ 24.00' },
        { name: 'A completar', price: '€ 48.00' },
      ]
    },
    bottledWineWhite: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 18.00' },
        { name: 'A completar', price: '€ 23.00' },
        { name: 'A completar', price: '€ 18.00' },
      ]
    },
    bottledWineBubbles: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 18.00' },
        { name: 'A completar', price: '€ 22.00' },
        { name: 'A completar', price: '€ 22.00' },
      ]
    },
    houseWineSparkling: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 8.50', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 15.00', pricePinsa: 'A completar' },
      ]
    },
    houseWineRed: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 8.50', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 15.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 4.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 8.50', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 15.00', pricePinsa: 'A completar' },
      ]
    },
    houseWineWhite: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 8.50', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 13.00', pricePinsa: 'A completar' },
      ]
    }
  },
  pt: {
    snacks: {
      title: 'APERITIVOS E PÃO',
      items: [
        { name: 'Fatias de presunto Parma', price: '€ 5.00' },
        { name: 'Grana Padano DOP', price: '€ 3.00' },
        { name: 'Pecorino Romano DOP', price: '€ 4.00' },
        { name: 'Parmigiano Reggiano DOP', price: '€ 4.00' },
        { name: 'Alcachofras em azeite', price: '€ 4.00' },
        { name: 'Pistácios', price: '€ 2.00' },
        { name: 'Tomates secos', price: '€ 3.00' },
        { name: 'Azeitonas', price: '€ 2.00' },
        { name: 'Nozes torradas', price: '€ 2.00' },
        { name: 'Queijo feta picado', price: '€ 3.00' },
        { name: 'Courgette picante em azeite', price: '€ 3.00' },
        { name: 'Pão', price: '€ 2.00' },
        { name: 'Tarallini', price: '€ 2.00' },
        { name: 'Focaccia branca', price: '€ 7.00' },
        { name: 'Azeite Virgem Extra', price: '€ 2.00' },
        { name: 'Beringelas picantes em azeite', price: '€ 3.00' },
      ]
    },
    bruschette: {
      title: 'BRUSCHETTE',
      items: [
        { name: '1. Nduja e provola fumada', price: '€ 4.00' },
        { name: '2. Tomates cereja e provola fumada', price: '€ 4.00' },
        { name: '3. Queijo feta e cebolas caramelizadas', price: '€ 4.00' },
        { name: '4. Burrata stracciatella e tomates cereja', price: '€ 4.00' },
        { name: '5. Gorgonzola e cebolas caramelizadas', price: '€ 4.00' },
      ]
    },
    boards: {
      title: 'TÁBUAS',
      items: [
        { name: 'Tagliere misto (Enchidos e queijos)', price: '€ 16.00' },
        { name: 'Tagliere salumi (Enchidos)', price: '€ 15.00' },
        { name: 'Tagliere formaggi (Queijos)', price: '€ 18.00' },
      ]
    },
    specialties: {
      title: 'ESPECIALIDADES',
      items: [
        { name: 'Massa Fresca Caseira', price: '€ 13.50' },
        { name: 'Gnocchi', price: '€ 14.50' },
        { name: 'Ravioli di Carne (Ravioli de Carne)', price: '€ 14.50' },
        { name: 'Tortelloni Ricotta e Espinafres', price: '€ 14.50' },
      ],
      note: 'Em combinação com os nossos molhos:\n• Bolognese (Vitela, Porco, Molho de Tomate S. Marzano)\n• Boscaiola (Cogumelos, Salsichas, Natas)\n• Ragù Branco (Vitela, Porco, Salsicha, Guanciale)\n• Norma (Molho de tomate, Beringelas, Ricotta salata)\n• Calabrese (Nduja, Natas, Salsicha) - Picante\n• Pomodoro (Molho de tomate San Marzano)\n• Genovese (Vitela, Cebolas, Cenouras, Aipo)\n• Tomates Cereja e Stracciatella di Burrata'
    },
    specialPasta: {
      title: '',
      items: [
        { name: 'Lasanha à Bolonhesa', price: '€ 15.50' },
        { name: 'Gnocchi alla Sorrentina (Molho de Tomate, Provola, Grana)', price: '€ 14.50' },
        { name: 'Ravioli de Abóbora com Gorgonzola e Nozes', price: '€ 14.50' },
      ]
    },
    pizzaTaglio: {
      title: 'PIZZA AL TAGLIO',
      items: [
        { name: 'Margherita', description: 'Molho de tomate, mozzarella.', price: '€ 8.50', pricePinsa: '€ 15.00' },
        { name: 'Nduja e mozzarella', description: 'Molho de tomate, mozzarella, nduja.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Rucola e pomodorini', description: 'Rúcula, tomates cereja, mozzarella, grana padano.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Prosciutto e funghi', description: 'Presunto Parma, cogumelos, molho de tomate.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: '4 formaggi', description: 'Gorgonzola, mozzarella, taleggio, grana padano.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Diavola', description: 'Salame picante, mozzarella, molho de tomate.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Siciliana', description: 'Molho de tomate, beringelas, mozzarella, grana padano.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Modena', description: 'Mozzarella, grana padano, coppa stagionata.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Capricciosa', description: 'Molho de tomate, mozzarella, alcachofras, azeitonas, cogumelos, ricotta salata.', price: '€ 10.50', pricePinsa: '€ 17.50' },
        { name: 'Salame Napoli', description: 'Molho de tomate, mozzarella, salame Napoli.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Salsiccia e funghi', description: 'Mozzarella, salsicha, cogumelos.', price: '€ 9.50', pricePinsa: '€ 16.50' },
        { name: 'Bologna', description: 'Mozzarella, mortadela, stracciatella di burrata, pistácios.', price: '€ 10.50', pricePinsa: '€ 17.50' },
      ],
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
    },
    salads: {
      title: 'SALADAS',
      items: [
        { name: 'Coppola', description: 'Alface, rúcula', price: '€ 5.50' },
        { name: 'De Sica', description: 'Alface, rúcula, tomates cereja, mozzarella di bufala Campana', price: '€ 9.50' },
        { name: 'Bertolucci', description: 'Alface, rúcula, tomates cereja, Burrata', price: '€ 9.50' },
        { name: 'Leone', description: 'Alface, rúcula, tomates cereja', price: '€ 7.50' },
        { name: 'Scorsese', description: 'Alface, rúcula, tomates cereja, feta, cebola', price: '€ 9.50' },
        { name: 'Monicelli', description: 'Presunto Parma, mozzarella', price: '€ 12.50' },
      ]
    },
    desserts: {
      title: 'SOBREMESAS',
      items: [
        { name: 'Tiramisù', price: '€ 5.00' },
        { name: 'Soufflé de chocolate com recheio de chocolate', price: '€ 5.00' },
        { name: 'Soufflé de chocolate com recheio de caramelo', price: '€ 5.00' },
        { name: 'Babà', price: '€ 5.00' },
      ]
    },
    softDrinks: {
      title: 'BEBIDAS SEM ÁLCOOL',
      items: [
        { name: 'Acqua Luso 50 cl', price: '€ 1.50' },
        { name: 'Água com gás Pedras/Castello 25 cl', price: '€ 2.50' },
        { name: 'Água com gás San Pellegrino 50 cl', price: '€ 4.00' },
        { name: 'Nestea (pêssego / limão)', price: '€ 2.50' },
        { name: 'Limonada San Pellegrino', price: '€ 3.00' },
        { name: 'Selza (4.5% Álc, sem glúten)', price: '€ 3.50' },
        { name: 'Sumos de fruta', price: '€ 2.50' },
        { name: 'Fanta laranja', price: '€ 3.00' },
        { name: 'Água tónica', price: '€ 2.50' },
        { name: 'Coca Cola', price: '€ 2.50' },
        { name: 'Coca zero', price: '€ 2.50' },
      ]
    },
    caffeteria: {
      title: 'CAFETARIA',
      items: [
        { name: 'Café expresso', price: '€ 1.00' },
        { name: 'Café longo - Abatanado', price: '€ 1.50' },
        { name: 'Café corretto (com licor)', price: '€ 2.50' },
        { name: 'Cappuccino - Latte', price: '€ 4.00' },
        { name: 'Chá - Camomila', price: '€ 2.50' },
        { name: 'Café com leite', price: '€ 2.00' },
      ]
    },
    draftBeers: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 2.00' },
        { name: 'A completar', price: '€ 3.50' },
      ]
    },
    bottledBeers: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 2.50' },
      ]
    },
    cocktails: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 8.00' },
        { name: 'A completar', price: '€ 10.00' },
      ]
    },
    spirits: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 3.00' },
        { name: 'A completar', price: '€ 4.50' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 4.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 5.00' },
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 7.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 6.00' },
        { name: 'A completar', price: '€ 5.00' },
      ]
    },
    bottledWineRed: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 18.00' },
        { name: 'A completar', price: '€ 20.00' },
        { name: 'A completar', price: '€ 18.00' },
        { name: 'A completar', price: '€ 22.00' },
        { name: 'A completar', price: '€ 22.00' },
        { name: 'A completar', price: '€ 24.00' },
        { name: 'A completar', price: '€ 38.00' },
        { name: 'A completar', price: '€ 24.00' },
        { name: 'A completar', price: '€ 24.00' },
        { name: 'A completar', price: '€ 48.00' },
      ]
    },
    bottledWineWhite: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 18.00' },
        { name: 'A completar', price: '€ 23.00' },
        { name: 'A completar', price: '€ 18.00' },
      ]
    },
    bottledWineBubbles: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 18.00' },
        { name: 'A completar', price: '€ 22.00' },
        { name: 'A completar', price: '€ 22.00' },
      ]
    },
    houseWineSparkling: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 8.50', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 15.00', pricePinsa: 'A completar' },
      ]
    },
    houseWineRed: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 8.50', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 15.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 4.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 8.50', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 15.00', pricePinsa: 'A completar' },
      ]
    },
    houseWineWhite: {
      title: 'A completar',
      items: [
        { name: 'A completar', price: '€ 4.00', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 8.50', pricePinsa: 'A completar' },
        { name: 'A completar', price: '€ 13.00', pricePinsa: 'A completar' },
      ]
    }
  }
};
