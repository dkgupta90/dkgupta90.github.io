import type { NextConfig } from 'next';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isProjectPage =
  process.env.GITHUB_ACTIONS === 'true' &&
  repositoryName.length > 0 &&
  !repositoryName.endsWith('.github.io');
const repositoryBasePath = isProjectPage ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: repositoryBasePath,
};

export default nextConfig;
