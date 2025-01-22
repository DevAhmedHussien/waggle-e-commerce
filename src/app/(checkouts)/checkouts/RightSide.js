import ProductCart from '@/components/component/cartProduct/ProductCart';
import React from 'react'
import { useSelector } from 'react-redux';


 const RightSide = () => {
    const cart = useSelector((state) => state.cart);

  return (
  <>
    {/* Right Column: Order Summary */}
        <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
                {cart.items.map((item) => (
                <ProductCart key={item.id} item={item} editable={false} />
                ))}
           
                <h3 className="font-semibold text-lg text-gray-800">  price :  ${cart.totalPrice}</h3>
            </div>
        </div>
  </>
  )
}
export default RightSide