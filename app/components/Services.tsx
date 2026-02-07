'use client';

import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      key: 'btp',
      icon: '🏗️',
      gradient: 'from-orange-500 to-red-600',
      data: t.services.btp,
    },
    {
      key: 'water',
      icon: '💧',
      gradient: 'from-blue-500 to-cyan-600',
      data: t.services.water,
    },
    {
      key: 'software',
      icon: '💻',
      gradient: 'from-purple-500 to-indigo-600',
      data: t.services.software,
    },
    {
      key: 'commerce',
      icon: '🌍',
      gradient: 'from-green-500 to-emerald-600',
      data: t.services.commerce,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.key}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              style={{
                animation: 'slideUp 0.6s ease-out',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-9xl opacity-10 transform rotate-12">
                  {service.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {service.data.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  {service.data.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button
                  className={`mt-6 w-full py-3 rounded-lg font-semibold bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
