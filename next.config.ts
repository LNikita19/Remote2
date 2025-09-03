// const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

// module.exports = {
//   webpack(config: any) {
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: "remote2",
//         filename: "static/chunks/remoteEntry.js",
//         exposes: {
//           "./RemotePage": "./src/pages/index.tsx",
//         },
//         shared: {
//           react: { singleton: true, requiredVersion: false, eager: true },
//           "react-dom": { singleton: true, requiredVersion: false, eager: true },
//         },
//       })
//     );
//     return config;
//   },


//   experimental: {
//     esmExternals: false,
//   },

//   output: "standalone",
// };

// @ts-check

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required when deploying to Vercel with module federation
  output: "standalone",

  webpack(config: { plugins: any[]; }, { isServer }: any) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote2",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./RemotePage": "./src/pages/index.tsx",
        },
        shared: {
          react: { singleton: true, requiredVersion: false, eager: true },
          "react-dom": { singleton: true, requiredVersion: false, eager: true },
        },
      })
    );

    return config;
  },

  // Extra stability (avoid esm externals issues in some Next.js 15 setups)
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
