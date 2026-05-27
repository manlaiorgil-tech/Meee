/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Mongolian cultural palette — drawn from jewelry, stamp, newspaper, felt
        newsprint:  '#E8DCBA',   // aged Mongolian newsprint
        vermillion: '#B31B0A',   // deep red — stamp/lacquerware/coral jewelry
        gold:       '#C8922A',   // lacquer gold — stamp background
        ink:        '#0C0906',   // warm near-black — printing ink
        felt:       '#1B3A4A',   // Mongolian felt blue — night sky
        turquoise:  '#3A8B7A',   // jewelry turquoise
        bone:       '#F2E8CC',   // off-white for dark sections
        rule:       '#8A7A5A',   // mid-tone for column rules

        // legacy aliases
        sand:       '#E8DCBA',
        cream:      '#E8DCBA',
        charcoal:   '#0C0906',
        muted:      '#6B5240',
        border:     '#A89060',
        ember:      '#B31B0A',
        ochre:      '#C8922A',
        night:      '#1B3A4A',
      },
      fontFamily: {
        sans:      ['Cormorant Garamond', 'Georgia', 'serif'],
        serif:     ['Cormorant Garamond', 'Georgia', 'serif'],
        display:   ['Cormorant Garamond', 'Georgia', 'serif'],
        playfair:  ['"Playfair Display"', 'Georgia', 'serif'],
        mongolian: ['"Noto Sans Mongolian"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
