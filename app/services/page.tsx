'use client';

import { motion } from 'framer-motion';
import { Building2, Droplets, Code2, Package, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t.services.btp.title,
      description: t.services.btp.description,
      gradient: 'from-orange-500 to-red-500',
      features: t.services.btp.features,
      benefits: t.servicesPage.benefits.btp
    },
    {
      icon: Droplets,
      title: t.services.water.title,
      description: t.services.water.description,
      gradient: 'from-blue-500 to-cyan-500',
      features: t.services.water.features,
      benefits: t.servicesPage.benefits.water
    },
    {
      icon: Code2,
      title: t.services.software.title,
      description: t.services.software.description,
      gradient: 'from-purple-500 to-pink-500',
      features: t.services.software.features,
      benefits: t.servicesPage.benefits.software
    },
    {
      icon: Package,
      title: t.services.commerce.title,
      description: t.services.commerce.description,
      gradient: 'from-green-500 to-emerald-500',
      features: t.services.commerce.features,
      benefits: t.servicesPage.benefits.commerce
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block neo-soft px-6 py-3 text-sm text-primary font-medium mb-6">
              {t.servicesPage.hero}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.nav.services}
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="neo-raised p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Column */}
                  <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                    <div className="neo-soft p-4 w-fit mb-6">
                      <service.icon
                        className={`w-12 h-12 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}
                        strokeWidth={2}
                      />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-lg mb-4">{t.servicesPage.servicesIncluded}</h3>
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="neo-button inline-flex items-center gap-2 px-6 py-3 font-semibold text-foreground hover:text-primary group"
                    >
                      {t.common.requestQuote}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right Column */}
                  <div className={index % 2 === 0 ? '' : 'md:order-1'}>
                    <div className="neo-card p-8">
                      <h3 className="font-semibold text-lg mb-6">{t.servicesPage.keyBenefits}</h3>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="neo-soft p-4"
                          >
                            <div className="flex items-start">
                              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-3 flex-shrink-0`}>
                                <CheckCircle className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-foreground/80 font-medium">{benefit}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="neo-raised p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.common.readyToStart}
              </h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                {t.common.ourTeam}
              </p>
              <Link
                href="/contact"
                className="neo-button inline-flex items-center gap-2 px-8 py-4 font-semibold text-foreground hover:text-primary group"
              >
                {t.common.contactUs}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}
