<template>
  <div class="input-field__wrapper">
    <input
      :class="inputClassList"
      :disabled="isDisabled"
      :value="value"
      :placeholder="placeholder"
      :readonly="isReadOnly"
      @blur="$emit('blur', $event)"
      @input="onInputEvent"
      @change="onChangeEvent"
      @focus="$emit('focus', $event)"
      @keyup="$emit('keyup', $event)"
      @keypress.enter="$event.target.blur"
    />
  </div>
</template>

<script>
export default {
  name: "GlobalInput",
  props: {
    placeholder: { type: String, default: "" },
    isDisabled: { type: Boolean, default: false },
    value: { type: String, default: "" },
    isReadOnly: { type: Boolean, default: false },
  },

  computed: {
    inputClassList() {
      const classList = ["input-field"];

      if (this.isTall) classList.push("input-field--tall");
      if (this.isShort) classList.push("input-field--short");

      return classList;
    },
  },

  methods: {
    onInputEvent(event) {
      const { value } = event.target;
      this.$emit("input", value);
    },

    onChangeEvent(event) {
      const { value } = event.target;
      this.$emit("change", value);
    },
  },
};
</script>

<style lang="scss">
.input-field__wrapper {
  position: relative;

  .input-field {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid $primary2;
    font-family: "Work Sans", "Arial", "Helvetica", "sans-serif";
    font-weight: 500;
    font-size: 0.875em;
    color: #000000;
    margin: 0;
    outline: 0;

    &:disabled {
      color: #ffffff;
    }

    &:focus {
      border-color: $primary1;
    }
  }

  .input-field--tall {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .input-field--short {
    padding: 8px 15px;
  }
}
</style>
