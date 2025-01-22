// app/contact/page.js
import { Mail, Truck, RefreshCw, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - Waggele Clothing Store',
  description: 'Get in touch with Waggele for support, order tracking, refunds, and more. We’re here to help you with any questions or concerns.',
  keywords: 'contact Waggele, Waggele support, order tracking, refund policy, customer service',
  openGraph: {
    title: 'Contact Us - Waggele Clothing Store',
    description: 'Get in touch with Waggele for support, order tracking, refunds, and more. We’re here to help you with any questions or concerns.',
    images: [
      {
        url: '/images/contact-us.jpg', // Add a relevant image for the page
        width: 1200,
        height: 630,
        alt: 'Waggele Contact Us',
      },
    ],
  },
};

export default function ContactUs() {
  return (
    <div className="container mt-20 mx-auto p-8">
      {/* Headline */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Contact <span className="text-blue-500">Waggele</span>
      </h1>

      {/* Introduction */}
      <section className="mb-12 text-center">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We’re here to help! Whether you need support, want to track your order, or have a refund request, our team is ready to assist you. Reach out to us via email, phone, or visit our store.
        </p>
      </section>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Support */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Mail className="w-8 h-8 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Support</h3>
          <p className="text-gray-700 mb-4">
            Have questions or need assistance? Our support team is here to help.
          </p>
          <a
            href="mailto:support@waggele.com"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            support@waggele.com
          </a>
        </div>

        {/* Order Tracking */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Truck className="w-8 h-8 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Order Tracking</h3>
          <p className="text-gray-700 mb-4">
            Track your order status or get updates on your shipment.
          </p>
          <a
            href="mailto:tracking@waggele.com"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            tracking@waggele.com
          </a>
        </div>

        {/* Refunds */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <RefreshCw className="w-8 h-8 mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-800">Refunds</h3>
          <p className="text-gray-700 mb-4">
            Request a refund or get help with our refund policy.
          </p>
          <a
            href="mailto:refunds@waggele.com"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            refunds@waggele.com
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center justify-center">
          <Phone className="w-6 h-6 mr-2 text-blue-500" /> Send Us a Message
        </h2>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Store Location */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center justify-center">
          <MapPin className="w-6 h-6 mr-2 text-blue-500" /> Visit Us
        </h2>
        <p className="text-gray-700 mb-6">
          Come visit our store and experience the Waggele difference in person.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-gray-700">
            <strong>Address:</strong> 123 Fashion Street, New York, NY 10001
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
        </div>
      </section>
    </div>
  );
}