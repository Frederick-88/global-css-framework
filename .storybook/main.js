const path = require("path");
const rootPath = path.resolve(__dirname, "../src");

module.exports = {
  stories: ["@/stories/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  // Export a function. Accept the base config as the only param.
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            data: `
            @import '@/assets/styles/variables.scss';
            @import '@/assets/icomoon/style.scss';
            `,
          },
        },
      ],
    });

    config.resolve.alias["@"] = rootPath;

    return config;
  },
};
