export const formatCurrency = (number) => {
  const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
  });
  return CURRENCY_FORMATTER.format(number);
};

const sizesForTshirt = ['sm', 'xs', 'm', 'lg', 'xl', 'xxl'];
const sizesForShoes = ['41', '42', '43', '44', '45', '46'];
const sizesForJeans = ['46', '48', '50', '52', '54', '56'];

// categories 
export const categories = ['products', 'Hoodies', 'Shirts', 'Jeans'];

export  const links = [
  { name: 'Products', link: '/products' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
];

export const subLinks = ['Shirts', 'Jeans', 'Hoodies', 'Jacket'];

// Helper function to generate unique IDs
let productIdCounter = 1;

// Product data
export const products = [
  {
    id: productIdCounter++,
    handlerName: 'acme-slip-on-shoes',
    name: 'Acme Slip-On Shoes',
    price: 45.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
    ],
    category: 'Footwear',
    sizes: sizesForShoes,
    description: 'Comfortable and stylish slip-on shoes for everyday wear.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-choice-t-shirt',
    name: 'Acme Choice T-Shirt',
    price: 30.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Shirts',
    sizes: sizesForTshirt,
    description: 'A classic T-shirt made from premium cotton for ultimate comfort.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-drawstring-bag',
    name: 'Acme Drawstring Bag',
    price: 12.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/bag.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/bag.png' },
    ],
    category: 'Bags',
    sizes: sizesForTshirt,
    description: 'Lightweight and durable drawstring bag for your daily essentials.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-keyboard',
    name: 'Acme Keyboard',
    price: 150.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
    ],
    category: 'Electronics',
    sizes: sizesForTshirt,
    description: 'Mechanical keyboard with RGB lighting for gamers and typists.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-prism-t-shirt',
    name: 'Acme Prism T-Shirt',
    price: 25.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Shirts',
    sizes: sizesForTshirt,
    description: 'A vibrant T-shirt with a unique prism design.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-t-shirt',
    name: 'Acme T-Shirt',
    price: 20.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Shirts',
    sizes: sizesForTshirt,
    description: 'A simple and elegant T-shirt for casual outings.',
  },
];

export const shirts = [
  {
    id: productIdCounter++,
    handlerName: 'acme-slim-fit-shirt',
    name: 'Acme Slim Fit Shirt',
    price: 35.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Shirts',
    sizes: sizesForTshirt,
    description: 'A slim-fit shirt for a modern and stylish look.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-cotton-shirt',
    name: 'Acme Cotton Shirt',
    price: 28.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Shirts',
    sizes: sizesForTshirt,
    description: 'Soft and breathable cotton shirt for all-day comfort.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-oversized-shirt',
    name: 'Acme Oversized Shirt',
    price: 32.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Shirts',
    sizes: sizesForTshirt,
    description: 'A trendy oversized shirt for a relaxed fit.',
  },
];

export const hoodies = [
  {
    id: productIdCounter++,
    handlerName: 'acme-pullover-hoodie',
    name: 'Acme Pullover Hoodie',
    price: 50.0,
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/hoodie.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Hoodies',
    sizes: sizesForTshirt,
    description: 'A cozy pullover hoodie for chilly days.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-zip-up-hoodie',
    name: 'Acme Zip-Up Hoodie',
    price: (55.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/hoodie.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Hoodies',
    sizes: sizesForTshirt,
    description: 'A versatile zip-up hoodie for a casual yet stylish look.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-fleece-hoodie',
    name: 'Acme Fleece Hoodie',
    price: (60.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/hoodie.png' },
      { color: 'White', url: '/images/bag.png' },
      { color: 'Blue', url: '/images/hoodie.png' },
    ],
    category: 'Hoodies',
    sizes: sizesForTshirt,
    description: 'A warm fleece hoodie for cold winter days.',
  },
];

export const jeans = [
  {
    id: productIdCounter++,
    handlerName: 'acme-slim-fit-jeans',
    name: 'Acme Slim Fit Jeans',
    price: (60.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'Blue', url: '/images/bag.png' },
    ],
    category: 'Jeans',
    sizes: sizesForJeans,
    description: 'Slim-fit jeans for a modern and sleek appearance.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-straight-leg-jeans',
    name: 'Acme Straight Leg Jeans',
    price: (65.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'Blue', url: '/images/bag.png' },
    ],
    category: 'Jeans',
    sizes: sizesForJeans,
    description: 'Classic straight-leg jeans for a timeless look.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-relaxed-fit-jeans',
    name: 'Acme Relaxed Fit Jeans',
    price: (70.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'Blue', url: '/images/bag.png' },
    ],
    category: 'Jeans',
    sizes: sizesForJeans,
    description: 'Comfortable relaxed-fit jeans for a casual look.',
  },
];

export const shoes = [
  {
    id: productIdCounter++,
    handlerName: 'acme-running-shoes',
    name: 'Acme Running Shoes',
    price: (80.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
    ],
    category: 'Footwear',
    sizes: sizesForShoes,
    description: 'Lightweight and durable running shoes for athletes.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-casual-shoes',
    name: 'Acme Casual Shoes',
    price: (70.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'White', url: '/images/bag.png' },
    ],
    category: 'Footwear',
    sizes: sizesForShoes,
    description: 'Stylish and comfortable casual shoes for everyday wear.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-hiking-shoes',
    name: 'Acme Hiking Shoes',
    price: (90.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/shirt.png' },
      { color: 'Brown', url: '/images/bag.png' },
    ],
    category: 'Footwear',
    sizes: sizesForShoes,
    description: 'Durable hiking shoes for outdoor adventures.',
  },
];

export const accessories = [
  {
    id: productIdCounter++,
    handlerName: 'acme-leather-belt',
    name: 'Acme Leather Belt',
    price: (25.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/bag.png' },
      { color: 'Brown', url: '/images/bag.png' },
    ],
    category: 'Accessories',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A premium leather belt for a polished look.',
  },
  {
    id: productIdCounter++,
    handlerName: 'acme-wool-scarf',
    name: 'Acme Wool Scarf',
    price: (30.0),
    quantity: 1,
    images: [
      { color: 'Black', url: '/images/bag.png' },
      { color: 'Gray', url: '/images/bag.png' },
    ],
    category: 'Accessories',
    sizes: ['One Size'],
    description: 'A warm wool scarf for winter comfort.',
  },
];