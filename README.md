# GlobalUI - Open Source Vue UI Components Library built for Nuxt.js & Vue.js Developers. [![Linkedin](https://i.postimg.cc/50Y5y78B/linkedin-1.png)](https://www.linkedin.com/in/chen-frederick-1324301a8/)

![Template](https://image.freepik.com/free-vector/people-drawing-web-page-elements-smartphone-lcd-screen-front-end-development-it-concept-software-development-process-pinkish-coral-blue-palette-vector-illustration_335657-1640.jpg)

GlobalUI :+1: is an Open Source UI Kit built from VueJS. GlobalUI is a solution for any agency that wants to keep their UI consistent at either development & production ( e.g Buttons, Inputs, etc ). Facing future changes, GlobalUI can bring efficiency so developers can do changes for just 1 time. Made for Nuxt.js & Vue.js Developers.

## Table of Contents

- [Templates](#templates)
- [Installation](#installation)
- [Development](#development)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
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
- GlobalCanvasModal :heavy_check_mark:

### Components On-Development :

- Currently there are no further development plans :no_entry:

## Usage

Several options are available:

## Vue

To use it like this in your component :

```
<template>
  <div class="home">
    <GlobalInput />
    <GlobalButton />
  </div>
</template>
```

After installation, you have 2 options :

1. Define Globally in `src/main.js` & Use Anywhere without need to import again!

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

2. Import UI Components in your `.vue` component

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

## Nuxt

Coming Soon :eyes:

## Documentation

https://global-ui-docs.netlify.app/ :bulb:

## Contributing

Currently still in development. :muscle: :v:

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
