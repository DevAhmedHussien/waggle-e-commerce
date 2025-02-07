'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import RightSide from './RightSide';
import ReduxProvider from '@/redux/ReduxProvider';
import { validateEmail, validateFirstName, validateLastName, validateTelephone } from '@/constants/utils';
import ContactForm from './_steps/ContactForm';
import ShippingForm from './_steps/ShippingForm';
import PaymentForm from './_steps/PaymentForm';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [contact, setContact] = useState({ email: '', firstName:'', lastName:'', telephone:'', subscribe: false });
  const [shipping, setShipping] = useState({ country: '', address: '', apartment: '', city: '', state: '', zip: '' });
  const [payment, setPayment] = useState({ cardNumber: '', expiration: '', cvv: '', nameOnCard: '' });
  const [errors, setErrors] = useState({ email: '', firstName:'', lastName:'', telephone:'', })
  
  const firstNameError = validateFirstName(contact.firstName);
  const lastNameError = validateLastName(contact.lastName);
  const telephoneError = validateTelephone(contact.telephone);
  const emailError = validateEmail(contact.email);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (firstNameError || lastNameError || telephoneError  || emailError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }
    if (emailError ) {
      setErrors({ email: emailError});
      return;
    }

    // Clear errors and proceed with login
    setErrors({});
    console.log('Login attempt:',  contact.email );
    setStep(2); 
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    if (!shipping.lastName || !shipping.address || !shipping.city || !shipping.state || !shipping.zip) {
      alert('Please fill out all required fields.');
      return;
    }
    setStep(3); 
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

            {step === 1 && (
              <ContactForm handleContactSubmit={handleContactSubmit}contact={contact} setContact={setContact} setStep={setStep} errors={errors} setErrors={setErrors} />
            )}
            {step === 2 && (
              <ShippingForm handleShippingSubmit={handleShippingSubmit} shipping={shipping} setShipping={setShipping} setStep={setStep} />
            )}
            {step === 3 && (
              <PaymentForm handlePaymentSubmit={handlePaymentSubmit}payment={payment} setPayment={setPayment} />
            )}
          </div>
          <RightSide />
        </div>
      </div>
    </ReduxProvider>
  );
}
