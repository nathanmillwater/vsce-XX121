const fs = require('fs');
const path = require('path');

// ============================================================
// MU/TH/UR 6000 — Complete Theme Builder
// Based on comprehensive VSCode theme reference template.
// All colors extracted to semantic palette variables so the
// entire theme can be reskinned by changing the palette.
// ============================================================

// Helper: append an alpha hex suffix to a 6-digit hex color
const alpha = (color, a) => color + a;

// ── Palettes ────────────────────────────────────────────────
// Each palette follows the same shape so the theme builder can
// be driven by any of them.

const palettes = {
  // Default — cool blue phosphor with amber accents
  blue: {
    bg:        '#020609',
    bgLight:   '#06101a',
    bgLighter: '#0a1624',
    bgPanel:   '#040c14',

    primary:       '#7ab8d8',
    primaryBright: '#a4d8f0',
    primaryWhite:  '#c8e8f8',
    primaryMid:    '#5898b8',
    primaryDim:    '#386888',
    primaryFaint:  '#1a3850',
    primaryGhost:  '#283848',

    secondary:       '#d4a030',
    secondaryBright: '#e8bd60',
    secondaryDim:    '#a06d20',
    secondaryGhost:  '#6b5530',

    red:       '#d04444',
    redBright: '#e06666',
    redDim:    '#882222',

    green:       '#58b878',
    greenBright: '#78d898',
    cyan:        '#50b8b8',
    cyanBright:  '#78d8d8',
    magenta:       '#b070a0',
    magentaBright: '#d098c0',

    black: '#000000',
    white: '#f8f7d8',
    border:       '#383412',
    borderBright: '#504b1e',
    none:         '#00000000',
  },

  // Yellow — warm amber phosphor with blue accents
  yellow: {
    bg:        '#090602',
    bgLight:   '#1a1006',
    bgLighter: '#24180a',
    bgPanel:   '#140c04',

    primary:       '#d4a030',
    primaryBright: '#e8bd60',
    primaryWhite:  '#f8e8c8',
    primaryMid:    '#b88520',
    primaryDim:    '#886018',
    primaryFaint:  '#503a1a',
    primaryGhost:  '#484028',

    secondary:       '#7ab8d8',
    secondaryBright: '#a4d8f0',
    secondaryDim:    '#386888',
    secondaryGhost:  '#283848',

    red:       '#d04444',
    redBright: '#e06666',
    redDim:    '#882222',

    green:       '#68b858',
    greenBright: '#88d878',
    cyan:        '#58b8a8',
    cyanBright:  '#78d8c8',
    magenta:       '#b87098',
    magentaBright: '#d898b8',

    black: '#000000',
    white: '#f8f7d8',
    border:       '#383412',
    borderBright: '#504b1e',
    none:         '#00000000',
  },
};

