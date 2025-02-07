'use client';

// ** React Hooks
import { useEffect, useState } from 'react';

// ** Routes 
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

// ** data
import { categories } from '@/constants/data';

const SlideBar = () => {
  
  const pathname = usePathname();
  const [selectedCategory, setSelectedCategory] = useState('products');
  
  // ** Over Write selected category instead of pathname  
  useEffect(()=>{
    setSelectedCategory(pathname.match(/\/([^\/]+)\/?$/)[1])
  },[pathname])

  return (
    <div className="w-full lg:w-1/6">
      {/* Vertical Category List */}
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={category === 'products' ? '/products' : `/products/${category.toLowerCase()}`}
                // onClick={() => setSelectedCategory(category)}
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