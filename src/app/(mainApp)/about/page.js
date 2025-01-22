// app/about/page.js
import { Leaf, Heart, Shield, Users, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Waggele Clothing Store',
  description: 'Discover the story behind Waggele, your go-to destination for stylish and sustainable clothing. Learn about our mission, values, and commitment to quality.',
  keywords: 'about Waggele, Waggele story, sustainable clothing, fashion brand, Waggele mission',
  openGraph: {
    title: 'About Us - Waggele Clothing Store',
    description: 'Discover the story behind Waggele, your go-to destination for stylish and sustainable clothing.',
    images: [
      {
        url: '/images/about-us.jpg', // Add a relevant image for the page
        width: 1200,
        height: 630,
        alt: 'Waggele Team',
      },
    ],
  },
};

export default function AboutUs() {
  return (
    <div className="container mt-20 mx-auto p-8">
      {/* Headline */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        About <span className="text-blue-500">Waggele</span>
      </h1>

      {/* Introduction */}
      <section className="mb-12 text-center">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to <strong className="text-blue-500">Waggele</strong>, your go-to destination for stylish, sustainable, and high-quality clothing. We believe that fashion should not only look good but also do good for the planet.
        </p>
      </section>

      {/* Story */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center justify-center">
          <Leaf className="w-6 h-6 mr-2 text-blue-500" /> Our Story
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          Founded in 2023, Waggele was born out of a passion for fashion and a commitment to sustainability. Our journey began with a simple idea: to create clothing that is both trendy and eco-friendly. Today, we are proud to offer a wide range of products that cater to every style while minimizing our environmental impact.
        </p>
      </section>

      {/* Values */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center justify-center">
          <Heart className="w-6 h-6 mr-2 text-blue-500" /> Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sustainability */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Leaf className="w-8 h-8 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Sustainability</h3>
            <p className="text-gray-700">We use eco-friendly materials and ethical production practices.</p>
          </div>

          {/* Quality */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="w-8 h-8 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Quality</h3>
            <p className="text-gray-700">Every piece is crafted with care to ensure durability and comfort.</p>
          </div>

          {/* Inclusivity */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-8 h-8 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Inclusivity</h3>
            <p className="text-gray-700">Our collections are designed for everyone, regardless of age, size, or gender.</p>
          </div>

          {/* Innovation */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Heart className="w-8 h-8 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">Innovation</h3>
            <p className="text-gray-700">We constantly explore new ways to reduce waste and improve our processes.</p>
          </div>
        </div>
      </section>

      {/* Team (Optional) */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center justify-center">
          <Users className="w-6 h-6 mr-2 text-blue-500" /> Meet the Team
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          Behind Waggele is a team of passionate individuals who are dedicated to making a difference. From designers to customer service representatives, we work together to bring you the best shopping experience.
        </p>
      </section>

      {/* Call-to-Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center justify-center">
          <ShoppingBag className="w-6 h-6 mr-2 text-blue-500" /> Join the Waggele Family
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Explore our collections and discover the perfect pieces for your wardrobe. Together, we can make fashion sustainable.
        </p>
        <Link
          href="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 inline-flex items-center"
        >
          <ShoppingBag className="w-5 h-5 mr-2" /> Shop Now
        </Link>
      </section>
    </div>
  );
}