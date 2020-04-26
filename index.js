function withSVGComponent(baseConfig = {}) {
  return Object.assign({}, baseConfig, {
    webpack(config, options) {
      
      config.module.rules = [
        ...config.module.rules.map(_ => {
          if ( _.test && _.test.toString().includes('svg|')) {
            return {
              ..._,
              test: new RegExp(_.test.source.replace('svg|', ''))
            }
          }
          return _
        }),
        {
          test: /\.svg$/,
          use: [require.resolve('@svgr/webpack'), {
            loader: require.resolve('url-loader'),
            options: {
              limit: baseConfig.inlineImageLimit,
              fallback: require.resolve("file-loader"),
              publicPath: `${baseConfig.assetPrefix}/_next/static/images/`,
              outputPath: `${options.isServer ? "../" : ""}static/images/`,
              name: "[name]-[hash].[ext]",
              esModule: baseConfig.esModule || false
            }
          }]
        }
      ]

      if (typeof baseConfig.webpack === "function") {
        return baseConfig.webpack(config, options);
      }

      return config;
    }
  });
};

module.exports = withSVGComponent;