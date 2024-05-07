import React from 'react';

const SummerStyles: React.FC = () => {
  // Define an array of image URLs
  const imageUrls = [
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
    'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
    
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn&apos;t care
              if you live or die.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className="w-44 overflow-hidden rounded-lg">
                <img
                  src={imageUrl}
                  alt=""
                  className="h-64 w-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-8 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  );
}

export default SummerStyles;
