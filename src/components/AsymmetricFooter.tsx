import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId, STUDIO_CONTACT } from '../data/architectureData';
import { ArchitecturalImage } from './ArchitecturalImage';
import { BlueprintGeometry } from './BlueprintGeometry';

interface AsymmetricFooterProps {
  onNavigate: (page: PageId) => void;
}

const FOOTER_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Monograph' },
  { id: 'projects', label: 'Projects' },
  { id: 'studio', label: 'Studio' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const AsymmetricFooter: React.FC<AsymmetricFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white border-t border-white/15">
      <BlueprintGeometry variant="subtle" theme="dark" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Dark Asymmetric Split: Large Architectural Photo Left, Minimal Contact CTA Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch border-b border-white/15">
          {/* Left: Large Architectural Photo */}
          <div className="lg:col-span-7 lg:border-r border-white/15 p-6 md:p-10">
            <div className="group relative h-[320px] sm:h-[420px] lg:h-full min-h-[380px] overflow-hidden border border-white/15 bg-[#121212]">
              <ArchitecturalImage
                src="/src/assets/images/res_garden_retreat_1795112938648.jpg"
                alt="Nandankanan Laterite Retreat by ABC Architecture Bhubaneswar at twilight"
                title="NANDANKANAN LATERITE RETREAT"
                monochrome
                hoverColor
                className="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-[#C5A059]">
                    Selected Monograph Archive
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-white/90">
                    NANDANKANAN LATERITE RETREAT — BHUBANESWAR
                  </span>
                </div>
                <span className="font-mono text-[11px] tabular-nums text-white/60">
                  20.3958° N / 85.8260° E
                </span>
              </div>
            </div>
          </div>

          {/* Right: Minimal Contact CTA & Khandagiri Studio Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-12 lg:p-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-[#C5A059]" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#C5A059]">
                  Private Commissions
                </span>
              </div>

              <h2 className="mt-6 text-3xl md:text-4xl font-light uppercase tracking-[0.06em] leading-[1.15] text-white text-balance">
                Begin an Architectural Dialogue in Bhubaneswar.
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-md">
                From bespoke hillside villas around Khandagiri to courtyard urban residences across Odisha and India, every commission starts with a measured site study.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-4 border border-[#C5A059] bg-[#C5A059] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#080808] transition-colors hover:bg-transparent hover:text-[#C5A059] cursor-pointer whitespace-nowrap"
                >
                  <span>Inquire With Studio</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>

            {/* Khandagiri BBSR Office Specification Block */}
            <div className="mt-12 border-t border-white/15 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                  Bhubaneswar Studio
                </p>
                <p className="mt-2.5 text-xs leading-relaxed text-white/85 uppercase tracking-[0.06em]">
                  {STUDIO_CONTACT.addressLine1}
                  <br />
                  {STUDIO_CONTACT.addressLine2}
                  <br />
                  {STUDIO_CONTACT.statePin}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
                  Direct Contact
                </p>
                <p className="mt-2.5 font-mono text-xs text-white/85 tabular-nums">
                  {STUDIO_CONTACT.phone}
                </p>
                <p className="mt-1 font-mono text-xs text-white/85 tabular-nums">
                  {STUDIO_CONTACT.mobile}
                </p>
                <p className="mt-2 text-xs text-[#C5A059]">{STUDIO_CONTACT.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & 7-Page Link Strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 py-6 md:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/55">
            <span className="uppercase tracking-[0.16em] text-white font-medium">
              ABC Architecture
            </span>
            <span aria-hidden="true">·</span>
            <span>Khandagiri, Bhubaneswar</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{STUDIO_CONTACT.coaReg}</span>
          </div>

          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className="text-xs uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-[#C5A059] cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <p className="font-mono text-[11px] text-white/40 tabular-nums">
            © {new Date().getFullYear()} ABC Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};
