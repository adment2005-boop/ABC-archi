import React, { useState } from 'react';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { ArchitecturalProject, RESIDENTIAL_PROJECTS } from '../data/architectureData';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import { BlueprintGeometry } from '../components/BlueprintGeometry';

interface ProjectsPageProps {
  onOpenLightbox: (projectIndex: number) => void;
  onInquireProject: (projectTitle: string) => void;
}

const TYPOLOGY_FILTERS: ('All Residences' | ArchitecturalProject['typology'])[] = [
  'All Residences',
  'Courtyard Villa',
  'Hillside Pavilion',
  'Urban Residence',
  'Interior Architecture',
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenLightbox,
  onInquireProject,
}) => {
  const [selectedTypology, setSelectedTypology] =
    useState<'All Residences' | ArchitecturalProject['typology']>('All Residences');
  const [monochromeMode, setMonochromeMode] = useState(false);

  const filteredProjects =
    selectedTypology === 'All Residences'
      ? RESIDENTIAL_PROJECTS
      : RESIDENTIAL_PROJECTS.filter((p) => p.typology === selectedTypology);

  return (
    <div className="bg-white pt-16 text-[#080808]">
      {/* Page Header Band */}
      <section className="relative overflow-hidden border-b border-[#E5E5E5] bg-[#080808] text-white">
        <BlueprintGeometry variant="subtle" theme="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[#C5A059]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C5A059]">
              02. Residential Monograph Archive
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h1 className="lg:col-span-7 text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.04em] leading-[1.06] text-balance">
              Built Residences Across Bhubaneswar & Odisha.
            </h1>
            <p className="lg:col-span-5 text-sm leading-relaxed text-white/65">
              Real-life architectural photography of recent private villas, courtyard homes, hillside pavilions, and bespoke residential interiors executed by ABC Architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Swiss Filter & View Mode Toolbar */}
      <section className="border-b border-[#E5E5E5] bg-[#F7F7F5]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
          <div className="flex flex-wrap items-center gap-1" role="group" aria-label="Filter projects by typology">
            {TYPOLOGY_FILTERS.map((filter) => {
              const active = selectedTypology === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSelectedTypology(filter)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#080808] text-white font-medium'
                      : 'bg-transparent text-[#696969] hover:text-[#080808]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Photography Mode Toggle */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#696969] tabular-nums">
              Showing {filteredProjects.length} / {RESIDENTIAL_PROJECTS.length}
            </span>
            <div className="flex items-center border border-[#E5E5E5] bg-white">
              <button
                type="button"
                onClick={() => setMonochromeMode(false)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] cursor-pointer whitespace-nowrap ${
                  !monochromeMode ? 'bg-[#C5A059] text-[#080808] font-semibold' : 'text-[#696969] hover:text-[#080808]'
                }`}
              >
                Natural Color
              </button>
              <button
                type="button"
                onClick={() => setMonochromeMode(true)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] cursor-pointer whitespace-nowrap ${
                  monochromeMode ? 'bg-[#080808] text-white font-semibold' : 'text-[#696969] hover:text-[#080808]'
                }`}
              >
                Monochrome
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hairline-Grid Residential Archive */}
      <section className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-px bg-[#E5E5E5] border-b border-[#E5E5E5]">
          {filteredProjects.map((project) => {
            const globalIndex = RESIDENTIAL_PROJECTS.findIndex((p) => p.id === project.id);
            return (
              <article key={project.id} className="group bg-white flex flex-col justify-between">
                <div>
                  {/* Photographic Plate */}
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(globalIndex)}
                    className="relative block w-full overflow-hidden bg-[#080808] cursor-pointer text-left"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <ArchitecturalImage
                        src={project.image}
                        alt={project.imageAlt}
                        title={project.title}
                        monochrome={monochromeMode}
                        className="h-full w-full group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center bg-[#080808]/80 text-white border border-white/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                  </button>

                  {/* Project Metadata & Editorial Summary */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#696969]">
                      <span>
                        {project.index} · {project.typology}
                      </span>
                      <span className="tabular-nums text-[#9B7B3A]">
                        {project.specs.year} · {project.builtArea}
                      </span>
                    </div>

                    <h2 className="mt-3 text-xl font-medium uppercase tracking-[0.1em] text-[#080808]">
                      {project.title}
                    </h2>

                    <p className="mt-3 text-xs uppercase leading-[1.8] tracking-[0.06em] text-[#696969]">
                      {project.editorialParagraphs[0]}
                    </p>

                    {/* Compact Hairline Spec Rows */}
                    <div className="mt-6 border-t border-[#E5E5E5] divide-y divide-[#E5E5E5] text-xs">
                      <div className="flex justify-between gap-4 py-2.5">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#696969]">
                          LOCATION
                        </span>
                        <span className="text-right uppercase tracking-[0.06em] text-[#080808]">
                          {project.region}
                        </span>
                      </div>
                      <div className="flex justify-between gap-4 py-2.5">
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#696969]">
                          MATERIALS
                        </span>
                        <span className="text-right text-[#080808]">
                          {project.materials.slice(0, 2).join(' · ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="flex items-center justify-between border-t border-[#E5E5E5] px-6 py-4 md:px-8">
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(globalIndex)}
                    className="text-xs font-medium uppercase tracking-[0.16em] text-[#080808] hover:text-[#9B7B3A] cursor-pointer"
                  >
                    Inspect Full Dossier
                  </button>
                  <button
                    type="button"
                    onClick={() => onInquireProject(project.title)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#696969] hover:text-[#080808] cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#C5A059]" strokeWidth={1.5} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
