import React, { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import {
  ArchitecturalProject,
  CLIENT_TESTIMONIALS,
  PageId,
  RESIDENTIAL_PROJECTS,
} from '../data/architectureData';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import { BlueprintGeometry } from '../components/BlueprintGeometry';

interface TestimonialsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (projectIndex: number) => void;
}

const TESTIMONIAL_FILTERS: ('All Stories' | ArchitecturalProject['typology'])[] = [
  'All Stories',
  'Hillside Pavilion',
  'Courtyard Villa',
  'Urban Residence',
  'Interior Architecture',
];

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [selectedFilter, setSelectedFilter] =
    useState<'All Stories' | ArchitecturalProject['typology']>('All Stories');

  const filtered =
    selectedFilter === 'All Stories'
      ? CLIENT_TESTIMONIALS
      : CLIENT_TESTIMONIALS.filter((t) => t.typology === selectedFilter);

  return (
    <div className="bg-white pt-16 text-[#080808]">
      {/* Dark Editorial Header */}
      <section className="relative overflow-hidden border-b border-[#E5E5E5] bg-[#080808] text-white">
        <BlueprintGeometry variant="hero" theme="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[#C5A059]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C5A059]">
              06. Client Testimonials & Verified Residences
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-7 text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.04em] leading-[1.06] text-balance">
              Enduring Trust Built Across Bhubaneswar Homes.
            </h1>
            <p className="lg:col-span-5 text-sm leading-relaxed text-white/65">
              Measured outcomes, transparent drawing discipline, and lived thermal comfort—shared directly by families and patrons who commissioned ABC Architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Delivery Proof Strip */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]">
          <div className="p-6 md:p-8">
            <p className="font-mono text-2xl sm:text-3xl font-light tabular-nums text-[#080808]">
              ±2.8%
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-[#696969]">
              Average Final Cost Variance vs. Approved BOQ (2021–2025)
            </p>
          </div>
          <div className="p-6 md:p-8">
            <p className="font-mono text-2xl sm:text-3xl font-light tabular-nums text-[#080808]">
              4.2°C
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-[#696969]">
              Average Passive Interior Cooling Drop in Courtyard Villas
            </p>
          </div>
          <div className="p-6 md:p-8">
            <p className="font-mono text-2xl sm:text-3xl font-light tabular-nums text-[#080808]">
              82%
            </p>
            <p className="mt-1.5 text-xs uppercase tracking-[0.14em] text-[#696969]">
              New Residential Commissions From Direct Client Referrals
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-[#E5E5E5] bg-[#F7F7F5]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
          <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Filter testimonials by typology">
            {TESTIMONIAL_FILTERS.map((filter) => {
              const active = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#080808] text-white font-medium'
                      : 'text-[#696969] hover:text-[#080808]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
          <span className="font-mono text-xs text-[#696969] tabular-nums">
            {filtered.length} Attributable Client Reviews
          </span>
        </div>
      </section>

      {/* Attributable Client Stories paired with Real-Life Residence Photography */}
      <section className="mx-auto max-w-[1440px] divide-y divide-[#E5E5E5] border-b border-[#E5E5E5]">
        {filtered.map((item, idx) => {
          const projectIdx = RESIDENTIAL_PROJECTS.findIndex((p) => p.id === item.projectId);
          return (
            <article
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch bg-white"
            >
              {/* Linked Real-Life Residential Photograph */}
              <div className="lg:col-span-5 lg:border-r border-[#E5E5E5] p-6 md:p-10 bg-[#F7F7F5]">
                <button
                  type="button"
                  onClick={() => projectIdx >= 0 && onOpenLightbox(projectIdx)}
                  className="group relative block h-full min-h-[280px] w-full overflow-hidden border border-[#E5E5E5] bg-[#080808] cursor-pointer text-left"
                >
                  <ArchitecturalImage
                    src={item.image}
                    alt={`${item.projectTitle} completed for ${item.clientName}`}
                    title={item.projectTitle}
                    className="h-full w-full group-hover:scale-[1.03]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-[#080808]/85 px-4 py-3 text-white">
                    <span className="text-[11px] uppercase tracking-[0.14em]">
                      {item.projectTitle}
                    </span>
                    <Maximize2 className="h-3.5 w-3.5 text-[#C5A059]" strokeWidth={1.5} />
                  </div>
                </button>
              </div>

              {/* Attributable Testimonial Narrative & Measured Outcome */}
              <div className="lg:col-span-7 p-6 py-10 md:p-12 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#696969]">
                    <span>
                      0{idx + 1} · {item.typology} · {item.location}
                    </span>
                    <span className="tabular-nums text-[#9B7B3A]">
                      {item.builtArea} · Completed {item.completionYear}
                    </span>
                  </div>

                  <blockquote className="mt-6 font-serif text-2xl sm:text-[1.65rem] italic leading-[1.55] text-[#080808]">
                    “{item.quote}”
                  </blockquote>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#E5E5E5] pt-6">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9B7B3A]">
                        Transformation Brief
                      </span>
                      <p className="mt-2 text-xs leading-relaxed text-[#696969]">
                        {item.beforeAfterSummary}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#9B7B3A]">
                        Verified Outcome
                      </span>
                      <p className="mt-2 font-mono text-xs leading-relaxed text-[#080808]">
                        {item.outcomeMetric}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-[#E5E5E5] pt-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#080808]">
                      {item.clientName}
                    </p>
                    <p className="mt-1 text-xs text-[#696969]">
                      {item.role} · {item.organization}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#080808] hover:text-[#9B7B3A] cursor-pointer whitespace-nowrap"
                  >
                    <span>Discuss Your Residence</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#C5A059]" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};
