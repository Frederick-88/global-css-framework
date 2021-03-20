<template>
  <div class="global-checkbox__lists">
    <GlobalCheckbox
      class="checkbox"
      v-for="(checkbox, index) in checkboxLists"
      :key="index"
      :label="checkbox.label"
      :is-checked="checkbox.isChecked"
      :is-primary="checkbox.isPrimary"
      :is-success="checkbox.isSuccess"
      :is-warning="checkbox.isWarning"
      :is-danger="checkbox.isDanger"
    />
  </div>
</template>

<script>
import GlobalCheckbox from "./GlobalCheckbox";
export default {
  name: "GlobalCheckboxList",
  components: { GlobalCheckbox },
  props: {
    checkboxLists: { type: Array, required: true, default: () => [] },
  },
};
</script>

<style lang="scss">
.global-checkbox__lists {
  .checkbox {
    margin-bottom: 10px;
  }
}
</style>
