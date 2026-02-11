# MU/TH/UR 6000

A dark VS Code color theme inspired by the CRT interfaces of The Company. High-contrast phosphor glows on pitch-black backgrounds.

## Installation

Install from a `.vsix` file (download from [GitHub Releases](https://github.com/nathanmillwater/vsce-XX121/releases)):

```
code --install-extension XX121-*.vsix
```

## Development

The theme is generated from a JavaScript builder that maps a semantic color palette to VS Code token scopes.

```
npm run build:theme
```

This runs `build-theme.js` and outputs the final theme JSON to `themes/XX121-color-theme.json`.

## CI/CD

A GitHub Actions workflow (`.github/workflows/release.yml`) handles building and releasing the extension. It triggers on any tag push matching `v*`.

**What the workflow does:**

1. Checks out the repo
2. Sets the package version from the git tag (e.g. tag `v1.0.5` sets version `1.0.5`)
3. Builds the theme via `node build-theme.js`
4. Packages the extension into a `.vsix` using `@vscode/vsce`
5. Creates a GitHub Release with the `.vsix` attached and auto-generated release notes

The version in `package.json` on your working branch is used during local development. The CI workflow overrides it with the tag version at build time using `npm version --no-git-tag-version`, so the two don't need to stay perfectly in sync — **the git tag is the source of truth for release versions**.

## Publishing a new version

Use the npm scripts to bump the version, commit, and push the tag in one step:

```bash
# Patch release (1.0.5 -> 1.0.6)
npm run release

# Minor release (1.0.5 -> 1.1.0)
npm run release:minor

# Major release (1.0.5 -> 2.0.0)
npm run release:major
```

These scripts do the following automatically:

1. **preversion** — Rebuilds the theme (`node build-theme.js`) so the generated JSON is up to date
2. **version** — Stages the rebuilt `themes/XX121-color-theme.json`
3. **npm version** — Bumps `package.json`, commits, and creates a `v*` git tag
4. **postversion** — Pushes the commit and tag to the remote (`git push --follow-tags`)
5. **GitHub Actions** — The pushed tag triggers the workflow, which packages the `.vsix` and creates a GitHub Release

That's it. After running `npm run release`, the GitHub Release with the `.vsix` will appear automatically.
