//data for hero section

export const hdata = [
    {

    }
]

















// Sample product data
export const products = [
  {
    id: 1,
    imageSrc: 'drink.jpg',
    imageAlt: 'Product 1',
    href: 'https://example.com/product1',
    name: 'Moët & Chandon - Brut Impérial ',
    color: 'Red',
    price: '$10.00'
    
  },
  {
    id: 2,
    imageSrc: 'drink2.avif',
    imageAlt: 'Product 2',
    href: 'https://example.com/product2',
    name: 'Brut Yellow Label | Veuve Clicquot',
    color: 'Blue',
    price: '$15.00'
  },
  {
    id: 2,
    imageSrc: 'drink3.webp',
    imageAlt: 'Product 2',
    href: 'https://example.com/product2',
    name: 'Smirnoff No.21 Red Vodka',
    color: 'Blue',
    price: '$15.00'
  },
  {
    id: 2,
    imageSrc: 'drink4.webp',
    imageAlt: 'Product 2',
    href: 'https://example.com/product2',
    name: 'Johnnie Walker Red Label ',
    color: 'Blue',
    price: '$15.00'
  },
 
  // Add more products as needed
];



//third section  
interface Product {
    imageUrl: string;
    title: string;
    price: number;
    salePrice?: number;
  }
  
  export const productData: Product[] = [
    {
      imageUrl: 'drink5.webp',
      title: 'Johnnie Walker Red Label',
      price: 449,
      salePrice: 699,
    },
    {
      imageUrl: 'drink6.webp',
      title: 'Johnnie Walker Blue Label Elusive Umami',
      price: 399,
    },
    {
      imageUrl: 'drink7.jpeg',
      title: 'Luc Belaire Bleu',
      price: 299,
      salePrice: 249,
    },
    {
      imageUrl: 'drink8.jpg',
      title: 'Luc Belaire Rare Rosé',
      price: 159,
      salePrice: 129,
    },
  
    // Add more products as needed
  ];
  