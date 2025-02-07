'use client';

import { X , Loader2, ShoppingCart } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart, updateQuantity } from '@/redux/cartSlice'; // Add updateQuantity
import { useToast } from '@/hooks/use-toast';
import ProductCart from '../cartProduct/ProductCart';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Cart = ({ toggleCart, isCartOpen }) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Handle removing an item from the cart
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    toast({
      variant: 'danger',
      title: 'Product successfully removed',
    });
  };

  // Handle clearing the entire cart
  const handleClearCart = () => {
    dispatch(clearCart());
    toast({
      variant: 'danger',
      title: 'All products successfully removed',
    });
  };

  // Handle updating the quantity of an item
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 1) handleRemoveItem(id); // Ensure quantity is at least 1
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleProceedToCheckout = () => {
    setIsLoading(true); // Show spinner
    setTimeout(() => {
      router.push('/checkouts'); // Redirect after 2 seconds
      setIsLoading(false); // Show spinner

    }, 2000);


  };

  return (
    <div
      className={`fixed top-[60px] right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? 'translate-x-0 z-50' : 'translate-x-full'
      }`}
    >
      {/* Cart Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={toggleCart} className="text-gray-800 hover:text-blue-500">
          <X size={20} />
        </button>
      </div>

      {/* Cart Body */}
      <div className="p-4">
        {cart.items.length === 0 ? (
          // Display message if cart is empty
          <p>Your cart is empty.</p>
        ) : (
          // Display cart items if cart is not empty
          <div>
            {cart.items.map((item ,index) => (
            <ProductCart key={index} item={item} 
            handleUpdateQuantity={handleUpdateQuantity}
            handleRemoveItem={handleRemoveItem}
            />
              ))}

            {/* Cart Summary */}
            <div className="mt-6">
              <p className="font-semibold">Total Quantity: {cart.totalQuantity}</p>
              <p className="font-semibold">Total Price: ${cart.totalPrice}</p>
            </div>

            <div className=''>
            {/* Clear Cart Button */}
            <button
                onClick={handleClearCart}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Clear Cart
              </button>
                {/* Proceed Button */}  
              <button
                  disabled={cart.length === 0 || isLoading}
                  onClick={handleProceedToCheckout}
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" /> Proceed to Checkout
                    </>
                  )}
              </button>
            </div>      
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;