import { useLayoutEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const NAV_OFFSET = 80;
// Hur nära en sektionsstart scrollen måste vara (andel av viewporten)
// för att den ska snappa. Sätt till Infinity för att alltid snappa.
const SNAP_THRESHOLD = 0.25;

const getSections = () =>
  Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'));

const getSnapPoints = () => {
  const max = ScrollTrigger.maxScroll(window);

  return getSections()
    .map((section) => gsap.utils.clamp(0, max, section.offsetTop - NAV_OFFSET))
    .sort((a, b) => a - b);
};

const snapToNearestSection = (smoother: ScrollSmoother) => {
  const points = getSnapPoints();
  if (!points.length) return;

  const current = smoother.scrollTop();
  const closest = points.reduce((prev, point) =>
    Math.abs(point - current) < Math.abs(prev - current) ? point : prev
  );
  const distance = Math.abs(closest - current);

  if (distance > 1 && distance <= window.innerHeight * SNAP_THRESHOLD) {
    smoother.scrollTo(closest, true);
  }
};

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: prefersReducedMotion ? 0 : 1.2,
      effects: false,
      smoothTouch: 0.1,
      // Avrunda innehållets translation till hela pixlar. Annars ritas
      // #smooth-content om på bråkdelspixlar varje frame, vilket får
      // vågkanter och sektionsgränser att skälva (subpixel-resampling).
      // Finns i ScrollSmoother men saknas i typdefinitionerna.
      wholePixels: true,
      onStop: prefersReducedMotion
        ? undefined
        : () => snapToNearestSection(smoother),
    } as ScrollSmoother.Vars);

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export const scrollToSection = (id: string) => {
  const smoother = ScrollSmoother.get();

  if (smoother) {
    smoother.scrollTo(`#${id}`, true, `top ${NAV_OFFSET}px`);
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET,
    behavior: 'smooth',
  });
};

export default SmoothScroll;
