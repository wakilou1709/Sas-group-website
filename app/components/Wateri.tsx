'use client';

import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function Wateri() {
  const { t } = useLanguage();

  const features = [
    {
      icon: '📡',
      title: t.wateri.features.iot.title,
      description: t.wateri.features.iot.description,
    },
    {
      icon: '💳',
      title: t.wateri.features.prepaid.title,
      description: t.wateri.features.prepaid.description,
    },
    {
      icon: '🚰',
      title: t.wateri.features.leaks.title,
      description: t.wateri.features.leaks.description,
    },
    {
      icon: '📊',
      title: t.wateri.features.analytics.title,
      description: t.wateri.features.analytics.description,
    },
  ];

  return (
    <section id="wateri" className="section-padding bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 font-semibold mb-4">
            💧 SOLUTION PHARE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t.wateri.title}
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-6 max-w-3xl mx-auto">
            {t.wateri.subtitle}
          </p>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto">
            {t.wateri.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 card-hover border border-white/20"
              style={{
                animation: 'slideUp 0.6s ease-out',
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Visual Demo Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Illustration/Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-gray-800 font-bold text-lg">Dashboard Wateri</h4>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-4 shadow-xl animate-float">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs">Connecté</div>
                </div>
              </div>
            </div>

            {/* Right: Key Benefits */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Pourquoi Wateri?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Réduction des pertes d'eau</h4>
                    <p className="text-blue-100">Jusqu'à 40% de réduction grâce à la détection précoce</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Amélioration du recouvrement</h4>
                    <p className="text-blue-100">Paiement prépayé pour un recouvrement à 100%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Gestion en temps réel</h4>
                    <p className="text-blue-100">Surveillance 24/7 de votre réseau de distribution</p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                {t.wateri.cta} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
