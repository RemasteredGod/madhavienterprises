'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function Services() {
  const productCategories = [
    {
      icon: HomeIcon,
      title: 'Air Conditioners',
      description: 'Premium ACs with energy efficiency and smart features',
      image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop&auto=format',
    },
    {
      icon: HomeIcon,
      title: 'Refrigerators',
      description: 'Energy efficient fridges with advanced cooling technology',
      image: '/images/samsung-refrigerator.jpg',
    },
    {
      icon: HomeIcon,
      title: 'Washing Machines',
      description: 'Smart washing machines with multiple wash programs',
      image: '/images/washing-machine.jpg',
    },
    {
      icon: HomeIcon,
      title: 'Microwaves',
      description: 'Digital microwave ovens with advanced cooking features',
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=300&fit=crop&auto=format',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'AC Fitting',
      description: 'Professional AC fitting and connection services',
      image: '/images/metal-pipes.jpg',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'AC Installation',
      description: 'Complete AC installation and setup services',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&auto=format',
    },
  ];

  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Warranty Support',
      description: 'Comprehensive warranty coverage and support for all products',
    },
    {
      icon: TruckIcon,
      title: 'Fast Delivery',
      description: 'Quick and secure delivery to your doorstep within 24-48 hours',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'AC Fitting',
      description: 'Professional AC fitting and connection services',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'AC Installation',
      description: 'Complete AC installation and setup services',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white min-h-[60vh] flex items-center">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 mb-6">
              <span className="text-yellow-400 text-sm font-medium">
                🔧 Our Services
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Products & Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                For Your Home
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Premium ACs, home appliances, and professional installation services. 
              Quality products with expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">Product Categories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Sell
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete range of home appliances and professional services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional support and services for all your home appliance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
