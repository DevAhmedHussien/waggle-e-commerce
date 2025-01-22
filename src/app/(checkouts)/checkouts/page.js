'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import RightSide from './RightSide';
import ReduxProvider from '@/app/ReduxProvider';

export default function Checkout() {
  const [step, setStep] = useState(1); // 1: Contact, 2: Shipping, 3: Payment
  const [contact, setContact] = useState({ email: '', phone: '', subscribe: false });
  const [shipping, setShipping] = useState({ country: '', firstName: '', lastName: '', address: '', apartment: '', city: '', state: '', zip: '' });
  const [payment, setPayment] = useState({ cardNumber: '', expiration: '', cvv: '', nameOnCard: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contact.email && !contact.phone) {
      alert('Please enter an email or phone number.');
      return;
    }
    setStep(2); // Move to Shipping
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    if (!shipping.lastName || !shipping.address || !shipping.city || !shipping.state || !shipping.zip) {
      alert('Please fill out all required fields.');
      return;
    }
    setStep(3); // Move to Payment
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!payment.cardNumber || !payment.expiration || !payment.cvv || !payment.nameOnCard) {
      alert('Please fill out all payment details.');
      return;
    }
    alert('Payment successful!');
  };

  return (
    <ReduxProvider>

    <div className="container mt-20 min-h-[90vh] mx-auto p-4 md:p-8">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Column: Steps */}
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Checkout</h1>
          <div className="mb-6">
            <div className="flex space-x-4 mb-4">
              <span className={`flex items-center font-bold ${step === 1 ? 'text-blue-500' : 'text-gray-500'}`}>
                {step > 1 ? <CheckCircle className="w-4 h-4 mr-2" /> : null} 1. Contact
              </span>
              <span className={`flex items-center font-bold ${step === 2 ? 'text-blue-500' : 'text-gray-500'}`}>
                {step > 2 ? <CheckCircle className="w-4 h-4 mr-2" /> : null} 2. Shipping
              </span>
              <span className={`flex items-center font-bold ${step === 3 ? 'text-blue-500' : 'text-gray-500'}`}>
                3. Payment
              </span>
            </div>
          </div>

          {/* Step 1: Contact */}
          {step === 1 && (
            <form onSubmit={handleContactSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Contact Information
              </h2>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Email or mobile phone number</label>
                <input
                  type="text"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email or phone"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center text-sm font-medium">
                  <input
                    type="checkbox"
                    checked={contact.subscribe}
                    onChange={(e) => setContact({ ...contact, subscribe: e.target.checked })}
                    className="mr-2"
                  />
                  Email me with news and offers
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Continue to Shipping
              </button>
            </form>
          )}

          {/* Step 2: Shipping */}
          {step === 2 && (
            <form onSubmit={handleShippingSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" /> Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Country/Region</label>
                  <input
                    type="text"
                    value={shipping.country}
                    onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="United States"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">First name (optional)</label>
                  <input
                    type="text"
                    value={shipping.firstName}
                    onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Last name</label>
                  <input
                    type="text"
                    value={shipping.lastName}
                    onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Last name"
                    required
                  />
                </div>
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
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <form onSubmit={handlePaymentSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2" /> Payment
              </h2>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Card number</label>
                <input
                  type="text"
                  value={payment.cardNumber}
                  onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Card number"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Expiration date</label>
                  <input
                    type="text"
                    value={payment.expiration}
                    onChange={(e) => setPayment({ ...payment, expiration: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    value={payment.cvv}
                    onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="CVV"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">Name on card</label>
                <input
                  type="text"
                  value={payment.nameOnCard}
                  onChange={(e) => setPayment({ ...payment, nameOnCard: e.target.value })}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Name on card"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Pay Now
              </button>
            </form>
          )}
        </div>

        <RightSide/>
      </div>
    </div>
    </ReduxProvider>

  );
}