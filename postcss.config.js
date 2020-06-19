module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-font-magician")({
      variants: {
        Roboto: {
          "400": ["woff, eot, woff2", "svg"],
        },
        Nunito: {
          "100": ["woff, eot, woff2, svg"],
          "200": ["woff, eot, woff2, svg"],
          "300": ["woff, eot, woff2, svg"],
          "400": ["woff, eot, woff2, svg"],
        },
      },
      foundries: ["google"],
      protocol: "https:",
    }),
    require("postcss-color-rgba-fallback"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    }),
    require("postcss-pxtorem")({
      rootValue: 16,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i,
    }),
    require("postcss-opacity")({
      legacy: true,
    }),
    // require("cssnano")({
    //   preset: [
    //     "default",
    //     {
    //       discardComments: {
    //         removeAll: true,
    //       },
    //     },
    //   ],
    // }),
  ],
};
