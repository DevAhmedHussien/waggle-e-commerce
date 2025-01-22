'use client';
import { hoodies, jeans, products, shirts, shoes } from '@/constants/data';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { addItem } from '@/redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useToast } from '@/hooks/use-toast';

const getProductData = (productId) => {
  const allProducts = [...products, ...shirts, ...hoodies, ...jeans, ...shoes];
  return allProducts.find((product) => product.handlerName === productId);
};

export default function SpecificProductLayout() {
  const pathname = usePathname();
    // Extract the part after `/look/`
    const specificHandler = pathname.split('/look/')[1];
    const product = getProductData(specificHandler);
  
  const [selectedImage, setSelectedImage] = useState(product.images[0].url);
  const [selectedColor, setSelectedColor] = useState(null); // Initialize as null
  const [selectedSize, setSelectedSize] = useState(null); // Initialize as null

  const dispatch = useDispatch();
  const { toast } = useToast();

  if (!product) {
    return <div>Product not found</div>;
  }

  // Handle adding an item to the cart
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        variant: 'destructive',
        title: 'Please select a color and size',
      });
      return;
    }

    // Create an updated product object with selected color and size
    const updatedProduct = {
      ...product,
      selectedProduct :  { 
        color :selectedColor,
        size : selectedSize,
    }
  }
    dispatch(addItem(updatedProduct));
    toast({
      variant: 'success',
      title: 'Product successfully added to cart',
    });
  };

  return (
    <>
      <div className="container min-h-[90vh] mt-20 mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Product Image */}
          <div className="w-full">
            <Image
              src={selectedImage }
              alt={product.name}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-md"
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Thumbnail Images */}
            <div className="flex space-x-2 mt-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image.url)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                    selectedImage === image.url ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Name */}
            <h1 className="text-3xl font-bold">{product.name}</h1>

            {/* Product Price */}
            <p className="text-2xl font-bold text-gray-800">${product.price}</p>

            {/* Color Options */}
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">COLOR</p>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedColor(image.color);
                      setSelectedImage(image.url); 
                    }}
                    className={`w-8 h-8 rounded-full border-2 ${
                      image.color === 'Black'
                        ? 'bg-black'
                        : image.color === 'White'
                        ? 'bg-white'
                        : 'bg-blue-500'
                    } ${
                      selectedColor === image.color ? 'border-black' : 'border-gray-200'
                    }`}
                    aria-label={`Select ${image.color} color`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Options */}
            <div>
              <p className="text-sm font-medium text-gray-600 mb-2">SIZE</p>
              <div className="flex space-x-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <p className="text-sm text-gray-600">{product.description}</p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedColor || !selectedSize} // Disable if no color or size is selected
              className={`w-full bg-black text-white py-3 px-6 rounded-lg transition-colors duration-300 ${
                !selectedColor || !selectedSize
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-800'
              }`}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}