/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Outsource brand palette — EXACT Figma "Selection colors" values.
        // These are the ONLY approved colours; do not introduce others.
        brand: {
          lime: '#CCF043',          // accent / CTA
          'lime-dark': '#B4DE2A',   // lime hover shade (derived, legacy)
          'lime-hover': '#D9FF5A',  // CTA hover accent (design system)
          purple: '#5C34A1',        // medium purple — primary buttons / panels
          'purple-mid': '#411C80',  // secondary background (section alt)
          'purple-alt': '#2A124D',  // section alternate (between primary & secondary)
          'purple-dark': '#1F0849', // primary/base background for all pages
          'purple-darkest': '#15082A', // footer / deepest shade
          lavender: '#F6F1FD',      // secondary text / light section backgrounds
          periwinkle: '#CABCF6',    // light lavender accent (muted headings)
          muted: '#A19CAA',         // muted grey text
          ink: '#0D0D0E',           // footer / near-black
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        dmsans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Left gutter for marketing section content. The navbar keeps the
        // narrow edge; section copy sits inboard of it. Single source of truth
        // for the indent — used as `lg:pl-shell` across the landing pages.
        shell: '150px',
      },
      maxWidth: {
        // Marketing shell, back to the 1200px centred column the client signed
        // off on. Everything (logo, section copy, footer) sits on that column's
        // edge, so the page keeps one left alignment at every screen size.
        container: '1072px',
        nav: '1280px',
      },
    },
  },
  plugins: [],
}
