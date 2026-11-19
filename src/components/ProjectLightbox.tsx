import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ArchitecturalProject } from '../data/architectureData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ProjectLightboxProps {
  projects: ArchitecturalProject[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  projects,
  activeIndex,
  onClose,
  onSelectIndex,
  onInquire,
}) => {
  const [monochromeMode, setMonochromeMode] = useState(false);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectIndex((activeIndex + 1) % projects.length);
      if (e.key === 'ArrowLeft') onSelectIndex((activeIndex - 1 + projects.length) % projects.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, onClose, onSelectIndex, projects.length]);

  if (activeIndex === null) return null;
  const project = projects[activeIndex];
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Architectural Dossier`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/95 p-4 md:p-8 overflow-y-auto"
    >
      <div className="relative w-full max-w-[1280px] border border-white/15 bg-[#080808] text-white">
        {/* Top Lightbox Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 px-6 py-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tabular-nums text-[#C5A059]">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-white">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Monochrome / Real Color Toggle */}
            <div className="flex items-center border border-white/20">
              <button
                type="button"
                onClick={() => setMonochromeMode(false)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-colors cursor-pointer whitespace-nowrap ${
                  !monochromeMode ? 'bg-[#C5A059] text-[#080808] font-semibold' : 'text-white/70 hover:text-white'
                }`}
              >
                Natural Color
              </button>
              <button
                type="button"
                onClick={() => setMonochromeMode(true)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] transition-colors cursor-pointer whitespace-nowrap ${
                  monochromeMode ? 'bg-[#C5A059] text-[#080808] font-semibold' : 'text-white/70 hover:text-white'
                }`}
              >
                Monochrome
              </button>
            </div>

            <button
              type="button"
              onClick={() => onSelectIndex((activeIndex - 1 + projects.length) % projects.length)}
              aria-label="Previous residence"
              className="flex h-9 w-9 items-center justify-center border border-white/20 text-white hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => onSelectIndex((activeIndex + 1) % projects.length)}
              aria-label="Next residence"
              className="flex h-9 w-9 items-center justify-center border border-white/20 text-white hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close lightbox"
              className="flex h-9 w-9 items-center justify-center border border-white/20 text-white hover:border-[#C5A059] hover:text-[#C5A059] cursor-pointer"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Main Split: High-Res Architectural Photo + Full Specification Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-7 bg-[#121212] lg:border-r border-white/15">
            <ArchitecturalImage
              src={project.image}
              alt={project.imageAlt}
              title={project.title}
              monochrome={monochromeMode}
              className="h-[320px] sm:h-[460px] lg:h-full w-full min-h-[420px]"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between text-xs text-white/55 font-mono">
                <span>{project.typology}</span>
                <span className="tabular-nums">{project.coordinates}</span>
              </div>

              <h3 className="mt-3 text-xl md:text-2xl font-light uppercase tracking-[0.08em] text-white">
                {project.title}
              </h3>

              <div className="mt-5 space-y-3 text-xs uppercase leading-relaxed tracking-[0.06em] text-white/75">
                {project.editorialParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Spec Table */}
              <div className="mt-6 border-t border-white/15 divide-y divide-white/15 text-xs">
                <div className="grid grid-cols-12 py-2.5 gap-2">
                  <span className="col-span-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    LOCATION
                  </span>
                  <span className="col-span-8 uppercase tracking-[0.06em] text-white">
                    {project.specs.location}
                  </span>
                </div>
                <div className="grid grid-cols-12 py-2.5 gap-2">
                  <span className="col-span-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    BUILT AREA
                  </span>
                  <span className="col-span-8 font-mono tabular-nums text-white">
                    {project.builtArea} · Plot {project.plotArea}
                  </span>
                </div>
                <div className="grid grid-cols-12 py-2.5 gap-2">
                  <span className="col-span-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    YEAR
                  </span>
                  <span className="col-span-8 font-mono tabular-nums text-white">
                    {project.specs.year}
                  </span>
                </div>
                <div className="grid grid-cols-12 py-2.5 gap-2">
                  <span className="col-span-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">
                    CONSTRUCTION
                  </span>
                  <span className="col-span-8 uppercase tracking-[0.06em] text-white">
                    {project.specs.construction}
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-white/15 pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C5A059]">
                  Climatic Strategy
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-white/65">
                  {project.climateStrategy}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/15">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="inline-flex w-full items-center justify-between border border-[#C5A059] px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#C5A059] transition-colors hover:bg-[#C5A059] hover:text-[#080808] cursor-pointer"
              >
                <span>Commission a Similar Residence</span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
