import { Checkbox } from '@/components/ui/checkbox'
import Input from '@/components/ui/input'
import { validateEmail, validateFirstName, validateLastName, validateTelephone } from '@/constants/utils'
import { Mail } from 'lucide-react'
import React from 'react'

const ContactForm = ({handleContactSubmit, contact, setContact, setStep, errors, setErrors }) => {

  return (
    <form onSubmit={handleContactSubmit} className="bg-white p-6 rounded-lg  shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                   label='First Name'
                   type="text"
                   id="firstName"
                   value={contact.firstName}
                   onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                   onBlur={() => setErrors({ ...errors, firstName: validateFirstName(contact.firstName) })}
                   error={errors.firstName}
                   placeholder="Enter your First Name"
                   required
                />
                <Input
                    label='Last Name'
                    type="text"
                    id="lastName"
                    value={contact.lastName}
                    onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                    onBlur={() => setErrors({ ...errors, lastName: validateLastName(contact.firstName) })}
                    error={errors.lastName}
                    placeholder="Enter your Last Name"
                    required
                />
                <Input
                    label='Email'
                    type="email"
                    id="email"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    onBlur={() => setErrors({ ...errors, email: validateEmail(contact.email) })}
                    error={errors.email}
                    placeholder="Enter your email"
                    required
                />
                <Input 
                    label='Telephone'
                    type="tel"
                    id="telephone"
                    value={contact.telephone}
                    onChange={(e) => setContact({ ...contact, telephone: e.target.value })}
                    onBlur={() => setErrors({ ...errors, telephone: validateTelephone(contact.telephone) })}
                    error={errors.telephone}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <div className="mt-6 mb-4">
            <div className="flex items-center space-x-2">
                <Checkbox id="Email" />
                    <label
                        htmlFor="Email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                    Email me with news and offers

                    </label>
                </div>
            
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Continue to Shipping
              </button>
            </form>
  )
}

export default ContactForm