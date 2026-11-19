import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId, STUDIO_CONTACT } from '../data/architectureData';
import { BlueprintGeometry } from './BlueprintGeometry';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const PRIMARY_NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'studio', label: 'Studio' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
];

const ALL_SEVEN_PAGES: { id: PageId; num: string; title: string; subtitle: string }[] = [
  { id: 'home', num: '01', title: 'Monograph Home', subtitle: 'Featured Residences, Philosophy & Global Directory' },
  { id: 'projects', num: '02', title: 'Residential Projects', subtitle: '8 Recent Real-Life Commissions & Dossiers' },
  { id: 'studio', num: '03', title: 'Studio & Practice', subtitle: 'Leadership, Swiss-Grid Ethos & Recognition' },
  { id: 'services', num: '04', title: 'Services & Scope', subtitle: 'Architecture, Interiors, Landscape & Advisory' },
  { id: 'process', num: '05', title: 'Design Process', subtitle: '5-Phase Blueprint Methodology & Material Archive' },
  { id: 'testimonials', num: '06', title: 'Client Testimonials', subtitle: 'Homeowner Outcomes & Verified Case Proof' },
  { id: 'contact', num: '07', title: 'Contact — Khandagiri', subtitle: 'Bhubaneswar Headquarters & Inquiry Form' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const isDarkHeroHeader = currentPage === 'home' && !isScrolled && !menuOpen;

  const handleSelectPage = (page: PageId) => {
    setMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-200 ${
          isDarkHeroHeader
            ? 'bg-gradient-to-b from-[#080808]/85 via-[#080808]/45 to-transparent text-white border-b border-white/15'
            : 'bg-[#080808]/95 backdrop-blur-sm text-white border-b border-white/15'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-8 px-6 md:px-10">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleSelectPage('home')}
            className="text-left text-base font-semibold tracking-[0.16em] uppercase text-white transition-colors hover:text-[#C5A059] whitespace-nowrap shrink-0 cursor-pointer"
          >
            ABC Architecture
          </button>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {PRIMARY_NAV_ITEMS.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectPage(item.id)}
                  className={`relative py-1 text-xs font-medium tracking-[0.14em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active ? 'text-[#C5A059]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-[#C5A059] transition-all duration-200 ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Minimal Top-Right CONTACT Link + Menu Icon */}
          <div className="flex items-center gap-5 shrink-0">
            <button
              type="button"
              onClick={() => handleSelectPage('contact')}
              className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer py-2 ${
                currentPage === 'contact'
                  ? 'text-[#C5A059] underline underline-offset-8 decoration-[#C5A059]'
                  : 'text-white hover:text-[#C5A059]'
              }`}
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation index' : 'Open 7-page navigation index'}
              className="flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer shrink-0"
            >
              {menuOpen ? <X className="h-4 w-4" strokeWidth={1.5} /> : <Menu className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Swiss Grid 7-Page Index Drawer */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site Directory"
          className="fixed inset-0 z-40 overflow-y-auto bg-[#080808] pt-16 text-white"
        >
          <div className="relative min-h-[calc(100vh-4rem)]">
            <BlueprintGeometry variant="hero" theme="dark" />
            <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12 border-b border-white/15">
              {/* Left Column: 7-Page Architectural Index */}
              <div className="lg:col-span-8 lg:border-r border-white/15">
                <div className="border-b border-white/15 px-6 py-5 md:px-10">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C5A059]">
                    Architectural Directory — 07 Pages
                  </span>
                </div>
                <div className="divide-y divide-white/15">
                  {ALL_SEVEN_PAGES.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectPage(item.id)}
                        className="group flex w-full items-center justify-between gap-6 px-6 py-6 md:px-10 text-left transition-colors hover:bg-white/[0.04] cursor-pointer"
                      >
                        <div className="flex items-baseline gap-6">
                          <span className="font-mono text-xs tabular-nums text-[#C5A059]">
                            {item.num}
                          </span>
                          <div>
                            <span
                              className={`block text-xl md:text-2xl font-light tracking-[0.06em] uppercase transition-colors ${
                                isActive ? 'text-[#C5A059]' : 'text-white group-hover:text-[#C5A059]'
                              }`}
                            >
                              {item.title}
                            </span>
                            <span className="mt-1 block text-xs text-white/55">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight
                          className="h-5 w-5 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C5A059] shrink-0"
                          strokeWidth={1.25}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Khandagiri Bhubaneswar Studio Coordinates */}
              <div className="lg:col-span-4 flex flex-col justify-between p-6 md:p-10">
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C5A059]">
                      Headquarters
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.12em] text-white">
                      {STUDIO_CONTACT.businessName}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {STUDIO_CONTACT.addressLine1}
                      <br />
                      {STUDIO_CONTACT.addressLine2}
                      <br />
                      {STUDIO_CONTACT.statePin}
                    </p>
                    <p className="mt-3 font-mono text-xs text-white/45 tabular-nums">
                      {STUDIO_CONTACT.coordinates}
                    </p>
                  </div>

                  <div className="border-t border-white/15 pt-6 space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C5A059]">
                      Direct Desk
                    </p>
                    <p className="font-mono text-sm text-white/85 tabular-nums">
                      {STUDIO_CONTACT.phone}
                    </p>
                    <p className="text-sm text-white/75">{STUDIO_CONTACT.email}</p>
                    <p className="text-xs text-white/50">{STUDIO_CONTACT.hours}</p>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/15 pt-6">
                  <button
                    type="button"
                    onClick={() => handleSelectPage('contact')}
                    className="w-full border border-[#C5A059] bg-[#C5A059] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#080808] transition-colors hover:bg-transparent hover:text-[#C5A059] cursor-pointer"
                  >
                    Schedule Khandagiri Studio Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
