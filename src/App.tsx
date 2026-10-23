/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstagramHighlights } from './components/InstagramHighlights';
import { KeyDropShowcase } from './components/KeyDropShowcase';
import { PropertyCatalog } from './components/PropertyCatalog';
import { StepnogorskGuide } from './components/StepnogorskGuide';
import { WhyRieltcom } from './components/WhyRieltcom';
import { ServicesSection } from './components/ServicesSection';
import { MortgageCalculator } from './components/MortgageCalculator';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { EvaluationLeadForm } from './components/EvaluationLeadForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedRooms, setSelectedRooms] = useState<string>('Все');
  const [selectedMicrodistrict, setSelectedMicrodistrict] = useState<string>('Все микрорайоны');

  const handleQuickFilter = (rooms: string, microdistrict: string) => {
    setSelectedRooms(rooms);
    setSelectedMicrodistrict(microdistrict);
  };

  const handleHighlightSelect = (category: string) => {
    setSelectedRooms(category);
  };

  const handleGuideMicrodistrictSelect = (microdistrict: string) => {
    setSelectedMicrodistrict(microdistrict);
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Navigation */}
      <Header />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onQuickFilter={handleQuickFilter}
          selectedRooms={selectedRooms}
          selectedMicrodistrict={selectedMicrodistrict}
        />

        {/* Instagram Highlight Circles (Directly matching user screenshot) */}
        <InstagramHighlights
          activeFilter={selectedRooms}
          onSelectHighlight={handleHighlightSelect}
        />

        {/* Interactive Key Drop Animation into Entryway Tray */}
        <KeyDropShowcase />

        {/* Real Estate Listings Catalog */}
        <PropertyCatalog
          selectedRooms={selectedRooms}
          selectedMicrodistrict={selectedMicrodistrict}
          onFilterChange={handleQuickFilter}
        />

        {/* Stepnogorsk Microdistricts & Prices Guide */}
        <StepnogorskGuide
          onSelectMicrodistrict={handleGuideMicrodistrictSelect}
        />

        {/* Why Choose RIELTCOM (Comparison Table) */}
        <WhyRieltcom />

        {/* Core Services Section (Editorial Asymmetric Bento) */}
        <ServicesSection />

        {/* Interactive Kazakhstan Mortgage Calculator */}
        <MortgageCalculator />

        {/* About Agency & Erbol Nursiitov */}
        <AboutSection />

        {/* Client Reviews */}
        <ReviewsSection />

        {/* Free Property Evaluation & Lead Capture Form */}
        <EvaluationLeadForm />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
