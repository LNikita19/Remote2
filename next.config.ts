const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config: any) {
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


  experimental: {
    esmExternals: false,
  },

  output: "standalone",
};

