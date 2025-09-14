import Link from 'next/link';
import Image from 'next/image';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Madhavi Enterprises"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">MADHVI ENTERPRISES</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for AC sales and premium electronics. We specialize in
              Fridge, Washing Machine, Microwave, AC sales, and AC fitting services with quality
              electronics solutions for homes and businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <a href="tel:+918423613616" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91 84236 13616
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">
                  amitrawatlgjhs@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">
                  Kisan Bazar, Galla Mandi Road, Jhansi near Bus Stand, 284001, 284002, 284004
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Air Conditioners</span>
              </li>
              <li>
                <span className="text-gray-300">Refrigerators</span>
              </li>
              <li>
                <span className="text-gray-300">Washing Machines</span>
              </li>
              <li>
                <span className="text-gray-300">Microwaves</span>
              </li>
              <li>
                <span className="text-gray-300">AC Fitting & Piping</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2025 MADHVI ENTERPRISES. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
