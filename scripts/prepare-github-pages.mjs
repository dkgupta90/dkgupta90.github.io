import { access, rename, rm } from 'node:fs/promises';
import { join } from 'node:path';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';

if (!repositoryName || repositoryName.endsWith('.github.io')) {
  process.exit(0);
}

const clientDirectory = join(process.cwd(), 'dist', 'client');
const prefixedDirectory = join(clientDirectory, repositoryName);
const prefixedAssets = join(prefixedDirectory, '_next');
const rootAssets = join(clientDirectory, '_next');

try {
  await access(prefixedAssets);
} catch {
  throw new Error(`Expected GitHub Pages assets were not found at ${prefixedAssets}`);
}

await rm(rootAssets, { recursive: true, force: true });
await rename(prefixedAssets, rootAssets);
await rm(prefixedDirectory, { recursive: true, force: true });
