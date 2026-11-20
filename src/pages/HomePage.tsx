import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TextReveal } from '../components/TextReveal';
import {
  ArrowRight,
  Maximize2,
  ArrowUpRight,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Building2,
  Users,
} from 'lucide-react';
import {
  ArchitecturalProject,
  CLIENT_TESTIMONIALS,
  OFFICE_DIRECTORY,
  PageId,
  RESIDENTIAL_PROJECTS,
} from '../data/architectureData';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import { BlueprintGeometry } from '../components/BlueprintGeometry';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (projectIndex: number) => void;
  onInquireProject: (projectTitle: string) => void;
}

const HERO_SLIDE_INTERVAL_MS = 5000;
const MONOGRAPH_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenLightbox,
  onInquireProject,
}) => {
  const [[activeIndex, direction], setSlideState] = useState<[number, number]>([0, 1]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedOfficeId, setSelectedOfficeId] = useState(OFFICE_DIRECTORY[0].id);

  const goToSlide = (nextIndex: number, forcedDirection?: number) => {
    setSlideState(([prevIndex]) => {
      if (nextIndex === prevIndex) return [prevIndex, 1];
      const computedDir =
        forcedDirection !== undefined ? forcedDirection : nextIndex > prevIndex ? 1 : -1;
      return [nextIndex, computedDir];
    });
  };

  const stepSlide = (delta: number) => {
    setSlideState(([prevIndex]) => {
      const next =
        (prevIndex + delta + RESIDENTIAL_PROJECTS.length) % RESIDENTIAL_PROJECTS.length;
      return [next, delta >= 0 ? 1 : -1];
    });
  };

  // Advance monograph plate sequence 1-by-1 every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = window.setInterval(() => {
      setSlideState(([prevIndex]) => [
        (prevIndex + 1) % RESIDENTIAL_PROJECTS.length,
        1,
      ]);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying, activeIndex]);

  const activeProject: ArchitecturalProject = RESIDENTIAL_PROJECTS[activeIndex];
  const selectedOffice =
    OFFICE_DIRECTORY.find((o) => o.id === selectedOfficeId) ?? OFFICE_DIRECTORY[0];

  return (
    <div className="bg-white text-[#080808]">
      {/* 1. DARK FULL-BLEED MONOCHROME ARCHITECTURAL HERO — MONOGRAPH SEQUENCE */}
      <section className="relative h-[86vh] min-h-[620px] max-h-[920px] w-full overflow-hidden bg-[#080808] text-white">
        {/* Monograph Folio Plate Wipe Sequence (1-by-1 every 5s) */}
        <div className="absolute inset-0 overflow-hidden bg-[#080808]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeProject.id}
              custom={direction}
              initial={{
                clipPath: direction >= 0 ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)',
                opacity: 0.95,
              }}
              animate={{
                clipPath: 'inset(0% 0% 0% 0%)',
                opacity: 0.78,
              }}
              exit={{
                opacity: 0.3,
                scale: 0.985,
              }}
              transition={{
                clipPath: { duration: 1.35, ease: MONOGRAPH_EASE },
                opacity: { duration: 1.2, ease: 'easeOut' },
                scale: { duration: 1.35, ease: MONOGRAPH_EASE },
              }}
              className="absolute inset-0 z-[1]"
            >
              {/* Razor-thin Gold Leading Folio Edge During Plate Wipe */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-0 bottom-0 z-10 w-[1px] bg-[#C5A059]/80 ${
                  direction >= 0 ? 'left-0' : 'right-0'
                }`}
              />
              <motion.div
                initial={{ scale: 1.07, x: direction >= 0 ? 28 : -28 }}
                animate={{ scale: 1.01, x: 0 }}
                transition={{ duration: 4.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full"
              >
                <ArchitecturalImage
                  src={activeProject.image}
                  alt={activeProject.imageAlt}
                  title={activeProject.title}
                  monochrome
                  priority
                  className="h-full w-full"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Measured Architectural Contrast Scrim */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#080808]/90 via-[#080808]/45 to-[#080808]/65" />
          <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/55" />
        </div>

        {/* Faint Geometric Circle Blueprint Line-Art Overlay */}
        <BlueprintGeometry variant="hero" theme="dark" className="z-[3]" />

        {/* Swiss Grid Content Overlay */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 pt-24 pb-10 md:px-10 md:pb-14">
          {/* Top Subtle Architectural Monograph Sequence Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4 text-[11px] font-mono uppercase tracking-[0.22em] text-white/60">
            <span>Khandagiri, Bhubaneswar — Monograph Sequence</span>
            <div className="flex items-center gap-3">
              <span className="hidden md:inline tabular-nums text-[#C5A059]">
                {activeProject.coordinates}
              </span>
              <span className="tabular-nums text-white/85">
                PLATE {String(activeIndex + 1).padStart(2, '0')} / {String(RESIDENTIAL_PROJECTS.length).padStart(2, '0')}
              </span>
              <div className="flex items-center border border-white/20">
                <button
                  type="button"
                  onClick={() => stepSlide(-1)}
                  aria-label="Previous monograph plate"
                  className="flex h-7 w-7 items-center justify-center text-white/80 transition-colors hover:bg-white/10 hover:text-[#C5A059] cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying((prev) => !prev)}
                  aria-label={isAutoPlaying ? 'Pause monograph sequence' : 'Play monograph sequence'}
                  className="inline-flex h-7 items-center gap-1.5 border-x border-white/20 px-2.5 text-[10px] uppercase tracking-[0.16em] text-white/85 transition-colors hover:text-[#C5A059] cursor-pointer whitespace-nowrap"
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="h-2.5 w-2.5" strokeWidth={1.75} />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-2.5 w-2.5" strokeWidth={1.75} />
                      <span>Play</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => stepSlide(1)}
                  aria-label="Next monograph plate"
                  className="flex h-7 w-7 items-center justify-center text-white/80 transition-colors hover:bg-white/10 hover:text-[#C5A059] cursor-pointer"
                >
                  <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Large Staggered 8 Architectural Thoughts Transitioning Simultaneously With Parallax Plate */}
          <div className="relative my-auto min-h-[210px] sm:min-h-[270px] md:min-h-[330px] flex items-center py-8">
            <AnimatePresence initial={false} custom={direction}>
              <motion.h1
                key={activeProject.id}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 52 : -52 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -44 : 44 }}
                transition={{ duration: 1.25, ease: MONOGRAPH_EASE }}
                className="absolute inset-x-0 font-sans font-light tracking-[-0.03em] text-white leading-[0.95]"
              >
                <span className="block text-[clamp(2.8rem,7.8vw,6.8rem)]">
                  {activeProject.thoughtLines[0]}
                </span>
                <span className="block pl-[7vw] sm:pl-[10vw] text-[clamp(2.8rem,7.8vw,6.8rem)]">
                  {activeProject.thoughtLines[1]}
                </span>
                <span className="mt-1 flex items-center gap-5 pl-[14vw] sm:pl-[20vw]">
                  <span className="hidden md:inline-block h-[1px] w-16 bg-[#C5A059] shrink-0" aria-hidden="true" />
                  <span className="text-[clamp(2.1rem,5.2vw,4.6rem)] font-extralight tracking-[0.01em] text-white/90">
                    {activeProject.thoughtLines[2]}
                  </span>
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Bottom Hero Meta, Monograph 8-Plate Sequence Track & Primary Action */}
          <div className="space-y-4">
            {/* Swiss Monograph 8-Plate Progress Sequence Bar */}
            <div className="grid grid-cols-8 gap-2 sm:gap-3" role="group" aria-label="Monograph plate sequence">
              {RESIDENTIAL_PROJECTS.map((project, idx) => {
                const isCurrent = idx === activeIndex;
                const isPast = idx < activeIndex;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    aria-label={`Plate ${project.index}: ${project.title}`}
                    aria-current={isCurrent ? 'true' : undefined}
                    className="group flex flex-col gap-1.5 py-1 text-left cursor-pointer focus-visible:outline-[#C5A059]"
                  >
                    <span
                      className={`font-mono text-[9px] tabular-nums tracking-[0.16em] transition-colors ${
                        isCurrent
                          ? 'text-[#C5A059]'
                          : 'text-white/40 group-hover:text-white/75'
                      }`}
                    >
                      {project.index}
                    </span>
                    <span className="relative block h-[2px] w-full overflow-hidden bg-white/20">
                      {isPast && (
                        <span className="absolute inset-0 bg-[#C5A059]/50" />
                      )}
                      {isCurrent && (
                        <motion.span
                          key={`${project.id}-${isAutoPlaying ? 'play' : 'pause'}`}
                          initial={{ scaleX: isAutoPlaying ? 0 : 1 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: isAutoPlaying ? HERO_SLIDE_INTERVAL_MS / 1000 : 0.25,
                            ease: 'linear',
                          }}
                          style={{ transformOrigin: 'left center' }}
                          className="absolute inset-0 bg-[#C5A059]"
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/15 pt-5">
              <div className="max-w-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                      PLATE {activeProject.index} · {activeProject.title} · {activeProject.specs.year}
                    </p>
                    <p className="mt-1.5 text-xs uppercase tracking-[0.14em] leading-relaxed text-white/75">
                      {activeProject.thoughtCaption}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <button
                  type="button"
                  onClick={() => onOpenLightbox(activeIndex)}
                  className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-[#C5A059] cursor-pointer whitespace-nowrap"
                >
                  <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>Inspect Full Plate</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2.5 border border-[#C5A059] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#C5A059] transition-colors hover:bg-[#C5A059] hover:text-[#080808] cursor-pointer whitespace-nowrap"
                >
                  <span>All 08 Works</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 ARCHITECTURAL PERFORMANCE STATS BAR */}
      <section
        aria-label="Practice Performance and Trust Metrics"
        className="relative z-20 border-b border-[#C5A059]/30 bg-[#0B0B0B] text-white"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x divide-white/10">
            {/* Stat 1: 5 Years of Experience */}
            <div className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-colors hover:bg-white/[0.03]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C5A059]">
                  01 / EXPERIENCE
                </span>
                <Award className="h-4 w-4 text-[#C5A059]/80 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <div className="mt-5 sm:mt-7">
                <div className="flex items-baseline gap-1">
                  <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white tabular-nums">
                    05
                  </span>
                  <span className="text-xl sm:text-2xl font-light text-[#C5A059]">+</span>
                  <span className="ml-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    Years
                  </span>
                </div>
                <h3 className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-white/90">
                  Years of Experience
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-white/50 leading-relaxed">
                  Established architectural practice across Odisha
                </p>
              </div>
            </div>

            {/* Stat 2: 170 Projects Delivered */}
            <div className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-colors hover:bg-white/[0.03] border-t sm:border-t-0 border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C5A059]">
                  02 / COMMISSIONS
                </span>
                <Building2 className="h-4 w-4 text-[#C5A059]/80 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <div className="mt-5 sm:mt-7">
                <div className="flex items-baseline gap-1">
                  <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white tabular-nums">
                    170
                  </span>
                  <span className="text-xl sm:text-2xl font-light text-[#C5A059]">+</span>
                </div>
                <h3 className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-white/90">
                  Projects Delivered
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-white/50 leading-relaxed">
                  Residential villas, urban homes & pavilions
                </p>
              </div>
            </div>

            {/* Stat 3: 4.8 Google Rating */}
            <div className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-colors hover:bg-white/[0.03] border-t lg:border-t-0 border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C5A059]">
                  03 / GOOGLE RATING
                </span>
                <div className="flex items-center gap-0.5" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-[#C5A059] text-[#C5A059]"
                      strokeWidth={1}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-5 sm:mt-7">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white tabular-nums">
                    4.8
                  </span>
                  <span className="font-mono text-xs text-[#C5A059]">★</span>
                  <span className="ml-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/50">
                    / 5.0
                  </span>
                </div>
                <h3 className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-white/90">
                  Google Rating
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-white/50 leading-relaxed">
                  Verified client ratings & top-tier reviews
                </p>
              </div>
            </div>

            {/* Stat 4: Satisfied Clients */}
            <div className="group relative flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-colors hover:bg-white/[0.03] border-t lg:border-t-0 border-white/10">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#C5A059]">
                  04 / TRUST
                </span>
                <Users className="h-4 w-4 text-[#C5A059]/80 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <div className="mt-5 sm:mt-7">
                <div className="flex items-baseline gap-1">
                  <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.03em] text-white tabular-nums">
                    160
                  </span>
                  <span className="text-xl sm:text-2xl font-light text-[#C5A059]">+</span>
                </div>
                <h3 className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-white/90">
                  Satisfied Clients
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.06em] text-white/50 leading-relaxed">
                  Transparent collaboration & on-schedule handover
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHITE SECTION BAR: LEFT-ALIGNED PROJECT TITLE / RIGHT-ALIGNED LOCATION 1/8 */}
      <section aria-label="Featured Residential Monograph">
        <div className="border-b border-[#E5E5E5] bg-white">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 bg-[#C5A059] shrink-0" aria-hidden="true" />
              <h2 className="text-sm sm:text-base font-medium uppercase tracking-[0.18em] text-[#080808]">
                {activeProject.title}
              </h2>
            </div>

            <div className="flex items-center gap-5 text-xs sm:text-sm uppercase tracking-[0.18em] text-[#696969]">
              <span>{activeProject.city}</span>
              <span className="font-mono font-medium tabular-nums text-[#080808]">
                {activeIndex + 1}/{RESIDENTIAL_PROJECTS.length}
              </span>
            </div>
          </div>
        </div>

        {/* 3. HORIZONTAL THUMBNAIL STRIP OF 8 MONOCHROME ARCHITECTURAL PHOTOS */}
        <div className="border-b border-[#E5E5E5] bg-[#F7F7F5]">
          <div className="mx-auto max-w-[1440px]">
            <div
              role="tablist"
              aria-label="Recent residential projects thumbnail strip"
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 divide-x divide-y lg:divide-y-0 divide-[#E5E5E5]"
            >
              {RESIDENTIAL_PROJECTS.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={project.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => goToSlide(idx)}
                    className={`group relative block overflow-hidden text-left focus-visible:z-10 cursor-pointer bg-[#080808] ${
                      isActive ? 'ring-1 ring-inset ring-[#C5A059]' : ''
                    }`}
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <ArchitecturalImage
                        src={project.image}
                        alt={project.imageAlt}
                        title={project.shortTitle}
                        monochrome={!isActive}
                        hoverColor
                        className={`h-full w-full transition-transform duration-500 ${
                          isActive ? 'scale-[1.03] opacity-100' : 'opacity-80 group-hover:scale-105 group-hover:opacity-100'
                        }`}
                      />
                    </div>
                    <div className="flex items-center justify-between bg-white px-3 py-2.5 border-t border-[#E5E5E5]">
                      <span
                        className={`font-mono text-[10px] tabular-nums tracking-[0.12em] ${
                          isActive ? 'text-[#9B7B3A] font-medium' : 'text-[#696969]'
                        }`}
                      >
                        {project.index}
                      </span>
                      <span className="truncate pl-2 text-[10px] uppercase tracking-[0.1em] text-[#080808]">
                        {project.shortTitle}
                      </span>
                    </div>
                    {/* Active Gold Architectural Rule */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] transition-opacity duration-200 ${
                        isActive ? 'bg-[#C5A059] opacity-100' : 'bg-[#080808] opacity-0 group-hover:opacity-40'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. ASYMMETRIC 2-COLUMN PROJECT DETAIL SECTION */}
        <div className="relative overflow-hidden border-b border-[#E5E5E5] bg-white">
          <BlueprintGeometry variant="subtle" theme="light" />
          <div className="relative z-10 mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Small Bulleted 'PROJECT' Label + Real-Life Preview Card */}
            <div className="lg:col-span-4 lg:border-r border-[#E5E5E5] p-6 py-12 md:p-10 lg:py-16 flex flex-col justify-between gap-10">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
                  <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[#080808]">
                    PROJECT
                  </span>
                </div>

                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-[#696969] tabular-nums">
                  {activeProject.typology} · {activeProject.builtArea}
                </p>

                <div className="mt-6 overflow-hidden border border-[#E5E5E5] bg-[#080808]">
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(activeIndex)}
                    className="group relative block w-full cursor-pointer text-left"
                  >
                    <ArchitecturalImage
                      src={activeProject.image}
                      alt={activeProject.imageAlt}
                      title={activeProject.title}
                      className="aspect-[4/3] w-full group-hover:scale-[1.03]"
                    />
                    <div className="flex items-center justify-between bg-white px-4 py-3 border-t border-[#E5E5E5]">
                      <span className="text-[11px] uppercase tracking-[0.14em] text-[#080808]">
                        Natural Color Plate
                      </span>
                      <Maximize2 className="h-3.5 w-3.5 text-[#9B7B3A]" strokeWidth={1.5} />
                    </div>
                  </button>
                </div>
              </div>

              <div className="border-t border-[#E5E5E5] pt-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onInquireProject(activeProject.title)}
                  className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#080808] transition-colors hover:text-[#9B7B3A] cursor-pointer"
                >
                  <span>Request Project Brief</span>
                  <ArrowUpRight className="h-4 w-4 text-[#C5A059]" strokeWidth={1.5} />
                </button>
                <span className="font-mono text-[11px] text-[#696969] tabular-nums">
                  REF {activeProject.index}
                </span>
              </div>
            </div>

            {/* Right Column: Uppercase Editorial Body Paragraphs + 4-Row Hairline Spec Table */}
            <div className="lg:col-span-8 p-6 py-12 md:p-10 lg:p-16">
              <div className="space-y-6 max-w-3xl">
                {activeProject.editorialParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm sm:text-[15px] font-normal uppercase leading-[1.85] tracking-[0.07em] text-[#080808]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Clean 4-Row Hairline-Bordered Spec Table */}
              <div className="mt-12 border-t border-b border-[#E5E5E5] divide-y divide-[#E5E5E5]">
                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4 items-baseline">
                  <span className="sm:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-[#696969]">
                    LOCATION
                  </span>
                  <span className="sm:col-span-9 text-xs sm:text-sm font-medium uppercase tracking-[0.1em] text-[#080808]">
                    {activeProject.specs.location}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4 items-baseline">
                  <span className="sm:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-[#696969]">
                    DESIGN
                  </span>
                  <span className="sm:col-span-9 text-xs sm:text-sm font-medium uppercase tracking-[0.1em] text-[#080808]">
                    {activeProject.specs.design}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4 items-baseline">
                  <span className="sm:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-[#696969]">
                    YEAR
                  </span>
                  <span className="sm:col-span-9 font-mono text-xs sm:text-sm font-medium tabular-nums tracking-[0.1em] text-[#080808]">
                    {activeProject.specs.year}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 py-4 gap-2 sm:gap-4 items-baseline">
                  <span className="sm:col-span-3 font-mono text-xs uppercase tracking-[0.2em] text-[#696969]">
                    CONSTRUCTION
                  </span>
                  <span className="sm:col-span-9 text-xs sm:text-sm font-medium uppercase tracking-[0.1em] text-[#080808]">
                    {activeProject.specs.construction}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-[#696969] max-w-xl">
                  {activeProject.climateStrategy}
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#080808] border-b border-[#C5A059] pb-1 hover:text-[#9B7B3A] cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Complete Residential Archive</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PHILOSOPHY SECTION: INLINE HORIZONTAL RULES (—) BREAKING UP BOLD UPPERCASE TYPOGRAPHY */}
      <section className="relative overflow-hidden border-b border-[#E5E5E5] bg-[#080808] text-white">
        <BlueprintGeometry variant="philosophy" theme="dark" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#C5A059]">
                  PHILOSOPHY
                </span>
              </div>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                Swiss Grid Discipline · Tropical Precision
              </p>
            </div>

            <div className="lg:col-span-9">
              <TextReveal
                tag="p"
                splitBy="words"
                stagger={0.045}
                start="top 82%"
                end="bottom 25%"
                scrub={1.5}
                yOffset={36}
                className="text-2xl sm:text-3xl md:text-[2.35rem] font-semibold uppercase leading-[1.35] tracking-[0.04em] text-white text-balance"
              >
                ARCHITECTURE IS MEASURED SILENCE — CARVED FROM CHARCOAL STONE, RAW CONCRETE, AND CALIBRATED DAYLIGHT — ANCHORED IN KHANDAGIRI’S EARTH — REFINED BY ARCHITECTURAL BRASS AND PROPORTIONAL ORDER.
              </TextReveal>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/15 pt-8">
                <div>
                  <span className="font-mono text-xs text-[#C5A059] tabular-nums">01</span>
                  <h3 className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Structural Honesty
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Every cantilever, courtyard void, and drainage line is resolved structurally before decorative surfaces are considered.
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C5A059] tabular-nums">02</span>
                  <h3 className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Odisha Microclimate
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Passive shading, deep verandahs, and evaporative water courts lower summer heat loads across coastal tropical residences.
                  </p>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C5A059] tabular-nums">03</span>
                  <h3 className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Generational Longevity
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Basalt, laterite, teak, and unlacquered brass age with dignity through monsoons and decades of family life.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                <button
                  type="button"
                  onClick={() => onNavigate('studio')}
                  className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] text-[#C5A059] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Read Practice Monograph</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.18em] text-white/75 hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  <span>Explore 5-Phase Blueprint Process</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS PREVIEW STRIP (CLAIM-TO-PROOF ADJACENCY) */}
      <section className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] px-6 py-6 md:px-10">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#080808]">
                CLIENT TESTIMONIALS
              </span>
              <span className="hidden sm:inline text-xs text-[#696969]">
                · Verified Residential Homeowners in Bhubaneswar
              </span>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('testimonials')}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#080808] hover:text-[#9B7B3A] cursor-pointer whitespace-nowrap"
            >
              <span>View All 06 Client Stories</span>
              <ArrowRight className="h-3.5 w-3.5 text-[#C5A059]" strokeWidth={1.5} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
            {CLIENT_TESTIMONIALS.slice(0, 3).map((item) => (
              <article key={item.id} className="flex flex-col justify-between p-6 md:p-10">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em] text-[#696969]">
                    <span>{item.projectTitle}</span>
                    <span className="tabular-nums text-[#9B7B3A]">{item.completionYear}</span>
                  </div>
                  <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-[#080808]">
                    “{item.quote}”
                  </blockquote>
                  <p className="mt-5 border-t border-[#E5E5E5] pt-4 font-mono text-[11px] leading-relaxed text-[#696969]">
                    {item.outcomeMetric}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-16 overflow-hidden border border-[#E5E5E5] shrink-0">
                    <ArchitecturalImage
                      src={item.image}
                      alt={item.projectTitle}
                      className="h-full w-full"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#080808]">
                      {item.clientName}
                    </p>
                    <p className="mt-0.5 text-xs text-[#696969]">
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GLOBAL & REGIONAL REACH MAP / OFFICE DIRECTORY SPLIT */}
      <section className="border-b border-[#E5E5E5] bg-[#F7F7F5]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E5E5] px-6 py-6 md:px-10 bg-white">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#080808]">
                STUDIO REACH & OFFICE DIRECTORY
              </span>
            </div>
            <span className="font-mono text-xs text-[#696969] tabular-nums">
              HQ: KHANDAGIRI, BHUBANESWAR · 5 REGIONAL & GLOBAL DESKS
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Architectural Blueprint Reach Map */}
            <div className="lg:col-span-7 lg:border-r border-[#E5E5E5] bg-[#080808] p-6 md:p-10 text-white flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em] text-white/50">
                <span>COORDINATE PROJECTION — SOUTH & SOUTHEAST ASIA</span>
                <span className="text-[#C5A059] tabular-nums">{selectedOffice.coordinates}</span>
              </div>

              {/* Custom Architectural Coordinate SVG Map */}
              <div className="relative my-8 aspect-[16/10] w-full border border-white/15 bg-[#0D0D0D] overflow-hidden">
                <svg
                  viewBox="0 0 800 500"
                  className="h-full w-full"
                  role="img"
                  aria-label="Architectural blueprint reach map centered on Khandagiri Bhubaneswar"
                >
                  {/* Swiss Coordinate Grid Hairlines */}
                  {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                    <line key={`vx-${x}`} x1={x} y1="0" x2={x} y2="500" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
                  ))}
                  {[100, 200, 300, 400].map((y) => (
                    <line key={`hy-${y}`} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />
                  ))}

                  {/* Abstract Minimalist Landmass Contour Lines (India & Bay of Bengal / SE Asia) */}
                  <path
                    d="M270 110 L355 95 L445 125 L535 160 L585 215 L525 270 L465 360 L415 410 L375 350 L335 280 L290 230 Z"
                    fill="rgba(255,255,255,0.03)"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1"
                  />
                  <path
                    d="M595 215 L645 260 L665 340 L685 415 L655 430 L620 350 L590 270 Z"
                    fill="rgba(255,255,255,0.025)"
                    stroke="rgba(255,255,255,0.16)"
                    strokeWidth="0.9"
                  />

                  {/* Concentric Blueprint Compass Circles Centered on Bhubaneswar HQ */}
                  <circle cx="496" cy="270" r="65" fill="none" stroke="rgba(197,160,89,0.45)" strokeWidth="0.85" />
                  <circle cx="496" cy="270" r="145" fill="none" stroke="rgba(197,160,89,0.22)" strokeWidth="0.75" strokeDasharray="3 5" />
                  <circle cx="496" cy="270" r="240" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7" />

                  {/* Connection Hairlines from Bhubaneswar HQ to Regional Offices */}
                  {OFFICE_DIRECTORY.filter((o) => !o.isHQ).map((office) => (
                    <line
                      key={`line-${office.id}`}
                      x1={496}
                      y1={270}
                      x2={office.mapX * 8}
                      y2={office.mapY * 5}
                      stroke={selectedOfficeId === office.id ? '#C5A059' : 'rgba(255,255,255,0.22)'}
                      strokeWidth={selectedOfficeId === office.id ? '1.25' : '0.75'}
                      strokeDasharray={selectedOfficeId === office.id ? undefined : '2 4'}
                    />
                  ))}

                  {/* Interactive City Markers */}
                  {OFFICE_DIRECTORY.map((office) => {
                    const cx = office.mapX * 8;
                    const cy = office.mapY * 5;
                    const isSelected = selectedOfficeId === office.id;
                    return (
                      <g
                        key={office.id}
                        onClick={() => setSelectedOfficeId(office.id)}
                        className="cursor-pointer"
                      >
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isSelected ? 11 : 7}
                          fill="none"
                          stroke={office.isHQ || isSelected ? '#C5A059' : 'rgba(255,255,255,0.4)'}
                          strokeWidth="1"
                        />
                        <circle
                          cx={cx}
                          cy={cy}
                          r={office.isHQ ? 4.5 : 3.2}
                          fill={office.isHQ || isSelected ? '#C5A059' : '#FFFFFF'}
                        />
                        <text
                          x={cx + 14}
                          y={cy + 4}
                          fill={office.isHQ || isSelected ? '#C5A059' : 'rgba(255,255,255,0.75)'}
                          fontSize="11"
                          fontFamily="IBM Plex Mono, monospace"
                          letterSpacing="1.6"
                        >
                          {office.city}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Selected Office Highlight Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/15 pt-5 text-xs">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                    {selectedOffice.label}
                  </span>
                  <p className="mt-1.5 text-white/85 leading-relaxed">
                    {selectedOffice.address}
                  </p>
                </div>
                <div className="sm:text-right flex flex-col justify-between">
                  <span className="font-mono text-white/85 tabular-nums">{selectedOffice.phone}</span>
                  <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#C5A059]">
                    {selectedOffice.activeCommissions}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Hairline-Bordered Office Directory List */}
            <div className="lg:col-span-5 bg-white divide-y divide-[#E5E5E5] flex flex-col justify-between">
              <div className="divide-y divide-[#E5E5E5]">
                {OFFICE_DIRECTORY.map((office) => {
                  const isSelected = selectedOfficeId === office.id;
                  return (
                    <button
                      key={office.id}
                      type="button"
                      onClick={() => setSelectedOfficeId(office.id)}
                      className={`w-full px-6 py-5 md:px-8 text-left transition-colors cursor-pointer ${
                        isSelected ? 'bg-[#F7F7F5]' : 'bg-white hover:bg-[#FAFAFA]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-2 w-2 ${
                              isSelected ? 'bg-[#C5A059]' : 'bg-[#E5E5E5]'
                            }`}
                            aria-hidden="true"
                          />
                          <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#080808]">
                            {office.city}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#9B7B3A]">
                          {office.isHQ ? 'HEADQUARTERS' : office.activeCommissions}
                        </span>
                      </div>

                      <p className="mt-2 pl-5 text-xs text-[#696969] leading-relaxed">
                        {office.address}
                      </p>

                      <div className="mt-2 pl-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-[#696969] tabular-nums">
                        <span>{office.phone}</span>
                        <span aria-hidden="true">·</span>
                        <span>{office.email}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-6 md:px-8 bg-white">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="flex w-full items-center justify-between border border-[#080808] bg-[#080808] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#080808] cursor-pointer"
                >
                  <span>Visit Khandagiri Studio or Submit Inquiry</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
