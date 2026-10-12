import { useLayoutEffect, type RefObject } from 'react';
import './home-motion.css';

// Run the entire entrance sequence, including staggered delays, 25% slower.
const HOME_MOTION_SPEED = 0.75;

/** Homepage-only entrances from the October Loom. Layout and hover transforms
 * remain independent; content is visible unless this enhancement is running. */
export default function useHomeMotion(ref: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || reducedMotion.matches || typeof IntersectionObserver === 'undefined' || !Element.prototype.animate) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-home-motion], .home-motion-fade'));
    const animations = new Map<HTMLElement, Animation[]>();
    let disposed = false;

    // Split gradient text must sample the original full-line gradient, rather
    // than restarting the gradient for every animated word.
    const gradient = root.querySelector<HTMLElement>('.home-hero-finance');
    if (gradient) gradient.dataset.motionGradient = '';
    const updateGradient = () => {
      if (disposed || !gradient) return;
      gradient.style.setProperty('--motion-gradient-width', `${gradient.clientWidth}px`);
      gradient.style.setProperty('--motion-gradient-height', `${gradient.clientHeight}px`);
      gradient.querySelectorAll<HTMLElement>('.home-motion-word').forEach(word => {
        word.style.setProperty('--motion-gradient-x', `${-word.offsetLeft}px`);
        word.style.setProperty('--motion-gradient-y', `${-word.offsetTop}px`);
      });
    };
    updateGradient();
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateGradient);
    if (gradient) resizeObserver?.observe(gradient);
    void document.fonts.ready.then(updateGradient);

    const finish = (target: HTMLElement) => {
      target.dataset.homeMotionState = 'done';
      animations.get(target)?.forEach(animation => animation.cancel());
      animations.delete(target);
    };

    const reveal = (target: HTMLElement) => {
      if (target.dataset.homeMotionState !== 'pending') return;
      const compact = window.matchMedia('(max-width: 1023px)').matches;
      const type = target.dataset.homeMotion ?? 'fade';
      const words = type === 'words' ? Array.from(target.querySelectorAll<HTMLElement>('.home-motion-word')) : [];
      const parts = words.length ? words : [target];
      const specifiedDelay = Number(target.dataset.homeMotionDelay ?? 0);
      // Keep the hero's composed sequence; shorter delays suit vertically
      // stacked mobile cards, which each wait until they enter the viewport.
      const delay = compact && !target.closest('.home-hero') ? Math.min(specifiedDelay * 0.7, 320) : specifiedDelay;
      const distance = compact ? 28 : type === 'words' ? 60 : 36;
      const from: Keyframe = type === 'scale'
        ? { opacity: 0, scale: 0.86 }
        : type === 'fade'
          ? { opacity: 0 }
          : { opacity: 0, translate: `0 ${type === 'down' || type === 'words' ? -distance : distance}px` };
      const to: Keyframe = type === 'scale' ? { opacity: 1, scale: 1 }
        : type === 'fade' ? { opacity: 1 } : { opacity: 1, translate: '0 0' };

      try {
        const running: Animation[] = [];
        animations.set(target, running);
        parts.forEach((part, index) => {
          running.push(part.animate([from, to], {
            duration: (type === 'scale' ? 900 : type === 'words' ? 800 : 720) / HOME_MOTION_SPEED,
            delay: (delay + index * 50) / HOME_MOTION_SPEED,
            easing: type === 'words' ? 'cubic-bezier(0.22, 1.28, 0.36, 1)' : 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'both',
          }));
        });
        target.dataset.homeMotionState = 'running';
        void Promise.all(running.map(animation => animation.finished)).then(
          () => { if (!disposed) finish(target); },
          () => { /* Cancellation on unmount / reduced motion is intentional. */ },
        );
      } catch {
        finish(target);
      }
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -7% 0px' });

    targets.forEach(target => {
      target.dataset.homeMotionState = 'pending';
      observer.observe(target);
    });

    const showAll = () => {
      observer.disconnect();
      targets.forEach(finish);
    };
    const onMotionChange = () => { if (reducedMotion.matches) showAll(); };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest<HTMLElement>('[data-home-motion], .home-motion-fade');
      if (target) { observer.unobserve(target); finish(target); }
    };
    reducedMotion.addEventListener('change', onMotionChange);
    root.addEventListener('focusin', onFocus);

    return () => {
      disposed = true;
      showAll();
      resizeObserver?.disconnect();
      reducedMotion.removeEventListener('change', onMotionChange);
      root.removeEventListener('focusin', onFocus);
      targets.forEach(target => delete target.dataset.homeMotionState);
    };
  }, [ref]);
}
