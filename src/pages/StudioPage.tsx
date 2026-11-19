import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  PageId,
  STUDIO_CONTACT,
  STUDIO_LEADERSHIP,
  STUDIO_RECOGNITION,
} from '../data/architectureData';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import { BlueprintGeometry } from '../components/BlueprintGeometry';

interface StudioPageProps {
  onNavigate: (page: PageId) => void;
}

export const StudioPage: React.FC<StudioPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white pt-16 text-[#080808]">
      {/* Dark Architectural Hero Band */}
      <section className="relative overflow-hidden border-b border-[#E5E5E5] bg-[#080808] text-white">
        <BlueprintGeometry variant="philosophy" theme="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[#C5A059]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C5A059]">
              03. Studio & Practice
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.04em] leading-[1.08] text-balance">
            Swiss Grid Precision, Rooted in Khandagiri, Bhubaneswar.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70">
            Founded in 2014 near the historic sandstone hills of Khandagiri, ABC Architecture is a residential design and spatial engineering practice dedicated to quiet, enduring private architecture across Odisha and pan-India corridors.
          </p>
        </div>
      </section>

      {/* Verified Practice Metrics Row */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto max-w-[1440px] grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#E5E5E5]">
          <div className="p-6 md:p-10">
            <p className="font-mono text-3xl md:text-4xl font-light tabular-nums text-[#080808]">
              12<span className="text-[#C5A059]">+</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#696969]">
              Years Operating in Bhubaneswar
            </p>
          </div>
          <div className="p-6 md:p-10">
            <p className="font-mono text-3xl md:text-4xl font-light tabular-nums text-[#080808]">
              46
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#696969]">
              Completed Private Residences
            </p>
          </div>
          <div className="p-6 md:p-10">
            <p className="font-mono text-3xl md:text-4xl font-light tabular-nums text-[#080808]">
              410K
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#696969]">
              Sq.Ft. Built Architectural Area
            </p>
          </div>
          <div className="p-6 md:p-10">
            <p className="font-mono text-3xl md:text-4xl font-light tabular-nums text-[#080808]">
              97<span className="text-[#C5A059]">%</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#696969]">
              On-Budget Turnkey Handover Rate
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetric Studio Monograph Section */}
      <section className="border-b border-[#E5E5E5]">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 lg:border-r border-[#E5E5E5] p-6 py-12 md:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#080808]">
                  STUDIO ETHOS
                </span>
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl font-light uppercase tracking-[0.06em] leading-snug">
                Restraint Is Our Primary Architectural Material.
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-[1.8] text-[#696969]">
                <p>
                  Bhubaneswar’s architectural heritage—from the hand-carved sandstone caves of Khandagiri and Udayagiri to Otto Königsberger’s planned modernist city grid—taught our practice that timeless buildings respond directly to earth, climate, and geometric discipline.
                </p>
                <p>
                  At ABC Architecture, we deliberately accept only eight to ten new residential commissions each year. This strict studio ceiling ensures that our founding principals personally draw every structural grid, inspect every exposed concrete pour, and calibrate every brass reveal before handover.
                </p>
              </div>
            </div>

            <div className="mt-10 border-t border-[#E5E5E5] pt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#696969] tabular-nums">
                {STUDIO_CONTACT.coaReg}
              </span>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#080808] hover:text-[#9B7B3A] cursor-pointer"
              >
                <span>Arrange a Khandagiri Studio Visit</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#C5A059]" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#F7F7F5] p-6 md:p-10">
            <div className="h-full min-h-[360px] overflow-hidden border border-[#E5E5E5] bg-[#080808]">
              <ArchitecturalImage
                src="/src/assets/images/res_penthouse_gallery_1795112861941.jpg"
                alt="Interior architectural craft by ABC Architecture featuring honed black marble and brushed brass"
                title="MATERIAL & LIGHT STUDY"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Principals & Leadership Grid */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-[#E5E5E5] px-6 py-6 md:px-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#080808]">
                LEADERSHIP & PRINCIPALS
              </span>
            </div>
            <span className="font-mono text-xs text-[#696969]">KHANDAGIRI HEADQUARTERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
            {STUDIO_LEADERSHIP.map((leader, idx) => (
              <div key={leader.name} className="p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#C5A059] tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-medium uppercase tracking-[0.08em] text-[#080808]">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#9B7B3A]">
                    {leader.role}
                  </p>
                  <p className="mt-3 font-mono text-[11px] text-[#696969]">
                    {leader.credentials}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-[#696969]">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hairline Awards & Monograph Recognition Table */}
      <section className="border-b border-[#E5E5E5] bg-[#F7F7F5]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 md:px-10 md:py-20">
          <div className="flex items-center gap-2.5 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#080808]">
              RECOGNITION & PUBLICATIONS
            </span>
          </div>

          <div className="border-t border-b border-[#E5E5E5] bg-white divide-y divide-[#E5E5E5]">
            {STUDIO_RECOGNITION.map((row) => (
              <div
                key={`${row.year}-${row.award}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 py-4 items-baseline"
              >
                <span className="md:col-span-2 font-mono text-xs tabular-nums text-[#9B7B3A]">
                  {row.year}
                </span>
                <span className="md:col-span-5 text-sm font-medium text-[#080808]">
                  {row.award}
                </span>
                <span className="md:col-span-3 text-xs uppercase tracking-[0.1em] text-[#696969]">
                  {row.project}
                </span>
                <span className="md:col-span-2 md:text-right font-mono text-[11px] uppercase tracking-[0.12em] text-[#696969]">
                  {row.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
