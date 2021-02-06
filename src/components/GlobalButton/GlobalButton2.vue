<template>
  <component
    class="btn"
    ref="button"
    :class="[propClass, extraClass, { 'is-loading': isLoading }]"
    :style="buttonStyle"
    :is="type"
    :to="to"
    :href="href"
    :disabled="isDisabled"
    :type="type === 'button' ? type : ''"
    @click="$emit('click', $event)"
    :title="title"
    :target="newTab ? '_blank' : false"
  >
    <span v-if="showCircle" class="btn__circle" :style="circleStyle"></span>
    <!-- <BasePreloader v-if="isLoading" class="preloader" :isDots="true" :width="30"></BasePreloader> -->

    <span class="btn__content">
      <i class="icon icon--before" :class="iconBefore" v-if="iconBefore"></i>
      <span><slot></slot></span>
      <i class="icon icon--after" :class="iconAfter" v-if="iconAfter"></i>
    </span>
  </component>
</template>

<script>
export default {
  name: "GlobalButton",
  props: {
    extraClass: { type: String, default: "" },
    /**
     * Icon before the text in the button
     */
    iconBefore: {
      type: String,
      default: "",
    },
    /**
     * Icon after the text in the button
     */
    iconAfter: {
      type: String,
      default: "",
    },
    /**
     * Title of the button
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Router link
     */
    to: {
      type: String,
      required: false,
    },
    /**
     * Anchor link
     */
    href: {
      type: String,
      required: false,
    },
    /**
     * Should this open a new tab
     */
    newTab: {
      type: Boolean,
      default: false,
    },
    /**
     * No circle expanding effect
     */
    plainHover: {
      type: Boolean,
      default: false,
    },
    isUnderlined: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
    isAlert: { type: Boolean, default: false },
    isAlertHollow: { type: Boolean, default: false },
    isDanger: { type: Boolean, default: false },
    isDangerHollow: { type: Boolean, default: false },
    isPrimary: { type: Boolean, default: false },
    isPrimaryHollow: { type: Boolean, default: false },
    isSuccess: { type: Boolean, default: false },
    isSuccessHollow: { type: Boolean, default: false },
    isSalmon: { type: Boolean, default: false },
    isSalmonHollow: { type: Boolean, default: false },
    isLightGrey: { type: Boolean, default: false },
    isLight: { type: Boolean, default: false },
    isLink: { type: Boolean, default: false },
    isHollow: { type: Boolean, default: false },
    isBold: { type: Boolean, default: false },
    isTall: { type: Boolean, default: false },
    isHuge: { type: Boolean, default: false },
    isShort: { type: Boolean, default: false },
    isDark: { type: Boolean, default: false },
    isRounded: { type: Boolean, default: false },
    isLeftCap: { type: Boolean, default: false },
    isRightCap: { type: Boolean, default: false },
    isTopCap: { type: Boolean, default: false },
    isBottomCap: { type: Boolean, default: false },
    isFullWidth: { type: Boolean, default: false },
    isIcon: { type: Boolean, default: false },
    isText: { type: Boolean, default: false },
    /**
     * When you use `:to`, the default will be `<nuxt-link>`, so no longer need to set this<br>
     * `<nuxt-link>` is used to provide navigations between page components and enhance performances with smart prefetching<br>
     * `<nuxt-link>` extends from `<router-link>`
     */
    isNuxt: { type: Boolean, default: false },
    /**
     * This will make the link to be `<router-link>`<br>
     * `<nuxt-link>` extends from `<router-link>`
     */
    isRouter: { type: Boolean, default: false },
    /**
     * Can be number or string<br>
     * eg. 10, '10%' or '10px 20px'
     */
    padding: { type: [Number, String, Array], default: 0 },
  },
  data() {
    return {
      buttonWidth: 300,
      buttonHeight: 300,
    };
  },
  computed: {
    type() {
      if (this.to) {
        // nuxt-link is used to provide navigations between page components and enhance performances with smart prefetching
        // nuxt-link extend from router-link
        if (this.isRouter) return "router-link";
        return "nuxt-link";
      }
      if (this.href) {
        return "a";
      }
      return "button";
    },
    propClass() {
      const classList = [];

      if (this.isBold) {
        classList.push("btn--bold");
      }

      if (this.isHollow) {
        classList.push("btn--hollow");
      }

      if (this.isDanger) {
        classList.push("btn--danger");
      }

      if (this.isDangerHollow) {
        classList.push("btn--danger btn--hollow");
      }

      if (this.isAlert) {
        classList.push("btn--alert");
      }

      if (this.isAlertHollow) {
        classList.push("btn--alert btn--hollow");
      }

      if (this.isSalmon) {
        classList.push("btn--salmon");
      }

      if (this.isSalmonHollow) {
        classList.push("btn--salmon btn--hollow");
      }

      if (this.isPrimary) {
        classList.push("btn--primary");
      }

      if (this.isPrimaryHollow) {
        classList.push("btn--primary btn--hollow");
      }

      if (this.isSuccess) {
        classList.push("btn--success");
      }

      if (this.isSuccessHollow) {
        classList.push("btn--success btn--hollow");
      }

      if (this.isRounded) {
        classList.push("btn--rounded");
      }

      if (this.isText) {
        classList.push("btn--text");
      }

      if (this.isTopCap) {
        classList.push("btn--top-cap");
      }

      if (this.isBottomCap) {
        classList.push("btn--bottom-cap");
      }

      if (this.isLeftCap) {
        classList.push("btn--left-cap");
      }

      if (this.isRightCap) {
        classList.push("btn--right-cap");
      }

      if (this.isShort) {
        classList.push("btn--short");
      }

      if (this.isTall) {
        classList.push("btn--tall");
      }

      if (this.isHuge) {
        classList.push("btn--huge");
      }

      if (this.isFullWidth) {
        classList.push("btn--full");
      }

      if (this.isDark) {
        classList.push("btn--dark");
      }

      if (this.isLightGrey) {
        classList.push("btn--light-grey");
      }

      if (this.isLight) {
        classList.push("btn--light");
      }

      if (this.isText) {
        classList.push("btn--text");
      }

      if (this.isIcon) {
        classList.push("btn--icon");
      }

      if (this.plainHover) {
        classList.push("btn--plain-hover");
      }

      if (this.isUnderlined) {
        classList.push("btn--underlined");
      }

      if (this.iconBefore) {
        classList.push("has-icon-before");
      }

      if (this.iconAfter) {
        classList.push("has-icon-after");
      }

      return classList.join(" ");
    },
    buttonStyle() {
      const styleObject = {};

      if (this.padding) {
        if (typeof this.padding === "number") {
          styleObject.padding = `${this.padding}px`;
        } else if (typeof this.padding === "string") {
          styleObject.padding = this.padding;
        }
      }

      return styleObject;
    },
    circleStyle() {
      const styleObject = {};
      const width = this.buttonWidth || 300;
      const height = this.buttonHeight || 300;

      const size = width > height ? width : height;

      styleObject.width = `${size + 30}px`;
      styleObject.height = `${size + 30}px`;

      return styleObject;
    },
    showCircle() {
      return !((this.isText || this.isIcon) && this.plainHover);
    },
  },
  mounted() {
    this.buttonWidth = this.$refs.button.clientWidth;
    this.buttonHeight = this.$refs.button.clientHeight;
  },
};
</script>

