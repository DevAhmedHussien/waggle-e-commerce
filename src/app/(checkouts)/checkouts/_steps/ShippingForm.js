import Input from '@/components/ui/input'
import { MapPin } from 'lucide-react'
import React from 'react'

const ShippingForm = ({handleShippingSubmit, shipping, setShipping}) => {
  return (
    <form onSubmit={handleShippingSubmit} className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-bold mb-4 flex items-center">
      <MapPin className="w-5 h-5 mr-2" /> Shipping Address
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Input
      label='Country/Region'
      type="text"
      id="region"
      value={shipping.country}
      onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
    //   onBlur={() => setErrors({ ...errors, email: validateEmail(contact.email) })}
    //   error={errors.email}
      placeholder="United States"
      required
    />
    
      <div>
        <label className="block mb-2 text-sm font-medium">Address</label>
        <input
          type="text"
          value={shipping.address}
          onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Address"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Apartment, suite, etc. (optional)</label>
        <input
          type="text"
          value={shipping.apartment}
          onChange={(e) => setShipping({ ...shipping, apartment: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Apartment"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">City</label>
        <input
          type="text"
          value={shipping.city}
          onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="City"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">State</label>
        <input
          type="text"
          value={shipping.state}
          onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="State"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">ZIP code</label>
        <input
          type="text"
          value={shipping.zip}
          onChange={(e) => setShipping({ ...shipping, zip: e.target.value })}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="ZIP code"
          required
        />
      </div>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-4"
    >
      Continue to Payment
    </button>
  </form>
  )
}

export default ShippingForm