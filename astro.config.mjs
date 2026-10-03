import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 自动获取 GitHub 仓库名作为 base 路径
// 如果是 username.github.io，base 为 '/'；否则为 '/仓库名/'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'zemlo';
const isUserSite = repoName.endsWith('.github.io');
const autoBase = isUserSite ? '/' : `/${repoName}/`;

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: autoBase, 
});
