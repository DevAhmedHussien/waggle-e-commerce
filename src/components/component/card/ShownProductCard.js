import Image from 'next/image';

const ShownProductCard = ({ product, isPriority = false }) => {

  return (
    <div  className="min-w-80 min-h-60 relative border-2 border-transparent rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-500 h-full flex justify-center items-center">
      {/* Optimized Image with next/image */}
      <div className="w-4/5 relative "
      style={{minHeight:'380px' }}  
      >
        <Image
          src={product.images[0].url}
          alt={product.name}
          fill 
          className="object-cover transform hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          priority={isPriority} 
        />
      </div>

      {/* Name and Price positioned absolutely at the bottom right */}
      <div className="absolute bottom-2 right-2 bg-white bg-opacity-70 px-3 py-2 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            {/* Price and Add to Cart Button */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Price */}
          <p className="text-lg font-semibold text-gray-700">${product.price}</p>

        </div>
            
        
      </div>
    </div>
  );
};

export default ShownProductCard;