<style lang="scss">
// Button
.btn {
  // disabled state is at the bottom
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 11px 20px;
  border-radius: $componentBorderRadius;
  background: $btnBackground;
  color: $light;
  font-family: $baseFont;
  font-weight: 500;
  font-size: 0.75em;
  transition: box-shadow 0.4s cubic-bezier(0, 0, 0, 1),
    color 0.4s cubic-bezier(0, 0, 0, 1);
  cursor: pointer;
  outline: 0;
  border: 0;
  line-height: 1;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  .icon {
    vertical-align: middle;
  }

  .icon--before {
    margin-right: 5px;
    margin-left: -5px;
  }

  .icon--after {
    margin-left: 5px;
    margin-right: -5px;
  }

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
    color: $btnBackground;

    .btn__circle {
      transform: scale(1) translate(-50%, -50%);
    }
  }

  .btn__circle {
    display: block;
    width: 300px;
    height: 300px;
    background: $light;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    transform-origin: top left;
    transform: scale(0) translate(-50%, -50%);
    transition: transform 0.4s cubic-bezier(0, 0, 0, 1);
  }

  .btn__content {
    display: block;
    width: 100%;
    position: relative;

    &.is-flex {
      display: flex;
      align-items: center;
    }

    span,
    i {
      display: inline-block;
      position: relative;
    }
  }

  &.is-loading {
    pointer-events: none;
    position: relative;

    .preloader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .btn__content {
      opacity: 0;
    }
  }
}

