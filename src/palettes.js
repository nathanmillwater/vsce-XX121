// ============================================================
// Every color extracted into a
// standardised palette for easy future modification.
// ============================================================

const palettes = {
  // Default — cool blue phosphor with amber accents
  blue: {
    // Backgrounds — pitch black with faint CRT tint
    bg:        '#040c14',
    bgLight:   '#06101a',
    bgLighter: '#0a1624',

    // Primary CRT phosphor (blue)
    primary:       '#7ab8d8',
    primaryBright: '#a4d8f0',
    primaryWhite:  '#c8e8f8',
    primaryMid:    '#5898b8',
    primaryDim:    '#386888',
    primaryFaint:  '#1a3850',
    primaryGhost:  '#283848',

    // Secondary phosphor (amber)
    secondary:       '#d4a030',
    secondaryBright: '#e8bd60',
    secondaryDim:    '#a06d20',

    // Alert (red)
    red:       '#d04444',
    redBright: '#e06666',

    // Utility
    black:        '#000000',
    border:       '#0a1828',
    borderBright: '#504b1e',
    none:         '#00000000',
  },

  // Yellow — MUTHUR 6000 (Alien, 1979) amber CRT phosphor
  yellow: {
    // Backgrounds — deep black with warm CRT warmth
    bg:        '#080400',
    bgLight:   '#140c04',
    bgLighter: '#1e1408',

    // Primary CRT phosphor (amber — MUTHUR terminal glow)
    primary:       '#cc9932',
    primaryBright: '#e0b858',
    primaryWhite:  '#f0d898',
    primaryMid:    '#a87828',
    primaryDim:    '#7a5818',
    primaryFaint:  '#463210',
    primaryGhost:  '#382a18',

    // Secondary phosphor (sickly green — MUTHUR status text)
    secondary:       '#88a848',
    secondaryBright: '#a8c868',
    secondaryDim:    '#607830',

    // Alert (red — warning klaxon)
    red:       '#c83030',
    redBright: '#e04848',

    // Utility
    black:        '#000000',
    border:       '#1e1808',
    borderBright: '#3a3018',
    none:         '#00000000',
  },

  // Green — MUTHUR 6000 green variant (swapped primary/secondary)
  green: {
    // Backgrounds — deep black with cool CRT tint
    bg:        '#000804',
    bgLight:   '#041408',
    bgLighter: '#081e10',

    // Primary CRT phosphor (sickly green — MUTHUR status text)
    primary:       '#88a848',
    primaryBright: '#a8c868',
    primaryWhite:  '#c8e098',
    primaryMid:    '#708838',
    primaryDim:    '#506828',
    primaryFaint:  '#304018',
    primaryGhost:  '#283818',

    // Secondary phosphor (amber — MUTHUR terminal glow)
    secondary:       '#cc9932',
    secondaryBright: '#e0b858',
    secondaryDim:    '#a87828',

    // Alert (red — warning klaxon)
    red:       '#c83030',
    redBright: '#e04848',

    // Utility
    black:        '#000000',
    border:       '#0e1808',
    borderBright: '#1e3018',
    none:         '#00000000',
  },

  // Red — USCM Colonial Marines (Aliens, 1986) tactical HUD
  red: {
    // Backgrounds — deep black with blood-red CRT warmth
    bg:        '#080002',
    bgLight:   '#140408',
    bgLighter: '#1e080c',

    // Primary CRT phosphor (red — motion tracker / tactical display)
    primary:       '#c84040',
    primaryBright: '#e06060',
    primaryWhite:  '#f0a0a0',
    primaryMid:    '#a83030',
    primaryDim:    '#782020',
    primaryFaint:  '#461414',
    primaryGhost:  '#381818',

    // Secondary phosphor (steel blue — IFF / squad status)
    secondary:       '#6888a8',
    secondaryBright: '#88a8c8',
    secondaryDim:    '#486878',

    // Alert (amber — proximity warning)
    red:       '#d09030',
    redBright: '#e8b050',

    // Utility
    black:        '#000000',
    border:       '#1e0808',
    borderBright: '#3a1818',
    none:         '#00000000',
  },
};

module.exports = palettes;
