/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  unoptimized: true,
  images: {
    loader: 'imgix',
    path: '/',
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/404': { page: '/404' },
      '/careers': { page: '/careers' },
      '/courses': { page: '/courses' },
      '/enrollment': { page: '/enrollment' },
      '/event': { page: '/event' },
      '/faq': { page: '/faq' },
      '/forgot': { page: '/forgot' },
      '/login': { page: '/login' },
      '/pricing': { page: '/pricing' },
      '/privacy': { page: '/privacy' },
      '/register': { page: '/register' },
      '/users/chat': { page: '/users/chat' },
      '/users/dashboard': { page: '/users/dashboard' },
      '/users/settings': { page: '/users/settings' },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
