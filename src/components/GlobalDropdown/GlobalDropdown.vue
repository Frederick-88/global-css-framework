<template>
  <div
    class="global-dropdown"
    :class="{ 'is-active': isActive }"
    v-click-outside="closeDropdown"
    :style="dropdownStyle"
  >
    <button
      type="button"
      class="global-dropdown__selected"
      @click="isActive = !isActive"
    >
      <span class="name">{{ selectedOptionName }}</span>
      <i class="icon icon-caret-down"></i>
    </button>

    <div class="global-dropdown__content" :style="dropdownContentStyle">
      <ul class="global-dropdown__list">
        <li
          v-for="option in options"
          :key="option.value"
          class="global-dropdown__item"
          :class="{ 'is-selected': option.value === selectedValue }"
          @click="setValue(option.value)"
        >
          {{ option.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalDropdown",
  data() {
    return {
      isActive: false,
      selectedValue: "",
    };
  },
  props: {
    /**
     * The options need to have value and name
     * eg. { name: 'Name', value: 'Value' }
     */
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    /**
     * Max width can be integer, px or %
     */
    maxWidth: {
      type: [String, Number],
      default: "100%",
    },
    /**
     * Max height can be integer, px or %
     */
    maxHeight: {
      type: [String, Number],
      default: "300px",
    },
  },
  computed: {
    selectedOptionName() {
      const selectedOption = this.options.find(
        (option) => option.value === this.selectedValue
      );
      if (selectedOption && selectedOption.name) return selectedOption.name;
      return this.placeholder;
    },
    dropdownStyle() {
      const styleObject = {};

      // check if user send "100px" or just 100
      styleObject.maxWidth =
        typeof this.maxWidth === "string"
          ? this.maxWidth
          : `${this.maxWidth}px`;

      return styleObject;
    },
    dropdownContentStyle() {
      const styleObject = {};

      // check if user send "100px" or just 100
      styleObject.maxHeight =
        typeof this.maxHeight === "string"
          ? this.maxHeight
          : `${this.maxHeight}px`;

      return styleObject;
    },
  },
  beforeMount() {
    // if there is no placeholder,
    // use value or first option in the list given
    if (!this.placeholder) {
      if (this.value) this.selectedValue = this.value;
      else this.selectedValue = this.options[0].value;
    }
  },
  methods: {
    closeDropdown() {
      this.isActive = false;
    },
    setValue(value) {
      // if nothing is passed, use the first option in given options
      const isValueExist = value || this.options[0].value;
      if (!isValueExist) {
        console.error("Missing value");
        return;
      }

      this.selectedValue = isValueExist;
      this.$emit("change", isValueExist);
      this.closeDropdown();
    },
  },
  watch: {
    value(val) {
      this.selectedValue = val;
    },
  },
};
</script>

<style lang="scss">
.global-dropdown {
  position: relative;
  font-size: 0.875rem;
  color: $grey;
}

.global-dropdown__selected {
  width: 100%;
  background: $white;
  border-radius: 4px;
  border: 1px solid $disabledGrey;
  cursor: pointer;
  position: relative;
  padding: 10px;
  text-align: left;
  max-height: 40px;
  outline: 0;

  &:focus,
  .global-dropdown.is-active & {
    border-color: $primary1;
  }

  .global-dropdown.is-active & {
    .icon {
      transform: rotate(180deg);
    }
  }

  .icon {
    position: absolute;
    right: 8px;
    top: 11px;
  }
}

.global-dropdown__content {
  position: absolute;
  overflow: hidden;
  width: 100%;
  z-index: 3;
  background: $white;
  box-shadow: 0px 26px 26px rgba(10, 31, 68, 0.12),
    0px 0px 2px rgba(10, 31, 68, 0.1);
  border-radius: 0 0 4px 4px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out,
    visibility 0.25s ease-in-out;
  display: flex;
  flex-direction: column;

  .global-dropdown.is-active & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}

.global-dropdown__list {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
}

.global-dropdown__item {
  cursor: pointer;
  margin: 0;
  background: transparent;
  width: 100%;
  padding: 10px;
  text-align: left;
  border: 0;
  border-bottom: 1px solid $disabledGrey;

  &:last-child {
    border-bottom: 0;
  }

  &:hover,
  &.is-selected {
    background: $lightGrey7;
  }
}
</style>
