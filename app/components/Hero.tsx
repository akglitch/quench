import React from 'react';

const SummerStyles: React.FC = () => {
  // Define an array of image objects with URLs and titles
  const imageItems = [
    { url: 'herodrink.webp', title: 'Refreshing Hero Drink' },
    { url: 'herodrink2.jpg', title: 'Invigorating Hero Drink' },
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-20 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="sm:max-w-lg lg:w-1/2">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-6xl lg:leading-tight">
                <span className="text-indigo-600">Sip into</span>
                <span className="block">Sensational Seasonal Delights</span>
              </h1>
              <p className="mt-4 text-lg text-gray-500 sm:text-xl sm:leading-relaxed md:text-2xl md:leading-relaxed">
                This season, our refreshing new arrivals will whisk you away to a world where every sip counts. Dive into our collection and quench your thirst with the finest selections.
              </p>
              
              <button type="button" className="mt-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Shop Collection
              </button>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
                {imageItems.map((item, index) => (
                  <div key={index} className="flex flex-col lg:flex-row-reverse items-center overflow-hidden p-4">
                    <div className="flex-shrink-0 mb-4 lg:mb-0 lg:ml-4">
                      <div className="aspect-w-1 aspect-h-1 w-32 sm:w-48 md:w-64 lg:w-64">
                        <img
                          src={item.url}
                          alt={item.title}
                          className="object-cover h-full w-full rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="text-center lg:text-left">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <hr className="my-2 border-gray-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummerStyles;
