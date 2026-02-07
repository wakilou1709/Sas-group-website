'use client';

import { motion } from 'framer-motion';
import { Building2, Droplets, Code2, MapPin, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import Header from '../components/Header';

export default function ProjectsPage() {
  const { t } = useLanguage();

  const projects = t.projectsPage.projects.map((project: any, index: number) => ({
    ...project,
    date: ['2024-2025', '2025', '2023-2024', '2024', '2023', '2024'][index],
    icon: [Building2, Droplets, Building2, Code2, Building2, Code2][index],
    gradient: [
      'from-orange-500 to-red-500',
      'from-blue-500 to-cyan-500',
      'from-orange-500 to-red-500',
      'from-purple-500 to-pink-500',
      'from-orange-500 to-red-500',
      'from-purple-500 to-pink-500'
    ][index]
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
            <span className="inline-block neo-soft px-6 py-3 text-sm text-primary font-medium mb-6">
              {t.projectsPage.ourRealizations}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.projectsPage.hero}
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              {t.projectsPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="neo-card p-6 cursor-pointer group"
              >
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="neo-soft p-3 group-hover:scale-110 transition-transform">
                    <project.icon
                      className={`w-6 h-6 bg-gradient-to-br ${project.gradient} bg-clip-text text-transparent`}
                      strokeWidth={2.5}
                    />
                  </div>
                  <span className="text-xs text-foreground/60 font-medium">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Location & Date */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-foreground/60">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-foreground/60">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {project.date}
                  </div>
                </div>

                {/* Stats */}
                <div className="neo-inset p-3 rounded-lg">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-xs font-bold text-primary mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-foreground/50 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="neo-raised p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.projectsPage.inNumbers}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '200+', label: t.projectsPage.projectsCompleted, icon: Building2 },
                { value: '500+', label: t.projectsPage.satisfiedClients, icon: Users },
                { value: '15+', label: t.projectsPage.yearsExperience, icon: Calendar },
                { value: '2', label: t.projectsPage.countriesOperation, icon: MapPin },
              ].map((stat, index) => (
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
      </div>
    </div>
  );
}
