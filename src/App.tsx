import { useCallback, useEffect, useState } from 'react';
import { PageId, RESIDENTIAL_PROJECTS } from './data/architectureData';
import { Navigation } from './components/Navigation';
import { AsymmetricFooter } from './components/AsymmetricFooter';
import { ProjectLightbox } from './components/ProjectLightbox';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { StudioPage } from './pages/StudioPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';

const VALID_PAGES: PageId[] = [
  'home',
  'projects',
  'studio',
  'services',
  'process',
  'testimonials',
  'contact',
];

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.includes(hash) ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = useCallback((page: PageId) => {
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleInquireWithContext = useCallback(
    (subject: string) => {
      setContactSubject(subject);
      handleNavigate('contact');
    },
    [handleNavigate]
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#080808]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenLightbox={setLightboxIndex}
            onInquireProject={handleInquireWithContext}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            onOpenLightbox={setLightboxIndex}
            onInquireProject={handleInquireWithContext}
          />
        )}
        {currentPage === 'studio' && <StudioPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onInquireService={handleInquireWithContext}
          />
        )}
        {currentPage === 'process' && <ProcessPage onNavigate={handleNavigate} />}
        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onNavigate={handleNavigate}
            onOpenLightbox={setLightboxIndex}
          />
        )}
        {currentPage === 'contact' && <ContactPage prefilledSubject={contactSubject} />}
      </main>

      <AsymmetricFooter onNavigate={handleNavigate} />

      <ProjectLightbox
        projects={RESIDENTIAL_PROJECTS}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={setLightboxIndex}
        onInquire={handleInquireWithContext}
      />
    </div>
  );
}
