type Entrance = 'up' | 'down' | 'fade' | 'scale' | 'words';

/** Page content only: menus, dialogs, live calculator values and form fields
 * keep their own interaction behaviour. A card enters as one unit, so its
 * descendants never get a second entrance or hide again when it expands. */
export function preparePageMotion(root: HTMLElement) {
  const original = new Map<HTMLElement, { motion?: string; delay?: string }>();
  const excluded = 'nav, [role="dialog"], [role="menu"], [aria-live], [data-motion-skip], .cost-calculator';
  const mark = (element: HTMLElement, motion: Entrance, delay = 0) => {
    if (element.dataset.motion || element.closest(excluded)) return;
    original.set(element, { motion: element.dataset.motion, delay: element.dataset.motionDelay });
    element.dataset.motion = motion;
    element.dataset.motionDelay = String(delay);
  };
  const markAll = (selector: string, motion: Entrance, delay = 0) => {
    root.querySelectorAll<HTMLElement>(selector).forEach(element => mark(element, motion, delay));
  };

  // Named units cover illustrations, feature rows and the existing card
  // variants. Section backgrounds and layout containers stay stationary.
  markAll('.about-hero-title', 'down', 60);
  markAll('article:not(.policy-page):not([data-motion-layout]), .fading-card-border, .relief-card, .solutions-mobile-card, .solutions-scenario-card, [data-motion-item]', 'up');
  markAll('form', 'fade', 320);
  markAll('.compare-costs-section', 'fade');
  markAll('.policy-copy', 'up', 160);
  // Hero artwork uses data-motion-skip so it is visible from the first paint.
  markAll('.how-workspace-art, .about-locations-globe', 'fade', 160);
  markAll('img[alt]:not([alt=""])', 'fade', 160);
  markAll('p', 'up', 160);
  markAll('a[data-motion-cta], button[data-motion-cta]', 'up', 420);

  // Give hero headings a lead before the introduction, qualification/price
  // and CTA enter. Subsequent sections keep their shorter supporting delay.
  root.querySelectorAll<HTMLElement>('section, .platform-login-intro').forEach(section => {
    if (!section.querySelector('h1')) return;
    section.querySelectorAll<HTMLElement>('p').forEach((paragraph, index) => {
      if (original.has(paragraph)) paragraph.dataset.motionDelay = String(420 + Math.min(index, 2) * 140);
    });
    section.querySelectorAll<HTMLElement>('[data-motion-cta]').forEach(cta => {
      if (original.has(cta)) cta.dataset.motionDelay = '840';
    });
  });

  // Stagger sibling cards/features, including wrappers with display:contents.
  const groups = new Map<HTMLElement, HTMLElement[]>();
  root.querySelectorAll<HTMLElement>('article:not(.policy-page):not([data-motion-layout]), .fading-card-border, .solutions-mobile-card, .solutions-scenario-card, [data-motion-item]').forEach(element => {
    if (!original.has(element) || !element.getClientRects().length) return;
    let parent = element.parentElement;
    while (parent && getComputedStyle(parent).display === 'contents') parent = parent.parentElement;
    if (!parent) return;
    const siblings = groups.get(parent) ?? [];
    if (!siblings.includes(element)) siblings.push(element);
    groups.set(parent, siblings);
  });
  groups.forEach(elements => elements.forEach((element, index) => {
    element.dataset.motionDelay = String(Math.min(index, 3) * 150);
  }));

  return () => original.forEach((attributes, element) => {
    if (attributes.motion === undefined) delete element.dataset.motion;
    else element.dataset.motion = attributes.motion;
    if (attributes.delay === undefined) delete element.dataset.motionDelay;
    else element.dataset.motionDelay = attributes.delay;
  });
}
