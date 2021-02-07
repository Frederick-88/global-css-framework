<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <GlobalButton :is-primary="true">Global-Primary-Button</GlobalButton>
    <GlobalButton :is-primary-hollow="true"
      >Global-Primary-Hollow-Button</GlobalButton
    >
    <!-- <GlobalInput /> -->
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
