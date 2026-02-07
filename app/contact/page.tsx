'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement actual form submission
    setTimeout(() => {
      alert(t.contact.send + ' - Success!');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              {t.contactPage.hero}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="neo-raised p-8"
              >
                <h2 className="text-2xl font-bold mb-6">{t.contactPage.sendMessage}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        {t.contact.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full neo-input px-4 py-3 text-foreground focus:outline-none"
                        placeholder={t.contactPage.placeholders.name}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        {t.contact.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full neo-input px-4 py-3 text-foreground focus:outline-none"
                        placeholder={t.contactPage.placeholders.email}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        {t.contact.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full neo-input px-4 py-3 text-foreground focus:outline-none"
                        placeholder={t.contactPage.placeholders.phone}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                        {t.contactPage.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full neo-input px-4 py-3 text-foreground focus:outline-none"
                        placeholder={t.contactPage.placeholders.company}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                      {t.contactPage.serviceConcerned}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full neo-input px-4 py-3 text-foreground focus:outline-none"
                    >
                      <option value="">{t.contactPage.selectService}</option>
                      <option value="btp">{t.services.btp.title}</option>
                      <option value="water">{t.services.water.title}</option>
                      <option value="software">{t.services.software.title}</option>
                      <option value="commerce">{t.services.commerce.title}</option>
                      <option value="other">{t.contactPage.other}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      {t.contact.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full neo-input px-4 py-3 text-foreground focus:outline-none resize-none"
                      placeholder={t.contactPage.describeProject}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="neo-button w-full md:w-auto px-8 py-4 font-semibold inline-flex items-center justify-center gap-2 text-foreground hover:text-primary disabled:opacity-50"
                  >
                    {isSubmitting ? t.contactPage.sending : t.contact.send}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Burkina Faso */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="neo-card p-6"
              >
                <div className="text-4xl mb-4">🇧🇫</div>
                <h3 className="text-xl font-bold mb-4">{t.contact.burkina.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{t.contact.burkina.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">+226 XX XX XX XX</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">contact@sas-group.com</span>
                  </div>
                </div>
              </motion.div>

              {/* Tanzania */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="neo-card p-6"
              >
                <div className="text-4xl mb-4">🇹🇿</div>
                <h3 className="text-xl font-bold mb-4">{t.contact.tanzania.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{t.contact.tanzania.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">+255 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">tanzania@sas-group.com</span>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="neo-soft p-6"
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-bold">{t.contactPage.hours}</h3>
                </div>
                <div className="space-y-2 text-sm text-foreground/70">
                  <div className="flex justify-between">
                    <span>{t.contactPage.mondayFriday}</span>
                    <span className="font-semibold">8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.contactPage.saturday}</span>
                    <span className="font-semibold">9h00 - 13h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.contactPage.sunday}</span>
                    <span className="font-semibold text-red-500">{t.contactPage.closed}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