// ── Theme Builder ───────────────────────────────────────────
// Generates a complete theme object from a palette and name.
function buildTheme(name, palette) {

const tokens = {
  comment:    palette.red,
  variable:   palette.primaryBright,
  keyword:    palette.primary,
  operator:   palette.primary,
  function:   palette.secondary,
  string:     palette.green,
  number:     palette.secondary,
  class:      palette.secondaryBright,
  type:       palette.cyan,
  tag:        palette.primaryBright,
  attribute:  palette.primaryBright,
  regex:      palette.secondary,
  builtin:    palette.primaryMid,
  invalid:    palette.red,
  link:       palette.primaryBright,
  linkDesc:   palette.primaryMid,
  linkAnchor: palette.primary,
  heading:    palette.primaryWhite,
  markup:     palette.primaryBright,
  gray:       palette.primaryGhost,
};

return {
  name,
  type: 'dark',
  semanticHighlighting: true,
  semanticTokenColors: {
    'enumMember':              { foreground: tokens.builtin },
    'variable.constant':       { foreground: tokens.number },
    'variable.defaultLibrary': { foreground: tokens.class },
  },

  colors: {
    // ── General ────────────────────────────────────────────
    'foreground':                            palette.primary,
    'focusBorder':                           palette.primaryDim,
    'selection.background':                  alpha(palette.primary, '40'),
    'icon.foreground':                       palette.primary,
    'widget.shadow':                         alpha(palette.black, '5c'),
    'textLink.foreground':                   palette.primaryBright,

    // ── Editor ─────────────────────────────────────────────
    'editor.background':                     palette.bg,
    'editor.foreground':                     palette.primary,
    'editorLineNumber.foreground':           palette.primaryDim,
    'editorLineNumber.activeForeground':     palette.primary,
    'editorCursor.foreground':               palette.redBright,
    'editorCursor.background':               palette.bg,

    'editor.selectionBackground':            alpha(palette.primary, '40'),
    'editor.selectionForeground':            palette.primaryWhite,
    'editor.inactiveSelectionBackground':    alpha(palette.primary, '20'),
    'editor.selectionHighlightBackground':   alpha(palette.primary, '26'),
    'editor.selectionHighlightBorder':       palette.primaryDim,

    'editor.findMatchBackground':            alpha(palette.secondary, '30'),
    'editor.findMatchBorder':                palette.secondary,
    'editor.findMatchHighlightBackground':   alpha(palette.primary, '20'),
    'editor.findMatchHighlightBorder':       palette.none,
    'editor.findRangeHighlightBackground':   alpha(palette.primary, '15'),
    'editor.findRangeHighlightBorder':       palette.none,

    'editor.rangeHighlightBackground':       alpha(palette.primary, '0b'),
    'editor.rangeHighlightBorder':           palette.none,
    'editor.hoverHighlightBackground':       alpha(palette.primary, '40'),

    'editor.wordHighlightBackground':        alpha(palette.primary, '20'),
    'editor.wordHighlightStrongBackground':  alpha(palette.primary, '30'),

    'editor.lineHighlightBackground':        alpha(palette.primaryDim, '18'),
    'editor.lineHighlightBorder':            palette.bgLighter,

    'editorLink.activeForeground':           palette.primaryBright,
    'editorWhitespace.foreground':           palette.primaryFaint,

    'editorIndentGuide.background':          palette.border,
    'editorIndentGuide.activeBackground':    palette.borderBright,
    'editorIndentGuide.background1':         palette.border,
    'editorIndentGuide.activeBackground1':   palette.borderBright,

    'editorRuler.foreground':                palette.border,

    'editorBracketMatch.background':         alpha(palette.secondary, '30'),
    'editorBracketMatch.border':             palette.secondaryBright,

    'editor.foldBackground':                 alpha(palette.primary, '15'),

    'editorOverviewRuler.background':        palette.none,
    'editorOverviewRuler.border':            alpha(palette.primaryDim, '4d'),
    'editorOverviewRuler.errorForeground':   palette.red,
    'editorOverviewRuler.warningForeground': palette.secondary,
    'editorOverviewRuler.infoForeground':    palette.primary,

    'editorError.foreground':                palette.red,
    'editorError.background':                palette.none,
    'editorError.border':                    palette.none,
    'editorWarning.foreground':              palette.secondary,
    'editorWarning.background':              palette.none,
    'editorWarning.border':                  palette.none,
    'editorInfo.foreground':                 palette.primary,
    'editorInfo.background':                 palette.none,
    'editorInfo.border':                     palette.none,
    'editorHint.foreground':                 palette.primaryMid,

    'editorGutter.background':               palette.bg,
    'editorGutter.addedBackground':          palette.primaryMid,
    'editorGutter.modifiedBackground':       palette.secondary,
    'editorGutter.deletedBackground':        palette.red,
    'editorGutter.foldingControlForeground': palette.primaryDim,
    'editorGutter.commentRangeForeground':   palette.primaryDim,

    'editorCodeLens.foreground':             palette.primaryDim,

    // ── Editor Widget (find/replace, suggest, hover) ───────
    'editorWidget.background':               palette.bg,
    'editorWidget.foreground':               palette.primary,
    'editorWidget.border':                   palette.border,
    'editorWidget.resizeBorder':             palette.primaryDim,

    'editorSuggestWidget.background':        palette.bg,
    'editorSuggestWidget.border':            palette.border,
    'editorSuggestWidget.foreground':        palette.primary,
    'editorSuggestWidget.highlightForeground': palette.primaryBright,
    'editorSuggestWidget.selectedBackground': alpha(palette.primary, '30'),

    'editorHoverWidget.foreground':          palette.primary,
    'editorHoverWidget.background':          palette.bg,
    'editorHoverWidget.border':              palette.border,

    // ── Diff Editor ────────────────────────────────────────
    'diffEditor.insertedTextBackground':     alpha(palette.primaryMid, '33'),
    'diffEditor.removedTextBackground':      alpha(palette.red, '33'),
    'diffEditor.insertedLineBackground':     alpha(palette.primaryMid, '0a'),
    'diffEditor.removedLineBackground':      alpha(palette.red, '0a'),
    'diffEditor.border':                     palette.border,

    // ── Editor Marker Navigation ───────────────────────────
    'editorMarkerNavigation.background':        palette.bgLighter,
    'editorMarkerNavigationError.background':   palette.red,
    'editorMarkerNavigationWarning.background': palette.secondary,
    'editorMarkerNavigationInfo.background':    palette.primary,

    // ── Merge ──────────────────────────────────────────────
    'merge.currentHeaderBackground':         alpha(palette.primaryMid, '80'),
    'merge.currentContentBackground':        alpha(palette.primaryMid, '40'),
    'merge.incomingHeaderBackground':        alpha(palette.secondary, '80'),
    'merge.incomingContentBackground':       alpha(palette.secondary, '40'),
    'merge.commonHeaderBackground':          palette.bgLighter,
    'merge.commonContentBackground':         palette.bgLight,

    // ── Terminal ───────────────────────────────────────────
    'terminal.background':          palette.bg,
    'terminal.foreground':          palette.primary,
    'terminal.border':              palette.border,
    'terminal.ansiBlack':           palette.black,
    'terminal.ansiRed':             palette.red,
    'terminal.ansiGreen':           palette.green,
    'terminal.ansiYellow':          palette.secondary,
    'terminal.ansiBlue':            palette.primary,
    'terminal.ansiMagenta':         palette.magenta,
    'terminal.ansiCyan':            palette.cyan,
    'terminal.ansiWhite':           palette.white,
    'terminal.ansiBrightBlack':     palette.primaryGhost,
    'terminal.ansiBrightRed':       palette.redBright,
    'terminal.ansiBrightGreen':     palette.greenBright,
    'terminal.ansiBrightYellow':    palette.secondaryBright,
    'terminal.ansiBrightBlue':      palette.primaryBright,
    'terminal.ansiBrightMagenta':   palette.magentaBright,
    'terminal.ansiBrightCyan':      palette.cyanBright,
    'terminal.ansiBrightWhite':     palette.white,
    'terminal.selectionBackground': alpha(palette.primary, '40'),
    'terminalCursor.foreground':    palette.primaryBright,
    'terminalCursor.background':    palette.bg,

    // ── Sidebar ────────────────────────────────────────────
    'sideBar.background':                  palette.bg,
    'sideBar.foreground':                  palette.primaryBright,
    'sideBar.border':                      palette.primaryMid,
    'sideBar.dropBackground':              alpha(palette.primary, '30'),
    'sideBarTitle.foreground':             palette.primaryWhite,
    'sideBarTitle.background':             palette.primaryDark,
    'sideBarSectionHeader.background':     palette.secondary,
    'sideBarSectionHeader.foreground':     palette.black,
    'sideBarSectionHeader.border':         palette.secondary,

    // ── Activity Bar ───────────────────────────────────────
    'activityBar.background':          palette.primaryDim,
    'activityBar.foreground':          palette.white,
    'activityBar.activeBorder':       palette.red,
    'activityBar.inactiveForeground':  alpha(palette.primaryWhite, '60'),
    'activityBar.activeBackground':  palette.secondary,
    'activityBar.border':              palette.black,
    'activityBarBadge.background':     palette.redDim,
    'activityBarBadge.foreground':     palette.white,

    // ── Status Bar ─────────────────────────────────────────
    'statusBar.background':                palette.primaryDim,
    'statusBar.foreground':                palette.primaryWhite,
    'statusBar.border':                    palette.black,
    'statusBar.debuggingBackground':       palette.secondaryBright,
    'statusBar.debuggingForeground':       palette.black,
    'statusBar.noFolderBackground':        palette.primaryMid,
    'statusBar.noFolderForeground':        palette.black,
    'statusBarItem.activeBackground':      alpha(palette.white, '25'),
    'statusBarItem.hoverBackground':       palette.primaryWhite,
    'statusBarItem.prominentBackground':   palette.red,
    'statusBarItem.prominentForeground':   palette.white,
    'statusBarItem.remoteBackground':      palette.primary,
    'statusBarItem.remoteForeground':      palette.black,
    'statusBarItem.errorBackground':       palette.redDim,
    'statusBarItem.errorForeground':       palette.white,
    'statusBarItem.warningBackground':     palette.secondaryDim,
    'statusBarItem.warningForeground':     palette.white,
    'problemsErrorIcon.foreground':        palette.red,
    'problemsWarningIcon.foreground':      palette.secondary,
    'problemsInfoIcon.foreground':         palette.primary,

    // ── Title Bar ──────────────────────────────────────────
    'titleBar.activeBackground':   palette.primaryDim,
    'titleBar.activeForeground':   palette.white,
    'titleBar.inactiveBackground': palette.primaryFaint,
    'titleBar.inactiveForeground': palette.primaryMid,
    'titleBar.border':             palette.black,

    // ── Command Center ────────────────────────────────────
    'commandCenter.foreground':         palette.primaryBright,
    'commandCenter.background':         palette.bgLighter,
    'commandCenter.border':             palette.black,
    'commandCenter.activeForeground':   palette.primaryWhite,
    'commandCenter.activeBackground':   palette.primaryFaint,
    'commandCenter.activeBorder':       palette.primary,
    'commandCenter.inactiveForeground': palette.primaryMid,
    'commandCenter.inactiveBorder':     palette.primaryGhost,

    // ── Toolbar (nav, layout, action buttons) ─────────────
    'toolbar.hoverBackground':          alpha(palette.primary, '30'),
    'toolbar.hoverOutline':             palette.none,
    'toolbar.activeBackground':         alpha(palette.primary, '40'),

    // ── Menu ───────────────────────────────────────────────
    'menubar.selectionForeground': palette.black,
    'menubar.selectionBackground': palette.secondary,
    'menubar.selectionBorder':     palette.secondaryBright,
    'menu.foreground':             palette.primaryWhite,
    'menu.background':             palette.bg,
    'menu.selectionForeground':    palette.black,
    'menu.selectionBackground':    palette.secondary,
    'menu.selectionBorder':        palette.none,
    'menu.separatorBackground':    palette.secondaryDim,
    'menu.border':                 palette.secondaryDim,

    // ── Buttons ────────────────────────────────────────────
    'button.background':              palette.primaryDim,
    'button.foreground':              palette.white,
    'button.hoverBackground':         palette.primaryMid,
    'button.secondaryForeground':     palette.primary,
    'button.secondaryBackground':     palette.border,
    'button.secondaryHoverBackground': palette.borderBright,

    // ── Input Fields ───────────────────────────────────────
    'input.background':            palette.bg,
    'input.border':                palette.border,
    'input.foreground':            palette.primary,
    'input.placeholderForeground': palette.primaryGhost,
    'input.focusBorder':           palette.primary,
    'inputOption.activeBackground':  alpha(palette.primary, '40'),
    'inputOption.activeBorder':      palette.primary,
    'inputOption.activeForeground':  palette.primaryBright,

    // ── Input Validation ───────────────────────────────────
    'inputValidation.errorBackground':   alpha(palette.red, '30'),
    'inputValidation.errorBorder':       palette.red,
    'inputValidation.infoBorder':        palette.primary,
    'inputValidation.infoBackground':    alpha(palette.primary, '20'),
    'inputValidation.warningBackground': alpha(palette.secondary, '30'),
    'inputValidation.warningBorder':     palette.secondary,

    // ── Dropdown ───────────────────────────────────────────
    'dropdown.background':     palette.bg,
    'dropdown.foreground':     palette.primary,
    'dropdown.border':         palette.border,
    'dropdown.listBackground': palette.bg,

    // ── Checkbox ───────────────────────────────────────────
    'checkbox.background': palette.bg,
    'checkbox.foreground': palette.primary,
    'checkbox.border':     palette.border,

    // ── Scrollbar ──────────────────────────────────────────
    'scrollbar.shadow':                palette.primaryBright,
    'scrollbarSlider.background':      alpha(palette.primaryDim, '66'),
    'scrollbarSlider.hoverBackground': alpha(palette.primaryDim, 'b3'),
    'scrollbarSlider.activeBackground': alpha(palette.primary, '66'),

    // ── Badge & Progress ───────────────────────────────────
    'badge.background':      palette.primary,
    'badge.foreground':      palette.black,
    'progressBar.background': palette.primary,

    // ── Notifications ──────────────────────────────────────
    'notificationCenter.border':            palette.border,
    'notificationCenterHeader.foreground':  palette.primary,
    'notificationCenterHeader.background':  palette.bgLight,
    'notifications.background':             palette.bg,
    'notifications.foreground':             palette.primary,
    'notifications.border':                 palette.border,
    'notificationToast.border':             palette.border,
    'notificationsErrorIcon.foreground':    palette.red,
    'notificationsWarningIcon.foreground':  palette.secondary,
    'notificationsInfoIcon.foreground':     palette.primary,
    'notificationLink.foreground':          palette.primaryBright,

    // ── List / Tree ────────────────────────────────────────
    'list.activeSelectionBackground':   alpha(palette.secondary, '30'),
    'list.activeSelectionForeground':   palette.secondaryBright,
    'list.focusBackground':             alpha(palette.secondary, '30'),
    'list.focusForeground':             palette.secondaryBright,
    'list.hoverBackground':             alpha(palette.primary, '25'),
    'list.hoverForeground':             palette.secondaryBright,
    'list.inactiveSelectionBackground': palette.bgLighter,
    'list.inactiveSelectionForeground': palette.primary,
    'list.invalidItemForeground':       palette.red,
    'list.dropBackground':              alpha(palette.secondary, '30'),
    'list.filterMatchBackground':       alpha(palette.secondary, '30'),
    'list.filterMatchBorder':           palette.secondary,
    'list.highlightForeground':         palette.secondaryBright,
    'tree.indentGuidesStroke':          palette.secondaryBright,

    // ── List Filter Widget ─────────────────────────────────
    'listFilterWidget.background':       palette.bgLighter,
    'listFilterWidget.outline':          palette.none,
    'listFilterWidget.noMatchesOutline': palette.red,

    // ── Picker ─────────────────────────────────────────────
    'pickerGroup.border':     palette.border,
    'pickerGroup.foreground': palette.primaryBright,

    // ── Tabs ───────────────────────────────────────────────
    'tab.activeBackground':             palette.secondary,
    'tab.activeForeground':             palette.bg,
    'tab.activeBorder':                 palette.secondary,
    'tab.activeBorderTop':              palette.white,
    'tab.inactiveBackground':           palette.primaryFaint,
    'tab.inactiveForeground':           palette.primaryMid,
    'tab.border':                       palette.border,
    'tab.hoverBackground':              palette.primaryDim,
    'tab.hoverForeground':              palette.primaryWhite,
    'tab.unfocusedActiveBackground':    palette.primaryFaint,
    'tab.unfocusedActiveForeground':    palette.primaryMid,
    'tab.unfocusedActiveBorderTop':     palette.primaryDim,
    'tab.unfocusedHoverBackground':     palette.primaryFaint,
    'tab.unfocusedHoverForeground':     palette.primaryMid,

    // ── Editor Groups / Panes ──────────────────────────────
    'editorGroup.border':                  palette.border,
    'editorGroup.dropBackground':          alpha(palette.primary, '20'),
    'editorGroup.emptyBackground':         palette.bg,
    'editorGroupHeader.tabsBackground':    palette.bg,
    'editorGroupHeader.tabsBorder':        palette.border,
    'editorGroupHeader.noTabsBackground':  palette.bg,
    'editorGroupHeader.border':            palette.border,
    'editorPane.background':               palette.bg,

    // ── Panel (terminal, output, problems) ─────────────────
    'panel.background':               palette.bg,
    'panel.foreground':               palette.primary,
    'panel.border':                   palette.border,
    'panelTitle.activeBorder':        palette.secondary,
    'panelTitle.activeForeground':    palette.secondaryBright,
    'panelTitle.inactiveForeground':  palette.primaryGhost,
    'panelSection.border':            palette.border,

    // ── Peek View ──────────────────────────────────────────
    'peekView.border':                          palette.primary,
    'peekViewEditor.background':                palette.bg,
    'peekViewEditorGutter.background':          palette.bg,
    'peekViewEditor.matchHighlightBackground':  alpha(palette.primary, '40'),
    'peekViewEditor.matchHighlightBorder':      palette.secondary,
    'peekViewResult.background':                palette.bg,
    'peekViewResult.fileForeground':            palette.primary,
    'peekViewResult.lineForeground':            palette.primaryMid,
    'peekViewResult.matchHighlightBackground':  alpha(palette.primary, '40'),
    'peekViewResult.selectionBackground':       alpha(palette.primary, '30'),
    'peekViewResult.selectionForeground':       palette.primaryBright,
    'peekViewTitle.background':                 palette.bg,
    'peekViewTitleDescription.foreground':      palette.primaryMid,
    'peekViewTitleLabel.foreground':            palette.primaryBright,

    // ── Minimap ────────────────────────────────────────────
    'minimap.background':            palette.bg,
    'minimap.findMatchHighlight':    alpha(palette.primary, '60'),
    'minimap.selectionHighlight':    alpha(palette.primary, '40'),
    'minimap.errorHighlight':        palette.red,
    'minimap.warningHighlight':      palette.secondary,
    'minimapGutter.addedBackground':    palette.primaryMid,
    'minimapGutter.modifiedBackground': palette.secondary,
    'minimapGutter.deletedBackground':  palette.red,
    'minimapSlider.background':         alpha(palette.border, '50'),
    'minimapSlider.hoverBackground':    alpha(palette.border, 'b0'),
    'minimapSlider.activeBackground':   alpha(palette.primary, '60'),

    // ── Breadcrumb ─────────────────────────────────────────
    'breadcrumb.background':                palette.secondary,
    'breadcrumb.foreground':                palette.black,
    'breadcrumb.focusForeground':           palette.primaryWhite,
    'breadcrumb.activeSelectionForeground': palette.white,
    'breadcrumbPicker.background':          palette.bgLighter,

    // ── Git Decorations ────────────────────────────────────
    'gitDecoration.addedResourceForeground':         palette.primaryMid,
    'gitDecoration.modifiedResourceForeground':      palette.secondary,
    'gitDecoration.deletedResourceForeground':       palette.red,
    'gitDecoration.untrackedResourceForeground':     palette.primaryBright,
    'gitDecoration.ignoredResourceForeground':       palette.primaryFaint,
    'gitDecoration.conflictingResourceForeground':   palette.secondaryBright,
    'gitDecoration.stageModifiedResourceForeground': palette.secondary,
    'gitDecoration.stageDeletedResourceForeground':  palette.redDim,
    'gitDecoration.submoduleResourceForeground':     palette.primaryMid,

    // ── Command Palette / Quick Input ──────────────────────
    'quickInput.background':             palette.bg,
    'quickInput.foreground':             palette.primary,
    'quickInputList.focusBackground':    alpha(palette.primary, '30'),
    'quickInputTitle.background':        palette.bg,

    // ── Settings ───────────────────────────────────────────
    'settings.headerForeground':        palette.primaryBright,
    'settings.modifiedItemIndicator':   palette.secondary,
    'settings.focusedRowBackground':    alpha(palette.primary, '20'),
    'settings.focusedRowBorder':        palette.primaryDim,

    // ── Welcome Page ───────────────────────────────────────
    'welcomePage.tileBackground':              palette.bg,
    'welcomePage.tileBorder':                  palette.border,
    'welcomePage.progress.foreground':         palette.primary,
    'walkThrough.embeddedEditorBackground':    alpha(palette.black, '50'),

    // ── Debug ──────────────────────────────────────────────
    'debugToolBar.background':           palette.bg,
    'debugToolBar.border':               palette.border,
    'debugIcon.breakpointForeground':    palette.red,
    'debugIcon.startForeground':         palette.primaryBright,
    'debugIcon.pauseForeground':         palette.secondary,
    'debugIcon.stopForeground':          palette.red,
    'debugConsole.infoForeground':       palette.primary,
    'debugConsole.warningForeground':    palette.secondary,
    'debugConsole.errorForeground':      palette.red,
    'debugExceptionWidget.background':   alpha(palette.redDim, '40'),
    'debugExceptionWidget.border':       palette.red,

    // ── Testing ────────────────────────────────────────────
    'testing.iconPassed':  palette.primaryBright,
    'testing.iconFailed':  palette.red,
    'testing.iconErrored': palette.red,
    'testing.iconQueued':  palette.primaryGhost,
    'testing.iconSkipped': palette.primaryDim,
    'testing.iconUnset':   palette.primaryGhost,
  },

  tokenColors: [
    // ════════════════════════════════════════════════════════
    // GENERAL / UNIVERSAL RULES
    // ════════════════════════════════════════════════════════
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment', 'string.quoted.docstring', 'string.quoted.docstring punctuation.definition.string.begin', 'string.quoted.docstring punctuation.definition.string.end'],
      settings: { foreground: tokens.comment },
    },
    {
      name: 'Comment Markup Link',
      scope: ['comment markup.link'],
      settings: { foreground: tokens.gray },
    },
    {
      name: 'Keywords',
      scope: ['keyword'],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'Keyword Control',
      scope: ['keyword.control'],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'Storage',
      scope: ['storage'],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Variables',
      scope: ['variable'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Language Variables',
      scope: ['variable.language'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Namespaces',
      scope: ['entity.name.namespace'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'meta.require',
        'support.function.any-method',
        'variable.function',
      ],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Methods',
      scope: ['keyword.other.special-method'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Support Function',
      scope: ['support.function'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Classes',
      scope: ['support.class', 'entity.name.type.class'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Class Name',
      scope: [
        'entity.name.class',
        'variable.other.class.js',
        'variable.other.class.ts',
      ],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Class Name (namespace type)',
      scope: ['entity.name.type.namespace'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Class Name (identifier)',
      scope: ['entity.name.class.identifier.namespace.type'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Type Name',
      scope: ['entity.name.type'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Strings',
      scope: ['string'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'Punctuation Definition String',
      scope: ['punctuation.definition.string.begin', 'punctuation.definition.string.end'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'Integers',
      scope: ['constant.numeric'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Constants',
      scope: ['constant'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Punctuation Definition Constant',
      scope: ['punctuation.definition.constant'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Tags',
      scope: ['entity.name.tag'],
      settings: { foreground: tokens.tag },
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Attribute IDs',
      scope: ['entity.other.attribute-name.id'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Attribute Class',
      scope: ['entity.other.attribute-name.class.css'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Selector',
      scope: ['meta.selector'],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'Inherited Class',
      scope: ['entity.other.inherited-class'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Constant Other Symbol',
      scope: ['constant.other.symbol'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Text (function parameter)',
      scope: ['variable.parameter.function'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Support Type (property name)',
      scope: ['support.type.property-name'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Support Constant (property value)',
      scope: ['support.constant.property-value'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Support Constant (font name)',
      scope: ['support.constant.font-name'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Meta Tag',
      scope: ['meta.tag'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Headings',
      scope: ['markup.heading'],
      settings: { foreground: tokens.heading, fontStyle: 'bold' },
    },
    {
      name: 'Headings (punctuation / section)',
      scope: ['markup.heading punctuation.definition.heading', 'entity.name.section'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Units',
      scope: ['keyword.other.unit'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Bold',
      scope: ['markup.bold', 'todo.bold'],
      settings: { foreground: tokens.number, fontStyle: 'bold' },
    },
    {
      name: 'Bold (punctuation)',
      scope: ['punctuation.definition.bold'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Markup Italic',
      scope: ['markup.italic', 'punctuation.definition.italic', 'todo.emphasis'],
      settings: { foreground: tokens.keyword, fontStyle: '' },
    },
    {
      name: 'Emphasis',
      scope: ['emphasis md'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Markup Inserted',
      scope: ['markup.inserted'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'Markup Deleted',
      scope: ['markup.deleted'],
      settings: { foreground: tokens.invalid },
    },
    {
      name: 'Markup Changed',
      scope: ['markup.changed'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Regular Expressions',
      scope: ['string.regexp'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Escape Characters',
      scope: ['constant.character.escape'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: { fontStyle: 'underline' },
    },
    {
      name: 'Invalid (illegal)',
      scope: ['invalid.illegal'],
      settings: { foreground: palette.white },
    },
    {
      name: 'Invalid (illegal bad ampersand)',
      scope: ['invalid.illegal.bad-ampersand.html'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Invalid (broken)',
      scope: ['invalid.broken'],
      settings: { foreground: palette.white },
    },
    {
      name: 'Invalid (deprecated)',
      scope: ['invalid.deprecated'],
      settings: { foreground: palette.white },
    },
    {
      name: 'Invalid (unimplemented)',
      scope: ['invalid.unimplemented'],
      settings: { foreground: palette.white },
    },
    {
      name: 'Embedded',
      scope: ['punctuation.section.embedded', 'variable.interpolation'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Embedded (begin/end)',
      scope: ['punctuation.section.embedded.begin', 'punctuation.section.embedded.end'],
      settings: { foreground: tokens.keyword },
    },

    // ════════════════════════════════════════════════════════
    // DIFF
    // ════════════════════════════════════════════════════════
    {
      name: 'Markup Diff Changed',
      scope: ['markup.changed.diff'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Diff Header',
      scope: [
        'meta.diff.header.from-file',
        'meta.diff.header.to-file',
        'punctuation.definition.from-file.diff',
        'punctuation.definition.to-file.diff',
      ],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Diff Inserted',
      scope: ['markup.inserted.diff'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'Diff Deleted',
      scope: ['markup.deleted.diff'],
      settings: { foreground: tokens.variable },
    },

    // ════════════════════════════════════════════════════════
    // REGEXP
    // ════════════════════════════════════════════════════════
    {
      name: 'Regexp Constant Character-Class',
      scope: ['constant.other.character-class.regexp'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Regexp Operator Quantifier',
      scope: ['keyword.operator.quantifier.regexp'],
      settings: { foreground: tokens.number },
    },

    // ════════════════════════════════════════════════════════
    // OPERATORS (specific)
    // ════════════════════════════════════════════════════════
    {
      name: 'Operator Logical',
      scope: ['keyword.operator.logical'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Operator Bitwise',
      scope: ['keyword.operator.bitwise'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Operator Channel',
      scope: ['keyword.operator.channel'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Operator Arithmetic / Comparison / Increment',
      scope: [
        'keyword.operator.arithmetic',
        'keyword.operator.comparison',
        'keyword.operator.decrement',
        'keyword.operator.increment',
        'keyword.operator.relational',
      ],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Compound Assignment Operators',
      scope: ['keyword.operator.assignment.compound'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Operator Assignment',
      scope: ['keyword.operator.assignment'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Operator Delete',
      scope: ['keyword.operator.delete'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Punctuation Separator Delimiter',
      scope: ['punctuation.separator.delimiter'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Control Elements',
      scope: ['control.elements', 'keyword.operator.less'],
      settings: { foreground: tokens.number },
    },

    // ════════════════════════════════════════════════════════
    // STRING INTERPOLATION / TEMPLATES
    // ════════════════════════════════════════════════════════
    {
      name: 'String Interpolation',
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Reset JS String Interpolation Expression',
      scope: ['meta.template.expression'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Import Module JS',
      scope: ['keyword.operator.module'],
      settings: { foreground: tokens.keyword },
    },

    // ════════════════════════════════════════════════════════
    // JAVASCRIPT / TYPESCRIPT
    // ════════════════════════════════════════════════════════
    {
      name: 'js/ts Punctuation Separator Key-Value',
      scope: ['punctuation.separator.key-value'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'js/ts Import Keyword',
      scope: ['keyword.operator.expression.import'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'js/ts Math',
      scope: ['support.constant.math'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'js/ts Math Property',
      scope: ['support.constant.property.math'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'js/ts variable.other.constant',
      scope: ['variable.other.constant'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'js/ts Module',
      scope: ['support.module.node', 'support.type.object.module', 'support.module.node'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'js/ts entity.name.type.module',
      scope: ['entity.name.type.module'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'js Variable Readwrite',
      scope: [
        'variable.other.readwrite',
        'meta.object-literal.key',
        'support.variable.property',
        'support.variable.object.process',
        'support.variable.object.node',
      ],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'js/ts JSON',
      scope: ['support.constant.json'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'js/ts Keyword (instanceof, new, ternary, optional, keyof)',
      scope: [
        'keyword.operator.expression.instanceof',
        'keyword.operator.new',
        'keyword.operator.ternary',
        'keyword.operator.optional',
        'keyword.operator.expression.keyof',
      ],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'js/ts Console',
      scope: ['support.type.object.console'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'js/ts support.variable.property.process',
      scope: ['support.variable.property.process'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'js Console Function',
      scope: ['entity.name.function', 'support.function.console'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'js/ts Keyword Operators (delete, in, of, instanceof, new, typeof, void)',
      scope: [
        'keyword.operator.expression.delete',
        'keyword.operator.expression.in',
        'keyword.operator.expression.of',
        'keyword.operator.expression.instanceof',
        'keyword.operator.new',
        'keyword.operator.expression.typeof',
        'keyword.operator.expression.void',
      ],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'js/ts Compound Assignment',
      scope: [
        'keyword.operator.assignment.compound.js',
        'keyword.operator.assignment.compound.ts',
      ],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'js DOM',
      scope: ['support.type.object.dom'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'js DOM Variable',
      scope: ['support.variable.dom', 'support.variable.property.dom'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'js Flowtype',
      scope: ['support.type.type.flowtype'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'js Flow Primitive',
      scope: ['support.type.primitive'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'js Class Prop',
      scope: ['meta.property.object'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'js Func Parameter',
      scope: ['variable.parameter.function.js'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'js Template Literals Begin',
      scope: ['keyword.other.template.begin'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'js Template Literals End',
      scope: ['keyword.other.template.end'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'js Template Literals Variable Braces Begin',
      scope: ['keyword.other.substitution.begin'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'js Template Literals Variable Braces End',
      scope: ['keyword.other.substitution.end'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'js/ts Bold (attributes, super)',
      scope: [
        'entity.other.attribute-name.js',
        'entity.other.attribute-name.ts',
        'entity.other.attribute-name.jsx',
        'entity.other.attribute-name.tsx',
        'variable.language.super',
      ],
      settings: { },
    },
    {
      name: 'Parameter Function js/ts',
      scope: ['function.parameter'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Brace Function',
      scope: ['function.brace'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Storage JS TS',
      scope: ['token.storage'],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'Block Scope',
      scope: ['block.scope.end', 'block.scope.begin'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'ts Primitive/Builtin Types',
      scope: [
        'support.type.primitive.ts',
        'support.type.builtin.ts',
        'support.type.primitive.tsx',
        'support.type.builtin.tsx',
      ],
      settings: { foreground: tokens.class },
    },

    // ════════════════════════════════════════════════════════
    // JAVA
    // ════════════════════════════════════════════════════════
    {
      name: 'Java Type',
      scope: ['storage.type.annotation.java', 'storage.type.object.array.java'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Java Source',
      scope: ['source.java'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Java Punctuation',
      scope: [
        'punctuation.section.block.begin.java',
        'punctuation.section.block.end.java',
        'punctuation.definition.method-parameters.begin.java',
        'punctuation.definition.method-parameters.end.java',
        'meta.method.identifier.java',
        'punctuation.section.method.begin.java',
        'punctuation.section.method.end.java',
        'punctuation.terminator.java',
        'punctuation.section.class.begin.java',
        'punctuation.section.class.end.java',
        'punctuation.section.inner-class.begin.java',
        'punctuation.section.inner-class.end.java',
        'meta.method-call.java',
        'punctuation.section.class.begin.bracket.curly.java',
        'punctuation.section.class.end.bracket.curly.java',
        'punctuation.section.method.begin.bracket.curly.java',
        'punctuation.section.method.end.bracket.curly.java',
        'punctuation.separator.period.java',
        'punctuation.bracket.angle.java',
        'punctuation.definition.annotation.java',
        'meta.method.body.java',
      ],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Java Method',
      scope: ['meta.method.java'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Java Storage Modifier / Type',
      scope: ['storage.modifier.import.java', 'storage.type.java', 'storage.type.generic.java'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Java instanceof',
      scope: ['keyword.operator.instanceof.java'],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'Java Variable Name',
      scope: ['meta.definition.variable.name.java'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Java Variables',
      scope: ['token.variable.parameter.java'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Java Imports',
      scope: ['import.storage.java'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Java Packages Keyword',
      scope: ['token.package.keyword'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Java Packages',
      scope: ['token.package'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Java Storage',
      scope: ['token.storage.type.java'],
      settings: { foreground: tokens.class },
    },

    // ════════════════════════════════════════════════════════
    // C / C++ / C#
    // ════════════════════════════════════════════════════════
    {
      name: 'C/C++ Function',
      scope: ['meta.function.c', 'meta.function.cpp'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'C/C++ Block Punctuation',
      scope: [
        'punctuation.section.block.begin.bracket.curly.cpp',
        'punctuation.section.block.end.bracket.curly.cpp',
        'punctuation.terminator.statement.c',
        'punctuation.section.block.begin.bracket.curly.c',
        'punctuation.section.block.end.bracket.curly.c',
        'punctuation.section.parens.begin.bracket.round.c',
        'punctuation.section.parens.end.bracket.round.c',
        'punctuation.section.parameters.begin.bracket.round.c',
        'punctuation.section.parameters.end.bracket.round.c',
      ],
      settings: { foreground: palette.primary },
    },
    {
      name: 'C Operator Assignment / Comparison',
      scope: [
        'keyword.operator.assignment.c',
        'keyword.operator.comparison.c',
        'keyword.operator.c',
        'keyword.operator.increment.c',
        'keyword.operator.decrement.c',
        'keyword.operator.bitwise.shift.c',
        'keyword.operator.assignment.cpp',
        'keyword.operator.comparison.cpp',
        'keyword.operator.cpp',
        'keyword.operator.increment.cpp',
        'keyword.operator.decrement.cpp',
        'keyword.operator.bitwise.shift.cpp',
      ],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'C/C++ Punctuation Separator',
      scope: ['punctuation.separator.c', 'punctuation.separator.cpp'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'C Type POSIX-Reserved',
      scope: ['support.type.posix-reserved.c', 'support.type.posix-reserved.cpp'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'C sizeof',
      scope: ['keyword.operator.sizeof.c', 'keyword.operator.sizeof.cpp'],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'C#/C++ Scope Resolution',
      scope: [
        'entity.name.label.cs',
        'entity.name.scope-resolution.function.call',
        'entity.name.scope-resolution.function.definition',
      ],
      settings: { foreground: tokens.class },
    },
    {
      name: 'C# Storage Type',
      scope: ['storage.type.cs'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'C# Local Variable',
      scope: ['entity.name.variable.local.cs'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Variables (C)',
      scope: ['variable.c'],
      settings: { foreground: palette.primary },
    },

    // ════════════════════════════════════════════════════════
    // PYTHON
    // ════════════════════════════════════════════════════════
    {
      name: 'Python Magic Variable',
      scope: ['support.variable.magic.python'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Python Separator / Punctuation',
      scope: [
        'punctuation.separator.period.python',
        'punctuation.separator.element.python',
        'punctuation.parenthesis.begin.python',
        'punctuation.parenthesis.end.python',
      ],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Python Self',
      scope: ['variable.parameter.function.language.special.self.python'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Python Parameter',
      scope: ['variable.parameter.function.language.python'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Python Type',
      scope: ['support.type.python'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Python Logical',
      scope: ['keyword.operator.logical.python'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Python Variable Parameter',
      scope: ['variable.parameter.function.python'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Python Block Punctuation',
      scope: [
        'punctuation.definition.arguments.begin.python',
        'punctuation.definition.arguments.end.python',
        'punctuation.separator.arguments.python',
        'punctuation.definition.list.begin.python',
        'punctuation.definition.list.end.python',
      ],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Python Function Call Generic',
      scope: ['meta.function-call.generic.python'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Python Placeholder',
      scope: ['constant.character.format.placeholder.other.python'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Python Function Decorator @',
      scope: ['meta.function.decorator.python'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Python Function Decorator Support',
      scope: ['support.token.decorator.python', 'meta.function.decorator.identifier.python'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Python Keyword Control',
      scope: ['keyword.control.import.python', 'keyword.control.flow.python'],
      settings: { fontStyle: 'bold' },
    },

    // ════════════════════════════════════════════════════════
    // RUST
    // ════════════════════════════════════════════════════════
    {
      name: 'Rust Storage Modifier Lifetime',
      scope: ['storage.modifier.lifetime.rust'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Rust Support Function',
      scope: ['support.function.std.rust'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Rust Entity Name Lifetime',
      scope: ['entity.name.lifetime.rust'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Rust Variable Language',
      scope: ['variable.language.rust'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Rust Keyword Operator Misc',
      scope: ['keyword.operator.misc.rust'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Rust Keyword Operator Sigil',
      scope: ['keyword.operator.sigil.rust'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Rust Support Constant Core',
      scope: ['support.constant.core.rust'],
      settings: { foreground: tokens.number },
    },

    // ════════════════════════════════════════════════════════
    // GO
    // ════════════════════════════════════════════════════════
    {
      name: 'Go Operator Assignment',
      scope: ['keyword.operator.assignment.go'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Go Operator Arithmetic / Address',
      scope: ['keyword.operator.arithmetic.go', 'keyword.operator.address.go'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Go Package Name',
      scope: ['entity.name.package.go'],
      settings: { foreground: tokens.class },
    },

    // ════════════════════════════════════════════════════════
    // PHP
    // ════════════════════════════════════════════════════════
    {
      name: 'PHP Use Statement',
      scope: [
        'support.other.namespace.use.php',
        'support.other.namespace.use-as.php',
        'support.other.namespace.php',
        'entity.other.alias.php',
        'meta.interface.php',
      ],
      settings: { foreground: tokens.class },
    },
    {
      name: 'PHP Error Suppression',
      scope: ['keyword.operator.error-control.php'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'PHP instanceof',
      scope: ['keyword.operator.type.php'],
      settings: { foreground: tokens.keyword, fontStyle: 'bold' },
    },
    {
      name: 'PHP Array Punctuation',
      scope: ['punctuation.section.array.begin.php', 'punctuation.section.array.end.php'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'PHP Illegal Non-Null Typehinted',
      scope: ['invalid.illegal.non-null-typehinted.php'],
      settings: { foreground: palette.redBright },
    },
    {
      name: 'PHP Types',
      scope: [
        'storage.type.php',
        'meta.other.type.phpdoc.php',
        'keyword.other.type.php',
        'keyword.other.array.phpdoc.php',
      ],
      settings: { foreground: tokens.class },
    },
    {
      name: 'PHP Call Function',
      scope: [
        'meta.function-call.php',
        'meta.function-call.object.php',
        'meta.function-call.static.php',
      ],
      settings: { foreground: tokens.function },
    },
    {
      name: 'PHP Function Resets (punctuation)',
      scope: [
        'punctuation.definition.parameters.begin.bracket.round.php',
        'punctuation.definition.parameters.end.bracket.round.php',
        'punctuation.separator.delimiter.php',
        'punctuation.section.scope.begin.php',
        'punctuation.section.scope.end.php',
        'punctuation.terminator.expression.php',
        'punctuation.definition.arguments.begin.bracket.round.php',
        'punctuation.definition.arguments.end.bracket.round.php',
        'punctuation.definition.storage-type.begin.bracket.round.php',
        'punctuation.definition.storage-type.end.bracket.round.php',
        'punctuation.definition.array.begin.bracket.round.php',
        'punctuation.definition.array.end.bracket.round.php',
        'punctuation.definition.begin.bracket.round.php',
        'punctuation.definition.end.bracket.round.php',
        'punctuation.definition.begin.bracket.curly.php',
        'punctuation.definition.end.bracket.curly.php',
        'punctuation.definition.section.switch-block.end.bracket.curly.php',
        'punctuation.definition.section.switch-block.start.bracket.curly.php',
        'punctuation.definition.section.switch-block.begin.bracket.curly.php',
        'punctuation.definition.section.switch-block.end.bracket.curly.php',
      ],
      settings: { foreground: palette.primary },
    },
    {
      name: 'PHP Support Constants',
      scope: [
        'support.constant.ext.php',
        'support.constant.std.php',
        'support.constant.core.php',
        'support.constant.parser-token.php',
      ],
      settings: { foreground: tokens.number },
    },
    {
      name: 'PHP Goto',
      scope: ['entity.name.goto-label.php', 'support.other.php'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'PHP Logical / Bitwise / Arithmetic Operator',
      scope: [
        'keyword.operator.logical.php',
        'keyword.operator.bitwise.php',
        'keyword.operator.arithmetic.php',
      ],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'PHP Regexp Operator',
      scope: ['keyword.operator.regexp.php'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'PHP Comparison',
      scope: ['keyword.operator.comparison.php'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'PHP Heredoc / Nowdoc',
      scope: ['keyword.operator.heredoc.php', 'keyword.operator.nowdoc.php'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'PHP Class Name',
      scope: ['variable.other.class.php'],
      settings: { foreground: tokens.variable },
    },

    // ════════════════════════════════════════════════════════
    // CSS / SCSS / LESS / SASS
    // ════════════════════════════════════════════════════════
    {
      name: 'CSS/SCSS Property Value',
      scope: ['support.constant.property-value.scss', 'support.constant.property-value.css'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'CSS/SCSS/LESS Operators',
      scope: ['keyword.operator.css', 'keyword.operator.scss', 'keyword.operator.less'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'CSS Color Standard Name',
      scope: [
        'support.constant.color.w3c-standard-color-name.css',
        'support.constant.color.w3c-standard-color-name.scss',
      ],
      settings: { foreground: tokens.number },
    },
    {
      name: 'CSS Comma',
      scope: ['punctuation.separator.list.comma.css'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'CSS Vendored Property Name',
      scope: ['support.type.vendored.property-name.css'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'CSS Property Name',
      scope: [
        'source.css support.type.property-name',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
      ],
      settings: { foreground: tokens.type },
    },
    {
      name: 'CSS Pseudo-Elements / Pseudo-Classes',
      scope: [
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.pseudo-class',
      ],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Sass Selector',
      scope: ['selector.sass'],
      settings: { foreground: tokens.variable },
    },

    // ════════════════════════════════════════════════════════
    // HTML / PUG
    // ════════════════════════════════════════════════════════
    {
      name: 'HTML/Pug Escaped Characters and Entities',
      scope: ['constant.character.entity'],
      settings: { foreground: tokens.variable },
    },

    // ════════════════════════════════════════════════════════
    // RUBY
    // ════════════════════════════════════════════════════════
    {
      name: 'Parameter Function Ruby/CS',
      scope: ['function.parameter.ruby', 'function.parameter.cs'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Ruby Symbol',
      scope: ['constant.language.symbol.ruby'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'RGB Value',
      scope: ['rgb-value'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'RGB Value (inline)',
      scope: ['inline-color-decoration rgb-value'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'RGB Value (less)',
      scope: ['less rgb-value'],
      settings: { foreground: tokens.number },
    },

    // ════════════════════════════════════════════════════════
    // HASKELL
    // ════════════════════════════════════════════════════════
    {
      name: 'Haskell Variable Generic-Type',
      scope: ['variable.other.generic-type.haskell'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Haskell Storage Type',
      scope: ['storage.type.haskell'],
      settings: { foreground: tokens.number },
    },

    // ════════════════════════════════════════════════════════
    // UNISON
    // ════════════════════════════════════════════════════════
    {
      name: 'Unison Punctuation',
      scope: [
        'punctuation.definition.delayed.unison',
        'punctuation.definition.list.begin.unison',
        'punctuation.definition.list.end.unison',
        'punctuation.definition.ability.begin.unison',
        'punctuation.definition.ability.end.unison',
        'punctuation.operator.assignment.as.unison',
        'punctuation.separator.pipe.unison',
        'punctuation.separator.delimiter.unison',
        'punctuation.definition.hash.unison',
      ],
      settings: { foreground: tokens.variable },
    },

    // ════════════════════════════════════════════════════════
    // EDGE
    // ════════════════════════════════════════════════════════
    {
      name: 'Support Constant Edge',
      scope: ['support.constant.edge'],
      settings: { foreground: tokens.keyword },
    },

    // ════════════════════════════════════════════════════════
    // ELM
    // ════════════════════════════════════════════════════════
    {
      name: 'Elm Prelude',
      scope: ['support.type.prelude.elm'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Elm Constant',
      scope: ['support.constant.elm'],
      settings: { foreground: tokens.number },
    },

    // ════════════════════════════════════════════════════════
    // CLOJURE
    // ════════════════════════════════════════════════════════
    {
      name: 'Clojure Globals',
      scope: ['entity.global.clojure'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Clojure Symbols',
      scope: ['meta.symbol.clojure'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Clojure Constants',
      scope: ['constant.keyword.clojure'],
      settings: { foreground: tokens.builtin },
    },

    // ════════════════════════════════════════════════════════
    // COFFEESCRIPT
    // ════════════════════════════════════════════════════════
    {
      name: 'CoffeeScript Function Argument',
      scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
      settings: { foreground: tokens.variable },
    },

    // ════════════════════════════════════════════════════════
    // INI / MAKEFILE / GROOVY
    // ════════════════════════════════════════════════════════
    {
      name: 'Ini Default Text',
      scope: ['source.ini'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'Makefile Prerequisites',
      scope: ['meta.scope.prerequisites.makefile'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Makefile Text Colour',
      scope: ['source.makefile'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Groovy Import Names',
      scope: ['storage.modifier.import.groovy'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Groovy Methods',
      scope: ['meta.method.groovy'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Groovy Variables',
      scope: ['meta.definition.variable.name.groovy'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Groovy Inheritance',
      scope: ['meta.definition.class.inherited.classes.groovy'],
      settings: { foreground: tokens.string },
    },

    // ════════════════════════════════════════════════════════
    // HLSL
    // ════════════════════════════════════════════════════════
    {
      name: 'HLSL Semantic',
      scope: ['support.variable.semantic.hlsl'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'HLSL Types',
      scope: [
        'support.type.texture.hlsl',
        'support.type.sampler.hlsl',
        'support.type.object.hlsl',
        'support.type.object.rw.hlsl',
        'support.type.fx.hlsl',
      ],
      settings: { foreground: tokens.keyword },
    },

    // ════════════════════════════════════════════════════════
    // SQL
    // ════════════════════════════════════════════════════════
    {
      name: 'SQL Variables',
      scope: ['text.variable', 'text.bracketed'],
      settings: { foreground: tokens.variable },
    },

    // ════════════════════════════════════════════════════════
    // SWIFT / VB
    // ════════════════════════════════════════════════════════
    {
      name: 'Types (Swift, VB)',
      scope: ['support.type.swift', 'support.type.vb.asp'],
      settings: { foreground: tokens.class },
    },

    // ════════════════════════════════════════════════════════
    // LARAVEL BLADE
    // ════════════════════════════════════════════════════════
    {
      name: 'Laravel Blade Tag',
      scope: ['text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Laravel Blade @',
      scope: ['text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade'],
      settings: { foreground: tokens.keyword },
    },

    // ════════════════════════════════════════════════════════
    // XI LANGUAGE
    // ════════════════════════════════════════════════════════
    {
      name: 'Xi Heading 1 / Keyword',
      scope: ['entity.name.function.xi'],
      settings: { foreground: tokens.class },
    },
    {
      name: 'Xi Heading 2 / Callable',
      scope: ['entity.name.class.xi'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Xi Heading 3 / Property',
      scope: ['constant.character.character-class.regexp.xi'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Xi Heading 4 / Type',
      scope: ['constant.regexp.xi'],
      settings: { foreground: tokens.keyword },
    },
    {
      name: 'Xi Heading 5 / Enum / Preprocessor',
      scope: ['keyword.control.xi'],
      settings: { foreground: tokens.builtin },
    },
    {
      name: 'Xi Heading 6 / Number',
      scope: ['invalid.xi'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Xi String',
      scope: ['beginning.punctuation.definition.quote.markdown.xi'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'Xi Comments',
      scope: ['beginning.punctuation.definition.list.markdown.xi'],
      settings: { foreground: tokens.gray },
    },
    {
      name: 'Xi Link',
      scope: ['constant.character.xi'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Xi Accent',
      scope: ['accent.xi'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Xi Wikiword',
      scope: ['wikiword.xi'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Xi Language Operators',
      scope: ['constant.other.color.rgb-value.xi'],
      settings: { foreground: palette.white },
    },
    {
      name: 'Xi Elements to Dim',
      scope: ['punctuation.definition.tag.xi'],
      settings: { foreground: tokens.gray },
    },

    // ════════════════════════════════════════════════════════
    // ELIXIR
    // ════════════════════════════════════════════════════════
    {
      name: 'Elixir Symbol',
      scope: ['constant.language.symbol.elixir'],
      settings: { foreground: tokens.builtin },
    },

    // ════════════════════════════════════════════════════════
    // TEMPLATE LITERALS
    // ════════════════════════════════════════════════════════
    {
      name: 'Template Literal (quasi)',
      scope: ['punctuation.quasi.element'],
      settings: { foreground: tokens.keyword },
    },

    // ════════════════════════════════════════════════════════
    // JSON
    // ════════════════════════════════════════════════════════
    {
      name: 'JSON Property Name',
      scope: ['support.type.property-name.json'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'JSON Property Name Punctuation',
      scope: ['support.type.property-name.json punctuation'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'JSON Quoted Key',
      scope: ['source.json meta.structure.dictionary.json > string.quoted.json'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'JSON Quoted Key Punctuation',
      scope: ['source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'JSON Value Strings',
      scope: [
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json',
        'source.json meta.structure.array.json > value.json > string.quoted.json',
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation',
        'source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
      ],
      settings: { foreground: tokens.string },
    },
    {
      name: 'JSON Constants',
      scope: [
        'source.json meta.structure.dictionary.json > constant.language.json',
        'source.json meta.structure.array.json > constant.language.json',
      ],
      settings: { foreground: tokens.builtin },
    },
    // JSON Key Levels — graduated color per nesting depth
    {
      name: 'JSON Key - Level 0',
      scope: ['source.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.primaryBright },
    },
    {
      name: 'JSON Key - Level 1',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'JSON Key - Level 2',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.secondary },
    },
    {
      name: 'JSON Key - Level 3',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.primaryWhite },
    },
    {
      name: 'JSON Key - Level 4',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.primaryMid },
    },
    {
      name: 'JSON Key - Level 5',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.secondaryBright },
    },
    {
      name: 'JSON Key - Level 6',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.primaryDim },
    },
    {
      name: 'JSON Key - Level 7',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.primaryBright },
    },
    {
      name: 'JSON Key - Level 8',
      scope: ['source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'],
      settings: { foreground: palette.primary },
    },

    // ════════════════════════════════════════════════════════
    // YAML
    // ════════════════════════════════════════════════════════
    {
      name: 'YAML Key',
      scope: ['entity.name.tag.yaml'],
      settings: { foreground: palette.secondary, fontStyle: 'bold' },
    },
    {
      name: 'YAML Key-Value Separator',
      scope: ['punctuation.separator.key-value.mapping.yaml'],
      settings: { foreground: palette.primaryDim },
    },
    {
      name: 'YAML String Value (unquoted)',
      scope: ['string.unquoted.plain.out.yaml', 'string.unquoted.plain.in.yaml', 'string.unquoted.block.yaml'],
      settings: { foreground: palette.primaryBright },
    },
    {
      name: 'YAML String Value (quoted)',
      scope: ['string.quoted.single.yaml', 'string.quoted.double.yaml'],
      settings: { foreground: palette.primaryBright },
    },
    {
      name: 'YAML Boolean',
      scope: ['constant.language.boolean.yaml'],
      settings: { foreground: palette.secondaryBright, fontStyle: 'bold' },
    },
    {
      name: 'YAML Null',
      scope: ['constant.language.null.yaml'],
      settings: { foreground: palette.primaryMid, fontStyle: 'bold italic' },
    },
    {
      name: 'YAML Block Sequence Item',
      scope: ['punctuation.definition.block.sequence.item.yaml'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'YAML Flow Indicators (braces/brackets)',
      scope: [
        'punctuation.definition.mapping.begin.yaml',
        'punctuation.definition.mapping.end.yaml',
        'punctuation.definition.sequence.begin.yaml',
        'punctuation.definition.sequence.end.yaml',
        'punctuation.separator.sequence.yaml',
      ],
      settings: { foreground: palette.primary },
    },
    {
      name: 'YAML Anchor',
      scope: ['entity.name.type.anchor.yaml', 'punctuation.definition.anchor.yaml'],
      settings: { foreground: palette.secondaryBright, fontStyle: 'bold' },
    },
    {
      name: 'YAML Alias',
      scope: ['variable.other.alias.yaml', 'punctuation.definition.alias.yaml'],
      settings: { foreground: palette.secondaryBright, fontStyle: 'italic' },
    },
    {
      name: 'YAML Document Markers',
      scope: ['entity.other.document.begin.yaml', 'entity.other.document.end.yaml'],
      settings: { foreground: palette.primaryWhite, fontStyle: 'bold' },
    },
    {
      name: 'YAML Tag Handle',
      scope: ['storage.type.tag-handle.yaml', 'constant.other.tag.yaml'],
      settings: { foreground: palette.primaryMid },
    },
    {
      name: 'YAML Block Scalar Indicators',
      scope: [
        'keyword.control.flow.block-scalar.literal.yaml',
        'keyword.control.flow.block-scalar.folded.yaml',
        'storage.modifier.chomping-indicator.yaml',
      ],
      settings: { foreground: palette.primary, fontStyle: 'bold' },
    },
    {
      name: 'YAML Directive',
      scope: ['keyword.other.directive.yaml', 'punctuation.definition.directive.begin.yaml'],
      settings: { foreground: palette.primaryMid, fontStyle: 'bold' },
    },

    // ════════════════════════════════════════════════════════
    // MARKDOWN
    // ════════════════════════════════════════════════════════
    {
      name: 'Markdown Headings',
      scope: ['entity.name.section.markdown'],
      settings: { foreground: tokens.heading, fontStyle: 'bold' },
    },
    {
      name: 'Markdown Heading Punctuation',
      scope: ['punctuation.definition.heading.markdown'],
      settings: { foreground: tokens.heading, fontStyle: 'bold' },
    },
    {
      name: 'Markdown List Punctuation',
      scope: [
        'punctuation.definition.list.begin.markdown',
        'punctuation.definition.list.markdown',
        'beginning.punctuation.definition.list.markdown',
      ],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Markdown Heading Setext',
      scope: ['markup.heading.setext'],
      settings: { foreground: palette.primary, fontStyle: 'bold' },
    },
    {
      name: 'Markdown Underscore-Style Headers',
      scope: ['markup.heading.setext.1.markdown', 'markup.heading.setext.2.markdown'],
      settings: { foreground: tokens.heading, fontStyle: 'bold' },
    },
    {
      name: 'Markdown Bold Punctuation',
      scope: ['punctuation.definition.bold.markdown'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Markdown Inline Raw',
      scope: ['markup.inline.raw.markdown', 'markup.inline.raw.string.markdown'],
      settings: { foreground: tokens.string },
    },
    {
      name: 'Markdown Punctuation Definition String',
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown',
      ],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Markdown Underline Link/Image',
      scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
      settings: { foreground: tokens.keyword, fontStyle: 'underline' },
    },
    {
      name: 'Markdown Link Title/Description',
      scope: ['string.other.link.title.markdown', 'string.other.link.description.markdown'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Markdown Quote',
      scope: ['markup.quote.markdown'],
      settings: { foreground: tokens.gray },
    },
    {
      name: 'Markdown Plain',
      scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Markdown Markup Raw Inline Punctuation',
      scope: ['text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'],
      settings: { foreground: tokens.gray },
    },
    {
      name: 'Markdown Blockquote Punctuation',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: { foreground: tokens.gray },
    },
    {
      name: 'Markdown Link Anchor',
      scope: ['constant.other.reference.link.markdown'],
      settings: { foreground: tokens.linkAnchor },
    },
    {
      name: 'Markup Raw Block',
      scope: ['markup.raw.block'],
      settings: { foreground: palette.primaryMid },
    },
    {
      name: 'Markdown Raw Block Fenced',
      scope: ['markup.raw.block.fenced.markdown'],
      settings: { foreground: palette.primaryFaint },
    },
    {
      name: 'Markdown Fenced Code Block',
      scope: ['punctuation.definition.fenced.markdown'],
      settings: { foreground: palette.primaryFaint },
    },
    {
      name: 'Markdown Fenced Code Block Variable',
      scope: [
        'markup.raw.block.fenced.markdown',
        'variable.language.fenced.markdown',
        'punctuation.section.class.end',
      ],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Markdown Fenced Language',
      scope: ['variable.language.fenced.markdown'],
      settings: { foreground: tokens.gray },
    },
    {
      name: 'Markdown Separator',
      scope: ['meta.separator'],
      settings: { foreground: tokens.gray },
    },
    {
      name: 'Markup Table',
      scope: ['markup.table'],
      settings: { foreground: tokens.variable },
    },
    {
      name: 'Markup Italic Markdown',
      scope: ['markup.italic.markdown'],
      settings: { fontStyle: '' },
    },

    // ════════════════════════════════════════════════════════
    // TOKEN INFO / WARN / ERROR / DEBUG
    // ════════════════════════════════════════════════════════
    {
      name: 'Token Info',
      scope: ['token.info-token'],
      settings: { foreground: tokens.function },
    },
    {
      name: 'Token Warn',
      scope: ['token.warn-token'],
      settings: { foreground: tokens.number },
    },
    {
      name: 'Token Error',
      scope: ['token.error-token'],
      settings: { foreground: palette.redBright },
    },
    {
      name: 'Token Debug',
      scope: ['token.debug-token'],
      settings: { foreground: tokens.keyword },
    },

    // ════════════════════════════════════════════════════════
    // MISC
    // ════════════════════════════════════════════════════════
    {
      name: 'Decorators',
      scope: [
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
      ],
      settings: { foreground: tokens.function },
    },
    {
      name: 'ES7 Bind Operator',
      scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
      settings: { foreground: tokens.invalid },
    },
    {
      name: 'Meta Brace Square',
      scope: ['meta.brace.square'],
      settings: { foreground: palette.primary },
    },
    {
      name: 'Comment (bold style)',
      scope: ['comment.line.double-slash', 'comment.block.documentation'],
      settings: { },
    },
  ],
};

} // end buildTheme

// ── Variants ─────────────────────────────────────────────────
const variants = [
  { name: 'XX121',        palette: palettes.blue,   file: 'XX121-color-theme.json' },
  { name: 'XX121 Yellow', palette: palettes.yellow,  file: 'XX121-yellow-color-theme.json' },
];

// ── Write Output ────────────────────────────────────────────
const themesDir = path.join(__dirname, 'themes');
if (!fs.existsSync(themesDir)) fs.mkdirSync(themesDir);
console.log('INTERFACE ONLINE');
for (const variant of variants) {
  const theme = buildTheme(variant.name, variant.palette);
  const outputPath = path.join(themesDir, variant.file);
  fs.writeFileSync(outputPath, JSON.stringify(theme, null, '\t'));
  console.log('GENERATED:', variant.name, '->', outputPath);
}
console.log('VARIANTS:', variants.length);
