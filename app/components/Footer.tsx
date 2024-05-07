import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Subscribe to our Newsletter</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Stay up to date with the latest news, promotions, and events by subscribing to our newsletter.</p>
      </div>
      <form className="mt-4 sm:mt-0">
        <div className="sm:flex">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" type="email" autoComplete="email" required className="w-full px-4 py-2 sm:max-w-xs border-gray-300 dark:border-gray-600 focus:ring-teal-500 focus:border-teal-500 rounded-md shadow-sm" placeholder="Enter your email" />
          <button type="submit" className="mt-3 w-full px-4 py-2 bg-teal-600 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Subscribe</button>
        </div>
      </form>
    </div>
    <div className="flex justify-center space-x-6">
      {/* Social icons */}
      <a href="#" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Facebook</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {/* Facebook icon path */}
        </svg>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">Twitter</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {/* Twitter icon path */}
        </svg>
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-500">
        <span className="sr-only">LinkedIn</span>
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          {/* LinkedIn icon path */}
        </svg>
      </a>
    </div>
  </div>
</footer>

  
  );
};

export default Footer;
