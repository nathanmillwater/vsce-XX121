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

  // Yellow — warm amber phosphor with blue accents
  yellow: {
    // Backgrounds — pitch black with faint CRT tint
    bg:        '#090602',
    bgLight:   '#1a1006',
    bgLighter: '#24180a',

    // Primary CRT phosphor (amber)
    primary:       '#d4a030',
    primaryBright: '#e8bd60',
    primaryWhite:  '#f8e0a0',
    primaryMid:    '#b88520',
    primaryDim:    '#886018',
    primaryFaint:  '#503a1a',
    primaryGhost:  '#484028',

    // Secondary phosphor (blue)
    secondary:       '#7ab8d8',
    secondaryBright: '#a4d8f0',
    secondaryDim:    '#5898b8',

    // Alert (red)
    red:       '#d04444',
    redBright: '#e06666',

    // Utility
    black:        '#000000',
    border:       '#383412',
    borderBright: '#504b1e',
    none:         '#00000000',
  },

  // Green — classic terminal phosphor
  green: {
    // Backgrounds — pitch black with faint CRT tint
    bg:        '#020904',
    bgLight:   '#061a0c',
    bgLighter: '#0a2414',

    // Primary CRT phosphor (green)
    primary:       '#78d898',
    primaryBright: '#a4f0c0',
    primaryWhite:  '#c8f8d8',
    primaryMid:    '#58b878',
    primaryDim:    '#388858',
    primaryFaint:  '#1a5030',
    primaryGhost:  '#284838',

    // Secondary phosphor (amber)
    secondary:       '#d4a030',
    secondaryBright: '#e8bd60',
    secondaryDim:    '#a06d20',

    // Alert (red)
    red:       '#d04444',
    redBright: '#e06666',

    // Utility
    black:        '#000000',
    border:       '#383412',
    borderBright: '#504b1e',
    none:         '#00000000',
  },
};

module.exports = palettes;
