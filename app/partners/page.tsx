'use client';

import { motion } from 'framer-motion';
import { Building2, Handshake, Globe, Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';

export default function PartnersPage() {
  const { t } = useLanguage();

  const partners = t.partnersPage.partners.map((partner: any, index: number) => ({
    ...partner,
    logo: ['🌐', '🇹🇿', '⚡', '💧', '🚰', '☁️', '🎓', '🏦'][index],
    website: index === 0 ? 'https://www.thethingsstack.com' : index === 5 ? 'https://aws.amazon.com' : '#',
    gradient: [
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-blue-500 to-cyan-500',
      'from-cyan-500 to-blue-500',
      'from-orange-500 to-red-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-500'
    ][index]
  }));

  const certifications = t.partnersPage.certifications.map((cert: any) => ({
    ...cert,
    icon: Award
  }));

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
              <span className="inline-flex items-center gap-2 neo-soft px-6 py-3 text-sm text-primary font-medium mb-6">
                <Handshake className="w-4 h-4" />
                {t.partnersPage.hero}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t.partnersPage.hero}
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                {t.partnersPage.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.partnersPage.strategicPartners}
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                {t.partnersPage.strategicPartnersDesc}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="neo-card p-6 group cursor-pointer"
                >
                  {/* Logo */}
                  <div className="neo-soft p-4 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-4xl">{partner.logo}</div>
                  </div>

                  {/* Category */}
                  <span className="inline-block text-xs text-primary font-medium mb-2 neo-soft px-3 py-1">
                    {partner.category}
                  </span>

                  {/* Name */}
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                    {partner.description}
                  </p>

                  {/* Link */}
                  {partner.website !== '#' && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      {t.common.visitWebsite}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.partnersPage.certifications}
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                {t.partnersPage.certificationsDesc}
              </p>
            </motion.div>

            <div className="neo-raised p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="neo-soft p-4 w-fit mx-auto mb-4">
                      <cert.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{cert.title}</h3>
                    <p className="text-sm text-foreground/70">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
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
                <Handshake className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.partnersPage.becomePartnerTitle}
                </h2>
                <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                  {t.partnersPage.becomePartnerDesc}
                </p>
                <a
                  href="/contact"
                  className="neo-button inline-flex items-center gap-2 px-8 py-4 font-semibold text-foreground hover:text-primary group"
                >
                  {t.common.contactUs}
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
