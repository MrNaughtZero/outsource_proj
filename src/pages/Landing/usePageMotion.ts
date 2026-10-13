import { useLayoutEffect, type RefObject } from 'react';
import './page-motion.css';
import { preparePageMotion } from './pageMotionTargets';

// Run the entire entrance sequence, including staggered delays, 25% slower.
const PAGE_MOTION_SPEED = 0.75;

/** Entrances from the approved October Loom. Layout and hover transforms
 * remain independent; content is visible unless this enhancement is running. */
export default function usePageMotion(ref: RefObject<HTMLElement | null>, routeKey = '', discover = false, enabled = true) {
  useLayoutEffect(() => {
    const root = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || !enabled || reducedMotion.matches || typeof IntersectionObserver === 'undefined' || !Element.prototype.animate) return;

    const restoreAttributes = discover ? preparePageMotion(root) : () => {};
    const candidates = Array.from(root.querySelectorAll<HTMLElement>('[data-motion], .page-motion-fade'));
    const targetSet = new Set(candidates);
    const targets = candidates.filter(target => {
      if (target.closest('[hidden], [data-motion-skip]')) return false;
      // One entrance per visual unit: card/form children remain readable when
      // interacting, and opening an accordion never restarts its entrance.
      for (let parent = target.parentElement; parent && parent !== root; parent = parent.parentElement) {
        if (targetSet.has(parent)) return false;
      }
      return true;
    });
    const opacity = new Map(targets.map(target => [target, getComputedStyle(target).opacity]));
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
      gradient.querySelectorAll<HTMLElement>('.page-motion-word').forEach(word => {
        word.style.setProperty('--motion-gradient-x', `${-word.offsetLeft}px`);
        word.style.setProperty('--motion-gradient-y', `${-word.offsetTop}px`);
      });
    };
    updateGradient();
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateGradient);
    if (gradient) resizeObserver?.observe(gradient);
    void document.fonts.ready.then(updateGradient);

    const finish = (target: HTMLElement) => {
      target.dataset.motionState = 'done';
      animations.get(target)?.forEach(animation => animation.cancel());
      animations.delete(target);
    };

    const reveal = (target: HTMLElement) => {
      if (target.dataset.motionState !== 'pending') return;
      const compact = window.matchMedia('(max-width: 1023px)').matches;
      const requestedType = target.dataset.motion ?? 'fade';
      const style = getComputedStyle(target);
      // Some responsive gradients come from CSS rather than a heading class.
      // Keep their mask on one layer so text cannot disappear mid-animation.
      const type = requestedType === 'words' && style.backgroundClip.includes('text') && style.backgroundImage !== 'none'
        ? 'down' : requestedType;
      const words = type === 'words' ? Array.from(target.querySelectorAll<HTMLElement>('.page-motion-word')) : [];
      const parts = words.length ? words : [target];
      const specifiedDelay = Number(target.dataset.motionDelay ?? 0);
      // Keep the hero's composed sequence; shorter delays suit vertically
      // stacked mobile cards, which each wait until they enter the viewport.
      const delay = compact && !target.closest('.home-hero, [data-motion-hero]') ? Math.min(specifiedDelay * 0.7, 320) : specifiedDelay;
      const distance = compact ? 28 : type === 'words' ? 60 : 36;
      const requestedSpeed = Number(target.dataset.motionSpeed ?? 1);
      const speed = Number.isFinite(requestedSpeed) && requestedSpeed > 0 ? requestedSpeed : 1;
      const from: Keyframe = type === 'scale'
        ? { opacity: 0, scale: 0.86 }
        : type === 'fade'
          ? { opacity: 0 }
          : { opacity: 0, translate: `0 ${type === 'down' || type === 'words' ? -distance : distance}px` };
      const endOpacity = words.length ? 1 : Number(opacity.get(target) ?? 1);
      const to: Keyframe = type === 'scale' ? { opacity: endOpacity, scale: 1 }
        : type === 'fade' ? { opacity: endOpacity } : { opacity: endOpacity, translate: '0 0' };

      try {
        const running: Animation[] = [];
        animations.set(target, running);
        parts.forEach((part, index) => {
          running.push(part.animate([from, to], {
            duration: (type === 'scale' ? 900 : type === 'words' ? 800 : 720) / (PAGE_MOTION_SPEED * speed),
            delay: (delay + index * 50) / PAGE_MOTION_SPEED,
            easing: type === 'words' ? 'cubic-bezier(0.22, 1.28, 0.36, 1)' : 'cubic-bezier(0.22, 1, 0.36, 1)',
            fill: 'both',
          }));
        });
        target.dataset.motionState = 'running';
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
      target.dataset.motionState = 'pending';
      observer.observe(target);
    });

    const showAll = () => {
      observer.disconnect();
      targets.forEach(finish);
    };
    const onMotionChange = () => { if (reducedMotion.matches) showAll(); };
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element) || !event.target.matches(':focus-visible')) return;
      // A focused descendant can have its own unused motion marker; finish
      // every active ancestor so keyboard focus is immediately visible.
      // Pointer focus must not snap a moving card between pointerdown/up,
      // which could move a short button away before its click completes.
      for (const target of targets) {
        if (target.contains(event.target)) { observer.unobserve(target); finish(target); }
      }
    };
    reducedMotion.addEventListener('change', onMotionChange);
    root.addEventListener('focusin', onFocus);

    return () => {
      disposed = true;
      showAll();
      resizeObserver?.disconnect();
      reducedMotion.removeEventListener('change', onMotionChange);
      root.removeEventListener('focusin', onFocus);
      targets.forEach(target => delete target.dataset.motionState);
      restoreAttributes();
    };
  }, [ref, routeKey, discover, enabled]);
}
