import React, { useContext } from 'react';
import { motion } from 'motion/react';
import { NavigationContext } from '../App';
import { ArrowLeft } from 'lucide-react';
import '../styles/TermsScreen.css';

export function TermsScreen() {
  const { navigateTo } = useContext(NavigationContext);

  return (
    <div className="terms-screen">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="terms-container"
      >
        <button className="terms-back-button" onClick={() => navigateTo('settings')}>
          <ArrowLeft className="w-5 h-5" />
          Nazad
        </button>

        <header className="terms-header">
          <h1>Uslovi korišćenja</h1>
          <p className="terms-sub">GrowWithUs — osnovni uslovi korišćenja aplikacije</p>
        </header>

        <div className="terms-content">
          <div className="terms-card">
            <h2>Opšti uslovi</h2>
            <p>
              Dobrodošli u GrowWithUs. Ovo je dummy verzija Uslova korišćenja. Korišćenjem aplikacije
              prihvatate osnovna pravila: ne objavljujte zabranjeni sadržaj, poštujte tuđa prava i
              koristite aplikaciju odgovorno.
            </p>

            <h3>Deljenje sadržaja</h3>
            <p>
              Sadržaj koji pošaljete ostaje vaš; aplikacija može imati pravo da ga prikazuje unutar
              usluge radi prikaza i takmičenja (foto-izazovi).
            </p>

            <h3>Odgovornost</h3>
            <p>
              Aplikacija ne garantuje tačnost informacija i ne odgovara za eventualne štete nastale
              korišćenjem. Ovo je samo demo tekst; prilagodite ga po potrebi.
            </p>

            <p className="terms-footer">Kontakt: support@growwithus.com — Datum: 2025-12-02</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
