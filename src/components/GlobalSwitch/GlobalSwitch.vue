<template>
  <label class="switch" :class="{ 'is-disabled': isDisabled }">
    <span v-if="label" class="switch__label">
      {{ label }}
    </span>
    <input
      class="switch__input"
      type="checkbox"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="change"
    />
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: "GlobalSwitch",
  props: {
    label: { type: String, default: "" },
    /**
     * You can have both labels
     */
    isChecked: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },
  },
  methods: {
    change() {
      this.$emit("change");
    },
  },
};
</script>

<style lang="scss">
.switch {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  &.is-disabled {
    opacity: 0.5;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: #22c993;

      &:before {
        transform: translateX(16px);
      }
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #22c993;
    }
  }

  .slider {
    margin: 0;
    cursor: pointer;
    width: 40px;
    height: 22px;
    background-color: #c9ced6;
    transition: 0.4s;
    position: relative;
    display: inline-block;

    &:before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 5px;
      bottom: 4px;
      background-color: white;
      box-shadow: 0 4px 4px rgba(10, 31, 68, 0.16);
      transition: 0.4s;
    }

    &.round {
      border-radius: 34px;

      &:before {
        border-radius: 50%;
      }
    }
  }
}

.switch__label {
  padding-right: 50px;
  cursor: pointer;
  font-size: 0.875rem;
  margin-right: 5px;
}

.switch__label ~ .slider {
  position: absolute;
  right: 5px;
}
</style>
