'use client';

import { useState } from 'react';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
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
    { name: 'Products', link: '/products' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
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

  const pathname = usePathname(); // Get the current route

  // Hide Navbar on auth and checkout pages
  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/forgot-password') ||
    pathname.startsWith('/checkout')
  ) {
    return null;
  }

  return (
    <>
      <ReduxProvider>
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-background-default shadow-md z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo and Menu Toggle */}
              <div className="flex items-center gap-4">
                <h1 className="text-2xl font-bold text-primary-default hidden md:block mr-5">
                  <Link href="/" aria-label="Home page" title="Go to Home page">
                    Waggle
                  </Link>
                </h1>

                {/* Mobile Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-primary-default hover:text-primary-hover transition-all"
                >
                  <Menu size={24} />
                </button>

                {/* Navigation Links */}
                <nav className={`md:flex items-center space-x-6 hidden`}>
                  <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    {links.map((link, index) => (
                      <li key={index} className="relative">
                        {link.name === 'Products' ? (
                          <>
                            <button
                              onMouseEnter={() => setIsSubLinksVisible(true)}
                              onMouseLeave={() => setIsSubLinksVisible(false)}
                              className="text-primary-default flex justify-center items-center gap-2 hover:text-primary-hover transition-all"
                              aria-label="Toggle sub-links"
                            >
                              <Link href={link.link}>{link.name}</Link>
                              {isSubLinksVisible ? (
                                <ChevronUp size={16} />
                              ) : (
                                <ChevronDown size={16} />
                              )}
                            </button>

                            {/* Submenu */}
                            <ul
                              onMouseEnter={() => setIsSubLinksVisible(true)}
                              onMouseLeave={() => setIsSubLinksVisible(false)}
                              className={`absolute left-[-30px] w-[70vw] p-4 bg-background-default shadow-lg rounded-lg transition-all duration-300 ease-in-out transform ${
                                isSubLinksVisible
                                  ? 'opacity-100 scale-100 translate-y-0'
                                  : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                              }`}
                            >
                              {subLinks.map((subLink, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={`/products/${subLink}`}
                                    className="block px-4 py-2 text-textColor-dark hover:text-primary-hover transition-all duration-200"
                                  >
                                    {subLink}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            href={link.link}
                            className="text-primary-default hover:text-primary-hover transition-all"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Search and Cart */}
              <SearchProduct
                isSearchOpen={isSearchOpen}
                handleSearch={(e) => {
                  e.preventDefault();
                  console.log('Searching for:', searchQuery);
                }}
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
