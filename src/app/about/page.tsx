'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  ClockIcon,
  GlobeAltIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Product Categories' },
    { number: '24/7', label: 'Customer Support' },
  ];

  const values = [
    {
      icon: UsersIcon,
      title: 'Customer First',
      description:
        "We prioritize our customers' needs and satisfaction above everything else.",
    },
    {
      icon: ClockIcon,
      title: 'Reliability',
      description: 'Consistent quality and timely service you can count on.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Innovation',
      description:
        'Staying ahead with the latest technology and electronics trends.',
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description:
        'Committed to delivering excellence in every product and service.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading the electronics industry with premium products and
              exceptional service for over 15 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2009, Madhavi Enterprises started as a small
                electronics store with a simple mission: to provide high-quality
                electronics products with exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Over the years, weve grown to become a trusted partner for
                thousands of customers, specializing in Samsung electronics and
                other premium brands. Our commitment to authenticity, quality,
                and customer satisfaction has been the cornerstone of our
                success.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to evolve with the latest technology trends
                while maintaining our core values of integrity, reliability, and
                excellence in everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="Our Store"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer
              satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Our Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                To be the leading electronics retailer by providing authentic,
                high-quality products from trusted brands like Samsung, coupled
                with exceptional customer service and competitive pricing.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We strive to make modern technology accessible to everyone while
                building lasting relationships with our customers through trust,
                reliability, and continuous innovation.
              </p>
              <div className="bg-blue-600 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-blue-100">
                  To become the most trusted name in electronics retail, known
                  for quality products, exceptional service, and innovation in
                  customer experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
