const CAL_ORIGIN = 'https://app.cal.com';
const CAL_NAMESPACE = 'book-a-call';
export const CAL_FLOATING_ID = 'outsource-cal-floating-button';
const booking = {
  calLink: 'team/outsource-com/book-a-call',
  config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
};

type CalCommand = [string, ...unknown[]];
type CalApi = ((...command: CalCommand) => void) & { q: CalCommand[] };
type CalGlobal = CalApi & {
  ns: Record<string, CalApi>;
  loaded?: boolean;
  config?: { forwardQueryParams?: boolean };
};

declare global {
  interface Window { Cal?: CalGlobal }
}

let configured = false;

/** Cal's queue-based bootstrap lets clicks work while the embed script loads. */
function getBookingApi(): CalApi {
  if (!window.Cal) {
    const cal = ((...command: CalCommand) => {
      if (command[0] === 'init' && typeof command[1] === 'string') {
        const namespace = command[1];
        if (!cal.ns[namespace]) {
          const api = ((...args: CalCommand) => { api.q.push(args); }) as CalApi;
          api.q = [];
          cal.ns[namespace] = api;
        }
        cal.ns[namespace].q.push(command);
        cal.q.push(['initNamespace', namespace]);
        return;
      }
      cal.q.push(command);
    }) as CalGlobal;
    cal.q = [];
    cal.ns = {};
    cal.loaded = true;
    window.Cal = cal;
    const script = document.createElement('script');
    script.src = `${CAL_ORIGIN}/embed/embed.js`;
    script.async = true;
    document.head.appendChild(script);
  }

  const cal = window.Cal;
  cal.config = { ...cal.config, forwardQueryParams: true };
  if (!configured) {
    cal('init', CAL_NAMESPACE, { origin: CAL_ORIGIN });
    cal.ns[CAL_NAMESPACE]('ui', { hideEventTypeDetails: true, layout: 'month_view' });
    configured = true;
  }
  return cal.ns[CAL_NAMESPACE];
}

export function showBookingButton() {
  getBookingApi()('floatingButton', {
    ...booking,
    attributes: { id: CAL_FLOATING_ID },
    hideButtonIcon: false,
    buttonText: 'Book a Call',
    buttonColor: '#CCF043',
    buttonTextColor: '#1F0849',
  });
}

export function openBooking() {
  getBookingApi()('modal', booking);
}

export const isContactPage = (pathname: string) => pathname.replace(/\/+$/, '').toLowerCase() === '/contact';
