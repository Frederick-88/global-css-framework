<template>
  <label class="global-switch" :class="{ 'is-disabled': isDisabled }">
    <span v-if="label" class="global-switch__label">
      {{ label }}
    </span>
    <input
      class="global-switch__input"
      type="checkbox"
      :checked="isChecked"
      :disabled="isDisabled"
      @change="$emit('change')"
    />
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: "GlobalSwitch",
  props: {
    isChecked: { type: Boolean, default: false },
    label: { type: String, default: "" },
    isDisabled: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.global-switch {
  cursor: pointer;
  position: relative;

  &.is-disabled {
    opacity: 0.5;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    // when input checked it will select .slider class since .slider isn't the child.
    &:checked + .slider {
      background-color: $success3;

      &:before {
        transform: translateX(16px);
      }
    }

    &:focus + .slider {
      box-shadow: 0 0 1px $success3;
    }
  }

  .slider {
    cursor: pointer;
    margin: 0;
    width: 40px;
    height: 22px;
    background-color: $lightGrey4;
    transition: 0.4s;
    position: relative;
    display: inline-block;

    &:before {
      // using a lot :before because the wrapper is only 1 - if dont want to use before try 2 wrapper with "position: absolute" then
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 5px;
      bottom: 4px;
      background-color: $white;
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

.global-switch__label {
  cursor: pointer;
  padding-right: 50px;
  font-size: 0.875rem;
  margin-right: 5px;
}

.global-switch__label ~ .slider {
  position: absolute;
  right: 5px;
}
</style>
