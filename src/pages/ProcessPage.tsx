import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  MATERIAL_LIBRARY,
  PROCESS_PHASES,
  PageId,
} from '../data/architectureData';
import { BlueprintGeometry } from '../components/BlueprintGeometry';

interface ProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const currentPhase = PROCESS_PHASES[activePhaseIndex];

  return (
    <div className="bg-white pt-16 text-[#080808]">
      {/* Dark Blueprint Header */}
      <section className="relative overflow-hidden border-b border-[#E5E5E5] bg-[#080808] text-white">
        <BlueprintGeometry variant="philosophy" theme="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[#C5A059]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C5A059]">
              05. Architectural Methodology
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.04em] leading-[1.08] text-balance">
            Five Measured Stages From Raw Site Contour to Turnkey Residence.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65">
            Great residential architecture leaves zero ambiguity on the construction site. Our five-phase Swiss blueprint workflow gives homeowners full cost clarity, drawing precision, and milestone accountability.
          </p>
        </div>
      </section>

      {/* Horizontal 5-Phase Selector Bar */}
      <section className="border-b border-[#E5E5E5] bg-[#F7F7F5]">
        <div className="mx-auto max-w-[1440px]">
          <div
            role="tablist"
            aria-label="Design process phases"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]"
          >
            {PROCESS_PHASES.map((phase, idx) => {
              const active = idx === activePhaseIndex;
              return (
                <button
                  key={phase.number}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`relative p-6 text-left transition-colors cursor-pointer ${
                    active ? 'bg-[#080808] text-white' : 'bg-white text-[#080808] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs tabular-nums">
                    <span className="text-[#C5A059]">{phase.number}</span>
                    <span className={active ? 'text-white/55' : 'text-[#696969]'}>
                      {phase.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] leading-snug">
                    {phase.title}
                  </p>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059]" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Phase Detailed Blueprint Dossier */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:border-r border-[#E5E5E5] p-6 py-12 md:p-12 flex flex-col justify-between bg-[#F7F7F5]">
            <div>
              <span className="font-mono text-5xl font-light tabular-nums text-[#C5A059]">
                {currentPhase.number}
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-light uppercase tracking-[0.06em] text-[#080808]">
                {currentPhase.title}
              </h2>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-[#696969]">
                Timeline: {currentPhase.duration}
              </p>
            </div>

            <div className="mt-10 border-t border-[#E5E5E5] pt-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9B7B3A]">
                Studio & Site Protocol
              </span>
              <p className="mt-2 text-xs leading-relaxed text-[#696969]">
                {currentPhase.siteInvolvement}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 py-12 md:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <p className="text-base sm:text-lg leading-[1.75] text-[#080808]">
                {currentPhase.summary}
              </p>

              <div className="mt-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#696969]">
                  Issued Drawings & Milestone Outputs
                </span>
                <div className="mt-4 border-t border-b border-[#E5E5E5] divide-y divide-[#E5E5E5]">
                  {currentPhase.keyOutputs.map((output, i) => (
                    <div key={output} className="flex items-baseline gap-5 py-4">
                      <span className="font-mono text-xs tabular-nums text-[#C5A059]">
                        {currentPhase.number}.{i + 1}
                      </span>
                      <span className="text-sm font-medium text-[#080808]">{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-[#E5E5E5] pt-6">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActivePhaseIndex((prev) => (prev - 1 + PROCESS_PHASES.length) % PROCESS_PHASES.length)
                  }
                  className="border border-[#E5E5E5] px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#080808] hover:border-[#080808] cursor-pointer"
                >
                  Previous Stage
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhaseIndex((prev) => (prev + 1) % PROCESS_PHASES.length)}
                  className="border border-[#080808] bg-[#080808] px-4 py-2 text-xs uppercase tracking-[0.14em] text-white hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-[#080808] cursor-pointer"
                >
                  Next Stage
                </button>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#080808] hover:text-[#9B7B3A] cursor-pointer"
              >
                <span>Start Stage 01</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#C5A059]" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Material Archive & Palette Specification */}
      <section className="border-b border-[#E5E5E5] bg-[#080808] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-8">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 bg-[#C5A059]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C5A059]">
                  Khandagiri Studio Material Library
                </span>
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-light uppercase tracking-[0.06em]">
                Honest Charcoal, Natural Stone & Living Brass.
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-white/60">
              Every homeowner reviews full-size stone, concrete, and brushed-brass samples in our Khandagiri material archive before construction documentation begins.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-5 border border-white/15 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {MATERIAL_LIBRARY.map((mat) => (
              <div key={mat.code} className="p-6 flex flex-col justify-between bg-[#0E0E0E]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#C5A059]">{mat.code}</span>
                    <span
                      className="h-5 w-10 border border-white/25"
                      style={{ backgroundColor: mat.swatchHex }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.1em] text-white">
                    {mat.name}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] text-white/50">{mat.origin}</p>
                  <p className="mt-1 text-xs text-white/75">{mat.finish}</p>
                </div>
                <p className="mt-6 border-t border-white/15 pt-4 text-xs leading-relaxed text-white/60">
                  {mat.thermalRole}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
