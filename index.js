function withSVGComponent(baseConfig = {}) {
  return Object.assign({}, baseConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [require.resolve('@svgr/webpack'), require.resolve('file-loader')]
      });

      if (typeof baseConfig.webpack === "function") {
        return baseConfig.webpack(config, options);
      }

      return config;
    }
  });
};

module.exports = withSVGComponent;