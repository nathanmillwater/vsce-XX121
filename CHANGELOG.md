# Changelog

All notable changes to XX121 will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added
- Green phosphor theme variant (classic terminal aesthetic)
- Bracket pair colorization guide colors
- Inlay hint colors for parameter and type hints
- Sample code files for visual testing (JS, TS, Python, Rust, HTML, Markdown, JSON)
- Watch script for live development (`npm run watch`)
- Post-build validation for generated theme JSON
- Release scripts (`npm run release`, `release:minor`, `release:major`)

### Changed
- Modularized build system: palettes, tokens, and builder are now separate modules in `src/`
- Theme paths now use `-color-theme.json` suffix for semantic highlighting support
- Lowered minimum VSCode version from 1.109.0 to 1.60.0

### Removed
- Committed `.vsix` binary (now only in GitHub Releases)
- Legacy `-theme.json` files (replaced by `-color-theme.json`)

## [0.1.0] - 2026-02-01

### Added
- Initial release
- Blue phosphor theme (default)
- Yellow phosphor theme variant
- Parametric theme builder with semantic palette system
- GitHub Actions CI/CD pipeline
