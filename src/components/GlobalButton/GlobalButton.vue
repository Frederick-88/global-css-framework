<template>
  <component
    :is="type"
    :type="type === 'button' ? type : ''"
    class="btn"
    :class="[propClass]"
    :title="title"
    :to="to"
    :href="href"
    :disabled="isDisabled"
    @click="$emit('click', $event)"
    :target="newTab ? '_blank' : false"
  >
    <span class="btn__content">
      <span><slot></slot></span>
    </span>
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
     * Usually combined with href props using this will add ( target="_blank" )
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
    isPrimaryHollow: { type: Boolean, default: false },
    isLight: { type: Boolean, default: false },
    isLightHollow: { type: Boolean, default: false },
    isDark: { type: Boolean, default: false },
    isDarkHollow: { type: Boolean, default: false },
    isSuccess: { type: Boolean, default: false },
    isSuccessHollow: { type: Boolean, default: false },
    isWarning: { type: Boolean, default: false },
    isWarningHollow: { type: Boolean, default: false },
    isDanger: { type: Boolean, default: false },
    isDangerHollow: { type: Boolean, default: false },
  },
  computed: {
    type() {
      if (this.to) {
        // nuxt-link is used to provide navigations between page components and enhance performances with smart prefetching
        // nuxt-link extend from router-link
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
        classList.push("btn--disabled");
      }

      if (this.href) {
        classList.push("btn--anchor");
      }

      if (this.isPrimary) {
        classList.push("btn--primary");
      }

      if (this.isPrimaryHollow) {
        classList.push("btn--primary btn--hollow");
      }

      const noColorDefined =
        !this.isPrimary &&
        !this.isSuccess &&
        !this.isWarning &&
        !this.isDanger &&
        !this.isDark;

      const noHollowDefined =
        !this.isPrimaryHollow &&
        !this.isSuccessHollow &&
        !this.isWarningHollow &&
        !this.isDangerHollow &&
        !this.isLightHollow &&
        !this.isDarkHollow;
      // by default will be light
      if (noColorDefined && noHollowDefined) {
        classList.push("btn--light");
      }

      if (this.isLightHollow) {
        classList.push("btn--light btn--hollow");
      }

      if (this.isDark) {
        classList.push("btn--dark");
      }

      if (this.isDarkHollow) {
        classList.push("btn--dark btn--hollow");
      }

      if (this.isSuccess) {
        classList.push("btn--success");
      }

      if (this.isSuccessHollow) {
        classList.push("btn--success btn--hollow");
      }

      if (this.isWarning) {
        classList.push("btn--warning");
      }

      if (this.isWarningHollow) {
        classList.push("btn--warning btn--hollow");
      }

      if (this.isDanger) {
        classList.push("btn--danger");
      }

      if (this.isDangerHollow) {
        classList.push("btn--danger btn--hollow");
      }

      if (this.isTall) {
        classList.push("btn--tall");
      }

      if (this.isShort) {
        classList.push("btn--short");
      }

      return classList.join(" ");
    },
  },
};
</script>

<style lang="scss">
.btn {
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

  &.btn--disabled {
    cursor: default;
    opacity: 0.5;

    &:hover {
      background-position: initial;
    }
  }

  &.btn--anchor {
    display: inline-block;
    font-size: 0.875rem;
  }

  /* Colors */
  &.btn--primary {
    background-image: linear-gradient(
      to right,
      $primary1 0%,
      $primary2 51%,
      $primary1 100%
    );
    color: $white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid $primary1;
      color: $primary1;

      &:hover {
        background: $primary1;
        color: $white;
      }
    }
  }

  &.btn--warning {
    background-image: linear-gradient(
      to right,
      $warning1 0%,
      $warning2 51%,
      $warning1 100%
    );

    color: $white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid $warning3;
      color: $warning1;

      &:hover {
        background: $warning3;
        color: $white;
      }
    }
  }

  &.btn--success {
    background-image: linear-gradient(
      to right,
      $success1 0%,
      $success2 51%,
      $success1 100%
    );
    color: $white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid $success1;
      color: $success1;

      &:hover {
        background: $success1;
        color: $white;
      }
    }
  }

  &.btn--danger {
    background-image: linear-gradient(
      to right,
      $danger1 0%,
      $danger2 51%,
      $danger1 100%
    );
    color: $white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid $danger1;
      color: $danger1;

      &:hover {
        background: $danger1;
        color: $white;
      }
    }
  }

  &.btn--light {
    background-image: linear-gradient(
      to right,
      $lightGrey2 0%,
      $lightGrey3 51%,
      $lightGrey2 100%
    );

    color: $darkGrey1;

    &.btn--hollow {
      background: transparent;
      border: 1px solid $lightGrey2;
      color: $darkGrey1;

      &:hover {
        background: $lightGrey2;
        color: $darkGrey1;
      }
    }
  }

  &.btn--dark {
    background-image: linear-gradient(
      to right,
      $darkGrey2 0%,
      $darkGrey3 51%,
      $darkGrey2 100%
    );

    color: $white;

    &.btn--hollow {
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
  &.btn--tall {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 0.825rem;
  }

  &.btn--short {
    padding: 12px 18px;
  }
}
</style>