.btn--underlined .btn__content span {
  text-decoration: underline;
}

.btn--plain-hover {
  .btn__circle {
    transform: scale(1) translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0, 0, 0, 1);
  }

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    .btn__circle {
      opacity: 1;
    }
  }
}

.btn--bold {
  font-weight: 600;
}

.btn--tall {
  font-size: 0.875em;
  padding-top: 14px;
  padding-bottom: 14px;
}

.btn--huge {
  font-size: 1em;
  padding-top: 16px;
  padding-bottom: 16px;
}

.btn--short {
  padding: 8px 15px;
}

.btn--alert {
  background: $btnAlertBackground;
  color: $textBlack;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $btnAlertBackground;
  }
}

.btn--danger {
  background: $btnDangerBackground;
  color: $light;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $btnDangerBackground;
  }
}

.btn--success {
  background: $btnSuccessBackground;
  color: $light;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $btnSuccessBackground;
  }
}

.btn--primary {
  background: $btnPrimaryBackground;
  color: $light;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $btnPrimaryBackground;
  }
}

.btn--salmon {
  background: $salmon;
  border: 1px solid $salmon;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $salmon;
  }
}

.btn--light-grey {
  background: $lightGrey;
  color: $blue;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $lightGrey;
  }

  .btn__circle {
    background: $blue;
  }
}

.btn--light {
  background: $btnDark;
  color: $light;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $light;
  }

  .btn__circle {
    background: $blue;
  }
}

.btn--dark {
  background: $btnDark;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $blue;
  }

  .btn__circle {
    background: $light;
  }
}

.btn--rounded {
  border-radius: 100px;
}

.btn--full {
  width: 100%;
}

.btn--icon,
.btn--text {
  background: transparent;
  font-weight: 500;
  color: $darkGrey;
  padding: 2px;
  border: 0;

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $light;
    box-shadow: none;
  }

  .btn__circle {
    background: $darkGrey700;
  }

  &.btn--light {
    color: $light;

    .btn__circle {
      background: $blue;
    }
  }

  &.btn--primary {
    color: $blue700;

    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $blue;
    }
  }

  &.btn--primary--hollow {
    color: $btnPrimaryHollowText;

    .btn__circle {
      background: $blue;
    }
  }

  &.btn--alert {
    color: $orange700;

    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $orange700;
    }
  }

  &.btn--salmon {
    color: $salmon;

    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $salmon;
    }
  }

  &.btn--danger {
    color: $btnDangerBackground;

    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $btnDangerBackground;
    }
  }

  &:hover {
    background: transparent;
  }

  &.btn--plain-hover {
    font-size: 0.75em;
    background: transparent;
    font-weight: 500;
    color: $darkGrey800;
    padding: 2px;
    border: 0;

    &:active,
    &.is-active,
    &.is-selected,
    &:hover {
      color: $darkGrey900;
      box-shadow: none;
    }

    &.btn--primary,
    &.btn--primary-hollow {
      color: $blue700;

      &:active,
      &.is-active,
      &.is-selected,
      &:hover {
        color: $blue900;
      }
    }

    &.btn--alert,
    &.btn--alert-hollow {
      color: $orange700;

      &:active,
      &.is-active,
      &.is-selected,
      &:hover {
        color: $orange900;
      }
    }

    &.btn--danger,
    &.btn--danger-hollow {
      color: $red600;

      &:active,
      &.is-active,
      &.is-selected,
      &:hover {
        color: $red800;
      }
    }

    &.btn--success,
    &.btn--success-hollow {
      color: $green700;

      &:active,
      &.is-active,
      &.is-selected,
      &:hover {
        color: $green900;
      }
    }

    &.btn--salmon,
    &.btn--salmon-hollow {
      color: $salmon;

      &:active,
      &.is-active,
      &.is-selected,
      &:hover {
        color: $salmonHover;
      }
    }

    &.btn--light {
      color: $light;

      &:active,
      &.is-active,
      &.is-selected,
      &:hover {
        color: $lightGrey400;
      }
    }
  }
}

