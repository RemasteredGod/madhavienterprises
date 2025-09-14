'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingBagIcon,
  TruckIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function Home() {
  const features = [
    {
      icon: ShoppingBagIcon,
      title: 'Premium AC & Electronics',
      description:
        'Authentic ACs, Fridges, Washing Machines, and Microwaves with warranty',
    },
    {
      icon: TruckIcon,
      title: 'AC Fitting Services',
      description: 'Professional AC installation and piping services',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality Assured',
      description: '100% genuine products with manufacturer warranty',
    },
  ];


  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-400 text-sm font-medium">
                  ✨ AC Sales & Electronics Store
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                AC Sales & Electronics
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  For Modern Living
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-2xl">
                Discover premium ACs, Fridges, Washing Machines, and Microwaves. Quality
                products, competitive prices, and exceptional AC fitting services you can
                trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="group bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <ShoppingBagIcon className="w-5 h-5 mr-2" />
                  Shop Now
                  <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center backdrop-blur-sm flex items-center justify-center"
                >
                  Learn More
                  <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-blue-200 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=400&fit=crop"
                  alt="Electronics Store"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-xl font-semibold shadow-lg">
                  Same day available engineer!
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 px-4 py-2 rounded-xl font-semibold shadow-lg">
                  Genuine Products ✓
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose MADHVI ENTERPRISES?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re committed to providing the best AC sales and electronics shopping
              experience with quality products and exceptional AC fitting services that
              exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-6 py-3 mb-8">
              <span className="text-yellow-400 font-medium">
                🚀 Ready to Upgrade?
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Upgrade Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Electronics?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Contact us today for personalized recommendations and competitive
              pricing on premium electronics. Join thousands of satisfied
              customers!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Get In Touch
                <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="flex items-center space-x-4 text-gray-300">
                <div className="flex items-center">
                  <ShieldCheckIcon className="w-5 h-5 mr-2 text-green-400" />
                  <span>Warranty Included</span>
                </div>
                <div className="flex items-center">
                  <TruckIcon className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Same day available engineer</span>
                </div>
              </div>
            </div>

            {/* Customer testimonial or trust badges */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">⭐⭐⭐⭐⭐</div>
                <div className="text-gray-300">4.9/5 Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-gray-300">100% Genuine Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚚</div>
                <div className="text-gray-300">Same Day Delivery</div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
