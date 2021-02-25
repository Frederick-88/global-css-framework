<template>
  <div class="accordion__item" :class="{ 'is-active': isActive }">
    <button
      type="button"
      class="accordion__title"
      v-if="title"
      @click="toggleActive"
    >
      <span v-html="title"></span>
      <i v-if="icon" :class="iconClass"></i>
    </button>

    <div v-if="text" ref="text" class="accordion__content" :style="heightStyle">
      <div class="accordion__text" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalAccordionItem",
  props: {
    index: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isAutoHeight: false,
      height: 100,
    };
  },
  computed: {
    iconClass() {
      const cssClass = ["icon"];

      if (this.icon === "caret") cssClass.push("icon-caret-down");
      if (this.icon === "plus") {
        if (this.isActive) cssClass.push("icon-minus");
        else cssClass.push("icon-plus");
      }

      return cssClass;
    },
    heightStyle() {
      const styleObject = {};

      if (this.isActive) {
        styleObject.height = `${this.height}px`;
      } else {
        styleObject.height = 0;
      }

      if (this.isAutoHeight) styleObject.height = "auto";

      return styleObject;
    },
  },
  mounted() {
    // create get height system so can experience the transition when open accordion.
    // couldn't experience transition if height setted auto by default
    this.getHeight();
  },
  methods: {
    toggleActive() {
      if (this.isActive) {
        this.$emit("close");
      } else {
        this.$emit("open");
      }
    },
    getHeight() {
      this.isAutoHeight = true;

      setTimeout(() => {
        this.height = this.$refs.text.offsetHeight;
        this.isAutoHeight = false;
      }, 100);
    },
  },
};
</script>

<style lang="scss">
.accordion__item {
  margin-bottom: 5px;

  &.is-active {
    .accordion__title {
      .icon-caret-down {
        transform: translateY(-50%) rotate(180deg);
      }
    }
    .accordion__text {
      display: block;
      visibility: visible;
    }
  }
}

.accordion__title,
.accordion__text {
  display: block;
  width: 100%;
  text-align: left;
  font-size: 1em;
  padding: 15px 10px;
}

.accordion__title {
  font-weight: bold;
  position: relative;
  padding: 15px 30px 15px 10px;
  border-radius: 4px;
  border: 0;
  outline: 0;
  cursor: pointer;

  .icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    transition: transform 0.35s ease-in-out;
  }
}

.accordion__content {
  transition: height 0.35s ease-in-out;
  overflow: hidden;
}
</style>
