
export const products = [
  {
    id: 1,
    name: 'Cerveja Heineken 350ml',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1610478920402-5286eaf1659c?q=80&w=300',
    category: 'cervejas',
    description: 'Cerveja premium tipo Lager com sabor suave e refrescante.'
  },
  {
    id: 2,
    name: 'Cerveja Stella Artois 350ml',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=300',
    category: 'cervejas',
    description: 'Cerveja premium tipo Lager com tradição belga desde 1366.'
  },
  {
    id: 3,
    name: 'Vinho Tinto Chileno 750ml',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=300',
    category: 'vinhos',
    description: 'Vinho tinto seco chileno com notas de frutas vermelhas.'
  },
  {
    id: 4,
    name: 'Whisky Jack Daniels 1L',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=300',
    category: 'destilados',
    description: 'Whisky americano envelhecido em barris de carvalho.'
  },
  {
    id: 5,
    name: 'Vodka Absolut 750ml',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1627736692928-70e5cc8f9a2d?q=80&w=300',
    category: 'destilados',
    description: 'Vodka sueca premium destilada infinitamente.'
  },
  {
    id: 6,
    name: 'Cerveja Corona Extra 350ml',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1605548230624-8d2d0419c517?q=80&w=300',
    category: 'cervejas',
    description: 'Cerveja mexicana leve e refrescante, ideal para dias quentes.'
  },
];

export const heroSlides = [
  {
    id: 1,
    title: 'Happy Hour em Casa',
    description: 'Descontos especiais para o seu fim de semana',
    image: 'https://images.unsplash.com/photo-1578406033714-319adbbf6e41?q=80&w=600',
    link: '/promocoes'
  },
  {
    id: 2,
    title: 'Novidades em Vinhos',
    description: 'Conheça nossa nova seleção de vinhos importados',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600',
    link: '/categoria/vinhos'
  },
  {
    id: 3,
    title: 'Destilados Premium',
    description: 'As melhores marcas com entrega rápida',
    image: 'https://images.unsplash.com/photo-1608204513923-b3f4fbf9abb1?q=80&w=600',
    link: '/categoria/destilados'
  }
];

export const orders = [
  {
    id: 1,
    date: '2023-05-13T14:30:00',
    total: 59.80,
    status: 'delivered',
    items: [
      { id: 1, productId: 1, name: 'Cerveja Heineken 350ml', quantity: 6, price: 4.99 },
      { id: 2, productId: 3, name: 'Vinho Tinto Chileno 750ml', quantity: 1, price: 39.90 }
    ],
    address: 'Rua das Flores, 123, Jardim Primavera',
    estimatedTime: 0
  },
  {
    id: 2,
    date: '2023-05-13T17:45:00',
    total: 129.90,
    status: 'shipping',
    items: [
      { id: 1, productId: 4, name: 'Whisky Jack Daniels 1L', quantity: 1, price: 129.90 }
    ],
    address: 'Av. Principal, 456, Centro',
    estimatedTime: 15
  }
];
