<template>
  <div
    class="dropdown"
    :class="{ 'is-active': isActive }"
    v-click-outside="closeDropdown"
    :style="dropdownStyle"
  >
    <button type="button" class="dropdown__selected" @click="toggleDropdown">
      <span class="name">{{ selectedOptionName }}</span>
      <i class="icon icon-caret-down"></i>
    </button>
    <div class="dropdown__content" :style="dropdownContentStyle">
      <GlobalInput
        v-if="autoComplete"
        class="dropdown__auto"
        :placeholder="autoCompletePlaceholder"
        ref="input"
        v-model="autoCompleteValue"
      ></GlobalInput>
      <ul class="dropdown__list" refs="dropdownOptions">
        <li
          v-for="option in filteredOptions"
          :key="option.value"
          class="dropdown__item"
          :class="{ 'is-selected': option.value === tempValue }"
          v-html="option.name"
          @click="setValue(option.value)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalDropdown",
  data() {
    return {
      tempValue: "",
      isActive: false,
      autoCompleteValue: "",
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
    autoComplete: {
      type: Boolean,
      default: false,
    },
    autoCompletePlaceholder: {
      type: String,
      default: "Search",
    },
  },
  computed: {
    selectedOptionName() {
      const selectedOption = this.options.find(
        (opt) => opt.value === this.tempValue
      );
      if (selectedOption && selectedOption.name) return selectedOption.name;
      return this.placeholder;
    },
    dropdownStyle() {
      const styleObject = {};

      styleObject.maxWidth =
        typeof this.maxWidth === "string"
          ? this.maxWidth
          : `${this.maxWidth}px`;

      return styleObject;
    },
    dropdownContentStyle() {
      const styleObject = {};

      styleObject.maxHeight =
        typeof this.maxHeight === "string"
          ? this.maxHeight
          : `${this.maxHeight}px`;

      return styleObject;
    },
    filteredOptions() {
      if (!this.autoComplete || !this.autoCompleteValue) {
        return this.options;
      }

      const acronymFonts = [];
      const startingKeywordFonts = [];
      const normalSearchFonts = [];

      this.options.forEach((font) => {
        const hasAcronymKeyword =
          font.name
            .match(/\b(\w)/g)
            .join("")
            .toLowerCase()
            .indexOf(this.autoCompleteValue.toLowerCase()) > -1;
        const hasStartingKeyword =
          this.autoCompleteValue.toLowerCase() ===
          font.name.slice(0, this.autoCompleteValue.length).toLowerCase();
        const hasSearchKeyword =
          font.name
            .toLowerCase()
            .indexOf(this.autoCompleteValue.toLowerCase()) > -1;

        if (hasAcronymKeyword) {
          acronymFonts.push(font);
        }
        if (hasStartingKeyword) {
          startingKeywordFonts.push(font);
        }
        if (hasSearchKeyword) {
          normalSearchFonts.push(font);
        }
      });

      // new Set will remove any duplicates
      return Array.from(
        new Set([
          ...startingKeywordFonts,
          ...normalSearchFonts,
          ...acronymFonts,
        ])
      );
    },
  },
  beforeMount() {
    // if there is no placeholder,
    // use value or first option in the list given
    if (!this.placeholder) {
      if (this.value) this.tempValue = this.value;
      else this.tempValue = this.options[0].value;
    }
  },
  methods: {
    closeDropdown() {
      this.isActive = false;
    },
    setValue(value) {
      // if nothing is passed, use the first option in given options
      const setValue = value || this.options[0].value;
      if (!setValue) {
        console.error("Missing value");
        return;
      }
      this.tempValue = setValue;
      this.$emit("change", setValue);
      this.closeDropdown();
    },
    toggleDropdown() {
      this.isActive = !this.isActive;
      if (this.isActive && this.autoComplete) {
        // clear auto complete
        this.autoCompleteValue = "";
        // need to use set timeout to ensure input is focusable
        // doesn't work with nextTick
        setTimeout(() => {
          if (this.$refs.input.$el.getElementsByTagName("input")) {
            this.$refs.input.$el.getElementsByTagName("input")[0].focus();
          }
        }, 100);
      }
    },
  },
  watch: {
    value(val) {
      this.tempValue = val;
    },
  },
};
</script>

<style lang="scss">
.dropdown {
  position: relative;
  font-size: 0.875rem;
  color: $grey;
}

.dropdown__selected {
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
  .dropdown.is-active & {
    border-color: $primary1;
  }

  .dropdown.is-active & {
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

.dropdown__content {
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

  .dropdown.is-active & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  * {
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(230, 230, 230, 0.5);
    }

    &::-webkit-scrollbar-thumb {
      background: $lightGrey6;
      transition: background 0.25s ease-in-out;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: darken($lightGrey6, 5%);
    }
  }
}

.dropdown__auto {
  padding: 5px;

  .global-input {
    box-sizing: border-box;
    margin: 5px 0 0;
  }
}

.dropdown__list {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
}

.dropdown__item {
  margin: 0;
  background: transparent;
  width: 100%;
  padding: 10px;
  text-align: left;
  border: 0;
  border-bottom: 1px solid $disabledGrey;
  cursor: pointer;

  &:last-child {
    border-bottom: 0;
  }

  &:hover,
  &.is-selected {
    background: $lightGrey7;
  }
}
</style>
