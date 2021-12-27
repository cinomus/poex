module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    // console.log(config);
    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: [
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         modules: {
    //           localIdentName: '[name]__[local]___',
    //         },
    //       },
    //     },
    //   ],
    // });
    return config;
  },
};
