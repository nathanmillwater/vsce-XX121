// ============================================================
// Every color extracted into a
// standardised palette for easy future modification.
// ============================================================

const palettes = {
  // Default — cool blue phosphor with amber accents
  blue: {
    // Backgrounds (darkest to lightest)
    bgDeepest:  '#000000',  // absolute black
    bgDeep:     '#020609',  // main editor bg
    bg:         '#06101a',  // sidebar, title bar
    bgElevated: '#0a1624',  // panels, inputs
    bgOverlay:  '#1a3850',  // borders, overlays

    // Foregrounds (dimmest to brightest)
    fgFaint:    '#283848',  // ghost text, ignored items
    fgDim:      '#386888',  // comments, dim borders
    fgMuted:    '#5898b8',  // descriptions, inactive
    fgSoft:     '#7ab8d8',  // secondary foreground
    fg:         '#a4d8f0',  // primary foreground

    // Accent colors
    red:        '#d04444',  // keywords, errors, tags
    orange:     '#e8bd60',  // warnings, parameters
    yellow:     '#d4a030',  // strings, accent, active
    green:      '#58b878',  // functions, added, success
    cyan:       '#50b8b8',  // types, info, classes
    purple:     '#b070a0',  // constants, numbers

    // Utility
    transparent: '#00000000',
    white:       '#f8f7d8',
  },

  // Yellow — warm amber phosphor with blue accents
  yellow: {
    // Backgrounds (darkest to lightest)
    bgDeepest:  '#000000',  // absolute black
    bgDeep:     '#090602',  // main editor bg
    bg:         '#1a1006',  // sidebar, title bar
    bgElevated: '#24180a',  // panels, inputs
    bgOverlay:  '#503a1a',  // borders, overlays

    // Foregrounds (dimmest to brightest)
    fgFaint:    '#484028',  // ghost text, ignored items
    fgDim:      '#886018',  // comments, dim borders
    fgMuted:    '#b88520',  // descriptions, inactive
    fgSoft:     '#d4a030',  // secondary foreground
    fg:         '#e8bd60',  // primary foreground

    // Accent colors
    red:        '#d04444',  // keywords, errors, tags
    orange:     '#a4d8f0',  // warnings, parameters
    yellow:     '#7ab8d8',  // strings, accent, active
    green:      '#68b858',  // functions, added, success
    cyan:       '#58b8a8',  // types, info, classes
    purple:     '#b87098',  // constants, numbers

    // Utility
    transparent: '#00000000',
    white:       '#f8f7d8',
  },

  // Green — classic terminal phosphor
  green: {
    // Backgrounds (darkest to lightest)
    bgDeepest:  '#000000',  // absolute black
    bgDeep:     '#020904',  // main editor bg
    bg:         '#061a0c',  // sidebar, title bar
    bgElevated: '#0a2414',  // panels, inputs
    bgOverlay:  '#1a5030',  // borders, overlays

    // Foregrounds (dimmest to brightest)
    fgFaint:    '#284838',  // ghost text, ignored items
    fgDim:      '#388858',  // comments, dim borders
    fgMuted:    '#58b878',  // descriptions, inactive
    fgSoft:     '#78d898',  // secondary foreground
    fg:         '#a4f0c0',  // primary foreground

    // Accent colors
    red:        '#d04444',  // keywords, errors, tags
    orange:     '#e8bd60',  // warnings, parameters
    yellow:     '#d4a030',  // strings, accent, active
    green:      '#58b878',  // functions, added, success
    cyan:       '#50b8b8',  // types, info, classes
    purple:     '#b070a0',  // constants, numbers

    // Utility
    transparent: '#00000000',
    white:       '#f8f7d8',
  },
};

module.exports = palettes;
