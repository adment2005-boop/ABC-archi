import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  /** 'words' | 'lines' | 'chars' */
  splitBy?: 'words' | 'lines' | 'chars';
  /** Stagger delay between each unit in seconds */
  stagger?: number;
  /** Animation start e.g. "top 85%" */
  start?: string;
  /** Animation end e.g. "bottom 20%" */
  end?: string;
  /** Whether to scrub the animation with scroll */
  scrub?: boolean | number;
  /** Delay before animation begins (non-scrub only) */
  delay?: number;
  /** y offset to animate from */
  yOffset?: number;
  tag?: keyof JSX.IntrinsicElements;
}

export function TextReveal({
  children,
  className = '',
  splitBy = 'words',
  stagger = 0.06,
  start = 'top 88%',
  end = 'bottom 30%',
  scrub = false,
  delay = 0,
  yOffset = 40,
  tag: Tag = 'div',
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Split text into spans
    const originalHTML = el.innerHTML;
    const text = el.textContent || '';

    let units: string[] = [];
    if (splitBy === 'chars') {
      units = text.split('');
    } else if (splitBy === 'words') {
      units = text.trim().split(/\s+/);
    } else {
      // lines — wrap by detecting natural line breaks
      units = text.trim().split(/\n+/).filter(Boolean);
      if (units.length <= 1) units = text.trim().split(/\.\s+/).filter(Boolean);
    }

    // Build wrapped HTML
    const separator = splitBy === 'chars' ? '' : ' ';
    el.innerHTML = units
      .map(
        (unit, i) =>
          `<span class="reveal-unit" style="display:inline-block;overflow:hidden;vertical-align:bottom;"><span class="reveal-inner" data-index="${i}" style="display:inline-block;">${unit}</span></span>`
      )
      .join(separator === '' ? '' : `${separator}`);

    const inners = el.querySelectorAll<HTMLElement>('.reveal-inner');

    // Set initial state
    gsap.set(inners, {
      y: yOffset,
      opacity: 0,
      rotateX: 8,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        end: scrub ? end : undefined,
        scrub: scrub !== false ? (typeof scrub === 'number' ? scrub : 1.2) : false,
        toggleActions: scrub ? undefined : 'play none none none',
      },
      delay: scrub ? 0 : delay,
    });

    tl.to(inners, {
      y: 0,
      opacity: 1,
      rotateX: 0,
      duration: scrub ? 1 : 0.9,
      stagger: stagger,
      ease: 'power3.out',
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
      if (el) el.innerHTML = originalHTML;
    };
  }, [splitBy, stagger, start, end, scrub, delay, yOffset]);

  return (
    // @ts-ignore
    <Tag ref={containerRef} className={className} style={{ perspective: '800px' }}>
      {children}
    </Tag>
  );
}
