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

## Vue

The Setups are:

1. Register/Import Global Components

Option A : Define Globally in `src/main.js` & Use Anywhere without need to import again!

```
import Vue from "vue";
import App from "./App.vue";
import GlobalUIs from "global-ui";

// You can change "GlobalUIs" naming to anything that you want
Vue.use(GlobalUIs);

new Vue({
  render: function(h) {
    return h(App);
  },
}).$mount("#app");

```

Option B : Import UI Components in your `.vue` component

```
<script>
import { GlobalButton, GlobalInput } from "global-ui";

export default {
  name: "Your Vue Component Name",
  components: {
    GlobalButton,
    GlobalInput,
  },
};
</script>
```

2. Import Global UI's SCSS Variables
   Coming Soon :eyes:

3. Import Global UI's Icomoon Icon Sets
   Coming Soon :eyes:

## Nuxt

The Setups are:

1. Register Global Components

a. in folder "plugins" create "globalui.js", inside can import components like this

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

b. then in "nuxt.config.js" register the "globalui.js" where you import the components, so you can globally use the components without need to import the global component in your pages again.

```
plugins: [{ src: "~/plugins/globalui.js" }],
```

2. Import Global UI's SCSS Variables
   a. install 3 things required for Global UI's SCSS variables :arrow_right: "npm i @nuxtjs/style-resources node-sass@4.14.1 sass-loader@7.3.1" .
   b. add this in your "nuxt.config.js"

```
  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: [
      "~/node_modules/global-ui/src/assets/styles/variables.scss",
    ]
  },
```

3. Import Global UI's Icomoon Icon Sets
   a. in folder "assets", create "variables.scss" or if you have existing, inside add :

   ```
   $icomoon-font-path: "~@/node_modules/global-ui/src/assets/icomoon/fonts"; // to resolve the icomoon path following your environment directory

   ```

   b. in "nuxt.config.js", add :

   ```
     css: ["~/node_modules/global-ui/src/assets/icomoon/style.scss"],
       styleResources: {
    scss: [
      "./assets/variables.scss"
    ]
   },
   ```

   4. And you're all set ! read how to use global ui components with the docs here https://global-ui-docs.netlify.app

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
