'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { useEffect, useState } from 'react';

const SlideBar = () => {
  const categories = ['products', 'Hoodies', 'Shirts', 'Jeans'];
  const pathname = usePathname(); // Get the current route
  const [selectedCategory, setSelectedCategory] = useState(
    pathname.split('/').pop() || 'products' // Set the selected category based on the current route
  );
// console.log('pathname',pathname)
  return (
    <div className="w-full lg:w-1/6">
      
      {/* Vertical Category List */}
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link
              href={category === 'products' ? '/products' : `/products/${category.toLowerCase()}`}
              onClick={() => setSelectedCategory(category)}
              className={`block px-4 py-2 rounded ${
                selectedCategory.toLowerCase() === category.toLowerCase()  
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              } hover:bg-blue-600 hover:text-white transition-colors duration-300`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlideBar;