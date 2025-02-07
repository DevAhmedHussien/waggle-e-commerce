'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { ShoppingCart, Search, X, UserRound } from 'lucide-react';
import { useSelector } from 'react-redux';
import Input from '@/components/ui/input';

const SearchProduct = ({ searchQuery, setSearchQuery, toggleSearch, toggleCart, isSearchOpen }) => {
  
  const cart = useSelector((state) => state.cart);
  const router = useRouter(); 

  // Handle search submission
  const handleSearchProp = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      
      // Redirect to the search results page with the search query
      router.push(`/products/?query=${encodeURIComponent(searchQuery)}`);
    }
    toggleSearch(); // Close the search bar
    setSearchQuery(''); // Clear the search input
  };

  const handleToggleSearch = () => {
    toggleSearch();
  };

  const handleToggleCart = () => {
    toggleCart();
  };

  return (
    <div className="flex items-center gap-4">
      {/* Search Bar */}
      <div className="relative">
        {/* Search Input */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isSearchOpen ? 'w-64 opacity-100 p-8' : 'w-0 opacity-0 p-8'
          }`}
        >
          <form onSubmit={handleSearchProp} className="flex items-center">
          <Input
            // label='Email'
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
           placeholder="Search..."
          />
            {/* <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
            
          </form>
        </div>

        {/* Search Icon */}
        <button
          onClick={handleToggleSearch}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-blue-500 transition-opacity duration-300 ${
            isSearchOpen ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Search size={20} />
        </button>

        {/* Close or Search Icon */}
        <button
          onClick={searchQuery.length > 0 ? handleSearchProp : handleToggleSearch}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 hover:text-blue-500 transition-opacity duration-300 ${
            isSearchOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {searchQuery.length > 0 ? <Search size={20} /> : <X size={20} />}
        </button>
      </div>

      {/* Cart Toggle */}
      <button
          onClick={handleToggleCart}
          className="relative p-2 text-gray-800 hover:text-blue-500 transition-colors duration-300"
        >
          {/* Shopping Cart Icon */}
          <ShoppingCart size={20} />

          {/* Cart Item Count Badge */}
          {cart.items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {cart.totalQuantity}
            </span>
          )}
        </button>

      {/* Login Link */}
      <Link href="/login" className="text-gray-800 hover:text-blue-500">
        <UserRound size={20} />
      </Link>
    </div>
  );
};

export default SearchProduct;