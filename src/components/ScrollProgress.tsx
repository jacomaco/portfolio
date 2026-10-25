import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: prefersReducedMotion ? true : 0.3,
            invalidateOnRefresh: true,
          },
        }
      );
    }, barRef);

    let cancelled = false;
    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };
    const onLoad = () => refresh();

    window.addEventListener('load', onLoad);
    document.fonts?.ready.then(refresh);
    refresh();

    return () => {
      cancelled = true;
      window.removeEventListener('load', onLoad);
      ctx.revert();
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
};

export default ScrollProgress;
