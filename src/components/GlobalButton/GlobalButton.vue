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

  /* Colors */
  &.btn--primary {
    background-image: linear-gradient(
      to right,
      #0072ff 0%,
      #00c6ff 51%,
      #0072ff 100%
    );
    color: white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid #0072ff;
      color: #0072ff;

      &:hover {
        background: #0072ff;
        color: white;
      }
    }
  }

  &.btn--warning {
    background-image: linear-gradient(
      to right,
      #ff8008 0%,
      #ffc837 51%,
      #ff8008 100%
    );

    color: white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid #ffaf19;
      color: #ffaf19;

      &:hover {
        background: #ffaf19;
        color: white;
      }
    }
  }

  &.btn--success {
    background-image: linear-gradient(
      to right,
      #1d976c 0%,
      #6ee999 51%,
      #1d976c 100%
    );
    color: white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid #1d976c;
      color: #1d976c;

      &:hover {
        background: #1d976c;
        color: white;
      }
    }
  }

  &.btn--danger {
    background-image: linear-gradient(
      to right,
      #cb2d3e 0%,
      #ef473a 51%,
      #cb2d3e 100%
    );
    color: white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid #cb2d3e;
      color: #cb2d3e;

      &:hover {
        background: #cb2d3e;
        color: white;
      }
    }
  }

  &.btn--light {
    background-image: linear-gradient(
      to right,
      #e2e2e2 0%,
      #f6f6f6 51%,
      #e2e2e2 100%
    );

    color: #0a1f44;

    &.btn--hollow {
      background: transparent;
      border: 1px solid #e2e2e2;
      color: #0a1f44;

      &:hover {
        background: #e2e2e2;
        color: #0a1f44;
      }
    }
  }

  &.btn--dark {
    background-image: linear-gradient(
      to right,
      #141e30 0%,
      #243b55 51%,
      #141e30 100%
    );

    color: white;

    &.btn--hollow {
      background: transparent;
      border: 1px solid #141e30;
      color: #141e30;

      &:hover {
        background: #141e30;
        color: white;
      }
    }
  }

  /* Types */
  &.btn--tall {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  &.btn--short {
    padding: 12px 18px;
  }
}
</style>
