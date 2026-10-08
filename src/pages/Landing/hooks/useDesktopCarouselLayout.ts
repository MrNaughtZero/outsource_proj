import { useLayoutEffect, type RefObject } from 'react';

/** Extend desktop card rows to the viewport edge and expose actual overflow. */
export default function useDesktopCarouselLayout(ref: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const scroller = ref.current;
    if (!scroller) return;

    const desktop = window.matchMedia('(min-width: 1024px)');
    let frame = 0;
    let disposed = false;

    const measure = () => {
      if (desktop.matches && scroller.getClientRects().length) {
        const availableWidth = document.documentElement.clientWidth - scroller.getBoundingClientRect().left;
        scroller.style.setProperty('--desktop-carousel-width', `${Math.max(0, availableWidth)}px`);
      } else {
        scroller.style.removeProperty('--desktop-carousel-width');
      }
      scroller.dataset.overflow = String(scroller.scrollWidth - scroller.clientWidth > 1);
      // Keep the existing range control in sync when resizing clamps scrollLeft.
      scroller.dispatchEvent(new Event('scroll'));
    };

    const scheduleMeasure = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(scroller);
    if (scroller.parentElement) observer.observe(scroller.parentElement);
    Array.from(scroller.children).forEach((child) => observer.observe(child));
    window.addEventListener('resize', scheduleMeasure);
    desktop.addEventListener('change', scheduleMeasure);
    document.fonts.ready.then(scheduleMeasure);
    measure();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', scheduleMeasure);
      desktop.removeEventListener('change', scheduleMeasure);
      scroller.style.removeProperty('--desktop-carousel-width');
      delete scroller.dataset.overflow;
    };
  }, [ref]);
}
