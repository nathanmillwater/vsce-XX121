# XX121 - The Perfect Theme

A dark VS Code color theme inspired by the CRT interfaces of The Company. Three phosphor variants — blue, yellow, and green — each built from a semantic color palette.

## Variants

| Variant | Primary | Accent | Description |
|---------|---------|--------|-------------|
| **XX121** | Cool blue | Amber | Default phosphor |
| **XX121 Yellow** | Warm amber | Blue | Inverted complement |
| **XX121 Green** | Green | Amber | Classic terminal |

## Installation

**From GitHub Releases:**

```
code --install-extension xx121-*.vsix
```

**From source:**

```bash
git clone https://github.com/nathanmillwater/vsce-XX121.git
cd vsce-XX121
npm run build
npm run package
code --install-extension xx121-*.vsix
```

## Development

The theme is generated from a JavaScript builder that maps semantic color palettes to VS Code token scopes.

```
npm run build       # Build all theme variants
npm run watch       # Rebuild on source changes
```

Press **F5** in VS Code to launch the Extension Host and preview changes live.

### Project Structure

```
src/
├── palettes.js     # Color palettes (blue, yellow, green)
├── tokens.js       # Token semantic map (syntax role → palette key)
└── builder.js      # Theme generator (UI colors + token rules)
build-theme.js      # Entry point: runs builder, validates, writes JSON
themes/             # Generated output (git-ignored)
samples/            # Sample code for visual testing
```

## Publishing a New Version

Use the npm scripts to bump the version, commit, and push the tag in one step:

```bash
npm run release          # Patch (1.0.5 → 1.0.6)
npm run release:minor    # Minor (1.0.5 → 1.1.0)
npm run release:major    # Major (1.0.5 → 2.0.0)
```

These scripts automatically:

1. **preversion** — Rebuild the theme so generated JSON is up to date
2. **version** — Stage the rebuilt theme files
3. **npm version** — Bump `package.json`, commit, and create a `v*` git tag
4. **postversion** — Push the commit and tag to the remote
5. **GitHub Actions** — The pushed tag triggers the workflow, which packages the `.vsix` and creates a GitHub Release

## CI/CD

A GitHub Actions workflow (`.github/workflows/release.yml`) handles building and releasing the extension. It triggers on every push to `main`.

The version in `package.json` is used for local development. The CI workflow determines the release version from git tags — **the git tag is the source of truth for release versions**.

## License

[MIT](LICENSE)