.btn--text {
  &.has-icon-before {
    padding-left: 8px;
  }

  &.has-icon-after {
    padding-right: 8px;
  }
}

.btn--icon {
  &:disabled {
    color: $disabledGrey;
    pointer-events: none;
    cursor: auto;
  }
}

.btn--left-cap {
  border-radius: $componentBorderRadius 0 0 $componentBorderRadius;
}

.btn--right-cap {
  border-radius: 0 $componentBorderRadius $componentBorderRadius 0;
}

.btn--top-cap {
  border-radius: $componentBorderRadius $componentBorderRadius 0 0;
}

.btn--bottom-cap {
  border-radius: 0 0 $componentBorderRadius $componentBorderRadius;
}

.btn--facebook {
  background: $facebookBlue;

  // &:active,
  // &.is-active,
  // &.is-selected,
  // &:hover {
  //   background: $facebookBlue;
  // }
  .btn__circle {
    background: $facebookBlue;
  }
}

.btn--google {
  background: $googleRed;

  // &:active,
  // &.is-active,
  // &.is-selected,
  // &:hover {
  //   background: $googleRed;
  // }
  .btn__circle {
    background: $googleRed;
  }
}

// This is added at the bottom so it can overwrite the others
.btn:disabled {
  pointer-events: none;
  background: $btnDisabled;
  border-color: $btnDisabled;
  color: $textGrey;

  &:active,
  &.is-active,
  &:hover {
    background: $btnDisabled;
  }

  .btn__circle {
    display: none;
    // background: $btnDisabled;
  }
}

.btn--hollow {
  background: transparent;
  color: $textBlack;
  border: 1px solid $defaultBorder;

  &.btn--dark {
    border-color: $textBlack;
  }

  &:active,
  &.is-active,
  &.is-selected,
  &:hover {
    color: $textBlack;
  }
  .btn__circle {
    background: $defaultBorder;
  }

  &.btn--alert {
    color: $btnAlertHollowText;
    border-color: $btnAlertHollowText;

    &:active,
    &.is-active,
    &.is-selected,
    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $btnAlertHollowText;
    }
  }

  &.btn--danger {
    background: transparent;
    color: $btnDangerHollowText;
    border-color: $btnDangerHollowText;

    &:active,
    &.is-active,
    &.is-selected,
    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $btnDangerHollowText;
    }
  }

  &.btn--success {
    background: transparent;
    color: $btnSuccessHollowText;
    border-color: $btnSuccessHollowText;

    &:active,
    &.is-active,
    &.is-selected,
    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $btnSuccessHollowText;
    }
  }

  &.btn--primary {
    background: transparent;
    color: $btnPrimaryHollowText;
    border-color: $btnPrimaryHollowText;

    &:active,
    &.is-active,
    &.is-selected,
    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $btnPrimaryHollowText;
    }
  }

  &.btn--salmon {
    background: transparent;
    color: $salmon;
    border-color: $salmon;

    &:active,
    &.is-active,
    &.is-selected,
    &:hover {
      color: $light;
    }

    .btn__circle {
      background: $salmon;
    }
  }

  &:disabled {
    pointer-events: none;
    background: $btnDisabled;
    border-color: $btnDisabled;
    color: $textGrey;

    &:active,
    &.is-active,
    &:hover {
      background: $btnDisabled;
    }

    .btn__circle {
      display: none;
    }
  }
}
</style>
