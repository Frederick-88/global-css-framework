<template>
  <component
    :is="buttonType"
    :type="buttonType === 'button' ? buttonType : ''"
    class="global-button"
    :class="[propClass]"
    :title="title"
    :to="to"
    :href="href"
    :disabled="isDisabled"
    @click="$emit('click', $event)"
    :target="newTab ? '_blank' : false"
  >
    <span><slot></slot></span>
  </component>
</template>

<script>
export default {
  name: "GlobalButton",
  props: {
    /**
     * when you hover button can see the title.
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * only able to be used in "NuxtJS".
     * using this it will be <nuxt-link/>, will act like router instead of anchor.
     */
    to: {
      type: String,
      required: false,
    },
    /**
     * Anchor link ( < a href /> )
     */
    href: {
      type: String,
      required: false,
    },
    /**
     * Open new tab or not
     */
    newTab: {
      type: Boolean,
      default: false,
    },

    // Type
    isDisabled: { type: Boolean, default: false },
    isTall: { type: Boolean, default: false },
    isShort: { type: Boolean, default: false },

    // Colors
    isPrimary: { type: Boolean, default: false },
    isPrimaryOutline: { type: Boolean, default: false },
    isLight: { type: Boolean, default: false },
    isLightOutline: { type: Boolean, default: false },
    isDark: { type: Boolean, default: false },
    isDarkOutline: { type: Boolean, default: false },
    isSuccess: { type: Boolean, default: false },
    isSuccessOutline: { type: Boolean, default: false },
    isWarning: { type: Boolean, default: false },
    isWarningOutline: { type: Boolean, default: false },
    isDanger: { type: Boolean, default: false },
    isDangerOutline: { type: Boolean, default: false },
  },
  computed: {
    buttonType() {
      if (this.to) {
        return "nuxt-link";
      }
      if (this.href) {
        return "a";
      }
      return "button";
    },
    propClass() {
      const classList = [];

      if (this.isDisabled) {
        classList.push("button--disabled");
      }

      if (this.href) {
        classList.push("button--anchor");
      }

      if (this.isPrimary) {
        classList.push("button--primary");
      }

      if (this.isPrimaryOutline) {
        classList.push("button--primary button--outline");
      }

      const noColorDefined =
        !this.isPrimary &&
        !this.isSuccess &&
        !this.isWarning &&
        !this.isDanger &&
        !this.isDark;
      const noOutlineDefined =
        !this.isPrimaryOutline &&
        !this.isSuccessOutline &&
        !this.isWarningOutline &&
        !this.isDangerOutline &&
        !this.isLightOutline &&
        !this.isDarkOutline;
      // by default will be light
      if (noColorDefined && noOutlineDefined) {
        classList.push("button--light");
      }

      if (this.isLightOutline) {
        classList.push("button--light button--outline");
      }

      if (this.isDark) {
        classList.push("button--dark");
      }

      if (this.isDarkOutline) {
        classList.push("button--dark button--outline");
      }

      if (this.isSuccess) {
        classList.push("button--success");
      }

      if (this.isSuccessOutline) {
        classList.push("button--success button--outline");
      }

      if (this.isWarning) {
        classList.push("button--warning");
      }

      if (this.isWarningOutline) {
        classList.push("button--warning button--outline");
      }

      if (this.isDanger) {
        classList.push("button--danger");
      }

      if (this.isDangerOutline) {
        classList.push("button--danger button--outline");
      }

      if (this.isTall) {
        classList.push("button--tall");
      }

      if (this.isShort) {
        classList.push("button--short");
      }

      return classList.join(" ");
    },
  },
};
</script>

<style lang="scss">
.global-button {
  display: block;
  margin: 10px;
  font-size: 0.825rem;
  padding: 15px 30px;
  border-radius: 10px;
  text-align: center;
  transition: box-shadow 0.4s cubic-bezier(0, 0, 0, 1),
    background-position 0.4s cubic-bezier(0, 0, 0, 1),
    color 0.4s cubic-bezier(0, 0, 0, 1),
    background 0.4s cubic-bezier(0, 0, 0, 1);
  background-size: 200% auto;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
  outline: 0;
  border: 0;

  &:hover {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
    background-position: right center; /* change the direction of the change here */
  }

  &.button--disabled {
    cursor: default;
    opacity: 0.5;

    &:hover {
      background-position: initial;
    }
  }

  &.button--anchor {
    display: inline-block;
    font-size: 0.875rem;
  }

  /* Colors */
  &.button--primary {
    background-image: linear-gradient(
      to right,
      $primary1 0%,
      $primary2 51%,
      $primary1 100%
    );
    color: $white;

    &.button--outline {
      background: transparent;
      border: 1px solid $primary1;
      color: $primary1;

      &:hover {
        background: $primary1;
        color: $white;
      }
    }
  }

  &.button--warning {
    background-image: linear-gradient(
      to right,
      $warning1 0%,
      $warning2 51%,
      $warning1 100%
    );

    color: $white;

    &.button--outline {
      background: transparent;
      border: 1px solid $warning3;
      color: $warning1;

      &:hover {
        background: $warning3;
        color: $white;
      }
    }
  }

  &.button--success {
    background-image: linear-gradient(
      to right,
      $success1 0%,
      $success2 51%,
      $success1 100%
    );
    color: $white;

    &.button--outline {
      background: transparent;
      border: 1px solid $success1;
      color: $success1;

      &:hover {
        background: $success1;
        color: $white;
      }
    }
  }

  &.button--danger {
    background-image: linear-gradient(
      to right,
      $danger1 0%,
      $danger2 51%,
      $danger1 100%
    );
    color: $white;

    &.button--outline {
      background: transparent;
      border: 1px solid $danger1;
      color: $danger1;

      &:hover {
        background: $danger1;
        color: $white;
      }
    }
  }

  &.button--light {
    background-image: linear-gradient(
      to right,
      $lightGrey2 0%,
      $lightGrey3 51%,
      $lightGrey2 100%
    );

    color: $darkGrey1;

    &.button--outline {
      background: transparent;
      border: 1px solid $lightGrey2;
      color: $darkGrey1;

      &:hover {
        background: $lightGrey2;
        color: $darkGrey1;
      }
    }
  }

  &.button--dark {
    background-image: linear-gradient(
      to right,
      $darkGrey2 0%,
      $darkGrey3 51%,
      $darkGrey2 100%
    );

    color: $white;

    &.button--outline {
      background: transparent;
      border: 1px solid $darkGrey2;
      color: $darkGrey2;

      &:hover {
        background: $darkGrey2;
        color: $white;
      }
    }
  }

  /* Types */
  &.button--tall {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 0.825rem;
  }

  &.button--short {
    padding: 12px 18px;
  }
}
</style>
