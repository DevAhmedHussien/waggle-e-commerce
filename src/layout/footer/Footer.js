import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  // Data for quick links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  // Data for customer support
  const customerSupport = [
    { name: "Shipping Information", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  // Data for social media links
  const socialMedia = [
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    { icon: <Youtube size={20} />, href: "https://youtube.com" },
  ];

  // Data for payment methods
  const paymentMethods = [
    { src: "/images/bag.png", alt: "Visa" },
    { src: "/images/bag.png", alt: "Mastercard" },
    { src: "/images/bag.png", alt: "PayPal" },
    { src: "/images/bag.png", alt: "Amazon Pay" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-500 pb-2">Customer Support</h3>
            <ul className="space-y-2">
              {customerSupport.map((support, index) => (
                <li key={index}>
                  <Link
                    href={support.href}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    {support.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-500 pb-2">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-500 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Your E-commerce Store. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {paymentMethods.map((payment, index) => (
                <Image
                  key={index}
                  src={payment.src}
                  alt={payment.alt}
                  width={50}
                  height={30}
                  className="object-contain"
                  sizes="(max-width: 768px) 50px, (max-width: 1024px) 70px, 100px"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
