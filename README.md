# GlobalUI - Open Source Vue UI Components Library built for Nuxt.js & Vue.js Developers. [![Linkedin](https://i.postimg.cc/50Y5y78B/linkedin-1.png)](https://www.linkedin.com/in/chen-frederick-1324301a8/)

![Template](https://image.freepik.com/free-vector/people-drawing-web-page-elements-smartphone-lcd-screen-front-end-development-it-concept-software-development-process-pinkish-coral-blue-palette-vector-illustration_335657-1640.jpg)

GlobalUI :+1: is an Open Source UI Kit built from VueJS. GlobalUI is a solution for any agency that wants to keep their UI consistent at either development & production ( e.g Buttons, Inputs, etc ). Facing future changes, GlobalUI can bring efficiency so developers can do changes for just 1 time. Made for Nuxt.js & Vue.js Developers.

## Table of Contents

- [Templates](#templates)
- [Installation](#installation)
- [Development](#development)
- [Usage](#usage)
- [Documentation](#documentation)
- [Creators](#creators)

## Installation

Several options are available:

### NPM

```bash
$ npm install global-ui --save
```

### Yarn

```bash
$ yarn add global-ui
```

## Development

### Components Developed :

- GlobalButton :heavy_check_mark:
- GlobalInput :heavy_check_mark:
- GlobalSwitch :heavy_check_mark:
- GlobalCheckbox :heavy_check_mark:
- GlobalAccordion :heavy_check_mark:
- GlobalDropdown :heavy_check_mark:
- GlobalAnimationLoader :heavy_check_mark:
- GlobalBaseDialog :heavy_check_mark:

### Components On-Development :

- Currently there are no any component development plan :no_entry:

## Usage

Several options are available:

## Vue 2

can see example repo here :arrow_right: https://github.com/Frederick-88/vue-global-ui-tester

The Setups are:

1. Register/Import Global Components

- in folder "src/main.js", inside can import components like this

```
import Vue from "vue";
import App from "./App.vue";

import vClickOutside from "v-click-outside";
import GlobalUIs from "global-ui";

Vue.use(vClickOutside);
Vue.use(GlobalUIs); // with this code, its already importing all global components =)

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");

```

2. Import Global UI's SCSS Variables

- install 3 things required for Global UI's SCSS variables :arrow_right: "npm i @nuxtjs/style-resources node-sass@4.14.1 sass-loader@7.3.1" .

- Create "vue.config.js" in root folder and fill it with :

```
const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // method of SCSS to use variables globally
        data: `
            @import '~node_modules/global-ui/src/assets/styles/variables.scss';
            @import '~node_modules/global-ui/src/assets/icomoon/variables.scss';
            @import '@/assets/variables.scss';
          `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        node_modules: path.resolve("node_modules/"),
      },
    },
  },
};
```

3. Import Global UI's Icomoon Icon Sets

- in folder "assets", create "variables.scss" or if you have existing, inside add :

```

$icomoon-font-path: "~node_modules/global-ui/src/assets/icomoon/fonts";

```

- in your root page / root component import icomoon scss in your <style> section

```

<style lang="scss">
@import "~node_modules/global-ui/src/assets/icomoon/style.scss";
</style>

```

4.  And you're all set ! read how to use global ui components with the docs here https://global-ui-docs.netlify.app

## Nuxt

can see example repo here :arrow_right: https://github.com/Frederick-88/nuxt-global-ui-tester

The Setups are:

1. Register Global Components

- in folder "plugins" create "globalui.js", inside can import components like this

```

import Vue from "vue";

import vClickOutside from "v-click-outside";
Vue.use(vClickOutside);

import GlobalButton from "global-ui/src/components/GlobalButton/GlobalButton.vue";
Vue.component("GlobalButton", GlobalButton);
import GlobalInput from "global-ui/src/components/GlobalInput/GlobalInput.vue";
Vue.component("GlobalInput", GlobalInput);
... ( and all the components you need )

```

- then in "nuxt.config.js" register the "globalui.js" where you import the components, so you can globally use the components without need to import the global component in your pages again.

```

plugins: [{ src: "~/plugins/globalui.js" }],

```

2. Import Global UI's SCSS Variables

- install 3 things required for Global UI's SCSS variables :arrow_right: "npm i @nuxtjs/style-resources node-sass@4.14.1 sass-loader@7.3.1" .
- add this in your "nuxt.config.js"

```

buildModules: ["@nuxtjs/style-resources"],

styleResources: {
scss: [
"~/node_modules/global-ui/src/assets/styles/variables.scss",
]
},

```

3. Import Global UI's Icomoon Icon Sets

- in folder "assets", create "variables.scss" or if you have existing, inside add :

```
$icomoon-font-path: "~@/node_modules/global-ui/src/assets/icomoon/fonts"; // to resolve the icomoon path following your environment directory

```

- in "nuxt.config.js", add :

```

    css: ["~/node_modules/global-ui/src/assets/icomoon/style.scss"],
      styleResources: {

scss: [
"./assets/variables.scss"
]
},

```

4.  And you're all set ! read how to use global ui components with the docs here https://global-ui-docs.netlify.app

## Documentation

https://global-ui-docs.netlify.app/ :bulb:

## Creators

**Chen Frederick :man:**

- https://www.linkedin.com/in/chen-frederick-1324301a8/
- https://github.com/Frederick-88

## Reference

- https://offeo.com/
- https://gradientbuttons.colorion.co/
- https://storybook.js.org/

### ----------------------------------

### © Chen Frederick - 2021

```

```
