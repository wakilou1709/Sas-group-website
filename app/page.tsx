'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Building2,
  Droplets,
  Code2,
  Package,
  ArrowRight,
  Sparkles,
  Zap,
  Award,
  Users,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from './lib/LanguageContext';
import Header from './components/Header';
import Logo from './components/Logo';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t.services.btp.title,
      description: t.services.btp.description,
      gradient: 'from-orange-500 to-red-500',
      features: t.services.btp.features
    },
    {
      icon: Droplets,
      title: t.services.water.title,
      description: t.services.water.description,
      gradient: 'from-blue-500 to-cyan-500',
      features: t.services.water.features
    },
    {
      icon: Code2,
      title: t.services.software.title,
      description: t.services.software.description,
      gradient: 'from-purple-500 to-pink-500',
      features: t.services.software.features
    },
    {
      icon: Package,
      title: t.services.commerce.title,
      description: t.services.commerce.description,
      gradient: 'from-green-500 to-emerald-500',
      features: t.services.commerce.features
    },
  ];

  const stats = [
    { icon: Award, value: '15+', label: t.stats.experience },
    { icon: Users, value: '500+', label: t.stats.clients },
    { icon: Code2, value: '200+', label: t.stats.projects },
    { icon: TrendingUp, value: '2', label: t.stats.countries },
  ];

  return (
    <div className="relative">
      <Header />

      {/* Hero Section - Style Wapiki EXACT */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo 3D animé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut"
              }}
              className="mb-8 flex justify-center"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  rotateY: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  filter: "drop-shadow(0 10px 30px rgba(0, 180, 216, 0.4))"
                }}
              >
                <Logo className="h-32 w-auto md:h-40" animated={true} />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 neo-soft text-sm text-primary font-medium">
                <Sparkles className="w-4 h-4" />
                {t.common.excellenceInnovation}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {t.hero.title}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              <span className="gradient-text">{t.hero.subtitle}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#services"
                className="group neo-button px-8 py-4 font-semibold inline-flex items-center justify-center gap-2 hover:gap-4 text-foreground hover:text-primary"
              >
                {t.hero.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 neo-soft font-semibold inline-flex items-center justify-center gap-2 text-foreground hover:text-primary"
              >
                {t.hero.ctaSecondary}
                <Zap className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section - Style Wapiki EXACT */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t.nav.services}</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group neo-card p-6 cursor-pointer"
              >
                <div className="neo-soft p-4 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className={`w-7 h-7 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-foreground/60 text-xs">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wateri Section - Style Wapiki */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="neo-raised p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-6 py-3 neo-soft text-sm text-primary font-medium mb-6">
                  <Droplets className="w-4 h-4" />
                  {t.wateri.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.wateri.title}
                </h2>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  {t.wateri.description}
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: '📡', ...t.wateri.features.iot },
                  { icon: '💳', ...t.wateri.features.prepaid },
                  { icon: '🚰', ...t.wateri.features.leaks },
                  { icon: '📊', ...t.wateri.features.analytics },
                ].map((feature, idx) => (
                  <div key={idx} className="neo-soft p-4 text-center">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h3 className="font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-foreground/60 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Style Wapiki EXACT */}
      <section className="py-20 relative">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="neo-raised p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="neo-soft p-3 w-fit mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground/70 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Style Wapiki */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Burkina Faso */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="neo-card p-8"
            >
              <div className="text-5xl mb-4">🇧🇫</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.contact.burkina.title}</h3>
              <div className="space-y-3 text-foreground/70">
                <p className="flex items-center gap-2">
                  <span>📍</span> {t.contact.burkina.address}
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span> +226 XX XX XX XX
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span> contact@sas-group.com
                </p>
              </div>
            </motion.div>

            {/* Tanzania */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="neo-card p-8"
            >
              <div className="text-5xl mb-4">🇹🇿</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{t.contact.tanzania.title}</h3>
              <div className="space-y-3 text-foreground/70">
                <p className="flex items-center gap-2">
                  <span>📍</span> {t.contact.tanzania.address}
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span> +255 XX XXX XXXX
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span> tanzania@sas-group.com
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Style Wapiki EXACT */}
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
                {t.common.readyToStartDesc}
              </p>
              <a
                href="#contact"
                className="neo-button inline-flex items-center gap-2 px-8 py-4 font-semibold text-foreground hover:text-primary group"
              >
                {t.common.contactUs}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Style Wapiki */}
      <footer className="py-12 neo-raised">
        <div className="container mx-auto px-6 text-center">
          <Logo className="h-20 w-auto mx-auto mb-6" animated={true} />
          <p className="text-foreground/70 mb-6">
            {t.footer.description}
          </p>
          <p className="text-foreground/50 text-sm">
            © 2026 SAS Group. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
