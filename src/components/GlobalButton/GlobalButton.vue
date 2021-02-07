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
    // Title of the button
    title: {
      type: String,
      default: "",
    },
    // Nuxt link
    to: {
      type: String,
      required: false,
    },
    // Anchor link
    href: {
      type: String,
      required: false,
    },
    // Should this open a new tab
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

      if (this.isPrimary) {
        classList.push("btn--primary");
      }

      if (this.isPrimaryHollow) {
        classList.push("btn--primary btn--hollow");
      }

      if (this.isLight) {
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
        classList.push("btn--alert");
      }

      if (this.isWarningHollow) {
        classList.push("btn--alert btn--hollow");
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
  outline: 0;
  border: 0;

  &:hover {
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.15);
    background-position: right center; /* change the direction of the change here */
  }

  /* Colors */
  &.btn--primary {
    background-image: linear-gradient(
      to right,
      #50c9c3 0%,
      #96deda 51%,
      #50c9c3 100%
    );
    color: white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid #50c9c3;
      color: #50c9c3;

      &:hover {
        background: #50c9c3;
        color: white;
      }
    }
  }

  /* Types */
  .btn--tall {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .btn--short {
    padding: 10px 18px;
  }
}
</style>
