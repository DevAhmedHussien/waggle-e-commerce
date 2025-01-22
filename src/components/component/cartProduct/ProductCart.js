const ProductCart = ({item, handleUpdateQuantity, handleRemoveItem, editable = true}) => {

    // handle Quantity
    const handleQuantity = (id, quantity)=>{
        handleUpdateQuantity(id, quantity)
    }
    // handle Remove
    const HandleRemove = (id) =>{
      handleRemoveItem(id)
    }

  return (
    <div key={item.id} className="flex items-center gap-4 mb-4 border-b border-gray-200 pb-4">
              {/* Product Image */}
              {item.images && item.images.length > 0 && (
                <img
                  src={item.images[0].url} // Display the first image
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg shadow-sm"
                />
              )}

              {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <h5 className="font-semibold  text-gray-500">{item.selectedProduct.color} / {item.selectedProduct.size} </h5>
                  
                  {/* <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p> */}

                  {/* Quantity Controls and Remove Button */}
                  <div className="flex items-center justify-between mt-2">
                  
                  {!editable &&  
                    <>
                      <h5 className="w-8 text-center text-gray-500">{item.quantity}</h5>
                      <span className="w-8 text-center text-gray-500"> $ {item.price * item.quantity}</span>
                    </>
                  
                    
                  }

                  
                  {/* Quantity Controls */}
                  {editable && 
                    <div className="flex items-center gap-2">
                     
                      <button
                        onClick={() =>  handleQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <span className="text-gray-700">−</span>
                      </button>
                      <span className="w-8 text-center text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <span className="text-gray-700">+</span>
                      </button>
                    </div> } 
                  

                    {/* Remove Button */}
                    {editable && 
                     <button
                     onClick={() => HandleRemove(item.id)}
                     className="text-sm text-red-500 hover:text-red-700 transition-colors"
                    >
                      Remove
                    </button>
                    }
                   
                  </div>
                </div>
            </div>
  )
}
export default ProductCart