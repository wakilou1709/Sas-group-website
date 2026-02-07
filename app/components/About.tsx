'use client';

import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.about.mission}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.about.missionText}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.about.vision}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t.about.visionText}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{t.about.values}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.valuesItems.map((value, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300 card-hover"
                style={{
                  animation: 'slideUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">
                    {index === 0 ? '⭐' : index === 1 ? '💡' : index === 2 ? '🌱' : '🤝'}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">Nos Implantations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Burkina Faso */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🇧🇫</div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Burkina Faso</h4>
                  <p className="text-blue-100 mb-1">Ouagadougou</p>
                  <p className="text-sm text-blue-200">Siège social</p>
                </div>
              </div>
            </div>

            {/* Tanzania */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-start">
                <div className="text-4xl mr-4">🇹🇿</div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Tanzania</h4>
                  <p className="text-blue-100 mb-1">Dar es Salaam</p>
                  <p className="text-sm text-blue-200">Bureau régional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
