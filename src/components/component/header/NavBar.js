'use client';

import { useState } from 'react';
import {  Menu ,ChevronDown , ChevronUpIcon, ChevronUp} from 'lucide-react';
import Link from 'next/link';
import Cart from './Cart';
import MenuOpen from './MenuOpen';
import SearchProduct from './SearchProduct';
import { usePathname } from 'next/navigation';
import ReduxProvider from '@/redux/ReduxProvider';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubLinksVisible, setIsSubLinksVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const links = [
    { name: 'products', link: '/products' },
    { name: 'about', link: '/about' },
    { name: 'contact', link: '/contact' },
  ];

  const subLinks = ['shirts', 'jeans', 'hoodies', 'jacket'];

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsSearchOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubLinks = (e) => {
    e.preventDefault();
    setIsSubLinksVisible(!isSubLinksVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };


  const pathname = usePathname(); // Get the current route

  // Hide Navbar on auth and checkout pages
  if (pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/forgot-password') || pathname.startsWith('/checkout')) {
    return null;
  }

  return (
    <>
    <ReduxProvider>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Menu Toggle */}
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-gray-800 hidden md:block">
                <Link href="/" aria-label="Home page" title="Go to Home page">
                  Waggle
                </Link>
              </h1>

              {/* Menu Toggle for Small Screens */}
              <button onClick={toggleMenu} className="md:hidden text-gray-800 hover:text-blue-500">
                <Menu size={24} />
              </button>

              {/* Navigation Links */}
              <nav className={`md:flex items-center space-x-6 hidden p-[30px]`}>
                <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {links.map((link, index) => (
                    <li key={index}>
                    {link.name === 'products' ? (
                      <button
                          onMouseEnter={() => setIsSubLinksVisible(true)}
                          onMouseLeave={() => setIsSubLinksVisible(false)}
                          className=" text-gray-800 flex  justify-center items-center gap-2 hover:text-blue-500"
                          aria-label="Toggle sub-links"
                          >
                          <Link href={link.link} >
                          {link.name}
                        </Link>
                        {isSubLinksVisible ? <ChevronUp size={16} /> : <ChevronDown size={16} />} {/* Replace with icons if needed */}
                          </button>
                        ):
                          <Link href={link.link} className=' hover:text-blue-500'>
                          {link.name}
                        </Link>
                        }
                      {link.name === 'products' && isSubLinksVisible && (
                        <ul  
                        onMouseEnter={() => setIsSubLinksVisible(true)}
                        onMouseLeave={() => setIsSubLinksVisible(false)}
                        className="absolute left-0 w-[100%] p-20 bg-white shadow-lg rounded-lg ">
                          {subLinks.map((subLink, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={`/products/${subLink}`}
                                className="block px-4 py-2 text-gray-800 hover:text-blue-500"
                              >
                                {subLink}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Search and Cart */}
            <SearchProduct
              isSearchOpen={isSearchOpen}
              handleSearch={handleSearch}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              toggleSearch={toggleSearch}
              toggleCart={toggleCart}
            />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <MenuOpen
            isSubLinksVisible={isSubLinksVisible}
            links={links}
            subLinks={subLinks}
            setIsMenuOpen={setIsMenuOpen}
            toggleSubLinks={toggleSubLinks}
            isMenuOpen={isMenuOpen}
          />
        )}
      </header>

      {/* Cart Sidebar */}
      <Cart toggleCart={toggleCart} isCartOpen={isCartOpen} />

      {/* Overlay when cart or menu is open */}
      {(isCartOpen || isMenuOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            if (isCartOpen) toggleCart();
            if (isMenuOpen) toggleMenu();
          }}
        />
      )}
      </ReduxProvider>
    </>
  );
}