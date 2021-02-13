<template>
  <label class="checkbox">
    <input type="checkbox" :checked="isChecked" @change="$emit('change')" />
    <span class="checkmark" :class="[propClass]"></span>
    <template v-if="label">{{ label }}</template>
  </label>
</template>

<script>
export default {
  name: "GlobalCheckbox",
  props: {
    isChecked: { type: Boolean, default: false },
    label: { type: String, default: "" },

    // Colors
    isPrimary: { type: Boolean, default: false },
    isLight: { type: Boolean, default: false },
    isDark: { type: Boolean, default: false },
    isSuccess: { type: Boolean, default: false },
    isWarning: { type: Boolean, default: false },
    isDanger: { type: Boolean, default: false },
  },
  computed: {
    propClass() {
      const classList = [];

      if (this.isPrimary) {
        classList.push("checkmark--primary");
      }
      if (this.isSuccess) {
        classList.push("checkmark--success");
      }
      if (this.isWarning) {
        classList.push("checkmark--warning");
      }
      if (this.isDanger) {
        classList.push("checkmark--danger");
      }

      return classList;
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  position: relative;
  cursor: pointer;
  user-select: none;
  display: block;
  padding-left: 1.5em; // for label props

  &:hover {
    .checkmark {
      background-color: $white;
      border: 1px solid $black;
      transition: background-color 0.5s;

      &.checkmark--primary {
        border: 1px solid $primary1;
      }

      &.checkmark--success {
        border: 1px solid $success1;
      }

      &.checkmark--warning {
        border: 1px solid $warning3;
      }

      &.checkmark--danger {
        border: 1px solid $danger1;
      }
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
      + .checkmark {
        background-color: $black;
        border: 1px solid $black;
        transition: background-color 0.5s;

        &.checkmark--primary {
          background-color: $primary1;
          border: 1px solid $primary1;
        }

        &.checkmark--success {
          background-color: $success1;
          border: 1px solid $success1;
        }

        &.checkmark--warning {
          background-color: $warning3;
          border: 1px solid $warning3;
        }

        &.checkmark--danger {
          background-color: $danger1;
          border: 1px solid $danger1;
        }

        &:after {
          display: block;
        }
      }
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1em;
    width: 1em;
    background-color: $white;
    border: 1px solid $darkGrey1;
    border-radius: 4px;
    transition: background-color 0.5s;

    &:after {
      content: "";
      position: absolute;
      display: none;

      top: 1px;
      left: calc(calc(100% / 2) - 3px);
      width: 4px;
      height: 8px;

      // create check icon
      border: solid $white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}
</style>
