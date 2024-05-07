interface Product {
    imageUrl: string;
    title: string;
    price: number;
    salePrice?: number;
  }
  
  export const productData: Product[] = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Nike Air MX Super 2500 - Red',
      price: 449,
      salePrice: 699,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1590121231254-d6096e4e7539?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Adidas Boost Runner 2000 - Blue',
      price: 399,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1568043751002-6f70bdc32d46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Puma Sprinter Pro 3000 - Black',
      price: 299,
      salePrice: 249,
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1581321346375-71c2f2f8150c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2hkJTIwbWFyY2hlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      title: 'Beachwear Marches - Yellow',
      price: 159,
      salePrice: 129,
    },
  
    // Add more products as needed
  ];
  