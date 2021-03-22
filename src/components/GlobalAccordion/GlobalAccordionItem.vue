<template>
  <div class="accordion__item" :class="{ 'is-active': isActive }">
    <button
      type="button"
      class="accordion__title"
      v-if="title"
      @click="toggleActive"
    >
      <span v-html="title" />
      <i v-if="icon" :class="iconClass" />
    </button>

    <div
      v-if="text"
      ref="text"
      class="accordion__content"
      :style="accordionContentStyle"
    >
      <span class="accordion__text">{{ text }}</span>
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
      const iconClass = ["icon"];

      if (this.icon === "caret") iconClass.push("icon-caret-down");

      if (this.icon === "plus") {
        if (this.isActive) {
          iconClass.push("icon-minus");
        } else {
          iconClass.push("icon-plus");
        }
      }

      return iconClass;
    },
    accordionContentStyle() {
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
  padding: 15px 10px;
}

.accordion__title {
  font-weight: bold;
  position: relative;
  padding: 15px 30px 15px 10px;
  border-radius: 4px;
  border: 0;
  outline: 0;
  font-size: 0.875rem;
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
  font-size: 0.825rem;
  overflow: hidden;
}
</style>
