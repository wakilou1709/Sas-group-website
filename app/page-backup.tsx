'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Wateri from './components/Wateri';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Wateri />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
