import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PageId, SERVICE_DISCIPLINES } from '../data/architectureData';
import { BlueprintGeometry } from '../components/BlueprintGeometry';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onInquireService,
}) => {
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState(0);
  const activeDiscipline = SERVICE_DISCIPLINES[activeDisciplineIndex];

  return (
    <div className="bg-white pt-16 text-[#080808]">
      {/* Header Band */}
      <section className="relative overflow-hidden border-b border-[#E5E5E5] bg-[#080808] text-white">
        <BlueprintGeometry variant="hero" theme="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[#C5A059]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C5A059]">
              04. Architectural Services & Scope
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.04em] leading-[1.08] text-balance">
            Comprehensive Residential Architecture From Land Study to Handover.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65">
            Four integrated architectural disciplines delivered under one Khandagiri roof—eliminating fragmentation between conceptual design, structural engineering, interior joinery, and landscape architecture.
          </p>
        </div>
      </section>

      {/* Interactive Discipline Index Split */}
      <section className="border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Selector List */}
          <div className="lg:col-span-5 lg:border-r border-[#E5E5E5] divide-y divide-[#E5E5E5]">
            {SERVICE_DISCIPLINES.map((service, idx) => {
              const active = idx === activeDisciplineIndex;
              return (
                <button
                  key={service.number}
                  type="button"
                  onClick={() => setActiveDisciplineIndex(idx)}
                  className={`w-full p-6 md:p-8 text-left transition-colors cursor-pointer ${
                    active ? 'bg-[#080808] text-white' : 'bg-white text-[#080808] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-xs tabular-nums text-[#C5A059]">
                      {service.number}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                        active ? 'text-white/55' : 'text-[#696969]'
                      }`}
                    >
                      {service.typicalTimeline}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-medium uppercase tracking-[0.08em]">
                    {service.title}
                  </h2>
                  <p
                    className={`mt-1.5 text-xs ${
                      active ? 'text-white/65' : 'text-[#696969]'
                    }`}
                  >
                    {service.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Specification Pane */}
          <div className="lg:col-span-7 p-6 py-10 md:p-12 lg:p-16 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center justify-between gap-4 border-b border-[#E5E5E5] pb-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7B3A]">
                  Discipline {activeDiscipline.number} Specification
                </span>
                <span className="font-mono text-xs text-[#696969]">
                  {activeDiscipline.typicalTimeline}
                </span>
              </div>

              <h3 className="mt-8 text-2xl sm:text-3xl font-light uppercase tracking-[0.06em] text-[#080808]">
                {activeDiscipline.title}
              </h3>

              <p className="mt-5 text-sm leading-[1.85] text-[#696969]">
                {activeDiscipline.description}
              </p>

              {/* Deliverables Hairline Table */}
              <div className="mt-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#080808] mb-4">
                  Key Architectural Deliverables
                </p>
                <ul className="border-t border-b border-[#E5E5E5] divide-y divide-[#E5E5E5]">
                  {activeDiscipline.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-4 py-3.5 text-sm text-[#080808]">
                      <Check className="mt-0.5 h-4 w-4 text-[#C5A059] shrink-0" strokeWidth={1.75} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F7F7F5] border border-[#E5E5E5] p-5">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#696969]">
                    Recommended Scope
                  </span>
                  <p className="mt-1.5 text-xs font-medium text-[#080808]">
                    {activeDiscipline.idealFor}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#696969]">
                    Estimated Duration
                  </span>
                  <p className="mt-1.5 font-mono text-xs font-medium text-[#080808] tabular-nums">
                    {activeDiscipline.typicalTimeline}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#E5E5E5] pt-6">
              <button
                type="button"
                onClick={() => onInquireService(activeDiscipline.title)}
                className="inline-flex items-center gap-3 border border-[#080808] bg-[#080808] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#080808] cursor-pointer"
              >
                <span>Request Fee Proposal for {activeDiscipline.number}</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('process')}
                className="text-xs uppercase tracking-[0.16em] text-[#696969] hover:text-[#080808] cursor-pointer"
              >
                Inspect Execution Process →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
